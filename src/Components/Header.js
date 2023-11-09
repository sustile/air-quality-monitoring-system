import React from "react";
import { motion } from "framer-motion";
import "./Header.scss";
import { useEffect } from "react";
const Choreographer = require("choreographer-js");

export default function Header({ reloadData }) {
  // useEffect(() => {
  //   let choreographer = new Choreographer({
  //     animations: [
  //       {
  //         range: [-1, 10],
  //         selector: "#box",
  //         type: "scale",
  //         style: "opacity",
  //         from: 0,
  //         to: 1,
  //       },
  //     ],
  //   });

  //   window.addEventListener("scroll", () => {
  //     choreographer.runAnimationsAt(window.pageYOffset);
  //   });
  // }, []);

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
