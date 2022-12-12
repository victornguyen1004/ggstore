function ProductContainer(props) {
  return (
    <div className="pb-12 grid grid-cols-12 gap-2 md:mx-12 md:gap-8">
      {props.children}
    </div>
  );
}

export default ProductContainer;
