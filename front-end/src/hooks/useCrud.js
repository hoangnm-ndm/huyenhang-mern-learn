// import { useCallback, useEffect, useState } from "react";
// import { productService } from "../api/productService";

// export const useCrud = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchProducts = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const { data } = await productService.getAll();
//       setProducts(data.data);
//     } catch (error) {
//       setError(error);
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const createProduct = async (payload) => {
//     const { data } = await productService.create(payload);
//     setProducts((prev) => [...prev, data.data]);
//   };

//   const updateProduct = async (id, payload) => {
//     const { data } = await productService.update(id, payload);
//     setProducts((prev) => prev.map((item) => (item._id === id ? data : item)));
//   };

//   const deleteProduct = async (id) => {
//     await productService.delete(id);
//     setProducts((prev) => prev.filter((item) => item.id !== id));
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return {
//     products,
//     loading,
//     error,
//     fetchProducts,
//     createProduct,
//     updateProduct,
//     deleteProduct,
//   };
// };
