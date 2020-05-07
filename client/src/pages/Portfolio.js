import React, { useState, useEffect } from "react";
import Axios from "axios";
import M from "materialize-css/dist/js/materialize.min";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [prefix, setPrefix] = useState("");
  const [mobile, setMobile] = useState("");
  const ifPrefix = () => {
    if (window.innerWidth >= 500) {
      setPrefix("material-icons conditionalPrefix prefix");
      setMobile("row");
    } else {
      setPrefix("material-icons conditionalPrefix");
      setMobile("row mobileTweak");
    }
  };
  useEffect(() => {
    ifPrefix();
    // es-lint-disable-next-line
  }, []);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      M.toast({ html: "Oh no. Please fill this out completely!" });
    } else {
      let submission = { name, email, message };
      //!! come back to this.. Heroku's being a pain
      const res = await Axios.post("/contactInput", submission, config);
      console.log(`submission: ${submission}`);
      console.log(`response: ${res}`);
      M.toast({ html: `Thank you! ${name} ` });
      console.log("submitted");
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <div className="row formRow">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s12 m6">
            <i className={prefix}>account_circle</i>
            <input
              id="name"
              type="text"
              value={name}
              className="validate"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name">Name</label>
          </div>

          <div className="input-field col s12 m6">
            <i className={prefix}>mail</i>
            <input
              id="email"
              value={email}
              type="email"
              className="validate"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div
          className="row mobileTweak"
          style={{ marginLeft: "50px", marginRight: "50px" }}
        >
          <div className="input-field col s12">
            <textarea
              id="message"
              className="materialize-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light formSubmitBtn"
          type="submit"
          name="submit"
          style={{
            width: "50%",
            marginLeft: "25%",
            marginRight: "auto",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
