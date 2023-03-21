import { useEffect, useState } from "react";
import "./App.css";
import DisplayData from "./components/DisplayData";
import DisplayTag from "./components/DisplayTag";
import FormDetails from "./components/FormDetails";
import TagDisplay from "./components/TagDisplay";
import UpdateFormDetails from "./components/UpdateFormDetails";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [formDetails, setFormDetails] = useState(
    JSON.parse(localStorage.getItem("formDetails")) || []
  );
  const [inputValue, setInputValues] = useState(
    JSON.parse(localStorage.getItem("inputValue")) || []
  );
  const [createdFormData, setCreatedFormData] = useState(
    JSON.parse(localStorage.getItem("createdFormData")) || []
  );

  const typesName = [
    "text",
    "password",
    "select",
    "radio",
    "number",
    "textarea",
    "email",
    "range",
  ];
  // "checkbox",
  const [isEdit, setEdit] = useState(false);
  const [editable, setEditable] = useState({});

  const handleInputChange = (name, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      id: uuidv4(),
      [name]: value,
    }));
  };

  useEffect(() => {
    localStorage.setItem("formDetails", JSON.stringify(formDetails));
  }, [formDetails]);

  useEffect(() => {
    localStorage.setItem("inputValue", JSON.stringify(inputValue));
  }, [inputValue]);

  useEffect(() => {
    localStorage.setItem("createdFormData", JSON.stringify(createdFormData));
  }, [createdFormData]);

  const handleFormDetails = (obj) => {
    setFormDetails(obj);
  };

  const handleClickEdit = (id) => {
    alert(`Element Id -- ${id}`);
    setEdit(true);
    const result = formDetails.find((Ele) => {
      return Ele.fid === id;
    });
    setEditable(result);
  };

  const handleFormCreationSubmit = (e) => {
    e.preventDefault();
    // console.log("@inputValue Data", inputValue);
    setCreatedFormData([...createdFormData, inputValue]);
    setInputValues([]);
  };

  const handleClickDeleteTag = (id) => {
    alert(`Element Id Delete-- ${id}`);
    const deleteTag = formDetails.filter((Ele) => {
      return Ele.fid !== id;
    });
    setFormDetails(deleteTag);
  };

  const handleClickAlldelete = () => {
    const choice = window.confirm("Are you sure you want to delete All Tag?");
    if (choice) {
      setFormDetails([]);
    }
  };

  const handleUpdatedData = (e) => {
    e.preventDefault();
    const ids = editable.fid;
    const result1 = formDetails.map((ele) => {
      if (ele.fid === ids) {
        return { ...ele };
      } else {
        return { ...ele };
      }
    });
    console.log("@Resul1", result1);
    alert("Updated Sucessfully");
    setFormDetails(result1);
    setEdit(false);
  };

  const handleCardDeleteDetails = (id) => {
    const choice = window.confirm(
      `Are you sure you want to delete this  \nid - ${id}`
    );
    if (choice) {
      const data = createdFormData.filter((ele) => {
        return ele.id !== id;
      });
      setCreatedFormData(data);
    } else {
      alert(`your data is safe`);
    }
  };

  const dragDrop = (e, id) => {
    console.log(e.target.innerHTML);
    console.log(id - 1);
  };

  return (
    <div className="container ">
      <div className="row mt-5">
        <div className="mb-2 text-center">
          <h3>Form Builder</h3>
        </div>
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              {isEdit ? (
                <UpdateFormDetails
                  title="Update Input Creator"
                  data={editable}
                  typesName={typesName}
                  handleUpdatedData={handleUpdatedData}
                />
              ) : (
                <FormDetails
                  title="Input Creator"
                  formDetails={formDetails}
                  typesName={typesName}
                  handleFormDetails={handleFormDetails}
                />
              )}
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body">
                  <TagDisplay
                    handleFormCreationSubmit={handleFormCreationSubmit}
                    formDetails={formDetails}
                    handleInputChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body">
                  <DisplayTag
                    dragDrop={dragDrop}
                    handleClickAlldelete={handleClickAlldelete}
                    handleClickEdit={handleClickEdit}
                    formDetails={formDetails}
                    handleClickDeleteTag={handleClickDeleteTag}
                    handleFormDetails={handleFormDetails}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 mt-5">
          <DisplayData
            createdFormData={createdFormData}
            handleCardDeleteDetails={handleCardDeleteDetails}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
