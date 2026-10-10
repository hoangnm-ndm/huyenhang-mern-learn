import { useCallback, useEffect, useState } from "react";
import { productService } from "../api/productService";

export const useProducts = (service, options = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await service.getAll();
      setData(data.data);
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const create = async (payload) => {
    const { data } = await service.create(payload);
    setData((prev) => [...prev, data.data]);
  };

  const update = async (id, payload) => {
    const { data } = await service.update(id, payload);
    setData((prev) => prev.map((item) => (item._id === id ? data : item)));
  };

  const remove = async (id) => {
    await service.remove(id);
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    products,
    loading,
    error,
    fetchData,
    create,
    update,
    remove,
  };
};
