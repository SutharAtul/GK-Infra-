export default function Services() {
  return (
    <section className="bg-gray-900 text-white min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-4">
          Our <span className="text-yellow-400">Services</span>
        </h1>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          With years of experience in Sirohi, Rajasthan, GK Infra has successfully
          delivered quality construction projects with complete customer
          satisfaction.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">

          <div className="bg-gray-800 p-5 rounded-lg shadow">
            <h2 className="text-3xl font-bold text-yellow-400">20+</h2>
            <p className="text-gray-300 mt-2">Houses Built</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg shadow">
            <h2 className="text-3xl font-bold text-yellow-400">8+</h2>
            <p className="text-gray-300 mt-2">Commercial Projects</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg shadow">
            <h2 className="text-3xl font-bold text-yellow-400">100%</h2>
            <p className="text-gray-300 mt-2">Client Satisfaction</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg shadow">
            <h2 className="text-3xl font-bold text-yellow-400">5+ Years</h2>
            <p className="text-gray-300 mt-2">Experience</p>
          </div>

        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Service 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Residential Construction
            </h3>
            <p className="text-gray-300">
              We build strong, modern, and affordable homes with quality
              materials and professional workmanship.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Commercial Buildings
            </h3>
            <p className="text-gray-300">
              Construction of shops, offices, and commercial spaces designed
              for long-term business success.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Renovation & Remodeling
            </h3>
            <p className="text-gray-300">
              We upgrade old buildings, homes, and offices with modern designs
              and durable finishing.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
