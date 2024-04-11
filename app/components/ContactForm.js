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
    resetFormValues();
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
    setPhoneNumberValue("");
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
          res.status,
        );
      }
    } catch (error) {
      console.error("An error occurred while sending email:", error);
    }
  }

  return (
    <div
      data-show={contactFormState}
      className="pointer-events-none fixed z-10 grid h-full w-full over place-items-center opacity-0 p-4 sm:p-0 backdrop-blur-sm transition-opacity duration-300 ease-in-out data-[show=true]:pointer-events-auto data-[show=true]:opacity-100 sm:m-0"
      onClick={handleOnFormClose}
    >
      {/* Form  */}
      <form
        className="w-full rounded-lg border border-zinc-800 bg-zinc-950 sm:min-h-[40rem] sm:w-[40rem]"
        onSubmit={handleOnFormSubmit}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Container  */}
        <div className=" flex h-max w-full flex-col items-center justify-center gap-4 bg-gradient-to-tr from-zinc-800/40 to-zinc-800/45 p-8 sm:p-16">
          <h1 className="mb-8 text-3xl font-semibold text-zinc-300">Get in touch</h1>
          {/* Label for the name input */}
          <label className="relative flex min-h-12 w-full items-end rounded-md bg-zinc-300 focus-within:shadow-md focus-within:shadow-[#C6AB84] focus-within:ring-2 focus-within:ring-[#C6AB84] hover:cursor-text sm:min-h-16 transition-all duration-300 opacity-75 focus-within:opacity-100 hover:opacity-100">
            <input
              type="text"
              value={nameValue}
              onChange={handleNameChange}
              className="sm:text-md peer h-4/6 w-full rounded-lg bg-zinc-300 px-4 pb-1 text-sm text-zinc-800 placeholder-zinc-800 outline-none sm:pb-2"
              required
            />
            <p
              data-valid={nameValue.length > 0}
              className="absolute -translate-y-3 select-none rounded-b-lg px-4 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:font-semibold data-[valid=true]:-translate-y-6 sm:-translate-y-5 sm:peer-focus:-translate-y-8 sm:data-[valid=true]:-translate-y-8"
            >
              Name
            </p>
          </label>
          {/* Label for the email input */}
          <label className="relative flex min-h-12 w-full items-end rounded-md bg-zinc-300 focus-within:shadow-md focus-within:shadow-[#C6AB84] focus-within:ring-2 focus-within:ring-[#C6AB84] hover:cursor-text sm:min-h-16 transition-all duration-300 opacity-75 focus-within:opacity-100 hover:opacity-100">
            <input
              type="text"
              value={emailValue}
              onChange={handleEmailChange}
              className="sm:text-md peer h-4/6 w-full rounded-lg bg-zinc-300 px-4 pb-1 text-sm text-zinc-800 placeholder-zinc-800 outline-none sm:pb-2"
              required
            />
            <p
              data-valid={emailValue.length > 0}
              className="absolute -translate-y-3 select-none rounded-b-lg px-4 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:font-semibold data-[valid=true]:-translate-y-6 sm:-translate-y-5 sm:peer-focus:-translate-y-8 sm:data-[valid=true]:-translate-y-8"
            >
              Email
            </p>
          </label>
          {/* Label for the phone number input */}
          <label className="relative flex min-h-12 w-full items-end rounded-md bg-zinc-300 focus-within:shadow-md focus-within:shadow-[#C6AB84] focus-within:ring-2 focus-within:ring-[#C6AB84] hover:cursor-text sm:min-h-16 transition-all duration-300 opacity-75 focus-within:opacity-100 hover:opacity-100">
            <input
              type="text"
              value={phoneNumberValue}
              onChange={handlePhoneNumberChange}
              className="sm:text-md peer h-4/6 w-full rounded-lg bg-zinc-300 px-4 pb-1 text-sm text-zinc-800 placeholder-zinc-800 outline-none sm:pb-2"
              required
            />
            <p
              data-valid={phoneNumberValue.length > 0}
              className="absolute -translate-y-3 select-none rounded-b-lg px-4 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:font-semibold data-[valid=true]:-translate-y-6 sm:-translate-y-5 sm:peer-focus:-translate-y-8 sm:data-[valid=true]:-translate-y-8"
            >
              Phone number
            </p>
          </label>
          <label className="relative flex min-h-40 w-full flex-col-reverse overflow-hidden rounded-md bg-zinc-300 focus-within:shadow-md focus-within:ring-2 focus-within:shadow-[#C6AB84] focus-within:ring-[#C6AB84] hover:cursor-text transition-all duration-300  opacity-75 focus-within:opacity-100 hover:opacity-100">
            <textarea
              value={messageValue}
              onChange={handleMessageChange}
              className="sm:text-md peer peer h-full w-full bg-zinc-300 p-4 text-sm text-zinc-800 placeholder-zinc-800 outline-none"
              rows={4}
              cols={4}
              required
            />
            <div className="flex h-12 w-full select-none items-center justify-center bg-zinc-400/50 transition-all duration-300 peer-focus:font-semibold sm:h-20">
              <p>Message</p>
            </div>
          </label>

          {/* Submit button */}
          <button
            className="h-12 w-full rounded-md bg-gradient-to-r from-zinc-200 to-zinc-400 outline-none transition-all duration-300 ease-in-out hover:bg-zinc-500 focus:shadow-md focus:shadow-[#C6AB84] focus:ring-2 focus:ring-[#C6AB84] active:bg-zinc-600  opacity-75 focus-within:opacity-100 hover:opacity-100 mt-8"
            type="submit"
          >
            <p className="select-none font-semibold">Submit</p>
          </button>

          {/* Close button */}
          <button
            className="h-12 w-full rounded-md bg-gradient-to-r from-zinc-500 to-zinc-600 outline-none transition-all duration-300 ease-in-out hover:bg-zinc-600 focus:shadow-md focus:shadow-[#C6AB84] focus:ring-2 focus:ring-[#C6AB84] active:bg-zinc-600  opacity-75 focus-within:opacity-100 hover:opacity-100"
            type="button"
            onClick={handleOnFormClose}
          >
            <p className="select-none font-semibold">Close</p>
          </button>
          <p className="text-zinc-400 text-sm">Message sent to: <span className="italic text-zinc-300">garrydayagjr@gmail.com</span></p>
        </div>
      </form>
    </div>
  );
}
