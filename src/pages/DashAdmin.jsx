import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";

function DashAdmin() {
  const [isComponentVisible, setComponentVisible] = useState(true);
  const toggleComponent = () => {
    setComponentVisible(!isComponentVisible);
  };

  return (
    <>
      <Sidebar/>
    
    </>
  );
}

export default DashAdmin;
