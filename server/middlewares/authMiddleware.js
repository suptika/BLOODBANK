const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    // Add a space after "Bearer" to properly split the token
    const token = req.header("authorization").replace("Bearer ", "");
    
    // Verify the token using the correct secret
    const decryptedData = jwt.verify(token, process.env.jwt_secret);
    
    // Assign the user ID to req.userId instead of req.body.userId
    req.body.userId = decryptedData.userId;
    
    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    return res.send({
      success: false,
      message: error.message, // Send the error message in the response
    });
  }
};


