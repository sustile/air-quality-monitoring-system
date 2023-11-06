import React from "react";
import { motion } from "framer-motion";
import "./DataContainer.scss";
import Data from "./Data/Data";

export default function DataContainer() {
  return (
    <motion.div className="DataContainer">
      <Data latest={true} />
      <Data latest={false} />
      <Data latest={false} />
      <Data latest={false} />
    </motion.div>
  );
}
