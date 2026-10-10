import React, { useEffect, useState } from "react";
import api from "../../../api";
import { Link } from "react-router";
import { useProducts } from "../../../hooks/useProducts";
import { toast } from "react-toastify";

const ProductManagement = () => {
  const { products, loading, error, deleteProduct } = useProducts();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Có lỗi xảy ra...</p>;

  const handleDelete = (id) => {
    if (confirm("Are you sure?")) {
      deleteProduct(id) && toast("Xoa san pham thanh cong!");
    }
  };

  return (
    <>
      <div>
        <h1>Management Products</h1>
        <Link to="add">Create new</Link>
        {/* http:localhost:5173/admin/products/add */}
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Thumbnail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length != 0 &&
            products.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>
                  <img src={item.thumbnail} alt={item.title} width="100px" />
                </td>
                <td>
                  <Link to={`update/${item._id}`}>Update</Link>{" "}
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductManagement;
