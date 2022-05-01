import React, { useState, useRef } from "react";
import { About, Code, ComponentPreview, Subtitle, Main } from "../../../Template/";
import { Card, Button, Switch, TextInput } from "../../../../UI";

export const CardPage = () => {
  const [shadow, setShadow] = useState(false);
  const [imageHeight, setImageHeight] = useState(180);
  return (
    <div className="documentation">
      <About
        name="Card"
        info="Card with context styles for Image and Divider components"
        importCode={`import { Card } from './UI/';`}
        sourceLink=""
        packageLink=""
      />
      <Main>
        <Subtitle>Usage</Subtitle>
        <ComponentPreview
          component={
            <>
              <div style={{ display: "flex", alignItems: "stretch" }}>
                <div style={{ margin: "0 10px", display: "flex" }}>
                  <Card shadow={shadow}>
                    <Card.Image
                      height={`${imageHeight}px`}
                      src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                      alt=""
                    />
                    <Card.Title badge="46$">Norway Fjord Adventures</Card.Title>
                    <Card.Text>
                      With Fjord Tours you can explore more of the magical fjord landscapes with
                      tours and activities on and around the fjords of Norway
                    </Card.Text>
                    <Card.Footer>
                      <Button variant="light" type="info" height="md">
                        Book classic tour
                      </Button>
                    </Card.Footer>
                  </Card>
                </div>
                <div style={{ margin: "0 10px", display: "flex" }}>
                  <Card shadow={shadow}>
                    <Card.Image
                      height={`${imageHeight}px`}
                      src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                      alt=""
                    />
                    <Card.Title badge="46$">Norway Fjord Adventures</Card.Title>
                    <Card.Text>
                      With Fjord Tours you can explore more of the magical fjord landscapes with
                      tours and activities on and around the fjords of Norway
                    </Card.Text>
                    <Card.Footer>
                      <Button variant="light" type="info">
                        Book classic tour
                      </Button>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
            </>
          }
          settings={
            <>
              <div className="section">
                <Switch value={shadow} setValue={setShadow} />
                <div className="text">Shadow</div>
              </div>
              <div className="section">
                <TextInput label="Image Height" value={imageHeight} setValue={setImageHeight} />
              </div>
            </>
          }
        />
        <Code>
          {`
 import { Card, Button } from './UI/';

 const Demo = () => {
   return (
    <Card shadow={${shadow}}>

    <Card.Image
      height={180}
      src="./image.jpg"
      alt="beautiful image, trust me"
    />
    <Card.Title badge="46$">Norway Fjord Adventures</Card.Title>
    <Card.Text>
      With Fjord Tours you can explore more of the magical fjord landscapes with
      tours and activities on and around the fjords of Norway
    </Card.Text>
    <Card.Footer>
      <Button variant="light" type="info" height="md">
        Book classic tour
      </Button>
    </Card.Footer>
    
    </Card>
  )
 }`}
        </Code>
      </Main>
    </div>
  );
};

export default CardPage;
