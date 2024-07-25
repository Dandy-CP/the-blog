"use client";

import React, { useState, useReducer } from "react";
import { Input, Button, Modal } from "@/components/elements";
import SuccessContent from "./SuccessContent";

interface InputState {
  name: string;
  errorName: string | undefined;
  email: string;
  errorEmail: string | undefined;
  message: string;
  errorMessage: string | undefined;
}

const ContactBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialState = {
    name: "",
    errorName: undefined,
    email: "",
    errorEmail: undefined,
    message: "",
    errorMessage: undefined,
  };

  const onChangeState = (state: InputState, newState: Partial<InputState>) => {
    return { ...state, ...newState };
  };

  const [event, updateEvent] = useReducer(onChangeState, initialState);

  const handleOnSubmit = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if (event.name.length < 3) {
      updateEvent({ errorName: "min 3 character" });
      return;
    } else {
      updateEvent({ errorName: undefined });
    }

    if (!regEx.test(event.email)) {
      updateEvent({ errorEmail: "email field must be email type" });
      return;
    } else {
      updateEvent({ errorEmail: undefined });
    }

    if (event.message.length < 3) {
      updateEvent({ errorMessage: "min 3 character" });
      return;
    } else {
      updateEvent({ errorMessage: undefined });
    }

    updateEvent({
      errorName: undefined,
      errorEmail: undefined,
      errorMessage: undefined,
    });

    setIsModalOpen(true);
  };

  return (
    <div className="w-10/12 flex flex-col gap-5 border border-black border-t-8 p-5 mx-auto phone:w-[90%]">
      <div className="flex flex-col gap-5">
        <Input
          placeholder="Name"
          label="Your Name"
          minLength={3}
          maxLength={32}
          className={`${event.errorName && "border-red-500"}`}
          value={event.name}
          errorMessage={event.errorName}
          onChange={(event) => {
            updateEvent({ name: event.target.value });
          }}
        />

        <Input
          placeholder="Email"
          label="Your Email"
          type="email"
          className={`${event.errorEmail && "border-red-500"}`}
          value={event.email}
          errorMessage={event.errorEmail}
          onChange={(event) => {
            updateEvent({ email: event.target.value });
          }}
        />

        <Input
          placeholder="Message"
          label="Message"
          variant="textarea"
          rows={10}
          minLength={3}
          maxLength={80}
          className={`${event.errorMessage && "border-red-500"}`}
          value={event.message}
          errorMessage={event.errorMessage}
          onChange={(event) => {
            updateEvent({ message: event.target.value });
          }}
        />
        <p className="text-end text-sm">{event.message.length} / 80</p>

        <Button
          size="full"
          onClick={() => {
            handleOnSubmit();
          }}
        >
          Send
        </Button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <SuccessContent
          inputValue={event}
          onAccept={() => {
            setIsModalOpen(false);
            updateEvent({
              name: "",
              errorName: undefined,
              email: "",
              errorEmail: undefined,
              message: "",
              errorMessage: undefined,
            });
          }}
        />
      </Modal>
    </div>
  );
};

export default ContactBox;
