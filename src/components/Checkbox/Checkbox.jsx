import { Input } from "reactstrap";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="py-1">
      <label>
        <Input type="checkbox" checked={checked} onChange={onChange} />{" "}
        <small>{label}</small>
      </label>
    </div>
  );
};

export default Checkbox;
