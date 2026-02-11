import { useState } from "react";
import axios from "axios";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await axios.post(
        "https://gk-infra-backend.onrender.com/api/contact",
        formData
      );

      setSuccess(res.data.message);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

    } catch (err) {
      console.log(err);
      setError("Failed to send message. Try again.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-gray-900 text-white min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* Left Info */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Contact <span className="text-yellow-400">Us</span>
          </h1>

          <p className="text-gray-300 mb-6">
            Have a project in mind? Get in touch with GK INFRA today.
            We are ready to build your vision.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📍 Location: India</p>
            <p>📧 Email: contact@gkinfra.com</p>
          </div>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-5"
        >

          <h2 className="text-2xl font-semibold mb-4">
            Send Message
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-yellow-400"
            required
          ></textarea>

          {/* Success Message */}
          {success && (
            <p className="text-green-400 font-medium">
              {success}
            </p>
          )}

          {/* Error Message */}
          {error && (
            <p className="text-red-400 font-medium">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 text-black py-3 rounded font-semibold hover:bg-yellow-600 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </section>
  );
}
