import LayoutAdmin from "../layouts/admin/LayoutAdmin";
import DashboardPage from "../pages/admin/DashboardPage";
import OrderManagement from "../pages/admin/OrderManagement";
import ProductFormPage from "../pages/admin/products/ProductFormPage";
import ProductManagement from "../pages/admin/products/ProductManagement";

const adminRoutes = {
  path: "/admin",
  element: <LayoutAdmin />,
  children: [
    { path: "", element: <DashboardPage /> },
    // * /admin/products
    // * GET , CREATE, DELETE, UPDATE
    { path: "products", element: <ProductManagement /> },
    { path: "products/add", element: <ProductFormPage /> },
    { path: "products/update/:id", element: <ProductFormPage /> },
    { path: "orders", element: <OrderManagement /> },
  ],
};

export default adminRoutes;
