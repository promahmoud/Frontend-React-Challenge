import React, { useState } from "react";

function Form(props) {
      const [name, setName] = useState("");
      const [desc, setinputDesc] = useState("");

      function handleChange(e) {
            setName(e.target.value);
      }
      const handleInputdesc = (e) => {
            setinputDesc(e.target.value);
      };

      function handleSubmit(e) {
            e.preventDefault();
            props.addTask("Say hello!");
            props.addTask(name);
            props.addTask(desc);
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
                  <button type="submit" className="btn btn__primary btn__lg">
                        Add
                  </button>
            </form>
      );
}

export default Form;
