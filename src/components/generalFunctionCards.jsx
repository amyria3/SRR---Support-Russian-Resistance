import Card from "./Card";

function Cards () {
  function renderIntoCards(data, colNo) {
    data.map((element, index) => {
      if (index % 3 === 0 && colNo <= 3) {
        document.getElementById(`colNo${colNo}`).appendChild(
          <Card {...element} />
        );
      }
      if (index % 3 === 1 && colNo <= 2 ) {
        document.getElementById(`colNo${colNo}`).appendChild(
          <Card {...element} />
        );
      }
      if (index % 3 === 2 && colNo <= 1) {
        document.getElementById(`colNo${colNo}`).appendChild(
          <Card {...element} />
        );
      }
    });

  {
    searching &&
      filteredData.map((element) => {
        return <Card {...element} />;
      });
  }
  {
    !searching &&
      data.map((element) => {
        return <Card {...element} />;
      });
  }
}
}

const CardsWrapper = ({ data, filteredData, searching }) => {
  <div key={"allCards"} id={"allCards"} className="grid grid-cols-3 gap-8">
    <div id="colNo1" className="flex flex-col gap-8">
      {/* content for first column */}
    </div>
    <div id="colNo2" className="flex flex-col gap-8">
      {/* content for second column */}
    </div>
    <div id="colNo3" className="flex flex-col gap-8">
      {/* content for third column */}
    </div>
  </div>;
};

export default CardsWrapper
