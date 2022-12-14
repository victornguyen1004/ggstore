function CustomerContainer(props) {
  return (
    <div className="mb-12 grid grid-cols-12 gap-4 md:gap-y-8">
      {props.children}
    </div>
  );
}

export default CustomerContainer;
