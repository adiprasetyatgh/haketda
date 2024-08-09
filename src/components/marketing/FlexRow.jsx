export default function FlexRow () {
    return(
        <div className="flex flex-row gap-8 justify-content-center mx-auto">
            <div className="basis-1/4 bg-red-100 p-10">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, vitae.</p>
            </div>
            <div className="basis-3/4 bg-blue-100 p-10">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut.</p>
            </div>
        </div>
    )
}