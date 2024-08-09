export default function CardSP ({
    subHead,
    paragraf,
}) {
    return(
        <div>
            <h3 className="text-xl font-semibold text-center mt-12 mb-4"> {subHead} </h3>
            <p className="text-center"> {paragraf} </p>
        </div>
    )
}
