function CustomerContainer(props) {
  return (
    <div className="mb-12 grid grid-cols-12 grid-rows-2 gap-x-12">
      {props.children}
    </div>
  );
}

export default CustomerContainer;
