//JSX is a syntax extension to JavaScript.
//We are allowed to store HTML Code in bindings...
//...and, therefore, combine HTML and JS easier in Documents.

//This is the basic structure: a function that returns an HTML-"object".
//This HTML Object will be CREATED whenever the <SomeJSX /> is RENDERED.
//Rendering a react-Component is very similar to

function SomeJSX() {
  return (<h1>Hallo, I am a JSX Text</h1>)
}

function Basics() {
  return (<SomeJSX />)
}

//WHY TO DO THIS?
//to reuse HTML Code with different values easier.
function AdaptableCode() {
  const replacableText = "Hello, I am Your pretty Function Component!";
  return <h1>{replacableText}</h1>;
}

//We render... and we could noe replace replacableText by replacebleText2
//...but isn't it pretty circumstantial, too?
//Yes, it is AND this is why we have props!
//They are nothing but a way to define how to define and pass arguments to the Component

//remember, that the consts and functions we are defining here are equivalent to an html object:
//Think of a 'props' like an OBJECT with an unlimited amount of keys. Later, when You give this keys values, they will be converted into tags in the HTML Objects react is going to render.

function Test1 (props) {
  return (
    <div>
      <h2>This is test2 function, and this is our prop: </h2>
      <p>{props.text}</p>
    </div>
  );
};

//There are different ways to pass props in a function, yet THIS is not going to work:
// function Test2 (text) {
//   return (
//     <div>
//       <h2>This is test2 function, and this is our prop: </h2>
//       <p>{text}</p>
//     </div>
//   );
// };

//You can, of course, use all the common js syntax:
const Test10 = (props) => {
  return (
    <div>
      <h2>test2</h2>
      <p>{props.text}</p>
    </div>
  );
}


//HOW TO USE in other Documents:
//need to Export in this one, and import in the other.
//One way to export Components:
export { SomeJSX, Basics, AdaptableCode, Test1, /*Test2,*/ Test10 }

//exporting or importing incomplete non-existing components and, dublicate imports etx. will cause white screen