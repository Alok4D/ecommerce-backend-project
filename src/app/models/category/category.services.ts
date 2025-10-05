import { ICategory } from "./category.interface";
import { CategoryModel } from "./category.model";

// Get all categories
const getAllCategories = async () => {
  return await CategoryModel.find();
};

// Get category by ID
const getCategoryById = async (id: string) => {
  return await CategoryModel.findById(id);
};

// Create new category
const createCategory = async (payload: ICategory) => {
  return await CategoryModel.create(payload);
};

// Update category
const updateCategory = async (id: string, payload: Partial<ICategory>) => {
  return await CategoryModel.findByIdAndUpdate(id, payload, { new: true });
};

// Delete category
const deleteCategory = async (id: string) => {
  return await CategoryModel.findByIdAndDelete(id);
};

export const categoryServices = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
