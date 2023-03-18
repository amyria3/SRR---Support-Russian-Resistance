import React from "react";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Splash from "./components/Splash";
import Cards from "./components/Cards";

const card_data = {
  id: "1ksaksda",
  ngo_name: "First Ngo",
  ngo_description: "Lorem Ipsum sastempul i halus dramed-ta po",
  img_url:
    "https://media.npr.org/assets/img/2022/02/26/gettyimages-1238773862_custom-3837b001d35396e6b816b54d1b06f1b3315cead5-s1600-c85.webp",
  resources: [{id: "jksjda", Telegram: "www.default.ru"}]
};

const cards_data = [card_data, card_data, card_data, card_data];

function App() {
  return (
    <div id="wrapper">
      <NavBar />
      <Splash />
      <section id="SearchComponent">
        <Button function={() => {}} label="GO!" />
      </section>
      <Cards cards_data={cards_data}/>
    </div>
  );
}

export default App;
