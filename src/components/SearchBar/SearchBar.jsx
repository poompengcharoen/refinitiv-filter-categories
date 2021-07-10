import { Input } from "reactstrap";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="py-3">
      <Input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
