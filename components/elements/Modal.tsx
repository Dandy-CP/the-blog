"use client";

import React, {
  useEffect,
  useRef,
  forwardRef,
  DetailedHTMLProps,
  DialogHTMLAttributes,
} from "react";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Ref = HTMLDialogElement;

export type DialogProps = DetailedHTMLProps<
  DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
> &
  IModalProps;

const Modal = forwardRef<Ref, DialogProps>((props, refs) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  const { isOpen, onClose, children, className, ...rest } = props;

  const openModal = () => {
    ref.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    ref.current?.close();
    document.body.style.overflow = "";
  };

  useEffect(() => {
    if (isOpen) {
      openModal();
    } else {
      closeModal();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={ref}
      className="w-1/2 p-10 rounded-md desktop:w-[70%] tablet:w-[90%] phone:w-[90%]"
      onCancel={() => {
        onClose();
      }}
      {...rest}
    >
      <div className={`${className}`}>
        {isOpen && <React.Fragment>{children}</React.Fragment>}
      </div>
    </dialog>
  );
});

Modal.displayName = "Modal";
export default Modal;
