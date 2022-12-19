function CustomerContainer(props) {
  return (
    <div className="mb-24 grid grid-cols-12 gap-8">
      {props.children}
    </div>
  );
}

export default CustomerContainer;
