import React, { useState } from "react";
import { AiFillAccountBook } from "react-icons/ai";
import { useUniqueId } from "../../../Hooks";
import { Button } from "../../UI";
import Notifications from "./Test/Notifications";
import { addToObject, removeFromObject, updateObject } from "./Test/Utils";

export const TestPage = () => {
  const testNotifications = {
    0: {
      title: "title",
      body: "body",
      type: "success",
      icon: <AiFillAccountBook />,
      // position: "-600px",
    },
    1: {
      title: "title",
      body: "body",
      type: "success",
      icon: <AiFillAccountBook />,
      // position: "-600px",
    },
  };
  const [notifications, setNotifications] = useState(testNotifications);
  const [keys, setKeys] = useState(Object.keys(notifications));
  const newNotification = addToObject(notifications, setNotifications, setKeys);
  const updateNotification = updateObject(notifications, setNotifications, setKeys);

  const id = useUniqueId();
  return (
    <>
      <Button
        onClick={() => {
          updateNotification("3b2p9tc", {
            title: "HELLO WORLD!",
            body: "Successfully loaded",
            type: "success",
            icon: <AiFillAccountBook />,
            position: "0px",
          });
        }}
      >
        Update notification
      </Button>
      <Button
        onClick={() =>
          newNotification(id, {
            title: "title2",
            body: id,
            type: "danger",
            icon: <AiFillAccountBook />,
            position: "-600px",
          })
        }
      >
        Add Notification
      </Button>
      <Notifications
        notifications={notifications}
        setNotifications={setNotifications}
        keys={keys}
        setKeys={setKeys}
      />
    </>
  );
};

export default TestPage;
