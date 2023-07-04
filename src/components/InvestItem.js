const InvestItem = (props) => {
  let data = props.data;

  return (
    <tr>
      <td>{data.year}</td>
      <td>{data.savingsEndOfYear}</td>
      <td>{data.yearlyContribution}</td>
      <td>
        {data.savingsEndOfYear -
          props.currentSavings -
          data.yearlyContribution * data.year}
      </td>
      <td>{props.currentSavings + data.yearlyContribution * data.year}</td>
    </tr>
  );
};

export default InvestItem;
