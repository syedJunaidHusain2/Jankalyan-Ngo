import "./styles.scss";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BarLoader from "react-spinners/BarLoader";
import whatsappLinkInput from "../../../utils/whatsappLinkInput";

export default function ContactUs() {
  const [isLoading, setisLoading] = useState(false);
  const [sendersName, setSendersName] = useState("");
  const [sendersEmail, setSendersEmail] = useState("");
  const [sendersNumber, setSendersNumber] = useState("");
  const [sendersMssg, setSendersMssg] = useState("");

  const handleUpload = async () => {
    setisLoading(true);
    // Construct the message for WhatsApp
    const message = `Name: ${sendersName}\nEmail: ${sendersEmail}\nPhone: ${sendersNumber}\nMessage: ${sendersMssg}`;
    // Send the message via WhatsApp
    whatsappLinkInput(message);
    setisLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleUpload();
  };

  return (
    <section
      className="contact-container content-heading max-width"
      id="/contact"
    >
      <ToastContainer autoClose={500} />
      <h2>Contact Us</h2>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Name"
            required
            value={sendersName}
            onChange={(e) => setSendersName(e.target.value)}
          />
          <div style={{ display: "flex", gap: "2rem" }}>
            <div style={{ width: "100%" }}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-Mail"
                value={sendersEmail}
                onChange={(e) => setSendersEmail(e.target.value)}
                required
              />
            </div>
            <div style={{ width: "100%" }}>
              <label htmlFor="phone">Phone:</label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Mobile Number"
                required
                value={sendersNumber}
                onChange={(e) => setSendersNumber(e.target.value)}
              />
            </div>
          </div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            type="text"
            placeholder="Enter Your Message"
            required
            value={sendersMssg}
            onChange={(e) => setSendersMssg(e.target.value)}
          />
          <button type="submit">
            {isLoading ? <BarLoader color="#fff" className="loader" /> : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
