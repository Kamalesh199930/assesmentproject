import React, { useState } from "react";
import "./App.css";
const SchemaForm = () => {
  const initialSchemaOptions = [
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
  ];

  const [segmentName, setSegmentName] = useState("");
  const [selectedSchema, setSelectedSchema] = useState("");
  const [addedSchemas, setAddedSchemas] = useState([]);

  const handleAddSchema = () => {
    if (selectedSchema) {
      setAddedSchemas([...addedSchemas, { [selectedSchema]: selectedSchema }]);
      setSelectedSchema("");
    }
  };

  const handleSaveSegment = () => {
    const data = {
      segment_name: segmentName,
      schema: addedSchemas,
    };

    console.log("Saving segment:", data);
  };
  const handleDeleteSchema = (index) => {
    const updatedSchemas = [...addedSchemas];
    updatedSchemas.splice(index, 1);
    setAddedSchemas(updatedSchemas);
  };

  return (
    <div>
      <label>
        <select
          value={selectedSchema}
          onChange={(e) => setSelectedSchema(e.target.value)}
        >
          <option value="">Add Schema to Segment</option>
          {initialSchemaOptions.map((schema) => (
            <option key={schema.value} value={schema.value}>
              {schema.label}
            </option>
          ))}
        </select>
      </label>
      <button className="add-schema" onClick={handleAddSchema}>
        + Add new schema
      </button>
      <br />
      <div>
        {addedSchemas.map((schema, index) => (
          <div key={index}>
            {JSON.stringify(schema)}
            <button onClick={() => handleDeleteSchema(index)} className="delete-value">
              delete
            </button>
          </div>
        ))}
      </div>
      <br />
      <button onClick={handleSaveSegment} className="save-btn">
        Save the Segment
      </button>
      <button className="cancel-btn">Cancel</button>
    </div>
  );
};

export default SchemaForm;
