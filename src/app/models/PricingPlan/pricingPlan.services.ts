import { IPricingPlan } from "./pricingPlan.interface";
import { PricingPlanModel } from "./pricingPlan.model";

// Get all pricing plans
const getAllPricingPlansService = async () => {
  return await PricingPlanModel.find();
};

// Get pricing plan by ID
const getPricingPlanByIdService = async (id: string) => {
  return await PricingPlanModel.findById(id);
};

// Create new pricing plan
const createPricingPlanService = async (payload: IPricingPlan) => {
  return await PricingPlanModel.create(payload);
};

// Update pricing plan
const updatePricingPlanService = async (id: string, payload: Partial<IPricingPlan>) => {
  return await PricingPlanModel.findByIdAndUpdate(id, payload, { new: true });
};

// Delete pricing plan
const deletePricingPlanService = async (id: string) => {
  return await PricingPlanModel.findByIdAndDelete(id);
};

export const pricingPlanServices = {
  getAllPricingPlansService,
  getPricingPlanByIdService,
  createPricingPlanService,
  updatePricingPlanService,
  deletePricingPlanService,
};
