const express = require('express');
const router = express.Router();
const { getStaff, createStaff, updateStaff, deleteStaff, getDashboardStats } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/stats', protect, admin, getDashboardStats);

router.route('/')
    .get(protect, admin, getStaff)
    .post(protect, admin, createStaff);

router.route('/:id')
    .put(protect, admin, updateStaff)
    .delete(protect, admin, deleteStaff);

module.exports = router;
