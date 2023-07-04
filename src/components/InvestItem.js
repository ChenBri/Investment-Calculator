const InvestItem = (props) => {
  let data = props.data;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <tr>
      <td>{data.year}</td>
      <td>{formatter.format(data.savingsEndOfYear)}</td>
      <td>{data.yearlyContribution}</td>
      <td>
        {formatter.format(
          data.savingsEndOfYear -
            props.currentSavings -
            data.yearlyContribution * data.year,
        )}
      </td>
      <td>
        {formatter.format(
          props.currentSavings + data.yearlyContribution * data.year,
        )}
      </td>
    </tr>
  );
};

export default InvestItem;
