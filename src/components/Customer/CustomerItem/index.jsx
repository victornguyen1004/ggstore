function CustomerItem(props) {
  return (
    <a
      href={props.href}
      className="col-span-12 flex items-center justify-center md:col-span-4 lg:col-span-3"
    >
      <img src={props.image} alt="" className="h-[36px] object-contain" />
    </a>
  );
}

export default CustomerItem;
