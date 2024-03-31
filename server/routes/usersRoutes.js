const router = require("express").Router();
const bycrypt = require("bcryptjs");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");
const Inventory = require("../models/inventoryModal");
const mongoose = require("mongoose");

//register new user (API)
router.post("/register", async (req, res) => {
  try {
    //check if user is already exists
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res.send({
        success: false,
        message: "User already exists",
      });
    }

    //hash password
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    //save user
    const user = new User(req.body);
    await user.save();

    return res.send({
      success: true,
      message: "User registered sucessfully",
    });
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
});

//login user (API)
router.post("/login", async (req, res) => {
  try {
    //check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.send({
        success: false,
        message: "User not found",
      });
    }

    //check if userType is matching
    if (user.userType !== req.body.userType) {
      return res.send({
        success: false,
        message: `User is not registered as ${req.body.userType}`,
      });
    }

    //compare password
    const validPassword = await bycrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.send({
        success: false,
        message: "Invalid Password",
      });
    }

    //generate token
    const token = jwt.sign({ userId: user._id }, process.env.jwt_secret, {
      expiresIn: "7d",
    });

    return res.send({
      success: true,
      message: "User logged in successfully",
      data: token,
    });
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
});

// get current user
router.get("/get-current-user", authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.userId });

    //remove the password
    // user.password = undefined;
    // return res.send({
    //   success: true,
    //   message: "User fetched successfully",
    //   data: user,
    // });

    return res.send({
      success: true,
      message: "User fetched sucessfully",
      data: user,
    });
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
});

// get all unique donors
router.get("/get-all-donars", authMiddleware, async (req, res) => {
  try {
    // get all unique donor ids from inventory
    const organization = new mongoose.Types.ObjectId(req.body.userId);
    const uniqueDonarIds = await Inventory.distinct("donar", {
      organization,
    });

    const donars = await User.find({
      _id: { $in: uniqueDonarIds },
    });

    return res.send({
      success: true,
      message: "Donars fetched successfully",
      data: donars,
    });
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
});

// get all unique hospitals
router.get("/get-all-hospitals", authMiddleware, async (req, res) => {
  try {
    // get all unique hospital ids from inventory
    const organization = new mongoose.Types.ObjectId(req.body.userId);
    const uniqueHospitalIds = await Inventory.distinct("hospital", {
      organization,
    });

    const hospitals = await User.find({
      _id: { $in: uniqueHospitalIds },
    });

    return res.send({
      success: true,
      message: "Hospitals fetched successfully",
      data: hospitals,
    });
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
});


// get all unique organizations for a donar
router.get(
  "/get-all-organizations-of-a-donar",
  authMiddleware,
  async (req, res) => {
    try {
      // get all unique hospital ids from inventory
      const donar = new mongoose.Types.ObjectId(req.body.userId);
      const uniqueOrganizationIds = await Inventory.distinct("organization", {
        donar,
      });

      const hospitals = await User.find({
        _id: { $in: uniqueOrganizationIds },
      });

      return res.send({
        success: true,
        message: "Hospitals fetched successfully",
        data: hospitals,
      });
    } catch (error) {
      return res.send({
        success: false,
        message: error.message,
      });
    }
  }
);

// get all unique organizations for a hospital
router.get(
  "/get-all-organizations-of-a-hospital",
  authMiddleware,
  async (req, res) => {
    try {
      // get all unique organizations ids from inventory
      const hospital = new mongoose.Types.ObjectId(req.body.userId);
      const uniqueOrganizationIds = await Inventory.distinct("organization", {
        hospital,
      });

      const hospitals = await User.find({
        _id: { $in: uniqueOrganizationIds },
      });

      return res.send({
        success: true,
        message: "Hospitals fetched successfully",
        data: hospitals,
      });
    } catch (error) {
      return res.send({
        success: false,
        message: error.message,
      });
    }
  }
);


module.exports = router;
