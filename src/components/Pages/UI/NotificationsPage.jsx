import { useState } from "react";
import { About, Code, ComponentPreview, Subtitle, Main } from "../Template/";
import { Button, Notifications } from "../../UI";
import { useUniqueId } from "../../Hooks";
import { AiFillInfoCircle, AiFillWarning, AiFillCheckCircle } from "react-icons/ai";
import { addToObject, updateObject } from "../../UI/DataDisplay/Notification/Utils";
export const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [keys, setKeys] = useState(Object.keys(notifications));
  const newNotification = addToObject(notifications, setNotifications, setKeys);
  const updateNotification = updateObject(notifications, setNotifications, setKeys);
  const id = useUniqueId();

  return (
    <>
      <Notifications
        notifications={notifications}
        setNotifications={setNotifications}
        keys={keys}
        setKeys={setKeys}
      />
      <div className="documentation">
        <About
          name="Notification"
          info="Show dynamic notifications and alerts to user"
          importCode={`import { Notification } from './UI/'`}
          sourceLink=""
          packageLink=""
        />
        <Main>
          <Subtitle>Usage</Subtitle>
          <ComponentPreview
            width={"100%"}
            component={
              <>
                <div className="notification-component-preview">
                  <div className="notification-component-preview-buttons">
                    <Button
                      onClick={() => {
                        newNotification(id, {
                          title: "Danger notification",
                          body: "blah blah blah blah blah blah blah blah blah blah ",
                          icon: <AiFillWarning />,
                          type: "danger",
                        });
                      }}
                      variant="light"
                      color="danger"
                    >
                      Danger notification
                    </Button>
                  </div>
                  <div className="notification-component-preview-buttons">
                    <Button
                      onClick={() => {
                        newNotification(id, {
                          title: "Success notification",
                          body: "blah blah blah blah blah blah blah blah blah blah ",
                          icon: <AiFillCheckCircle />,
                          type: "success",
                        });
                      }}
                      variant="light"
                      color="success"
                    >
                      Success notification
                    </Button>
                  </div>
                  <div className="notification-component-preview-buttons">
                    <Button
                      onClick={() => {
                        newNotification(id, {
                          title: "Default notification",
                          body: "blah blah blah blah blah blah blah blah blah blah ",
                          icon: <AiFillInfoCircle />,
                          type: "info",
                        });
                      }}
                      variant="light"
                      color="info"
                    >
                      Default notification
                    </Button>
                  </div>
                  <div className="notification-component-preview-buttons">
                    <Button
                      onClick={() => {
                        newNotification(id, {
                          title: "Loading notification",
                          body: "blah blah blah blah blah blah blah blah blah blah ",
                          type: "loading",
                          autoclose: false,
                        });
                        setTimeout(() => {
                          updateNotification(id, {
                            title: "Notification succesfully loaded!",
                            body: "blah blah blah blah blah blah blah blah blah blah ",
                            type: "success",
                            icon: <AiFillCheckCircle />,
                            autoclose: true,
                            autocloseTime: 3000,
                            position: "0px",
                          });
                        }, 3000);
                      }}
                      variant="outline"
                      color="info"
                    >
                      Loading notification
                    </Button>
                  </div>
                </div>
              </>
            }
          />
          <Code>
            {`
    import { Notification, newNotification } from "./UI/";
    import { AiFillInfoCircle, AiFillWarning, AiFillCheckCircle } from "react-icons/ai";
    import { useState } from 'react';

    const Demo = () => {
      const [notifications, setNotifications] = useState([]);
      const [keys, setKeys] = useState(Object.keys(notifications));
      const newNotification = addToObject(notifications, setNotifications, setKeys);
      const updateNotification = updateObject(notifications, setNotifications, setKeys);
      const id = useUniqueId();

      const showSuccessNotification = () => {
        newNotification(id, {
          title: "Success notification",
          body: "blah blah blah blah blah blah blah blah blah blah ",
          icon: <AiFillCheckCircle />,
          type: "success",
          });
        });

        const showLoadingNotification = () => {
          newNotification(id, {
            title: "Loading notification",
            body: "blah blah blah blah blah blah blah blah blah blah ",
            type: "loading",
            autoclose: false,
          });
          setTimeout(() => {
            updateNotification(id, {
              title: "Notification succesfully loaded!",
              body: "blah blah blah blah blah blah blah blah blah blah ",
              type: "success",
              icon: <AiFillCheckCircle />,
              autoclose: true,
              autocloseTime: 3000,
              position: "0px",    // ! Required!
            });
          }, 3000);
        }

        return (
            <>
            <Notification.Container notifications={notifications} setNotifications={setNotifications} />
            <Button color="success" type="light" onClick={showSuccessNotification} />
            <Button color="info" type="outline" onClick={showLoadingNotification} />
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

export default NotificationsPage;
