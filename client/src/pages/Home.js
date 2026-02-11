import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center">

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-6">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Building{" "}
            <span className="text-yellow-400">Quality</span>{" "}
            Homes &{" "}
            <span className="text-yellow-400">Commercial</span>{" "}
            Spaces
          </h1>

          <p className="text-gray-300 text-lg">
            GK Infra is a trusted construction company based in
            Sirohi, Rajasthan. We specialize in residential and
            commercial construction with strong commitment to
            quality, safety, and customer satisfaction.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">

            <Link
              to="/contact"
              className="bg-yellow-500 text-black px-7 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition shadow-lg"
            >
              Get Free Quote
            </Link>

            <Link
              to="/services"
              className="border border-yellow-400 text-yellow-400 px-7 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              Our Services
            </Link>

          </div>

          {/* Quick Links */}
          <div className="flex gap-6 pt-6 text-sm text-gray-400">

            <Link to="/services" className="hover:text-yellow-400">
              Services →
            </Link>

            <Link to="/projects" className="hover:text-yellow-400">
              Projects →
            </Link>

            <Link to="/contact" className="hover:text-yellow-400">
              Contact →
            </Link>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 text-center">

            <div className="bg-white/5 p-4 rounded-lg backdrop-blur">
              <h3 className="text-3xl font-bold text-yellow-400">
                20+
              </h3>
              <p className="text-gray-300 text-sm">
                Houses Built
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-lg backdrop-blur">
              <h3 className="text-3xl font-bold text-yellow-400">
                8+
              </h3>
              <p className="text-gray-300 text-sm">
                Commercial Projects
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-lg backdrop-blur">
              <h3 className="text-3xl font-bold text-yellow-400">
                100%
              </h3>
              <p className="text-gray-300 text-sm">
                Client Satisfaction
              </p>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="relative">

          <div className="absolute -inset-2 bg-yellow-400/20 blur-2xl rounded-xl"></div>

          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="GK Infra Construction Site"
            className="relative rounded-xl shadow-2xl border border-gray-700"
          />

        </div>

      </div>

    </section>
  );
}
