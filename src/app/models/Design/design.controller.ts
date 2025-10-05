import { Request, Response } from "express";
import { designServices } from "./design.services";


// Get all designs
const getAllDesignsController = async (req: Request, res: Response) => {
  try {
    const result = await designServices.getAllDesignsService();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

// Get single design
const getDesignByIdController = async (req: Request, res: Response) => {
  try {
    const design = await designServices.getDesignByIdService(req.params.id as string);
    if (!design) return res.status(404).json({ success: false, message: "Design not found" });
    res.status(200).json({ success: true, data: design });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch design" });
  }
};

// Create design
const createDesignController = async (req: Request, res: Response) => {
  try {
    const design = await designServices.createDesignService(req.body);
    res.status(201).json({ success: true, data: design });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create design" });
  }
};

// Update design
const updateDesignController = async (req: Request, res: Response) => {
  try {
    const design = await designServices.updateDesignService(req.params.id as string, req.body);
    if (!design) return res.status(404).json({ success: false, message: "Design not found" });
    res.status(200).json({ success: true, data: design });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update design" });
  }
};

// Delete design
const deleteDesignController = async (req: Request, res: Response) => {
  try {
    const design = await designServices.deleteDesignService(req.params.id as string);
    if (!design) return res.status(404).json({ success: false, message: "Design not found" });
    res.status(200).json({ success: true, message: "Design deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete design" });
  }
};

export const designController = {
  getAllDesignsController,
  getDesignByIdController,
  createDesignController,
  updateDesignController,
  deleteDesignController,
};
