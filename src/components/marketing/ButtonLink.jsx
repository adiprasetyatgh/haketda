import { Link } from "react-router-dom";

export default function ButtonLink({
    buttonHref,
    buttonDesc,
    classButton, //w-40 justify-center bg-white text-black text-lg font-semibold rounded-md border-2 border-black 
    target, // _blank _self
}) {
    return (
        <div>
            <Link 
                className= {`flex px-5 py-2 ${classButton}`}
                to={buttonHref}
                target={target}
            >
                {buttonDesc}
            </Link>
        </div>

    );
}
