import renderCards from "./renderCards.jsx";

const CardsWrapper = ({ data }) => {
  return (
    <div
      key="cardsWrapper"
      id="cardsWrapper"
      className="w-full"
    >
      {renderCards(data)}
    </div>
  );
};

export default CardsWrapper;