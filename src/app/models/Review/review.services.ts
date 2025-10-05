import { IReview } from "./review.interface";
import { ReviewModel } from "./review.model";

// Get all reviews
const getAllReviewsService = async () => await ReviewModel.find().populate("reviewer design");

// Get review by ID
const getReviewByIdService = async (id: string) => await ReviewModel.findById(id).populate("reviewer design");

// Create review
const createReviewService = async (payload: IReview) => await ReviewModel.create(payload);

// Update review
const updateReviewService = async (id: string, payload: Partial<IReview>) =>
  await ReviewModel.findByIdAndUpdate(id, payload, { new: true });

// Delete review
const deleteReviewService = async (id: string) => await ReviewModel.findByIdAndDelete(id);

export const reviewServices = {
  getAllReviewsService,
  getReviewByIdService,
  createReviewService,
  updateReviewService,
  deleteReviewService,
};
