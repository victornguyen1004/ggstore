function CustomerContainer(props) {
  return (
    <div className="mb-12 grid grid-cols-12 gap-4">
      {props.children}
    </div>
  );
}

export default CustomerContainer;
