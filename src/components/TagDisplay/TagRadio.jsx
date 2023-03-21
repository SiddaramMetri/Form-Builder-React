const TagRadio = (props) => {
  const { name, option, onInputChange } = props;

  const handleChange = (e) => {
    const value = e.target.value;
    onInputChange(name, value);
  };

  return (
    <div>
      <div className="form-group">
        <label>{name.slice(0, 1).toUpperCase() + name.slice(1)}</label>
        {option.split(",").map((option, i) => (
          <div key={i} className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name={name}
              value={option}
              onChange={handleChange}
            />
            <label className="form-check-label">
              {option.slice(0, 1).toUpperCase() + option.slice(1)}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagRadio;
