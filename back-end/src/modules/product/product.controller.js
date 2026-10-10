import Product from "./product.model.js";
import { productService } from "./product.service.js";

export const productController = {
  async getAll(req, res) {
    const products = await productService.getAll();
    res.status(200).json({
      message: "Lay danh sach san pham thanh cong!",
      data: products,
    });
  },

  async getDetail(req, res) {
    const product = await productService.getById(req.params.id);
    res.status(200).json({
      message: "Lay chi tiet san pham thanh cong!",
      data: product,
    });
  },

  async create(req, res) {
    const product = await productService.create(req.body);
    res.status(201).json({
      message: "Them san pham thanh cong!",
      data: product,
    });
  },

  async update(req, res) {
    const product = await productService.update(req.params.id, req.body);
    res.status(200).json({
      message: "Cap nhat san pham thanh cong!",
      data: product,
    });
  },

  async delete(req, res) {
    await productService.delete(req.params.id);
    res.status(200).json({
      message: "Xoa san pham thanh cong!",
    });
  },
};
