import { Router } from "express";
import {
  GetAllProducts,
  GetProducts,
  GetProductsById,
} from "../controllers/products.js";

const router = Router();

router.get("/", GetProducts);
router.get("/all", GetAllProducts);
router.get("/:id", GetProductsById);

export default router;
