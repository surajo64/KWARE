const asyncHandler = require('express-async-handler');
const Payslip = require('../models/Payslip');
const User = require('../models/User');
const path = require('path');
const fs = require('fs');

// @desc    Upload payslip for a staff member
// @route   POST /api/payslips/upload
// @access  Admin only
const uploadPayslip = asyncHandler(async (req, res) => {
    const { staffId, month, year } = req.body;

    if (!req.file) {
        res.status(400);
        throw new Error('Please upload a PDF file');
    }

    // Verify staff exists
    const staff = await User.findById(staffId);
    if (!staff) {
        // Delete uploaded file if staff not found
        fs.unlinkSync(req.file.path);
        res.status(404);
        throw new Error('Staff member not found');
    }

    // Create payslip record
    const payslip = await Payslip.create({
        staffId,
        staffName: staff.name,
        month,
        year,
        fileName: req.file.originalname,
        fileUrl: req.file.path,
        uploadedBy: req.user._id
    });

    res.status(201).json({
        success: true,
        data: payslip
    });
});

// @desc    Get all payslips (Admin)
// @route   GET /api/payslips/all
// @access  Admin only
const getAllPayslips = asyncHandler(async (req, res) => {
    const payslips = await Payslip.find()
        .populate('staffId', 'name email department')
        .populate('uploadedBy', 'name')
        .sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        count: payslips.length,
        data: payslips
    });
});

// @desc    Get my payslips (Staff)
// @route   GET /api/payslips/my-payslips
// @access  Staff only
const getMyPayslips = asyncHandler(async (req, res) => {
    const payslips = await Payslip.find({ staffId: req.user._id })
        .sort({ year: -1, month: -1 });

    res.status(200).json({
        success: true,
        count: payslips.length,
        data: payslips
    });
});

// @desc    Download payslip
// @route   GET /api/payslips/download/:id
// @access  Staff (own) / Admin (all)
const downloadPayslip = asyncHandler(async (req, res) => {
    const payslip = await Payslip.findById(req.params.id);

    if (!payslip) {
        res.status(404);
        throw new Error('Payslip not found');
    }

    // Check authorization - staff can only download their own
    if (req.user.role !== 'admin' && payslip.staffId.toString() !== req.user._id.toString()) {
        res.status(403);
        throw new Error('Not authorized to access this payslip');
    }

    // Check if file exists
    if (!fs.existsSync(payslip.fileUrl)) {
        res.status(404);
        throw new Error('File not found');
    }

    // Send file
    res.download(payslip.fileUrl, payslip.fileName);
});

// @desc    Delete payslip
// @route   DELETE /api/payslips/:id
// @access  Admin only
const deletePayslip = asyncHandler(async (req, res) => {
    const payslip = await Payslip.findById(req.params.id);

    if (!payslip) {
        res.status(404);
        throw new Error('Payslip not found');
    }

    // Delete file from filesystem
    if (fs.existsSync(payslip.fileUrl)) {
        fs.unlinkSync(payslip.fileUrl);
    }

    // Delete from database
    await payslip.deleteOne();

    res.status(200).json({
        success: true,
        message: 'Payslip deleted successfully'
    });
});

module.exports = {
    uploadPayslip,
    getAllPayslips,
    getMyPayslips,
    downloadPayslip,
    deletePayslip
};
