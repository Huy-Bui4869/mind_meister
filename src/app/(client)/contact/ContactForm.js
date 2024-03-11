import InputItem from "./InputItem";

const ContactForm = () => {
  const data = [
    { label: "First Name", type: "text", name: "firstName", placeholder: "" },
    { label: "Last Name", type: "text", name: "lastName", placeholder: "" },
    {
      label: "Work Email",
      type: "email",
      name: "email",
      placeholder: "name@company.com",
    },
    { label: "Phone Number", type: "number", name: "phone", placeholder: "" },
  ];

  return (
    <form
      method="post"
      className="max-w-[530px] w-full flex flex-col mx-auto md:mx-0 space-y-4"
    >
      {data.map((value, i) => (
        <InputItem key={i} props={value} />
      ))}

      <label>
        <span className="text-gray-500 dark:text-gray-400">
          How can our team help you?
        </span>
        <textarea
          cols="10"
          rows="5"
          className="resize-none bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-base leading-6 text-gray-800 dark:text-gray-100 placeholder-gray-400 rounded-md py-2 pl-3 ring-1 ring-gray-300 dark:ring-gray-900 shadow-sm"
          placeholder="Write your message..."
        ></textarea>
      </label>

      <p className="text-[13px] text-gray-500">
        MeisterLabs GmbH needs the contact information you provide to us to
        contact you about our products and services. You may unsubscribe from
        these communications at any time. For information on how to unsubscribe,
        as well as our privacy practices and commitment to protecting your
        privacy, please review our{" "}
        <a
          href="#"
          //   target="_blank"
          className="text-blue-600 hover:text-purple-800"
        >
          Privacy Policy
        </a>
        .
      </p>
      <button className="w-full p-2 bg-blue-600 text-white rounded-md">
        Submit
      </button>
      <span className="text-sm text-center text-gray-600 dark:text-gray-400">
        Technical or billing questions?{" "}
        <a
          href="#"
          //   target="_blank"
          className="text-blue-600 hover:text-purple-800"
        >
          Click here.
        </a>
      </span>
    </form>
  );
};

export default ContactForm;
