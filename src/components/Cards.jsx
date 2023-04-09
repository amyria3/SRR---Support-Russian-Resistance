import Card from "./Card";

const Cards = ({cards_data}) => {
  return (
    <div id="cards" className="grid ssm:grid-cols-1 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4 gap-6 w-full">
      {cards_data? cards_data.map((element) => {
        return <Card {...element} />
      }):console.log("No Data Found to feed Cards.jsx")}
    </div>
  )
}

export default Cards