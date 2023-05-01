import renderCards from "./renderCards.jsx";

const CardsWrapper = ({ data, colNumber }) => {
  return (
    <div
      key="cardsWrapper"
      id="cardsWrapper"
      className="w-full"
    >
      {renderCards(data, colNumber)}
    </div>
  );
};

export default CardsWrapper;