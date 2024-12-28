const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/api'); // Import routes

const app = express();
const port = process.env.PORT || 5000; 

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB 
mongoose.connect('mongodb+srv://graymatter:everycolorisgray@cluster0.skkaw.mongodb.net/graymatterdb?retryWrites=true&w=majority&appName=Cluster0', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

// Use routes
app.use('/api', routes); 

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});