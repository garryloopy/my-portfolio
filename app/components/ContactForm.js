import { useEffect, useState, useRef } from "react";
export default function ContactForm({ contactFormState, onDialogClose }) {
  // State for the form values
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");

  /**
   * Handler for the form submission
   * @param {Event} event The form submission event
   */
  const handleOnFormSubmit = (event) => {
    event.preventDefault();

    handleAPICall();

    resetFormValues();

    handleOnFormClose();
  };

  /**
   * Handler for closing the dialog and calling the onDialogClose function
   */
  const handleOnFormClose = () => {
    if (onDialogClose) {
      onDialogClose();
    }
  };

  /**
   * Resets all the form values (name, email, and message)
   */
  const resetFormValues = () => {
    setNameValue("");
    setEmailValue("");
    setMessageValue("");
  };

  /**
   * Handler for the name input change
   * @param {Event} event The onChange event for name input
   */
  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  /**
   * Handler for the email input change
   * @param {Event} event The onChange event for email input
   */
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumberValue(event.target.value);
  };

  /**
   * Handler for the message input change
   * @param {Event} event The onChange event for message input
   */
  const handleMessageChange = (event) => {
    setMessageValue(event.target.value);
  };

  /**
   * Handles api call to send email
   */
  async function handleAPICall() {
    try {
      const res = await fetch("api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameValue.trim(),
          email: emailValue.trim(),
          phoneNumber: phoneNumberValue.trim(),
          message: messageValue.trim(),
        }),
      });
      if (res.status !== 200) {
        console.error(
          "Failed to send email. Server responded with status:",
          res.status
        );
      }
    } catch (error) {
      console.error("An error occurred while sending email:", error);
    }
  }

  return (
    <div
      data-show={contactFormState}
      className="z-10 opacity-0 pointer-events-none data-[show=true]:opacity-100 data-[show=true]:pointer-events-auto fixed w-full h-full grid place-items-center transition-opacity duration-300 ease-in-out backdrop-blur-sm"
      onClick={handleOnFormClose}
    >
      {/* Form  */}
      <form
        className="bg-zinc-950 size-[36rem] border border-zinc-800"
        onSubmit={handleOnFormSubmit}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Container  */}
        <div className=" p-8 flex flex-col gap-4 items-center justify-center bg-zinc-800/45 w-full h-full">
          <h1 className="text-3xl font-semibold text-zinc-300">Contact</h1>
          <label className="w-full h-16 relative flex items-end bg-zinc-400 hover:cursor-text focus-within:ring-1 focus-within:ring-zinc-300">
            <input
              type="text"
              value={nameValue}
              onChange={handleNameChange}
              className="bg-zinc-400 w-full h-4/6 placeholder-zinc-800 px-4 peer outline-none"
              required
            />
            <p className="absolute px-4 -translate-y-4 peer-focus:-translate-y-8 transition-transform duration-300">
              Name
            </p>
          </label>
          <input
            type="text"
            placeholder="Email"
            value={emailValue}
            onChange={handleEmailChange}
            className="bg-zinc-400 w-full h-10 placeholder-zinc-800 px-4"
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumberValue}
            onChange={handlePhoneNumberChange}
            className="bg-zinc-400 w-full h-10 placeholder-zinc-800 px-4"
            required
          />

          <textarea
            className="bg-zinc-400 w-full h-32 placeholder-zinc-800 p-4"
            placeholder="Message"
            onChange={handleMessageChange}
            value={messageValue}
            required
          />
          <button className="w-full h-10 bg-zinc-600" type="submit">
            Submit
          </button>

          <button
            className="w-full h-10 bg-zinc-600"
            type="button"
            onClick={handleOnFormClose}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
