import mongoose from "mongoose";
import { optionSchema } from "../../config/database.js";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  optionSchema,
);

const Product = mongoose.model("Product", productSchema);

export default Product;
