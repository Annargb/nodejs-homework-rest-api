const express = require("express");
const router = express.Router();

const { isValidId, validateBody } = require("../../middlewars");
const { schemas } = require("../../models/contact");

const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", isValidId, ctrl.deleteContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  validateBody(schemas.updateFavoriteSchema),
  isValidId,
  ctrl.updateFavorite
);

module.exports = router;
