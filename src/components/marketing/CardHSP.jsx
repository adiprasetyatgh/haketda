export default function CardHSP ({
    head, //MADE TO ORDER
    subHead, //Getting The Right Combination for Your Needs
    paragraf,
    classCard, // text-white text-center
    classParagraf, // text-justify
}) {
    return(
        <div className={`${classCard}`}>
            <h1 className="text-3xl font-bold mb-2"> {head} </h1>
            <h3 className="text-xl font-semibold mb-8"> {subHead} </h3>
            <p className={`mb-12 ${classParagraf}`}> {paragraf} </p>
        </div>
    )
}