import { useState } from "react";

const UpdateFormDetails = (props) => {
  const { data, title, typesName, handleUpdatedData } = props;

  // console.log("@data", data);
  const [inputName, setInputName] = useState("");
  const [optionInput, setOptionInput] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    console.log("value", value, " ", "name", name);
    if (name === "name") {
      setInputName((data.name = value));
    } else if (name === "selectTag") {
      setSelectValue((data.selectTag = value));
    } else if (name === "option") {
      setOptionInput((data.option = value));
    }
  };

  return (
    <div>
      <h3>{title}</h3>
      <hr />
      <form onSubmit={handleUpdatedData}>
        <div>
          <div className="mb-3">
            <label>Name : </label>
            <input
              type="text"
              value={data.name}
              name="name"
              className="form-control"
              onChange={handleChangeInput}
            />
          </div>
          <div className="mb-3">
            <label>Selete Tag</label>
            <select
              name="selectTag"
              className="form-control"
              value={data.selectTag}
              onChange={handleChangeInput}
            >
              <option value="">Select Tag</option>
              {typesName.map((tag, i) => {
                return (
                  <option key={i}>
                    {tag.slice(0, 1).toUpperCase() + tag.slice(1)}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            {(data.selectTag === "Select" || data.selectTag === "Radio") && (
              <div className="mt-3">
                <label>Options : </label>
                <input
                  type="text"
                  value={data.option}
                  name="option"
                  className="form-control"
                  onChange={handleChangeInput}
                />
              </div>
            )}
          </div>
        </div>

        <input type="submit" className="btn btn-info btn-sm" value="Update" />
      </form>
    </div>
  );
};

export default UpdateFormDetails;
