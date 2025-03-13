"use client";
import React, { useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

function EmailnAddress() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);

  // Fixing the issue here by specifying the type of form ref
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_fh9gnqf", "template_pfws2qh", form.current, {
          publicKey: "NKEqxewRiSKRnxvh6",
        })
        .then(
          () => {
            toast.success("Email sent successfully");
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            toast.error("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-5 bg-white">
      <div className="flex flex-col items-center justify-center mt-16 p-2 bg-gray-900">
        <h1 className="md:hidden text-2xl text-white mb-2">Where to find us</h1>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.1854726633514!2d31.000876775175296!3d-17.829938283134663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5ccb7b5ff81%3A0xd786489cb78e8d20!2s17%20Tredgold%20Dr%2C%20Harare!5e0!3m2!1sen!2szw!4v1741615823372!5m2!1sen!2szw"
          width="800"
          height="600"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-96 object-cover"
        ></iframe>
      </div>
      <div className="h-full py-8 my-8 w-full flex justify-center items-center text-[#003366]">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-full w-full p-8 border border-blue-900"
        >
          <p className="font-bold text-xl text-center py-2">Leave a Message</p>
          <div className="flex flex-col mt-6 gap-4">
            <div className="grid grid-cols-4 gap-4">
              <p className="font-bold text-sm col-span-1">Name</p>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-300 py-2 px-4 w-full outline-none border-none col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <p className="font-bold text-sm col-span-1">Email</p>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-300 py-2 px-4 w-full outline-none border-none col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <p className="font-bold text-sm col-span-1">Message</p>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="bg-gray-300 py-2 px-4 w-full outline-none border-none col-span-3"
              ></textarea>
            </div>
            <div className="flex items-end z-50">
              <div className="border py-[px] border-blue-950 w-24 text-center ">
                <button
                  type="submit"
                  className="text-sm py-2 w-24 relative px-4 bg-transparent text-gray-900 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-950 before:transition-all before:duration-300 before:content-[''] hover:text-white hover:before:scale-x-100"
                >
                  Send
                </button>

                <ToastContainer />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailnAddress;
