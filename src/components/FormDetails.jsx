import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FormDetails = (props) => {
  const { handleFormDetails, typesName, title, formDetails } = props;

  const [inputName, setInputName] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [optionInput, setOptionInput] = useState("");

  const handleSubmitData = (e) => {
    e.preventDefault();
    let result;
    let ids = 1;
    let count = 0;
    formDetails.forEach((ele) => {
      if (ele.orderId > 1) {
        count += 1;
      } else {
        count += 1;
      }
    });

    if (selectValue === "Select" || selectValue === "Radio") {
      const newObj = {
        fid: uuidv4(),
        name: inputName,
        selectTag: selectValue,
        option: optionInput,
        orderId: count,
      };
      result = newObj;
    } else {
      const newObj = {
        fid: uuidv4(),
        name: inputName,
        selectTag: selectValue,
        orderId: count,
      };
      result = newObj;
    }

    handleFormDetails([...formDetails, result]);
    setInputName("");
    setSelectValue("");
    setOptionInput("");
  };

  return (
    <div>
      <h3>{title}</h3>
      <hr />
      <form onSubmit={handleSubmitData}>
        <div className="mb-3">
          <label>Name : </label>
          <input
            type="text"
            value={inputName}
            className="form-control"
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Selete Tag</label>
          <select
            className="form-control"
            value={selectValue}
            onChange={(e) => {
              setSelectValue(e.target.value);
            }}
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
          {selectValue === "Select" && (
            <div className="mb-3">
              <div className="mt-3">
                <label>Options : </label>
                <input
                  type="text"
                  value={optionInput}
                  className="form-control"
                  onChange={(e) => {
                    setOptionInput(e.target.value);
                  }}
                />
              </div>
              {optionInput
                .trim()
                .split(",")
                .map((ele, i) => {
                  return <li key={i}>{ele}</li>;
                })}
            </div>
          )}
          {selectValue === "Radio" && (
            <div className="mb-3">
              <div className="mt-3">
                <label>Options : </label>
                <input
                  type="text"
                  value={optionInput}
                  className="form-control"
                  onChange={(e) => {
                    setOptionInput(e.target.value);
                  }}
                />
              </div>
              {optionInput
                .trim()
                .split(",")
                .map((ele, i) => {
                  return <li key={i}>{ele}</li>;
                })}
            </div>
          )}
        </div>
        <input
          type="submit"
          className="btn btn-primary btn-sm"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default FormDetails;
