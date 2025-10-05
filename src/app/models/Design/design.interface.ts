export enum ComplexityLevel {
  BASIC = "Basic",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced",
}

export enum DesignStatus {
  ACTIVE = "Active",
  DRAFT = "Draft",
  ARCHIVED = "Archived",
}

export interface IDesign {
  _id?: string;
  title: string;
  category: string; 
  description: string;
  previewImage: string;
  designerName: string;
  usedTools: string[];
  effectsUsed: string[];
  price: number;
  process: string;
  complexityLevel: ComplexityLevel;
  tags: string[];
  status: DesignStatus;
  likesCount?: number;
  downloadsCount?: number;
}
