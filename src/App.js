import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
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
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <InvestForm yearlyData={yearlyData} resetYearlyData={resetYearlyData} />

      {yearlyData.length > 0 && <InvestTable yearlyData={yearlyData} />}
      {yearlyData.length === 0 && (
        <p className={styles.align}>No data avilable..</p>
      )}
    </div>
  );
}

export default App;
