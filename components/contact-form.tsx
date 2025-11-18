"use client";

import React, { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handleSubmit clicked");

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill all the field");
      return;
    }

    // call the api here to submit for form
    // mock
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        toast.success("Form submitted successfully");
      }, 1000);
    });

    if (response) {
      toast.success("Form submitted successfully");
    } else {
      toast.error("Something went wrong.");
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-section-inset mx-auto my-6 border-y border-neutral-100 py-12"
    >
      <div className="mx-auto flex max-w-lg flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            placeholder="Tyler Durden"
            className="shadow-ace focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="shadow-ace focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            onChange={handleChange}
            placeholder="can i meet you."
            className="shadow-ace focus:ring-primary resize-none rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-primary cursor-pointer rounded-md px-4 py-2 text-white"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
