import { Router } from "express";
import { productController } from "./product.controller.js";

const productRoutes = Router();

productRoutes.get("/", productController.getAll);
productRoutes.get("/:id", productController.getDetail);

// middlewares check role admin
productRoutes.post("/", productController.create);
productRoutes.patch("/:id", productController.update);
productRoutes.delete("/:id", productController.delete);

export default productRoutes;
