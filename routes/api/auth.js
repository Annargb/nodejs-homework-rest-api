const express = require("express");
const { validateBody, authenticate } = require("../../middlewars");
const { schemas } = require("../../models/user");
const ctrl = require("../../controllers/auth");

const router = express.Router();
router.post("/register", validateBody(schemas.authSchema), ctrl.register);

router.post("/login", validateBody(schemas.authSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/:userId/subscription",
  validateBody(schemas.updateSubscriptionSchema),
  ctrl.updateSubscription
);

module.exports = router;
