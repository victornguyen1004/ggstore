function ProductCategory() {
    return (
      <div className="my-12 flex justify-evenly px-32 text-center text-sm font-semibold text-zinc-400">
        <button className="text-black">ALL</button>
        <button className="hover:text-black">MOUSE</button>
        <button className="hover:text-black">KEYBOARD</button>
        <button className="hover:text-black">HEADPHONE</button>
        <button className="hover:text-black">SPEAKER</button>
        <button className="hover:text-black">MICROPHONE</button>
        <button className="hover:text-black">WEBCAM</button>
      </div>
    );
}

export default ProductCategory;