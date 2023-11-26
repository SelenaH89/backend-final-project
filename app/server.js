const express = require('express');
const sequelize = require('./config/connectdb');

const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/usersRoute');
const inventoryRoute = require('./routes/inventoryRoute');
const app = express();

// Initialize Sequelize
sequelize
  .sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

app.use('/product', productRoute);
app.use('/user', userRoute);
app.use('/inventory', inventoryRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
