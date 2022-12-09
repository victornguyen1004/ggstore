function ProductContainer(props) {
  return (
    <div className="m-12 grid grid-cols-12 gap-8">
      {props.children}
    </div>
  );
}

export default ProductContainer;
