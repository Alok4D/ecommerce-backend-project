import mongoose from "mongoose";
import app from ".";

const PORT = process.env.PORT || 4000;
const DB_URL =
  process.env.DATABASE_URL ||
  "mongodb+srv://ecommerceBackendProjectBdCalling:A3IOhzgJk1Z74tqR@cluster0.1yjndj5.mongodb.net/ecommerceBackendProject?retryWrites=true&w=majority&appName=Cluster0";

async function main() {
  try {
    await mongoose.connect(DB_URL);
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Error starting server:", err);
  }
}

main();
