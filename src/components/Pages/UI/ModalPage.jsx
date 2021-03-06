import { Button } from "../../UI";
import { About, Code, ComponentPreview, Subtitle, Main } from "../Template/";

export const ModalPage = ({ modal, setModal }) => {
  return (
    <>
      <div className="documentation">
        <About
          name="Modal"
          info="Display content in overlaying window"
          importCode={`import { Modal } from './UI/';`}
          sourceLink=""
          packageLink=""
        />
        <Main>
          <Subtitle>Usage</Subtitle>
          <ComponentPreview
            component={
              <Button
                color="success"
                variant="light"
                onClick={() => {
                  setModal(true);
                }}
              >
                Open Modal
              </Button>
            }
          />

          <Code>
            {`
    import { Modal } from './UI';
    import { useState } from 'react';

    const Demo = () => {
        const [modal, setModal] = useState(false);
        const openModal = () => {
            setModal(true);
        }
        return (
            <>
            // Put before any content
            {modal && (
                <Modal width="500px" title="Title" setModal={setModal}>
                  // Modal content
                </Modal>
              )}

            <Button onClick={openModal}>
                Open Modal
            </Button>
            </>
        )
    }
`}
          </Code>
        </Main>
      </div>
    </>
  );
};

export default ModalPage;
