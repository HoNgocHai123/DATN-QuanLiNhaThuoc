const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const connectDB = require('./db/connectDB')

const connectDB = require('./db/connectDB')
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// Middleware
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(cors());    
connectDB();

// Routes
const subCategoryRoutes = require('./routers/category/subCategory');
const categoryRoutes = require('./routers/category/category');
const bannerRoutes = require('./routers/bannerRouter/banner');
const AuthRouter = require('./routers/auth')
app.use('/api/v1/auth', AuthRouter)
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/subcategories', subCategoryRoutes);
app.use('/api/v1/banner', bannerRoutes);
app.use(cors());
connectDB()




// Routes
// const UserRouter = require('./routers/userRouter')
// app.use('/api/v1/user',UserRouter)

app.get('/', (req, res) => {
    res.send("Welcome To Api");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
