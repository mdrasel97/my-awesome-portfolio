import React, { useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          // console.error(error.text);
          toast.error(error);
        }
      );
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 gap-10"
    >
      {/* left side - form */}
      <div className="w-full md:w-1/2 p-6 rounded-lg">
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="type your name ..."
              className="w-full p-3 rounded-md border border-primary bg-transparent outline-none text-white placeholder-gray-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Email Address</label>
            <input
              type="email"
              name="user_email"
              placeholder="type your email ..."
              className="w-full p-3 rounded-md border border-primary bg-transparent outline-none text-white placeholder-gray-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="type your message here ..."
              className="w-full p-3 rounded-md border border-primary bg-transparent outline-none text-white placeholder-gray-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center w-full text-center  gap-2 px-6 py-3 bg-primary hover:bg-primary rounded-md text-white  font-semibold"
          >
            <span>
              <FiSend />
            </span>
            Send
          </button>
        </form>
      </div>

      {/* right side - info */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-primary">GET IN TOUCH</h2>
        <p className="text-lg">Fill in the form to start a conversation</p>

        <div className="flex items-center gap-4 text-lg">
          <FaLocationDot className="text-xl text-primary" />
          <span>Cumilla, Bangladesh</span>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <MdEmail className="text-xl text-primary" />
          <span>mollarasel972@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
