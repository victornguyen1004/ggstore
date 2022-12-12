function ProductCategory() {
    return (
      <div className="my-12 lg:flex lg:justify-evenly grid grid-cols-12 gap-4 md:px-32 text-center text-sm font-semibold text-zinc-400">
        <button className="text-black col-span-4 md:col-span-3">ALL</button>
        <button className="hover:text-black col-span-4 md:col-span-3">MOUSE</button>
        <button className="hover:text-black col-span-4 md:col-span-3">KEYBOARD</button>
        <button className="hover:text-black col-span-4 md:col-span-3">HEADPHONE</button>
        <button className="hover:text-black col-span-4 md:col-span-3">SPEAKER</button>
        <button className="hover:text-black col-span-4 md:col-span-3">MICROPHONE</button>
        <button className="hover:text-black col-span-4 md:col-span-3">WEBCAM</button>
      </div>
    );
}

export default ProductCategory;