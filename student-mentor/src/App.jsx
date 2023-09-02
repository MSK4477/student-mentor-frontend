// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import "./App.css";

const initialState = { id: "", name: "" };

function App() {
  const [formData, setFormData] = useState(initialState);
  const [formData2, setFormData2] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleChangeMentor = (e) => {
    const { name, value } = e.target;

    setFormData2({
      ...formData2,
      [name]: value,
    });
  };
  const sendReq = async (e) => {
    e.preventDefault();

    fetch("https://mentor-student-axg4.onrender.com/student", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setFormData(initialState);
  };
  const sendReq2 = async (e) => {
    e.preventDefault();

    fetch("https://mentor-student-axg4.onrender.com/mentor", {
      method: "POST",
      body: JSON.stringify(formData2),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setFormData2(initialState);
  };
  return (
    <div className="app-container">
      <form onSubmit={sendReq} className="student-form">
        <input
          type="text"
          name="id"
          placeholder="Enter the ID"
          value={formData.id}
          onChange={handleChange}
          className="form-input"
        />
      
        <input
          type="text"
          name="name"
          placeholder="Enter the name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
        <button className="form-button">Add New Student</button>
      </form>

      <form onSubmit={sendReq} className="mentor-form">
        <input
          type="text"
          name="id"
          placeholder="Enter the ID"
          value={formData2.id}
          onChange={handleChangeMentor}
          className="form-input"
        />
     
        <input
          type="text"
          name="name"
          placeholder="Enter the name"
          value={formData2.name}
          onChange={handleChangeMentor}
          className="form-input"
        />
        <button onClick={sendReq2} className="form-button">Add New Mentor</button>
      </form>
    </div>
  );
}

export default App;
