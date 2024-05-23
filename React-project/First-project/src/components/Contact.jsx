import "./Contact.css";
import Food from "../assets/fastfood.png";

export default function Contact() {
  return (
    <div className="contact">
      <div className="left"></div>
      <div className="right">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter your name" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter your email" type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Leave your message"
          ></textarea>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
