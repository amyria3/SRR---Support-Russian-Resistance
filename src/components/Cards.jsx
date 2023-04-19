import Card from "./Card";

const Cards = ({ cards_data }) => {
  return (
    <div
      id="cards"
      className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8 xl:auto-cols-auto xl:gap-12 w-full"
    >
      {cards_data
        ? cards_data.map((element) => {
            return <Card {...element} />;
          })
        : console.log("No Data Found to feed Cards.jsx")}
    </div>
  );
};

export default Cards;
