import Card from "./Card";

const Cards = (Props) => {
  return (
    <div className="grid grid-cols-3 gap-6 w-full">
      {Props.cards_data? Props.cards_data.map((element) => {
        return <Card {...element} />;
      }):console.log("No Data Found")}
    </div>
  );
}

export default Cards