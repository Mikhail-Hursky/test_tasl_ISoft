import React, { useState } from "react";
import "./Form.scss";
import { observer } from "mobx-react-lite";
import userForm from "../../store/UserForm";

interface Props {
  setIsOpen(isOpen: boolean): void;
}
const Form = observer(({ setIsOpen }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    userForm.setFirstName(firstName);
    userForm.setLastName(lastName);
    setIsOpen(true);
    setLastName("");
    setFirstName("");
  };
  return (
    <>
      <form className="Form" onSubmit={handleSubmit}>
        <label>
          <input
            required={true}
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          <input
            required={true}
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
});

export default Form;
