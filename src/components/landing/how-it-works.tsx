import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
});

type Step = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const BookIcon = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6 8C6 6.343 7.343 5 9 5H21V28H9C7.343 28 6 29.343 6 31V8Z"
      stroke="#F4B42A"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M38 8C38 6.343 36.657 5 35 5H23V28H35C36.657 28 38 29.343 38 31V8Z"
      stroke="#F4B42A"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M6 31C6 29.343 7.343 28 9 28H35C36.657 28 38 29.343 38 31V37H6V31Z"
      stroke="#F4B42A"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M22 5V28"
      stroke="#F4B42A"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M10 12H18M10 17H18"
      stroke="#F4B42A"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const MoneyBagIcon = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M16 10C16 10 13 13 13 18C13 23 16 26 22 26C28 26 31 23 31 18C31 13 28 10 28 10H16Z"
      stroke="#F4B42A"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M18 10L17 6H27L26 10"
      stroke="#F4B42A"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M8 33C8 27.477 14.268 23 22 23C29.732 23 36 27.477 36 33C36 36.866 36 39 36 39H8C8 39 8 36.866 8 33Z"
      stroke="#F4B42A"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M22 28V34M19.5 30C19.5 28.619 20.619 28 22 28C23.381 28 24.5 28.895 24.5 30C24.5 31.105 23.5 31.5 22 32C20.5 32.5 19.5 33.119 19.5 34C19.5 35.381 20.619 36 22 36C23.381 36 24.5 35.105 24.5 34"
      stroke="#F4B42A"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const BadgeIcon = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M22 4L26.472 8.528L32.5 7.5L33.5 13.528L39 16L36.528 21.5L39 27L33.5 29.472L32.5 35.5L26.472 34.472L22 39L17.528 34.472L11.5 35.5L10.5 29.472L5 27L7.472 21.5L5 16L10.5 13.528L11.5 7.5L17.528 8.528L22 4Z"
      stroke="#F4B42A"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M15 22L19.5 26.5L29 17"
      stroke="#F4B42A"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const steps: Step[] = [
  {
    title: "Learn the Stellar Ecosystem",
    description:
      "Take bite-sized Stellar courses designed to build real-world skills.",
    icon: <BookIcon />,
  },
  {
    title: "Two-way earning",
    description:
      "Two-way earning through course completion and taking quests.",
    icon: <MoneyBagIcon />,
  },
  {
    title: "Verifiable track record",
    description:
      "As you learn, you can share and showcase earn knowledge & badge.",
    icon: <BadgeIcon />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-35.5">
      <div className="mx-auto max-w-260">
        <div className="mx-auto max-w-170 text-center">
          <h2
            className={`${syne.className} text-[25px] leading-[1.12] font-bold tracking-normal text-[#1E1F24] sm:text-5xl lg:text-[54px]`}
          >
            How It Works
          </h2>
          <p className="mx-auto mt-5 max-w-160 text-base leading-tight text-[#565B63] sm:text-lg sm:leading-[1.35]">
            Your journey from learning to earning in three simple steps.
          </p>
        </div>

        <div className="mt-22 divide-y divide-[#E5EAF0] lg:mt-22 lg:grid lg:grid-cols-3 lg:divide-y-0">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className={`flex flex-col py-8 last:pb-0 sm:px-6 lg:min-h-65 lg:px-7 lg:py-7 ${
                index % 3 === 1 ? "lg:border-x lg:border-[#DDE4EC]" : ""
              }`}
            >
              <div className="flex h-9 w-12 items-start lg:h-11">
                {step.icon}
              </div>

              <h3 className="mt-11 min-h-6 text-xl leading-[1.2] font-bold text-[#12161F] lg:mt-[66px] lg:min-h-8 lg:text-[26px]">
                {step.title}
              </h3>
              <p className="mt-5 max-w-82.5 font-normal text-base leading-tight text-[#696E78] sm:text-base lg:mt-7 lg:text-[18px] lg:leading-tight">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
