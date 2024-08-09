export default function CardSH ({
    subHead,
    head,
}) {
    return(
        <div>
            <h3 className="text-center text-xl font-semibold"> {subHead} </h3>
            <h1 className="text-center text-4xl font-bold pb-2"> {head} </h1>
        </div>
    )
}