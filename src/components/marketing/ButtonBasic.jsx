export default function ButtonBasic({
    buttonHref,
    buttonDesc,
    classButton, //w-1/3 mx-auto bg-white text-black text-lg font-semibold rounded-md border-2 border-black
    target, // _blank _self
}) {
    return (
        <div>
            <a 
                className= {`flex justify-center px-5 py-2 ${classButton}`}
                href={buttonHref}
                target={target}
            >
                {buttonDesc}
            </a>
        </div>
    );
}
