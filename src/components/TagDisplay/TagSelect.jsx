const TagSelect = (props) => {
  const { name, option, onInputChange } = props;

  const handleChange = (e) => {
    const value = e.target.value;
    onInputChange(name, value);
  };

  return (
    <div className="mb-3">
      <label>{name.slice(0, 1).toUpperCase() + name.slice(1)}</label>
      <select className="form-control" name={name} onChange={handleChange}>
        <option value="">-- Select --</option>
        {option.split(",").map((Ele, i) => {
          return <option key={i}>{Ele}</option>;
        })}
      </select>
    </div>
  );
};

export default TagSelect;
