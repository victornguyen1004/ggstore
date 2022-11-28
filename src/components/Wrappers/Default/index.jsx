function DefaultWrapper(props) {
    return ( <div className="px-28 relative">
        {props.children}
    </div> );
}

export default DefaultWrapper;