import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xrgjobkz");
  if (state.succeeded) {
    return (
      <p className={styles.messageThanks}>Thank you for reaching out to me!</p>
    );
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
