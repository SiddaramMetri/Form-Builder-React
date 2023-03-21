const ModelShow = (props) => {
  const { isShow } = props;
  return <div>{isShow && <h1>Show Modal</h1>}</div>;
};

export default ModelShow;
