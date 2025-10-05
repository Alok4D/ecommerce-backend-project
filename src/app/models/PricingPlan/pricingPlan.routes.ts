import express from "express";
import { pricingPlanController } from "./pricingPlanController";

const router = express.Router();

// Base URL: /api/pricing
router.get("/", pricingPlanController.getAllPricingPlansController);
router.get("/:id", pricingPlanController.getPricingPlanByIdController);
router.post("/", pricingPlanController.createPricingPlanController);
router.put("/:id", pricingPlanController.updatePricingPlanController);
router.delete("/:id", pricingPlanController.deletePricingPlanController);

export const pricingPlanRoutes = router;
