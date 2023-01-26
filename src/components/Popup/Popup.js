import React from 'react'
import { Button, Modal} from "react-bootstrap";

const Popup = ({onYes, onNo}) => {
  return (
    // <div>
      <Modal  size="lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            do u want to save ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button onClick={onYes}>Yes </button>
          <button onClick={onNo}>No</button>
        </Modal.Body>
       
      </Modal>
    // {/* </div> */}
  )
}

export default Popup