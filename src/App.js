import { useState } from "react";
import Header from "./components/Header";
import InvestForm from "./components/InvestForm";
import InvestTable from "./components/InvestTable";
import styles from "./components/data.module.css";

function App() {
  let [yearlyData, setYearlyData] = useState([]);
  let [currentSavings, setCurrentSavings] = useState(0);
  function resetYearlyData(li) {
    setYearlyData(li);
  }
  function currentSavingsHandler(e) {
    setCurrentSavings(e);
  }
  return (
    <div>
      <Header />

      <InvestForm
        yearlyData={yearlyData}
        resetYearlyData={resetYearlyData}
        currentSavingsHandler={currentSavingsHandler}
      />

      {yearlyData.length > 0 && (
        <InvestTable yearlyData={yearlyData} currentSavings={currentSavings} />
      )}
      {!yearlyData.length && <p className={styles.align}>No data avilable..</p>}
    </div>
  );
}

export default App;
