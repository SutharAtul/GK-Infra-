export default function Projects() {
  return (
    <section className="bg-gray-900 text-white min-h-screen py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-4">
          Our <span className="text-yellow-400">Projects</span>
        </h1>

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A showcase of our completed residential and commercial
          projects in and around Sirohi, Rajasthan. We focus on
          quality construction, timely delivery, and customer
          satisfaction.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">

            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
              alt="Residential House - Sirohi"
              className="h-52 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                Modern Residential House
              </h3>

              <p className="text-gray-300 text-sm">
                Independent house construction completed in
                Sirohi with modern design and premium finishing.
              </p>

              <p className="text-gray-500 text-xs mt-3">
                📍 Location: Sirohi, Rajasthan
              </p>

            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">

            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
              alt="Commercial Building - Sirohi"
              className="h-52 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                Commercial Building
              </h3>

              <p className="text-gray-300 text-sm">
                Multi-floor commercial complex built for
                offices and retail businesses in Sirohi.
              </p>

              <p className="text-gray-500 text-xs mt-3">
                📍 Location: Sirohi, Rajasthan
              </p>

            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">

            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
              alt="Residential Villa - Sirohi"
              className="h-52 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                Luxury Villa Project
              </h3>

              <p className="text-gray-300 text-sm">
                High-quality villa construction with
                customized interior and exterior design.
              </p>

              <p className="text-gray-500 text-xs mt-3">
                📍 Location: Sirohi, Rajasthan
              </p>

            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-16">

          <h3 className="text-2xl font-semibold mb-4">
            Want to Build With Us?
          </h3>

          <p className="text-gray-400 mb-6">
            Contact GK Infra today for reliable and professional
            construction services.
          </p>

          <a
            href="/contact"
            className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Get Free Consultation
          </a>

        </div>

      </div>

    </section>
  );
}
