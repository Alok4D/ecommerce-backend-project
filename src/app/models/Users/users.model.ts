import { model, Schema } from "mongoose";
import { IUser, UserRole, UserStatus } from "./users.interface";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: Object.values(UserRole), default: UserRole.CUSTOMER },
  phone: { type: String },
  address: { type: String },
  image: { type: String, default: "" },
  status: { type: String, enum: Object.values(UserStatus), default: UserStatus.ACTIVE },
  isDeleted: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false }
}, { timestamps: true });

export const UserModel = model<IUser>("User", userSchema);
