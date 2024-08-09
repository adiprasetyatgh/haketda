export default function CardFlexGrid({
  cards, // map
  classFlex, // justify-evenly text-center
  classLi, // w-4/5 lg:w-1/4
  classImg, // rounded-full aspect-square object-cover
  classLine, // w-32 border-t-2 border-gray-200 group-hover:border-red-700 mt-2 mb-4 mx-auto

}) {

    return (
      <div className="container mx-auto px-10">  
        <ul className={`flex flex-wrap ${classFlex}`}>
          {cards.map((card, index) => (
            <li
              key={index}
              className={`${classLi}`}
            >
              <img className={`${classImg}`} src={card.img} alt={card.head}/>
              <div className={`${classLine}`}/>
              <h3 className="font-semibold text-xl">{card.head}</h3>
              <p>{card.paragraf}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

//   const cards=[
//     {
//         img:      'https://images.unsplash.com/photo-1606300780947-39da25191135?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         head:     'WASHING SYSTEM ',
//         paragraf: 'Lorem ipsum dolor Lorem ipsum dolor ',
//     },
//     {
//         img:      'https://images.unsplash.com/photo-1606300780947-39da25191135?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         head:     'DRIVING SYSTEM ',
//         paragraf: 'Lorem ipsum dolor adfs asfasd f asdfdsafasdf asdf asdf asd f ',
//     },
// ];