import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-auto text-white bg-gray-900">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
