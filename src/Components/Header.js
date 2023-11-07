import React from "react";
import { motion } from "framer-motion";
import "./Header.scss";

export default function Header({ reloadData }) {
  return (
    <motion.div className="Header">
      <h2>Air Quality Monitoring System</h2>
      <motion.button
        initial={{
          scale: 1,
        }}
        whileHover={{
          scale: 1.03,
          transition: {
            duration: 0.3,
            type: "spring",
          },
        }}
        whileTap={{
          scale: 1,
          transition: {
            duration: 0.3,
            type: "spring",
          },
        }}
        onClick={reloadData}
      >
        <p>Reload Data</p>
        <motion.img src={"/Icons/ArrowClockwise.svg"} />
      </motion.button>
    </motion.div>
  );
}
