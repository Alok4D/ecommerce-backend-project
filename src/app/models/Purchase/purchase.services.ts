import { IPurchase } from "./purchase.interface";
import { PurchaseModel } from "./purchase.model";

// Get all purchases
const getAllPurchasesService = async () => await PurchaseModel.find().populate("customer design selectedPricingPlan");

// Get purchase by ID
const getPurchaseByIdService = async (id: string) => await PurchaseModel.findById(id).populate("customer design selectedPricingPlan");

// Create purchase
const createPurchaseService = async (payload: IPurchase) => await PurchaseModel.create(payload);

// Update purchase
const updatePurchaseService = async (id: string, payload: Partial<IPurchase>) =>
  await PurchaseModel.findByIdAndUpdate(id, payload, { new: true });

// Delete purchase
const deletePurchaseService = async (id: string) => await PurchaseModel.findByIdAndDelete(id);

export const purchaseServices = {
  getAllPurchasesService,
  getPurchaseByIdService,
  createPurchaseService,
  updatePurchaseService,
  deletePurchaseService,
};
