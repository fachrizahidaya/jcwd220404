const router = require("express").Router();
const { transactionController } = require("../../controllers/index");
const { multerUpload } = require("../../middleware/multer");

// router.patch("/checkout/:id", transactionController.checkout);
// router.post("/createCart", transactionController.createCart)
router.post(
    "/single-uploaded/:id",
    multerUpload.single("file"),
    transactionController.uploadFile
  );
router.get("/findById/:id", transactionController.findAllById);
router.get("/list/:id", transactionController.findById)
router.get("/listWaitingPayment", transactionController.findWaitingPayment)
router.get("/listConfirmPayment", transactionController.findConfirmPayment)
router.get("/listOnProcess", transactionController.findOnProcess)
router.get("/listDelivery", transactionController.findDelivery)
router.get("/listDone", transactionController.findDone)

module.exports = router;
