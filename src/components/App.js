import "../css/main.css";
import React, { useRef, useState } from "react";
import {
  SkeletonContainer,
  Skeleton,
  Divider,
  TextInput,
  Button,
  Accordion,
  AccordionItem,
} from "./UI/";

// TODO's

const App = () => {
  const [value, setValue] = useState("FS6485SPZLR69KX9VBH6GZSREV4P39");
  const [btn, setBtn] = useState(false);
  const ref = useRef(null);

  return (
    <>
      <div style={{ width: "1100px", margin: "0 auto" }}>
        <Divider>Skeleton</Divider>
        <SkeletonContainer>
          <Skeleton circle width="50px" height="50px" style={{ marginTop: "50px" }} />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </SkeletonContainer>
        <Divider>Text Input</Divider>
        <div className="div" style={{ display: "flex" }}>
          <div className="div" style={{ width: "100%" }}>
            <TextInput copy={false} value={value} setValue={setValue} />
          </div>

          <div className="div" style={{ display: "flex", width: "15%" }}>
            <Button
              value={btn}
              setValue={setBtn}
              onClick={() => {
                console.log(ref.current.value);
              }}
            >
              Click
            </Button>
          </div>
        </div>
        <Divider> Accordion </Divider>
        <Accordion>
          <AccordionItem title="Aperiam porro dolorum dignissimos. Saepe, alias nihil.">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minima quas cum est.
            Optio, earum possimus! Veritatis voluptatibus suscipit iusto! Ipsa et eligendi dolorum
            deleniti itaque quae officiis ut neque!
          </AccordionItem>
          <AccordionItem title="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, voluptates sint
            obcaecati adipisci corporis! Quas, voluptates. Quidem nihil ab, obcaecati, sequi
            consequatur culpa blanditiis molestias reprehenderit nam veniam fuga!
          </AccordionItem>
          <AccordionItem title="Repellendus dolor repudiandae officiis sequi quia!">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et voluptate perspiciatis
            voluptatum molestiae natus possimus magnam dolores cumque praesentium fuga ad,
            architecto nisi id ea ipsum dolorum delectus temporibus similique.
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default App;
