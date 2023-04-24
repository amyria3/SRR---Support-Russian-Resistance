import Card from "./Card";

const Cards = ({ data, filteredData, searching }) => {
  return (
    <div
      id="cards"
      className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8 xl:auto-cols-auto xl:gap-12 w-full"
    >
      {/* {console.log("IMPORTANT TEST 1 " + JSON.stringify(searching))}
      {console.log("IMPORTANT TEST 2 " + JSON.stringify(filteredData))} */}

      {searching&&filteredData.map((element) => {
        return <Card {...element} />;
      })}
      {!searching&&data.map((element) => {
        return <Card {...element} />;
      })}
    </div>
  );
};

export default Cards;
