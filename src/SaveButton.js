import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./App.css";
import { IoChevronBack } from "react-icons/io5";
import { FaDotCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import SchemaForm from "./SchemaForm";
const SaveButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [segmentName, SetSegmentName] = useState("");
  return (
    <div>
      <div className="header">
        <div className="icon-image">
          <IoChevronBack />
        </div>
        <h1>Saving Segment</h1>
      </div>

      <div>
        <button
          onClick={() => setShowModal(true)}
          className="btn"
          type="button"
        >
          Save Segment
        </button>
      </div>
      <Modal
        className="saveForm"
        show={showModal}
        onHide={() => setShowModal(true)}
      >
        <Form>
          <Form.Label>Enter the Name of the Segment : </Form.Label>
          <Form.Control
            type="text"
            placeholder="Name of the segment"
            value={segmentName}
            onChange={(e) => SetSegmentName(e.target.value)}
          />
        </Form>
        <h5>
          To Save your Segment,You need to add the schemas to build the query
        </h5>
        <div className="dot-blue">
          <FaDotCircle />
        </div>
        <div className="dot-align">
          
          <h6>User Traits</h6>
        </div>

        <div className="dot-red">
          <FaRegDotCircle />
        </div>
        <div className="dot-aligns">
          <h6>Group Traits</h6>
        </div>
        <SchemaForm/>
      </Modal>
      
    </div>
  );
};
export default SaveButton;
