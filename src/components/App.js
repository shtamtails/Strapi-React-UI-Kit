import "../css/main.css";
import React, { useRef, useState } from "react";
import {
  SkeletonContainer,
  Skeleton,
  Divider,
  TextInput,
  Button,
  Kbd,
  Accordion,
  AccordionItem,
  Card,
  Modal,
  PasswordInput,
  Checkbox,
} from "./UI/";

// TODO's
// ! ADD HEIGHT PROP TO INPUTS
// ! ADD LEFT ICON TO INPUTS

const App = () => {
  const [value, setValue] = useState("FS6485SPZLR69KX9VBH6GZSREV4P39");
  const [btn, setBtn] = useState(false);
  const [modal, setModal] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const ref = useRef(null);

  return (
    <>
      {modal && (
        <Modal title="Modal title" modal={modal} setModal={setModal}>
          <form>
            <div style={{ margin: "10px 0" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "100%", marginRight: "5px" }}>
                  <TextInput label="First Name" placeholder="John" height="" />
                </div>
                <div style={{ width: "100%", marginLeft: "5px" }}>
                  <TextInput label="Last Name" placeholder="Doe" height="" />
                </div>
              </div>
            </div>

            <div style={{ margin: "20px 0" }}>
              <TextInput label="Email" required placeholder="johndoe@mail.com" />
            </div>
            <div style={{ margin: "20px 0" }}>
              <PasswordInput label="Password" required placeholder="Password" />
            </div>
            <div style={{ margin: "20px 0" }}>
              <PasswordInput label="Confirm Password" required placeholder="Confirm Password" />
            </div>
            <div style={{ margin: "20px 0" }}>
              <Checkbox
                value={checkbox}
                setValue={setCheckbox}
                label="I agree to sell my privacy"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ width: "60%" }}>I already have an account</div>
              <div style={{ width: "40%", height: "38px" }}>
                <Button submit>Register</Button>
              </div>
            </div>
          </form>
        </Modal>
      )}

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
        <Divider> Kbd </Divider>
        <Kbd>Command</Kbd> + <Kbd>C</Kbd>
        <Divider> Card </Divider>
        <div style={{ display: "flex" }}>
          <div style={{ margin: "0 10px" }}>
            <Card shadow>
              <Card.Image
                height={180}
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt=""
              />
              <Card.Title badge="46$">Norway Fjord Adventures</Card.Title>
              <Card.Text>
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
              </Card.Text>
              <Card.Footer>
                <Button variant="light" type="info">
                  Book classic tour
                </Button>
              </Card.Footer>
            </Card>
          </div>
          <div style={{ margin: "0 10px" }}>
            <Card shadow>
              <Card.Image
                height={180}
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt=""
              />
              <Card.Title badge="46$">Norway Fjord Adventures</Card.Title>
              <Card.Text>
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
              </Card.Text>
              <Card.Footer>
                <Button variant="light" type="info">
                  Book classic tour
                </Button>
              </Card.Footer>
            </Card>
          </div>
          <div style={{ margin: "0 10px" }}>
            <Card shadow>
              <Card.Image
                height={180}
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt=""
              />
              <Card.Title badge="46$">Norway Fjord Adventures</Card.Title>
              <Card.Text>
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
              </Card.Text>
              <Card.Footer>
                <Button variant="light" type="info">
                  Book classic tour
                </Button>
              </Card.Footer>
            </Card>
          </div>
        </div>
        <Divider>Modal</Divider>
        <div style={{ margin: "20px auto", width: "120px" }}>
          <Button
            variant="light"
            type="info"
            modal={modal}
            setModal={setModal}
            onClick={() => {
              setModal(true);
            }}
          >
            Open modal
          </Button>
        </div>
        <Divider></Divider>
      </div>
    </>
  );
};

export default App;
