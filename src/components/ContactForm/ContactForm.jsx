import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xrgjobkz");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  let textarea = document.querySelector("textarea");

  textarea.addEventListener("keydown", autosize);

  function autosize() {
    let el = this;
    setTimeout(function () {
      el.style.cssText = "height:auto; padding:0";
      el.style.cssText = "height:" + el.scrollHeight + "px";
    }, 0);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name"></label>
      <input id="name" type="name" name="name" placeholder="Name" />
      <label htmlFor="email"></label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your Email Address"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        placeholder="Leave your message..."
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
