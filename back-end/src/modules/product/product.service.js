import Product from "./product.model.js";

export const productService = {
  create: async (body) => {
    const data = await Product.create(body);
    return data;
  },
  getAll: async () => {
    const data = await Product.find({ deletedAt: null });
    return data;
  },
  getById: async (id) => {
    const data = await Product.findById(id);
    return data;
  },
  update: async (id, body) => {
    const data = await Product.findByIdAndUpdate(id, body, {
      new: true,
    });
    return data;
  },
  delete: async (id) => {
    await Product.findByIdAndDelete(id);
  },
};
