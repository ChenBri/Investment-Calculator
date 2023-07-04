import { useState } from "react";

const InvestForm = (props) => {
  let [currentSavings, setCurrentSavings] = useState(null);
  let [yearlyContribution, setYearlyContribution] = useState(null);
  let [expectedReturn, setExpectedReturn] = useState(null);
  let [duration, setDuration] = useState(null);

  function currentSavingsHanlder(event) {
    setCurrentSavings(+event.target.value);
  }
  function yearlyContributionHanlder(event) {
    setYearlyContribution(+event.target.value);
  }
  function expectedReturnHanlder(event) {
    setExpectedReturn(+event.target.value / 100);
  }
  function durationHanlder(event) {
    setDuration(+event.target.value);
  }

  const calculateHandler = (userInput) => {
    userInput.preventDefault();

    let yearlyData = [];
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    props.resetYearlyData(yearlyData);
  };

  return (
    <form className="form" onSubmit={calculateHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentSavingsHanlder}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlyContributionHanlder}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expectedReturnHanlder}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={durationHanlder} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestForm;
