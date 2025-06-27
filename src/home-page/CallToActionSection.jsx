import { Button } from "../components/ui/button";

export default function CallToActionSection() {
  return (
    <section className="bg-background py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="relative isolate overflow-hidden bg-muted-foreground/50 px-6 py-20 text-center rounded-3xl border border-gray-100 shadow-sm sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-lime-500 ">
            Join our community today!
          </h2>

          <h3 className="mx-auto mt-4 md:mt-2 max-w-xl text-lg leading-8 text-gray-50/80">
            Sign up for exclusive access to events, resources, and more.
          </h3>

          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Button className="bg-[#c6650c] hover:bg-primary/90 text-white font-bold px-6">
              Explore the forum
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>

          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#cta-gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="cta-gradient">
                <stop stopColor="#c6650c" />
                <stop offset="1" stopColor="#92400e" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
