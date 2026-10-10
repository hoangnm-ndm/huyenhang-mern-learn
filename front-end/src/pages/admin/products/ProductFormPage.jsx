import React from "react";
import { useNavigate, useParams } from "react-router";
import api from "../../../api";
import { useForm } from "react-hook-form";
import { zodResolver } from "../../../../node_modules/@hookform/resolvers/zod/src/zod";
import { productSchema } from "../../../validation/productSchema";
import { useProducts } from "../../../hooks/useProducts";
import { toast } from "react-toastify";
import { useEffect } from "react";
// import { productService } from "../../../api/productService";

const ProductFormPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { products, error, loading, updateProduct, createProduct } =
    useProducts();

  // const { data, error, loading, update, create } = useCrud(productService);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/products/${id}`);
      console.log(data);
      reset(data.data);
    })();
  }, [id]);

  const submit = async (data) => {
    console.log(data);
    if (id) {
      // * Update
      const res = await updateProduct(id, data);
      toast("Cap nhat thanh cong!");
      // nav("/admin/products")
    } else {
      // * create
      const res = await createProduct(data);
      toast("Them san pham thanh cong!");
    }
    reset();
  };

  return (
    <>
      <h1>{id ? "Update" : "Add"} Product</h1>
      <form action="" onSubmit={handleSubmit(submit)}>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input type="text" {...register("title")} />
          {errors?.title && (
            <p style={{ color: "red" }}>{errors.title.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="">Price</label>
          <input
            type="number"
            {...register("price", { valueAsNumber: true })}
          />
          {errors?.price && (
            <p style={{ color: "red" }}>{errors.price.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="">Description</label>
          <textarea cols="30" rows="10" {...register("description")}></textarea>
        </div>

        <div className="form-group">
          <button>{id ? "Update" : "Add"}</button>
        </div>
      </form>
    </>
  );
};

export default ProductFormPage;
