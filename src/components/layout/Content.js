import React from "react";
import { Tasks } from "../Tasks";
import { Sidebar } from "./Sidebar";

const Content = () => {
  return (
    <section>
      <Sidebar />
      <Tasks />
    </section>
  );
};

export default Content;
