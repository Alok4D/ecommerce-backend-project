import express from "express";
import { categoryController } from "./category.controller";

const router = express.Router();

// Base URL: /api/categories
router.get("/", categoryController.getAllCategoriesController);
router.get("/:id", categoryController.getCategoryByIdController);
router.post("/", categoryController.createCategoryController);
router.put("/:id", categoryController.updateCategoryController);
router.delete("/:id", categoryController.deleteCategoryController);

export const categoryRoutes = router;
