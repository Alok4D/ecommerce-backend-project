"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const users_interface_1 = require("./users.interface");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(users_interface_1.UserRole), default: users_interface_1.UserRole.CUSTOMER },
    phone: { type: String },
    address: { type: String },
    image: { type: String, default: "" },
    status: { type: String, enum: Object.values(users_interface_1.UserStatus), default: users_interface_1.UserStatus.ACTIVE },
    isDeleted: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false }
}, { timestamps: true });
exports.UserModel = (0, mongoose_1.model)("User", userSchema);
//# sourceMappingURL=users.model.js.map