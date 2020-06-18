//define exress router
const router = require("express").Router();
//require api routes
router.use("/api", require("./noteRoutes.js"));
//export out router folder
module.exports = router;
