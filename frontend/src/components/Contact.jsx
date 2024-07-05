import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios.post(
      "/api/v1/message/send",
      {
        name,
        email,
        subject,
        message,
      },
      { withCredentials: true, headers: { "Content-Type": "application/json" } }
    ).then(
      (res)=>{
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    ).catch(
      (error)=>{
        toast.error(error.response.data.message);
        console.log(error.response.data);
      }
    )
  };

  return (
    <section>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="mx-auto max-w-2xl">
          <div class="text-center">
            <h2 class="text-xl text-gray-800 font-bold sm:text-3xl ">
              CONATCT US
            </h2>
          </div>
          <div class="mt-5 p-4 relative z-10 bg-white border border-gray-200 shadow-lg rounded-xl sm:mt-10 md:p-10 ">
            <form onSubmit={handleSendMessage}>
              <div class="mb-4 sm:mb-8">
                <label
                  for="hs-feedback-post-comment-name-1"
                  class="block mb-2 text-sm font-medium"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="hs-feedback-post-comment-name-1"
                  class="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div class="mb-4 sm:mb-8">
                <label
                  for="hs-feedback-post-comment-email-1"
                  class="block mb-2 text-sm font-medium"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="hs-feedback-post-comment-email-1"
                  class="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div class="mb-4 sm:mb-8">
                <label
                  for="hs-feedback-post-comment-email-1"
                  class="block mb-2 text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="hs-feedback-post-comment-email-1"
                  class="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </div>

              <div>
                <label
                  for="hs-feedback-post-comment-textarea-1"
                  class="block mb-2 text-sm font-medium "
                >
                  Message
                </label>
                <div class="mt-1">
                  <textarea
                    id="hs-feedback-post-comment-textarea-1"
                    name="hs-feedback-post-comment-textarea-1"
                    rows="3"
                    class="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    placeholder="Send Message..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>

              <div class="mt-6 grid">
                <button
                  type="submit"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
