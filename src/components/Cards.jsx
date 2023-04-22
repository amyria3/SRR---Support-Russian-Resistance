import Card from "./Card";

const Cards = ({ data, notSearching }) => {
  return (
    <div
      id="cards"
      className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8 xl:auto-cols-auto xl:gap-12 w-full"
    >
      {
        //'IF': default case: cards_data there, user is not typing
        //'ELSE': we now have two options:
        // a. cards_data are missing anf the user is not typing
        // b. cards_data are missing anf the user is typing
      }
      {data ? (
        data !== [] &&
        data.map((element) => {
          return <Card {...element} />;
        })
      ) : !data && notSearching ? (
        <div className="w-full h-full flex justify-center items-center">
          Maybe there is a server problem, or maybe data is not loaded yet.
        </div>
      ) : (
        data == [] &&
        !notSearching && (
          <div className="w-full h-full flex justify-center items-center">
            Please try another search term.
          </div>
        )
      )}
    </div>
  );
};

export default Cards;
