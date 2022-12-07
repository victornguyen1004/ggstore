function DefaultWrapper(props) {
    return ( <div className="lg:px-28 px-12 relative">
        {props.children}
    </div> );
}

export default DefaultWrapper;