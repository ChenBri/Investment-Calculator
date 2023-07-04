const InvestItem = (props) => {
  let data = props.data;
  console.log(data);
  return (
    <tr>
      <td>{data.year}</td>
      <td>{data.savingsEndOfYear}</td>
      <td>{data.yearlyContribution}</td>
      <td>{data.yearlyInterest}</td>
      <td>TOTAL INVESTED CAPITAL</td>
    </tr>
  );
};

export default InvestItem;
