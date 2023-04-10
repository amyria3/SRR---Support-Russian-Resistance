import { useEffect } from "react";

function scrollFunction(sectionId, wrapperId) {
  const wrapper = document.getElementById("wrapper");
  wrapper === null && console.log("wrapper still not mounted");
  wrapper !== null &&
    (() => {
      const children = document.getElementById("wrapper").children;
      const section = children.find(getElementById(sectionId));
      console.log(section);

      const firstChild = children.item(0);
      console.log(firstChild); // 👉️ div.child1

      const height = section.offsetHeight;
      console.log(height);

      window.scrollTo({
        top: height,
        behavior: "smooth", // scroll smoothly to the section
      });
    });
}

export const FunctionComponent = ({ sectionId, wrapper }) => {


  useEffect(()=>{
    console.log("hheeey");
    scrollFunction(sectionId, "wrapper");
  })
  return <>{}</>;
};
