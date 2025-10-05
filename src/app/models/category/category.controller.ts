import { Request, Response } from "express";
import { categoryServices } from "./category.services";

// Get all categories
const getAllCategoriesController = async (req: Request, res: Response) => {
  try {
    const categories = await categoryServices.getAllCategories();
    res.status(200).json({ success: true, data: categories });
  } catch (error: any) {
    res.status(500).json({ success: false, message: "Failed to fetch categories", error: error.message });
  }
};

// Get category by ID
const getCategoryByIdController = async (req: Request, res: Response) => {
  try {
    const category = await categoryServices.getCategoryById(req.params.id as string);
    if (!category) return res.status(404).json({ success: false, message: "Category not found" });
    res.status(200).json({ success: true, data: category });
  } catch (error: any) {
    res.status(500).json({ success: false, message: "Failed to fetch category", error: error.message });
  }
};

// Create category
const createCategoryController = async (req: Request, res: Response) => {
  try {
    const category = await categoryServices.createCategory(req.body);
    res.status(201).json({ success: true, message: "Category created successfully", data: category });
  } catch (error: any) {
    res.status(500).json({ success: false, message: "Failed to create category", error: error.message });
  }
};

// Update category
const updateCategoryController = async (req: Request, res: Response) => {
  try {
    const category = await categoryServices.updateCategory(req.params.id as string, req.body);
    if (!category) return res.status(404).json({ success: false, message: "Category not found" });
    res.status(200).json({ success: true, message: "Category updated successfully", data: category });
  } catch (error: any) {
    res.status(500).json({ success: false, message: "Failed to update category", error: error.message });
  }
};

// Delete category
const deleteCategoryController = async (req: Request, res: Response) => {
  try {
    const category = await categoryServices.deleteCategory(req.params.id as string);
    if (!category) return res.status(404).json({ success: false, message: "Category not found" });
    res.status(200).json({ success: true, message: "Category deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ success: false, message: "Failed to delete category", error: error.message });
  }
};

export const categoryController = {
  getAllCategoriesController,
  getCategoryByIdController,
  createCategoryController,
  updateCategoryController,
  deleteCategoryController,
};
