const Error = ({ error }) => {
  if (!error) {
    return null;
  }

  return (
    <div className="py-1">
      <p className="text-danger">{error}</p>
    </div>
  );
};

export default Error;
