import Card from "./Card";

const Cards = (Props) => {
  return (
    <div className="grid ssm:grid-cols-1 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4 gap-6 w-full">
      {Props.cards_data? Props.cards_data.map((element) => {
        return <Card {...element} />
      }):console.log("No Data Found")}
    </div>
  )
}

export default Cards