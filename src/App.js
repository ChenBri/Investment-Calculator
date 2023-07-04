import { useState } from "react";
import Header from "./components/Header";
import InvestForm from "./components/InvestForm";
import InvestTable from "./components/InvestTable";
import styles from "./components/data.module.css";

function App() {
  let [yearlyData, setYearlyData] = useState([]);
  function resetYearlyData(li) {
    setYearlyData(li);
  }
  return (
    <div>
      <Header />

      <InvestForm yearlyData={yearlyData} resetYearlyData={resetYearlyData} />

      {yearlyData.length > 0 && <InvestTable yearlyData={yearlyData} />}
      {!yearlyData.length && <p className={styles.align}>No data avilable..</p>}
    </div>
  );
}

export default App;
