const { Router } = require("express");

const router = Router();

// Test route
router.use("/test", (req, res) => {
  res.json(400);
});

module.exports = router;
