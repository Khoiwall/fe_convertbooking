import * as React from "react";

interface InputProps {
  input: {
    title: string;
    _type: string;
    _name: string;
    require?: boolean;
  };
}

function Input({ input }: InputProps) {
  return (
    <>
      <label htmlFor="email" className="mb-1 sign-label">
        {input.title}
      </label>
      <input
        type={input._type}
        id={input._name}
        name={input._name}
        className="py-3 px-4 mb-4 w-full sign-input"
        placeholder={input.title}
        required={input.require}
      />
    </>
  );
}

function InputMess() {
  return (
    <div className="w-full">
      <div className="relative w-full mes-input bg-white">
        <textarea
          name="message"
          className="w-full outline-0 pt-4 pb-5 mes-textarea"
          placeholder="Compose your message..."
        />
        <span className="mes-icon-emoji absolute cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <span className="mes-icon-upload absolute cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
export { Input, InputMess };
