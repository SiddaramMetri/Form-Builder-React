const TagTextArea = (props) => {
  const { name, onInputChange } = props;

  const handleChange = (e) => {
    const value = e.target.value;
    onInputChange(name, value);
  };

  return (
    <div>
      <div className="md-4">
        <label>{name.slice(0, 1).toUpperCase() + name.slice(1)}</label>
        <textarea
          className="form-control"
          name={name}
          placeholder={name}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default TagTextArea;
