export default function AboutSection() {
  return (
    <section className="bg-background">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 px-5 md:px-0 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-primary ">
              About Our Community
            </h2>
            <p className="mt-5 text-base md:text-lg text-gray-50/80 max-w-md leading-relaxed">
              We believe in building a caring community by sharing surplus food
              and supporting those in need. Our platform connects neighbors to
              reduce food waste and ensure that no meal goes to waste. Join us
              in making a positive impact and fostering sustainability together.
            </p>
            <div className="mt-5 md:mt-8">
              <a
                href="https://en.wikipedia.org/wiki/Food_waste"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c6650c] hover:text-chart-1 font-medium inline-flex items-center"
              >
                Learn more about our mission
                <span className="ml-2 text-xl">→</span>
              </a>
            </div>
          </div>

          <div className="mt-5 md:mt-0">
            <img
              src="/food-sharing.jpg"
              alt="Community sharing food"
              className="object-cover rounded-lg shadow-md w-full h-auto max-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
