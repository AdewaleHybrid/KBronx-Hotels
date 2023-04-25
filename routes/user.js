const express = require("express");
const path = require("path");

const router = express.Router();

const userControler = require("../controllers/user");

router.get("/", userControler.getHome); //home page

router.get("/about", userControler.getAbout); // about page
router.get("/rooms", userControler.getRooms); // room page
router.get("/room1-details", userControler.getRoom1); // room1 details page
router.get("/gallery", userControler.getGallery); // Gallery Page
// router.get("/loginUser", userControler.getLoginUser); // Login Page

router
  .route("/loginUser")
  .get(userControler.getLoginUser) // get request for login
  .post(userControler.postLoginUser); // post request for login

router
  .route("/createUser")
  .get(userControler.getCreateUser) //get request for create account
  .post(userControler.postCreateUser); //post request for create account

router
  .route("/category")
  .get(userControler.authentication, userControler.getCategory) //get request for Category
  .post(userControler.postCategory); //post request form the category
router.route("/boooking").post(userControler.postBooking); //post booking data

router.route("/status").post(userControler.postStatus);

router.route("/showStatus").get(userControler.authentication, userControler.getShowStatus); // get show status

router.post("/deletereq", userControler.deleteBooking, userControler.getShowStatus);

router.get("/contact", userControler.getContact);

router.get("/logout", userControler.logout); //logout

module.exports = router;
