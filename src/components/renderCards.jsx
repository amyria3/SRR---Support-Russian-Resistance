import Card from "./Card.jsx";
function renderCards(data) {
  const cards = data.map((element, index) => {
    return <Card key={index} {...element} />;
  });

  return (
    <div
      key="cardsWrapper"
      id="cardsWrapper"
      className="grid grid-cols-3 gap-8"
    >
      <div className="flex flex-col justify-start gap-8">
        {cards.filter((_, i) => i % 3 === 0)}
      </div>
      <div className="flex flex-col justify-start gap-8">
        {cards.filter((_, i) => i % 3 === 1)}
      </div>
      <div className="flex flex-col justify-start gap-8">
        {cards.filter((_, i) => i % 3 === 2)}
      </div>
    </div>
  );
}

export default renderCards
