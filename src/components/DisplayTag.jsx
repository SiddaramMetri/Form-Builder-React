import "./DisplayTag.css";

const DisplayTag = (props) => {
  const {
    formDetails,
    handleClickEdit,
    handleClickAlldelete,
    handleClickDeleteTag,
    dragDrop,
  } = props;

  return (
    <div>
      <div className="d-flex flex-row justify-content-between">
        <div style={{ fontSize: "20px", fontWeight: "bolder" }}>
          Display Tag
        </div>
        <div style={{ float: "right" }}>
          {formDetails.length > 0 && (
            <button
              onClick={handleClickAlldelete}
              className="btn btn-danger btn-sm "
            >
              Reset
            </button>
          )}
        </div>
      </div>

      <br />
      <div className="container">
        {formDetails.map((ele, i) => {
          return (
            <div
              onDragStart={(e) => dragDrop(e, i)}
              key={i}
              className="cardDisplay shadow rounded card mb-2 border-primary "
              draggable
            >
              <div className="card-body">
                {ele.name.slice(0, 1).toUpperCase() + ele.name.slice(1)}
                <div className="float-end ">
                  <button
                    className="btn btn-success btn-sm "
                    style={{ marginRight: "10px" }}
                    onClick={() => {
                      handleClickEdit(ele.fid);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      handleClickDeleteTag(ele.fid);
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayTag;
