import TagInput from "./TagDisplay/TagInput";
import TagRadio from "./TagDisplay/TagRadio";
import TagSelect from "./TagDisplay/TagSelect";
import TagTextArea from "./TagDisplay/TagTextArea";

const TagDisplay = (props) => {
  const { formDetails, handleInputChange, handleFormCreationSubmit } = props;
  /*
  const handleFormCreationSubmit = (e) => {
    e.preventDefault();
    console.log("@inputValue", inputValue);
  };
*/
  return (
    <div>
      <h3>Form Creator</h3>
      <hr />
      <form onSubmit={handleFormCreationSubmit}>
        {formDetails.length > 0 &&
          formDetails.map((ele, i) => {
            if (ele.selectTag === "Select") {
              return (
                <TagSelect key={i} {...ele} onInputChange={handleInputChange} />
              );
            } else if (ele.selectTag === "Radio") {
              return (
                <TagRadio key={i} {...ele} onInputChange={handleInputChange} />
              );
            } else if (ele.selectTag === "Textarea") {
              return (
                <TagTextArea
                  key={i}
                  {...ele}
                  onInputChange={handleInputChange}
                />
              );
            } else {
              return (
                <TagInput key={i} {...ele} onInputChange={handleInputChange} />
              );
            }
          })}
        {formDetails.length > 0 && (
          <input
            type="submit"
            value="Submit"
            className="btn btn-success mt-2"
          />
        )}
      </form>
    </div>
  );
};

export default TagDisplay;
