import React, { useState } from "react";

function Form(props) {
      const [name, setName] = useState("");
      const [desc, setinputDesc] = useState("");
      const [status, setinputstatus] = useState("");

      function handleChange(e) {
            setName(e.target.value);
      }
      const handleInputdesc = (e) => {
            setinputDesc(e.target.value);
      };
      const handleStatus = (e) => {
            setinputstatus(e.target.value);
      };

      function handleSubmit(e) {
            e.preventDefault();
            props.addTask("Say hello!");
            props.addTask(name, desc, status);
            setName("");
      }
      return (
            <form onSubmit={handleSubmit}>
                  <h2 className="label-wrapper">
                        <label htmlFor="new-todo-input" className="label__lg">
                              What needs to be done?
                        </label>
                  </h2>
                  <label className="my-2" htmlFor="description">
                        Task
                  </label>
                  <input
                        type="text"
                        id="new-todo-input"
                        className="input input__lg"
                        name="text"
                        placeholder="Task Name"
                        autoComplete="off"
                        value={name}
                        onChange={handleChange}
                  />
                  <label className="my-2" htmlFor="description">
                        Description
                  </label>
                  <input
                        type="text"
                        name="description"
                        id="description"
                        className="input input__lg"
                        placeholder="Description"
                        value={desc}
                        onChange={handleInputdesc}
                  />
                  <label for="Status">Status</label>
                  <select 
                  className="input input__lg" 
                  id="Status" 
                  name="Status"
                  value={status}
                  onChange={handleStatus}
                  >
                        <option value="not_started">Not Started</option>
                        <option value="inprogress">In Progress</option>
                        <option value="Finished">Finished</option>
                  </select>
                  <br/>
                  <button type="submit" className="btn btn__primary btn__lg">
                        Add
                  </button>
            </form>
      );
}

export default Form;
