// src/app.ts
import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { designRoutes } from "./app/models/Design/design.routes";
import { categoryRoutes } from "./app/models/category/category.routes";
import { pricingPlanRoutes } from "./app/models/PricingPlan/pricingPlan.routes";
import { reviewRoutes } from "./app/models/Review/review.routes";
import { purchaseRoutes } from "./app/models/Purchase/purchase.routes";

dotenv.config();

const app: Application = express();

// middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/design", designRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/pricing", pricingPlanRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/purchases", purchaseRoutes);


app.get("/", (req: Request, res: Response) => {
  res.send("Role management server is running!");
});

export default app;
