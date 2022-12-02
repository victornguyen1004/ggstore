import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();
    return (
        <button
        onClick={() => navigate(-1)}
        className="group flex items-center self-end py-2 pl-8"
        >
        <i class="fa-solid fa-arrow-left mr-3 text-xl duration-300  ease-in-out group-hover:-translate-x-4"></i>
        <p className="-translate-y-[1px] font-medium">RETURN</p>
      </button>
    );
}

export default BackButton;