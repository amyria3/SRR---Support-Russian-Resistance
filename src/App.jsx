import React from "react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Splash from "./components/Splash";
import Cards from "./components/Cards";
import Toggle from "./components/Toggle";
import { themeSwitch } from "../darkmode";

const card_data = {
  id: "1ksaksda",
  ngo_name: "First Ngo",
  ngo_description:
    "Lorem Ipsum sastempul i halus dramed-ta po doperil status propeller",
  img_url:
    "https://media.npr.org/assets/img/2022/02/26/gettyimages-1238773862_custom-3837b001d35396e6b816b54d1b06f1b3315cead5-s1600-c85.webp",
  resources: [
    {
      id: "jksjda",
      link_keyword: "webpage",
      link_url: "www.default.ru",
      link_text: "support group on Telegram",
    },
    {
      id: "jksjda",
      link_keyword: "telegram",
      link_url: "www.default.ru",
      link_text: "support group on Telegram",
    },
    {
      id: "jksjda",
      link_keyword: "instagram",
      link_url: "www.default.ru",
      link_text: "support group on Telegram",
    },
    {
      id: "jksjda",
      link_keyword: "facebook",
      link_url: "www.default.ru",
      link_text: "support group on Telegram",
    },
  ],
};

const cards_data = [card_data];

function App() {
  const [darkmode, setDarkmode] = useState(false);

  function toggleDarkmodeIsOnValue(aBoolean, aBooleanSetterFunction) {
    aBoolean && aBooleanSetterFunction(false);
    !aBoolean && aBooleanSetterFunction(true);
  }

  return (
    <div id="wrapper">
      <NavBar
        children={
          <Toggle
            darkModeToggleFunction={()=>{toggleDarkmodeIsOnValue(darkmode, setDarkmode)}}
            darkmode={darkmode}
          />
        }
      />
      <Splash />
      <section id="SearchComponent">
        <Button function={() => {}} label="GO!" />
      </section>
      <Cards cards_data={cards_data} />
    </div>
  );
}

export default App;
