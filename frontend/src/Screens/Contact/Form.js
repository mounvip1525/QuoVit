import React from "react";
import "./css/Form.css";

export default function Form() {
  return (
    <div className="form-div">
      <div className="contact-input">
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" />
          </div>
        </div>
        <textarea type="text" name="message" placeholder="Your message" />
      </div>
      <h3 style={{fontWeight:"500"}}>Reason:</h3>
      <div className="contact-radio">
        <div>
          <input type="radio" name="query" value="feedback" id="feedback" />
          <label htmlFor="feedback">Feedback</label>
        </div>
        <div>
          <input type="radio" name="query" value="report" id="report" />
          <label htmlFor="report">Report an issue</label>
        </div>
        <div>
          <input type="radio" name="query" value="suggestions" id="suggestions" />
          <label htmlFor="suggestions">Suggestions</label>
        </div>
      </div>
      <div>
          <button>Send</button>
      </div>
    </div>
  );
}
