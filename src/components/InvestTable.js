import InvestItem from "./InvestItem";

const InvestTable = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.yearlyData.map((year) => (
          <InvestItem
            key={year.year}
            data={year}
            currentSavings={props.currentSavings}
          />
        ))}
      </tbody>
    </table>
  );
};

export default InvestTable;
