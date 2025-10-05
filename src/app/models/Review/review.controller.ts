import { Request, Response } from "express";
import { reviewServices } from "./review.services";


// Get all reviews
const getAllReviewsController = async (req: Request, res: Response) => {
  try {
    const result = await reviewServices.getAllReviewsService();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

// Get review by ID
const getReviewByIdController = async (req: Request, res: Response) => {
  try {
    const review = await reviewServices.getReviewByIdService(req.params.id as string);
    if (!review) return res.status(404).json({ success: false, message: "Review not found" });
    res.status(200).json({ success: true, data: review });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch review" });
  }
};

// Create review
const createReviewController = async (req: Request, res: Response) => {
  try {
    const review = await reviewServices.createReviewService(req.body);
    res.status(201).json({ success: true, data: review });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create review" });
  }
};

// Update review
const updateReviewController = async (req: Request, res: Response) => {
  try {
    const review = await reviewServices.updateReviewService(req.params.id as string, req.body);
    if (!review) return res.status(404).json({ success: false, message: "Review not found" });
    res.status(200).json({ success: true, data: review });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update review" });
  }
};

// Delete review
const deleteReviewController = async (req: Request, res: Response) => {
  try {
    const review = await reviewServices.deleteReviewService(req.params.id as string);
    if (!review) return res.status(404).json({ success: false, message: "Review not found" });
    res.status(200).json({ success: true, message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete review" });
  }
};

export const reviewController = {
  getAllReviewsController,
  getReviewByIdController,
  createReviewController,
  updateReviewController,
  deleteReviewController,
};
