const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const url = "mongodb+srv://abhi0711singh:abhishek123@cluster0.s0lsy.mongodb.net/userDB?retryWrites=true&w=majority&appName=Cluster0";

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected successfully');
}).catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/users', require('./routes/users'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
