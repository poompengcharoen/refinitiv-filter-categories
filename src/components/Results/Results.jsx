import { Table } from "reactstrap";

const Results = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Item</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i}>
            <td>{item}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Results;
