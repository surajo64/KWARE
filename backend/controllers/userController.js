const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// @desc    Get all staff
// @route   GET /api/users
// @access  Private/Admin
const getStaff = asyncHandler(async (req, res) => {
    const users = await User.find({ role: 'staff' }).select('-password');
    res.json(users);
});

// @desc    Register new staff
// @route   POST /api/users
// @access  Private/Admin
const createStaff = asyncHandler(async (req, res) => {
    const { name, email, password, department, role } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    // Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role: role || 'staff',
        department: department || 'General'
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            department: user.department
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc    Update staff
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateStaff = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    const { name, email, department, role } = req.body;

    user.name = name || user.name;
    user.email = email || user.email;
    user.department = department || user.department;
    user.role = role || user.role;

    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
    }

    const updatedUser = await user.save();

    res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
        department: updatedUser.department
    });
});

// @desc    Delete staff
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteStaff = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    await user.deleteOne();

    res.json({ id: req.params.id });
});

// @desc    Get dashboard stats
// @route   GET /api/users/stats
// @access  Private/Admin
const getDashboardStats = asyncHandler(async (req, res) => {
    const totalStaff = await User.countDocuments({ role: 'staff' });
    const totalAdmins = await User.countDocuments({ role: 'admin' });
    const departments = await User.distinct('department');

    // Placeholder for when Patient model exists
    const activePatients = 0;
    const todaysAdmissions = 0;

    res.json({
        totalStaff,
        totalAdmins,
        totalDepartments: departments.length,
        activePatients,
        todaysAdmissions
    });
});

module.exports = {
    getStaff,
    createStaff,
    updateStaff,
    deleteStaff,
    getDashboardStats
};
