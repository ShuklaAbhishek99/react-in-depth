import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}

// this element we created and it won't work directly in react because its not in right syntax
// when we create the object in correct syntax it will start to work
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to vist google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = 'coffee and react'

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById("root")).render(
  reactElement
  // anotherElement
);
