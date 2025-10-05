import express from "express";
import { designController } from "./design.controller";

const router = express.Router();

// Base URL: /api/design
router.get("/", designController.getAllDesignsController);
router.get("/:id", designController.getDesignByIdController);
router.post("/", designController.createDesignController);
router.put("/:id", designController.updateDesignController);
router.delete("/:id", designController.deleteDesignController);

export const designRoutes = router;
