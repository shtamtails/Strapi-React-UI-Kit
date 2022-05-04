import React, { useState } from "react";
import { About, Code, ComponentPreview, Subtitle, Main } from "../../../Template/";
import { Button, Notification, newNotification } from "../../../../UI";
import { useUniqueId } from "../../../../../Hooks";
import { AiFillInfoCircle, AiFillWarning, AiFillCheckCircle } from "react-icons/ai";

export const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const createNotification = newNotification(setNotifications, notifications);
  const id = useUniqueId();

  return (
    <>
      <Notification.Container notifications={notifications} setNotifications={setNotifications} />
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
                        createNotification({
                          id: id,
                          title: "Danger notification",
                          body: "blah blah blah blah blah blah blah blah blah blah ",
                          icon: <AiFillWarning />,
                          type: "danger",
                        });
                      }}
                      variant="light"
                      type="danger"
                    >
                      Danger notification
                    </Button>
                  </div>
                  <div className="notification-component-preview-buttons">
                    <Button
                      onClick={() => {
                        createNotification({
                          id: id,
                          title: "Success notification",
                          body: "blah blah blah blah blah blah blah blah blah blah ",
                          icon: <AiFillCheckCircle />,
                          type: "success",
                        });
                      }}
                      variant="light"
                      type="success"
                    >
                      Success notification
                    </Button>
                  </div>
                  <div className="notification-component-preview-buttons">
                    <Button
                      onClick={() => {
                        createNotification({
                          id: id,
                          title: "Default notification",
                          body: "blah blah blah blah blah blah blah blah blah blah ",
                          icon: <AiFillInfoCircle />,
                          type: "info",
                        });
                      }}
                      variant="light"
                      type="info"
                    >
                      Default notification
                    </Button>
                  </div>
                  <div className="notification-component-preview-buttons">
                    <Button
                      onClick={() => {
                        createNotification({
                          id: id,
                          title: "Loading notification",
                          body: "blah blah blah blah blah blah blah blah blah blah ",
                          type: "loading",
                        });
                      }}
                      variant="outline"
                      type="info"
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
        const createNotification = newNotification(setNotifications, notifications);
        const id = useUniqueId();

        const showSuccessNotification = () => {
            createNotification({
                id: id,
                title: "Success notification",
                body: "blah blah blah blah blah blah blah blah blah blah ",
                icon: <AiFillCheckCircle />,
                type: "success",
              });
        }

        const showDangerNotification = () => {
            createNotification({
                id: id,
                title: "Danger notification",
                body: "blah blah blah blah blah blah blah blah blah blah ",
                icon: <AiFillWarning />,
                type: "danger",
              });
        }

        const showDefaultNotification = () => {
            createNotification({
                id: id,
                title: "Default notification",
                body: "blah blah blah blah blah blah blah blah blah blah ",
                icon: <AiFillInfoCircle />,
                type: "info",
              });
        }

        const showLoadingNotification = () => {
            createNotification({
                id: id,
                title: "Loading notification",
                body: "blah blah blah blah blah blah blah blah blah blah ",
                type: "loading",
              });
        }

        return (
            <>
            <Notification.Container notifications={notifications} setNotifications={setNotifications} />
            <Button type="success" variant="light" onClick={showSuccessNotification} />
            <Button type="danger" variant="light" onClick={showDangerNotification} />
            <Button type="info" variant="light" onClick={showDefaultNotification} />
            <Button type="info" variant="outline" onClick={showLoadingNotification} />
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