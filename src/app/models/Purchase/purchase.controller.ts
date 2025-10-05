import { Request, Response } from "express";
import { purchaseServices } from "./purchase.services";


// Get all purchases
const getAllPurchasesController = async (req: Request, res: Response) => {
  try {
    const result = await purchaseServices.getAllPurchasesService();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

// Get purchase by ID
const getPurchaseByIdController = async (req: Request, res: Response) => {
  try {
    const purchase = await purchaseServices.getPurchaseByIdService(req.params.id as string);
    if (!purchase) return res.status(404).json({ success: false, message: "Purchase not found" });
    res.status(200).json({ success: true, data: purchase });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch purchase" });
  }
};

// Create purchase
const createPurchaseController = async (req: Request, res: Response) => {
  try {
    const purchase = await purchaseServices.createPurchaseService(req.body);
    res.status(201).json({ success: true, data: purchase });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create purchase" });
  }
};

// Update purchase
const updatePurchaseController = async (req: Request, res: Response) => {
  try {
    const purchase = await purchaseServices.updatePurchaseService(req.params.id as string, req.body);
    if (!purchase) return res.status(404).json({ success: false, message: "Purchase not found" });
    res.status(200).json({ success: true, data: purchase });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update purchase" });
  }
};

// Delete purchase
const deletePurchaseController = async (req: Request, res: Response) => {
  try {
    const purchase = await purchaseServices.deletePurchaseService(req.params.id as string);
    if (!purchase) return res.status(404).json({ success: false, message: "Purchase not found" });
    res.status(200).json({ success: true, message: "Purchase deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete purchase" });
  }
};

export const purchaseController = {
  getAllPurchasesController,
  getPurchaseByIdController,
  createPurchaseController,
  updatePurchaseController,
  deletePurchaseController,
};
