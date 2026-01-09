const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const seedUsers = async () => {
    try {
        await User.deleteMany(); // Clear existing users

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('password123', salt);

        const users = [
            {
                name: 'Super Admin',
                username: 'admin',
                email: 'admin@fnphkware.gov.ng',
                password: hashedPassword,
                role: 'admin',
                department: 'Administration'
            },
            {
                name: 'Musa Ibrahim',
                username: 'staff',
                email: 'musa.i@fnphkware.gov.ng',
                password: hashedPassword,
                role: 'staff',
                department: 'Nursing Services'
            }
        ];

        await User.insertMany(users);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

seedUsers();
