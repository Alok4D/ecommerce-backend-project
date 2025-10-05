import express from "express";
import { purchaseController } from "./purchase.controller";

const router = express.Router();

// Base URL: /api/purchases
router.get("/", purchaseController.getAllPurchasesController);
router.get("/:id", purchaseController.getPurchaseByIdController);
router.post("/", purchaseController.createPurchaseController);
router.put("/:id", purchaseController.updatePurchaseController);
router.delete("/:id", purchaseController.deletePurchaseController);

export const purchaseRoutes = router;
