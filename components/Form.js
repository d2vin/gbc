import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/Form.module.css";

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("myForm");
    const data = new FormData(form);
    const action = e.target.action;
    console.log(action)
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      setSubmitted(true);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <span></span>
        <form
          className={styles.content}
          method="POST"
          action="https://script.google.com/a/macros/newschool.edu/s/AKfycbySlQ_I5io0gtlhoEEVDF9FU8J5w_CXhQV0rgmmQnZA/dev"
          id="myForm"
          onSubmit={handleSubmit}
        >
          <h2>Event Sign-up</h2>
          <input
            className={styles.inputs}
            type="text"
            placeholder="Name"
            name="Name"
            id="name"
            style={{ textArea: "white" }}
          />
          <br />
          <input
            className={styles.inputs}
            type="email"
            placeholder="Email"
            name="Email"
            id="email"
            required
          />
          <br />
          <input
            className={styles.inputs}
            type="text"
            placeholder="LinkedIn"
            name="LinkedIn"
            id="linkedin"
          />
          <br />
          <input
            className={styles.inputs}
            type="text"
            placeholder="Twitter"
            name="Twitter"
            id="twitter"
          />
          <br />
          <button
            style={{ border: "none" }}
            type="submit"
            name="submit"
          >
            {submitted ? "Resubmit" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
