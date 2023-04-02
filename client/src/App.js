import logo from "./logo.svg";
import "./App.css";
import {
  Presentation,
  Slide,
  MasterSlide,
  Image,
  Text,
  Shape,
  Line,
  normalizeJsx,
} from "react-pptx";
import * as ReactPPTX from "react-pptx";
import Preview from "react-pptx/preview";
import { transform } from "buble";
import * as React from "react";

const primitives = {
  Presentation,
  Slide,
  MasterSlide,
  Image,
  Text,
  Shape,
  Line,
};

const transpile = (code, callback, onError) => {
  try {
    const result = transform(code, {
      objectAssign: "Object.assign",
      transforms: {
        dangerousForOf: true,
        dangerousTaggedTemplateString: true,
      },
    });

    const res = new Function(
      "React",
      "ReactPPTX",
      ...Object.keys(primitives),
      `return ReactPPTX.render(${result.code});`
    );

    //print if works
    console.log("result.code: ", result.code);

    res(
      React,
      { render: (doc) => callback(doc) },
      ...Object.values(primitives)
    );
  } catch (e) {
    console.log(e);
  }
};

function App() {
  const [doc, setDoc] = React.useState(null);
  React.useEffect(() => {
    const run = () => {
      console.log("running...");
      const code = `<Presentation>
<Slide>
  <Text
    style={{
      x: 3,
      y: 1,
      w: 3,
      h: 0.5,
      fontSize: 32,
    }}
  >
    Hello world!
  </Text>
</Slide>
</Presentation>`;
      transpile(
        code,
        function (doc) {
          console.log("parsed presentation node: ");
          console.log(doc);
          setDoc(doc);
        },
        function (err) {
          console.log(err);
        }
      );
    };
    run();
  }, []);
  return (
    <div className="App">
      <Preview
        slideStyle={{ border: "1px solid black" }}
        drawBoundingBoxes={false}
        children={doc}
      />
    </div>
  );
}

export default App;
