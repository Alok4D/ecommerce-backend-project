import { IDesign } from "./design.interface";
import { DesignModel } from "./design.model";


// Get all designs
const getAllDesignsService = async () => await DesignModel.find();

// Get design by ID
const getDesignByIdService = async (id: string) => await DesignModel.findById(id);

// Create design
const createDesignService = async (payload: IDesign) => await DesignModel.create(payload);

// Update design
const updateDesignService = async (id: string, payload: Partial<IDesign>) =>
  await DesignModel.findByIdAndUpdate(id, payload, { new: true });

// Delete design
const deleteDesignService = async (id: string) => await DesignModel.findByIdAndDelete(id);

export const designServices = {
  getAllDesignsService,
  getDesignByIdService,
  createDesignService,
  updateDesignService,
  deleteDesignService,
};
