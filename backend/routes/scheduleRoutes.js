const express = require('express');
const router = express.Router();
const {
    createSchedule,
    getAllSchedules,
    getMySchedules,
    updateSchedule,
    deleteSchedule
} = require('../controllers/scheduleController');
const { protect, admin } = require('../middleware/authMiddleware');

// Admin routes
router.post('/', protect, admin, createSchedule);
router.get('/all', protect, admin, getAllSchedules);
router.put('/:id', protect, admin, updateSchedule);
router.delete('/:id', protect, admin, deleteSchedule);

// Staff routes
router.get('/my-schedules', protect, getMySchedules);

module.exports = router;
