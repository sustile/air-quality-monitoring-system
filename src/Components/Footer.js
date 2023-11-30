import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer() {
  return (
    <motion.div className="Footer">
      <h2>Project By</h2>
      <div className="Footer-mainCont">
        <div className="name">
          <p>Akash K S</p>
          <span>23BME1098</span>
        </div>
        <div className="name">
          <p>Annamalai Srinivas</p>
          <span>23BAI1006</span>
        </div>
        <div className="name">
          <p>Dhatchanamurthy Umapathy</p>
          <span>23BEC1281</span>
        </div>
        <div className="name">
          <p>Ezhilarasan K</p>
          <span>23BEC1040</span>
        </div>
        <div className="name">
          <p>M Kishore Kumar</p>
          <span>23BCE1010</span>
        </div>
        <div className="name">
          <p>N Yashwanthraj</p>
          <span>23BME1131 </span>
        </div>
        <div className="name">
          <p>R.Rithvik Nimal</p>
          <span>23BRS1377</span>
        </div>
        <div className="name">
          <p>S Sarvesh</p>
          <span>23BRS1380</span>
        </div>
        <div className="name">
          <p>Shuruthi Ajay</p>
          <span>23BRS1338</span>
        </div>
      </div>
    </motion.div>
  );
}
