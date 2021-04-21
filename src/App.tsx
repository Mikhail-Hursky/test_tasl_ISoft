import React, { useState } from "react";
import "./App.scss";
import Form from "./components/form/Form";
import Modal from "./components/modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <Form setIsOpen={setIsOpen} />
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}

export default App;
