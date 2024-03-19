import { useState } from "react";
import Modal from "./modal";

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          onClose={onClose}
          header={<h1>Customized Header</h1>}
          body={<div>Customized Body</div>}
          footer={<h1>Customized Footer</h1>}
        />
      )}
    </div>
  );
};

export default ModalTest;
