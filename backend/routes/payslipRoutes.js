const express = require('express');
const router = express.Router();
const {
    uploadPayslip,
    getAllPayslips,
    getMyPayslips,
    downloadPayslip,
    deletePayslip
} = require('../controllers/payslipController');
const { protect, admin } = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');

// Admin routes
router.post('/upload', protect, admin, upload.single('payslip'), uploadPayslip);
router.get('/all', protect, admin, getAllPayslips);
router.delete('/:id', protect, admin, deletePayslip);

// Staff routes
router.get('/my-payslips', protect, getMyPayslips);

// Both admin and staff can download (with authorization check in controller)
router.get('/download/:id', protect, downloadPayslip);

module.exports = router;
