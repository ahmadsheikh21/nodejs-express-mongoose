const express = require("express");
const router = express.Router();

const lostitemController = require('../controllers/lostitem.controllers');

router.get("/",lostitemController.getAll);
router.post("/add",lostitemController.addlostitem);
// router.get("/:_id",lostitemController.getSingleBook);
 router.put("/:_id", lostitemController.updatelostitem);
 router.delete("/:_id", lostitemController.deletelostitem);


module.exports = router;