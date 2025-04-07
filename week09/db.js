const mongoose = require('mongoose');

const connect = () => {
    try {
        mongoose.connect('mongodb://localhost:27017/students');
        console.log('connected to mongoose');
    } catch (err) {
        console.log('Error connecting to mongoose: ', err);
    }
};

module.exports = {
    connect,
};