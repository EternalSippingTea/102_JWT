const express = require("express");
const router = express.Router();

const komikController = require ("../controller/komikController.js");
const userController = require ("../controller/userController.js");
const authMiddleware = require ("../middleware/authMiddleware.js");

router.post("/register", userController.register);
router.post("/login", userController.login);

router.get ("/komik", komikController.getAllKomik)
router.get ("/komik/:id", komikController.getKomikById)

router.post ("/komik", authMiddleware, komikController.createKomik);
router.put ("/komik/:id", authMiddleware, komikController.updateKomik);
router.delete ("/komik/:id", authMiddleware, komikController.deleteKomik);

module.exports = router;

