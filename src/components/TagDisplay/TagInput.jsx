const TagInput = (props) => {
  const { name, selectTag, onInputChange } = props;

  const handleChange = (e) => {
    const value = e.target.value;
    onInputChange(name, value);
  };

  return (
    <div>
      <div className="mb-3">
        <label>{name.slice(0, 1).toUpperCase() + name.slice(1)}</label>
        <input
          type={selectTag.toLowerCase()}
          name={name}
          placeholder={name.slice(0, 1).toUpperCase() + name.slice(1)}
          onChange={handleChange}
          className="form-control"
        />
      </div>
    </div>
  );
};

export default TagInput;
