import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      name,
      email,
      message
    });

    setSubmitted(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  }

  return (
    <div className="bg-blue-500 text-white p-4">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 rounded text-black"
          value={name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 rounded text-black"
          value={email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          className="p-2 rounded text-black"
          value={message}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-white text-blue-500 p-2 rounded"
        >
          Submit
        </button>

        {submitted && (
          <p className="text-green-200">
            Form Submitted Successfully!
          </p>
        )}
      </form>
    </div>
  );
}

export default App;