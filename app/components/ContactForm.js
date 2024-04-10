import { useEffect, useState, useRef } from "react";

export default function ContactForm({ isContactDialogOpen, onDialogClose }) {
  useEffect(() => {
    if (isContactDialogOpen) {
      handleOpenDialog();
    } else {
      handleCloseDialog();
    }
  }, [isContactDialogOpen]);

  // Reference to the form dialog
  const formRef = useRef(null);

  // State for the form values
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");

  /**
   * Handler for opening the dialog, specifically the form dialog
   */
  const handleCloseDialog = () => {
    const dialog = formRef.current;

    dialog.close();
  };

  /**
   * Handler for closing the dialog, specifically the form dialog
   */
  const handleOpenDialog = () => {
    const dialog = formRef.current;

    dialog.showModal();
  };

  /**
   * Handler for the form submission
   * @param {Event} event The form submission event
   */
  const handleOnFormSubmit = (event) => {
    event.preventDefault();

    handleAPICall();

    resetFormValues();

    handleOnDialogClose();
  };

  /**
   * Handler for closing the dialog and calling the onDialogClose function
   */
  const handleOnDialogClose = () => {
    handleCloseDialog();
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
    <dialog ref={formRef}>
      {/* Form  */}
      <form
        className="bg-zinc-950 size-[36rem] border border-zinc-800"
        onSubmit={handleOnFormSubmit}
      >
        {/* Container  */}
        <div className=" p-8 flex flex-col gap-4 items-center justify-center bg-zinc-800/45 w-full h-full">
          <h1 className="text-3xl font-semibold text-zinc-300">Contact</h1>
          <input
            type="text"
            placeholder="Name"
            value={nameValue}
            onChange={handleNameChange}
            className="bg-zinc-400 w-full h-10 placeholder-zinc-800 px-4"
            required
          />
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
            onClick={handleOnDialogClose}
          >
            Close
          </button>
        </div>
      </form>
    </dialog>
  );
}
