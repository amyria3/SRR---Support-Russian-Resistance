import Card from "./Card";

const Cards = ({ data, filteredData, searching }) => {
  console.log(JSON.stringify(data))
  return (
    <div
      key={"allCards"}
      id={"allCards"}
      className="grid grid-cols-3 gap-8 xl:gap-12 w-full"
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
