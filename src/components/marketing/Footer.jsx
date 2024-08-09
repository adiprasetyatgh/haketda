export default function Footer ({
    classFooter,    // text-black 
    companyName,    // PT Lorem
    companyAddress, // Jl menuju hatinya
    companyAddress1,// Buntu, Indonesia
    companyAddress2,// Buntu, Indonesia
    titleGrid1,         // Contact Us
    contacts,           // cards contacts
    titleGrid2,         // Social Media
    sosmeds,            // cards sosmeds

}){
    return(
        <div className={`container mx-auto px-10 py-10 grid grid-cols-1 lg:grid-cols-4 gap-5 ${classFooter}`}>
            {/* Grid 1 */}
            <div className="lg:col-span-2 p-4 text-base border border-blue-900 rounded-xl">
                <h2 className="text-lg font-semibold mb-2"> {companyName} </h2>
                <p> {companyAddress} </p>
                <p> {companyAddress1} </p>
                <p> {companyAddress2} </p>
            </div>

            {/* Grid 2 */}
            <div className="p-4 border border-blue-900 rounded-xl">
                <h2 className="text-lg font-semibold mb-2"> {titleGrid1} </h2>
                <ul>
                {contacts.map((contact, index) => (
                   <div href={contact.href} key={index} className="flex mb-2 items-center hover:font-semibold">
                    <img className="size-8 me-2" src={contact.img} alt={contact.text} />
                    <p> {contact.text} </p>
                   </div> 
                ))}
                </ul>
                
            </div>

            {/* Grid 3 */}
            <div className="p-4 border border-blue-900 rounded-xl">
                <h2 className="text-lg font-semibold mb-2 "> {titleGrid2} </h2>
                <ul>
                    {sosmeds.map((sosmed, index) => (
                    <a target="_blank" href={sosmed.href} key={index} className="flex items-center mb-2 hover:font-semibold">
                        <img className="size-8 me-2" src={sosmed.img} alt={sosmed.text} />
                        <p> {sosmed.text} </p>
                    </a> 
                    ))}
                </ul>
            </div>

        </div>
    )
}

// const contacts = [
//     {
//         href:   'google.com',
//         img:    'https://img.icons8.com/?size=100&id=43297&format=png&color=000000',
//         text:   '0000 0000 0000',
//     },
//     {
//         href:   'google.com',
//         img:    'https://img.icons8.com/?size=100&id=13922&format=png&color=000000',
//         text:   '0000 0000 0000',
//     },
// ];

// const sosmeds = [
//     {
//         href:   'google.com',
//         img:    'https://img.icons8.com/?size=100&id=lTkH3THtr7SL&format=png&color=000000',
//         text:   'tiktok',
//     },
//     {
//         href:   'google.com',
//         img:    'https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000',
//         text:   'instagram',
//     },
//     {
//         href:   'google.com',
//         img:    'https://img.icons8.com/?size=100&id=13912&format=png&color=000000',
//         text:   'facebook',
//     },
// ]