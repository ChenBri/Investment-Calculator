import InvestItem from "./InvestItem";

const InvestTable = () => {
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
        <InvestItem />
        <InvestItem />
        <InvestItem />
      </tbody>
    </table>
  );
};

export default InvestTable;
