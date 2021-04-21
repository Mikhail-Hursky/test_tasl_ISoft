import React from "react";
import "./Modal.scss";
import userForm from "../../store/UserForm";
import { observer } from "mobx-react-lite";

interface Props {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
}
const Modal = observer(({ isOpen, setIsOpen }: Props) => {
  return isOpen ? (
    <div className="Modal">
      <h2>Здраствуйте, {userForm.fullName}</h2>
      <button onClick={() => setIsOpen(false)}>X</button>
    </div>
  ) : (
    <></>
  );
});

export default Modal;
