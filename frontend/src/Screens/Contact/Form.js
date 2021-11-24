import React , {useState} from "react";
import axios from 'axios'
import "./css/Form.css";

export default function Form() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xbjqrjvo",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks! We will get back to you soon", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <form className="form-div" onSubmit={handleOnSubmit}>
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
          {serverState.status ? 
                        <div>
                            <p className={!serverState.status.ok ? "errorMsg" : "thanks"}>
                                {serverState.status.msg}
                            </p>
                        </div>
                        : <button type="submit">Send</button>
                        }
      </div>
    </form>
  );
}
