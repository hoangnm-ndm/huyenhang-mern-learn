import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import SideBarAdmin from "./SideBarAdmin";
import { Outlet } from "react-router";

const LayoutAdmin = () => {
  return (
    <div>
      <HeaderAdmin />

      <div>
        <SideBarAdmin />
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAdmin;
