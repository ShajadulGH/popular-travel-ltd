import { Fragment, useCallback, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import "./index.css";
function App() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");
  const dataFetch = useCallback(async () => {
    const response = await fetch("LHR_CDG_ADT1_TYPE_1.txt");
    if (response.ok) {
      setStatus("success");
    }
    const data = await response.json();
    console.log(data);
    setData(data);
  }, []);
  const searchHandler = () => {
    dataFetch();
  };
  return (
    <Fragment>
      <Form search={searchHandler} />
      <div className="text-center my-2">{data.message}</div>
      {status === "success" ? <Table data={data} /> : ""}
    </Fragment>
  );
}

export default App;
