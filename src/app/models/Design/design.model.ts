import { model, Schema } from "mongoose";
import { ComplexityLevel, DesignStatus, IDesign } from "./design.interface";


const designSchema = new Schema<IDesign>(
  {
    title: {
      type: String,
      required: [true, "Design title is required"],
      trim: true,
    },

    category: {
      type: String,
      required: [true, "Category reference is required"],
    },

    description: {
      type: String,
      required: [true, "Design description is required"],
    
    },

    previewImage: {
      type: String,
      required: [true, "Preview image URL is required"],
    },

    designerName: {
      type: String,
      required: [true, "Designer name is required"],
      trim: true,
    },

    usedTools: {
      type: [String],
      default: [],
      validate: {
        validator: (arr: string[]) => arr.every((tool) => typeof tool === "string"),
        message: "Each tool must be a string",
      },
    },

    effectsUsed: {
      type: [String],
      default: [],
      validate: {
        validator: (arr: string[]) => arr.every((effect) => typeof effect === "string"),
        message: "Each effect must be a string",
      },
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },

    process: {
      type: String,
      required: [true, "Process information is required"],
    },

    complexityLevel: {
      type: String,
      enum: Object.values(ComplexityLevel),
      required: [true, "Complexity level is required"],
    },

    tags: {
      type: [String],
      default: [],
    },

    status: {
      type: String,
      enum: Object.values(DesignStatus),
      default: DesignStatus.ACTIVE,
    },

    likesCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    downloadsCount: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
);

export const DesignModel = model<IDesign>("Design", designSchema);


