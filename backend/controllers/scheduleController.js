const asyncHandler = require('express-async-handler');
const Schedule = require('../models/Schedule');
const User = require('../models/User');

// @desc    Create schedule for a staff member
// @route   POST /api/schedules
// @access  Admin only
const createSchedule = asyncHandler(async (req, res) => {
    const { staffId, date, shift, time, department, type } = req.body;

    // Verify staff exists
    const staff = await User.findById(staffId);
    if (!staff) {
        res.status(404);
        throw new Error('Staff member not found');
    }

    // Check if schedule already exists for this staff on this date
    const existingSchedule = await Schedule.findOne({ staffId, date });
    if (existingSchedule) {
        res.status(400);
        throw new Error('Schedule already exists for this staff member on this date');
    }

    const schedule = await Schedule.create({
        staffId,
        staffName: staff.name,
        date,
        shift,
        time,
        department,
        type: type || 'regular',
        createdBy: req.user._id
    });

    res.status(201).json({
        success: true,
        data: schedule
    });
});

// @desc    Get all schedules (Admin)
// @route   GET /api/schedules/all
// @access  Admin only
const getAllSchedules = asyncHandler(async (req, res) => {
    const { startDate, endDate, staffId } = req.query;

    let query = {};

    if (staffId) {
        query.staffId = staffId;
    }

    if (startDate && endDate) {
        query.date = { $gte: startDate, $lte: endDate };
    }

    const schedules = await Schedule.find(query)
        .populate('staffId', 'name email department')
        .sort({ date: 1 });

    res.status(200).json({
        success: true,
        count: schedules.length,
        data: schedules
    });
});

// @desc    Get my schedules (Staff)
// @route   GET /api/schedules/my-schedules
// @access  Staff only
const getMySchedules = asyncHandler(async (req, res) => {
    const { startDate, endDate } = req.query;

    let query = { staffId: req.user._id };

    if (startDate && endDate) {
        query.date = { $gte: startDate, $lte: endDate };
    }

    const schedules = await Schedule.find(query).sort({ date: 1 });

    res.status(200).json({
        success: true,
        count: schedules.length,
        data: schedules
    });
});

// @desc    Update schedule
// @route   PUT /api/schedules/:id
// @access  Admin only
const updateSchedule = asyncHandler(async (req, res) => {
    const schedule = await Schedule.findById(req.params.id);

    if (!schedule) {
        res.status(404);
        throw new Error('Schedule not found');
    }

    const { shift, time, department, type } = req.body;

    schedule.shift = shift || schedule.shift;
    schedule.time = time || schedule.time;
    schedule.department = department || schedule.department;
    schedule.type = type || schedule.type;

    const updatedSchedule = await schedule.save();

    res.status(200).json({
        success: true,
        data: updatedSchedule
    });
});

// @desc    Delete schedule
// @route   DELETE /api/schedules/:id
// @access  Admin only
const deleteSchedule = asyncHandler(async (req, res) => {
    const schedule = await Schedule.findById(req.params.id);

    if (!schedule) {
        res.status(404);
        throw new Error('Schedule not found');
    }

    await schedule.deleteOne();

    res.status(200).json({
        success: true,
        message: 'Schedule deleted successfully'
    });
});

module.exports = {
    createSchedule,
    getAllSchedules,
    getMySchedules,
    updateSchedule,
    deleteSchedule
};
