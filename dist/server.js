"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const _1 = __importDefault(require("."));
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DATABASE_URL || "mongodb+srv://ecommerceBackendProjectBdCalling:A3IOhzgJk1Z74tqR@cluster0.1yjndj5.mongodb.net/ecommerceBackendProject?retryWrites=true&w=majority&appName=Cluster0";
async function main() {
    try {
        await mongoose_1.default.connect(DB_URL);
        console.log("✅ MongoDB connected");
        _1.default.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    }
    catch (err) {
        console.error("❌ Error starting server:", err);
    }
}
main();
//# sourceMappingURL=server.js.map