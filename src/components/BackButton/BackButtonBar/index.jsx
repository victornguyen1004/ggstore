import BackButton from "..";

function BackButtonBar() {
    return ( 
        <div className="relative flex h-[80px] w-full items-center justify-between py-4">
            <BackButton />
            <div className=""></div>
        </div>
     );
}

export default BackButtonBar;