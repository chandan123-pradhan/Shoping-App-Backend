const express = require('express');
const router = express.Router();
const { user_register, user_login } = require('../services/auth_services')
const { register_route, login_route, admin_login_route } = require('../routers');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
const {adminLogin}=require('../services/admin_auth_service')


/**
 * This is login for user.
 */
router.post(login_route, async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const data = await user_login({ email: email, password: password });
  console.log(data);


  res.status(200).json(
    data
  );

});

/**
 * This is registeration for users.
 */
router.post(register_route, async (req, res) => {
  const { name, email, password, mobile_number } = req.body;
  console.log(email, password, name);
  const data = await user_register({
    name: name,
    password: password,
    mobile_number: mobile_number,
    email: email
  });

  res.status(200).json({ data });
});





/**
 * This is login for admin.
 */
router.post(admin_login_route, async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const data = await adminLogin({ email: email, password: password });
  console.log(data);


  res.status(200).json(
    data
  );

});









module.exports = router