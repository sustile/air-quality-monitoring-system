import "./App.css";
import Header from "./Components/Header";
import DataContainer from "./Components/DataContainer";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  let [data, setData] = useState(null);

  async function reloadData() {
    let { data } = await axios.get("http://localhost:4000/api/getData");
    setData(data.data);
  }

  useEffect(() => {
    reloadData();
  }, []);

  return (
    <div className="App">
      <Header reloadData={reloadData} />
      <DataContainer data={data} />
    </div>
  );
}

export default App;
