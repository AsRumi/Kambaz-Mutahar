function Card({
  id,
  label,
  title,
  text,
  textClass,
  cardClass,
}: {
  id?: string;
  label: string;
  title: string;
  text: string;
  textClass: string;
  cardClass: string;
}) {
  return (
    <div
      id={id}
      className={`mx-auto mb-4 w-full max-w-md overflow-hidden rounded-xl shadow-md md:max-w-2xl ${cardClass}`}
    >
      <div className="md:flex">
        <div className="relative md:w-48 md:shrink-0">
          <img
            className="h-56 w-full object-cover md:h-full md:min-h-56 md:w-48"
            src="/images/reactjs.png"
            alt="React JS"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <svg viewBox="0 0 24 24" className="h-24 w-24" aria-hidden="true">
              <circle cx="12" cy="12" r="2.05" fill="currentColor" />
              <g fill="none" stroke="currentColor" strokeWidth="1">
                <ellipse cx="12" cy="12" rx="10" ry="4.2" />
                <ellipse
                  cx="12"
                  cy="12"
                  rx="10"
                  ry="4.2"
                  transform="rotate(60 12 12)"
                />
                <ellipse
                  cx="12"
                  cy="12"
                  rx="10"
                  ry="4.2"
                  transform="rotate(120 12 12)"
                />
              </g>
            </svg>
            <div className="mt-2 text-2xl font-semibold">React JS</div>
          </div>
        </div>
        <div className={`min-w-0 p-8 ${textClass}`}>
          <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            {label}
          </div>
          <a
            href="#"
            className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-gray-500">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function TailwindResponsiveDesign() {
  return (
    <div className="font-sans">
      <h2 className="text-3xl font-bold mb-4">Responsive Design</h2>
      <Card
        label="Student Projects"
        title="Building the Kambaz Learning Platform"
        text="A semester long journey from plain HTML to a fully styled Next.js application..."
        textClass="lg:p-12"
        cardClass="bg-white"
      />
      <Card
        id="wd-ai-responsive"
        label="Professional Courses"
        title="Rocket Propulsion Fundamentals"
        text="An in-depth study of the fundamentals of rocket propulsion..."
        textClass=""
        cardClass="bg-white md:bg-indigo-50"
      />
    </div>
  );
}
