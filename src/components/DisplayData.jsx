const DisplayData = (props) => {
  const { createdFormData, handleCardDeleteDetails } = props;
  return (
    <div>
      <h2> Data</h2>
      <div className="d-flex flex-wrap gap-4">
        {createdFormData.map((ele, i) => {
          return (
            <div key={i}>
              <div className="card">
                <div className="card-body">
                  {Object.keys(ele)
                    .slice(1)
                    .map((Ele, i) => {
                      return (
                        <div key={i}>
                          {Ele.slice(0, 1).toUpperCase() +
                            Ele.slice(1).toLowerCase()}{" "}
                          - {ele[Ele]}
                        </div>
                      );
                    })}
                </div>
                <div>
                  <button
                    className="btn btn-danger btn-sm float-sm-end "
                    onClick={() => {
                      handleCardDeleteDetails(Object.values(ele)[0]);
                    }}
                  >
                    delete
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

export default DisplayData;
