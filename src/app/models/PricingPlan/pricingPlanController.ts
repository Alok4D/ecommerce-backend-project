import { Request, Response } from "express";
import { pricingPlanServices } from "./pricingPlan.services";


// Get all pricing plans
const getAllPricingPlansController = async (req: Request, res: Response) => {
  try {
    const result = await pricingPlanServices.getAllPricingPlansService();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

// Get single pricing plan
const getPricingPlanByIdController = async (req: Request, res: Response) => {
  try {
    const pricingPlan = await pricingPlanServices.getPricingPlanByIdService(req.params.id as string);
    if (!pricingPlan) return res.status(404).json({ success: false, message: "Pricing Plan not found" });
    res.status(200).json({ success: true, data: pricingPlan });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch pricing plan" });
  }
};

// Create pricing plan
const createPricingPlanController = async (req: Request, res: Response) => {
  try {
    const pricingPlan = await pricingPlanServices.createPricingPlanService(req.body);
    res.status(201).json({ success: true, data: pricingPlan });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create pricing plan" });
  }
};

// Update pricing plan
const updatePricingPlanController = async (req: Request, res: Response) => {
  try {
    const pricingPlan = await pricingPlanServices.updatePricingPlanService(req.params.id as string, req.body);
    if (!pricingPlan) return res.status(404).json({ success: false, message: "Pricing Plan not found" });
    res.status(200).json({ success: true, data: pricingPlan });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update pricing plan" });
  }
};

// Delete pricing plan
const deletePricingPlanController = async (req: Request, res: Response) => {
  try {
    const pricingPlan = await pricingPlanServices.deletePricingPlanService(req.params.id as string);
    if (!pricingPlan) return res.status(404).json({ success: false, message: "Pricing Plan not found" });
    res.status(200).json({ success: true, message: "Pricing Plan deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete pricing plan" });
  }
};

export const pricingPlanController = {
  getAllPricingPlansController,
  getPricingPlanByIdController,
  createPricingPlanController,
  updatePricingPlanController,
  deletePricingPlanController,
};
