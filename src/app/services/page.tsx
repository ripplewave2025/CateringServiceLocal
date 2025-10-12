export default function Services() {
  const services = [
    {
      title: "Wedding Catering",
      description: "Make your special day truly unforgettable with our exquisite wedding catering services. We work closely with you to design a personalized menu that reflects your taste and theme, from intimate ceremonies to grand receptions across Darjeeling, Sikkim, and Siliguri. We handle everything from menu creation to flawless execution, ensuring a stress-free culinary experience.",
      details: [
        "Customized multi-course menus",
        "Theme-based food stations",
        "Beverage packages",
        "Professional service staff",
        "Cake cutting services",
      ],
    },
    {
      title: "Corporate Events",
      description: "Elevate your corporate gatherings with our professional catering solutions. Whether it's a business lunch, a conference, a gala dinner, or an office party, we provide impeccable food and service that leaves a lasting impression. Our efficient team ensures timely delivery and discreet service, perfect for the professional environment.",
      details: [
        "Breakfast meetings & brunches",
        "Buffet lunches and dinners",
        "Gala dinners & award ceremonies",
        "Refreshment breaks & cocktail receptions",
        "Custom branding options",
      ],
    },
    {
      title: "Private Parties",
      description: "Celebrate life's milestones and special occasions with our bespoke private party catering. From birthday bashes to anniversary dinners, and family get-togethers, we bring culinary excellence directly to your home or chosen venue. Enjoy your party while we take care of all the culinary details.",
      details: [
        "Birthday celebrations",
        "Anniversary dinners",
        "Graduation parties",
        "Festive gatherings",
        "Themed party menus",
      ],
    },
    {
      title: "Social Gatherings",
      description: "Planning a casual get-together, a community event, or a large social function? Our catering services are flexible and designed to meet the unique needs of any social gathering. We offer a variety of cuisines and service styles to ensure your guests are delighted and well-fed.",
      details: [
        "Community events",
        "Religious functions",
        "Club events",
        "Picnics and outdoor events",
        "Custom dietary accommodations",
      ],
    },
    {
      title: "Custom Event Planning & Menu Design",
      description: "Beyond just food, we offer comprehensive event planning assistance and tailored menu design to perfectly match your vision. Our experts will guide you through every step, ensuring a cohesive and spectacular event from start to finish in Darjeeling, Sikkim, Siliguri, and neighboring regions.",
      details: [
        "Personalized consultation",
        "Venue selection assistance",
        "Decor & theme integration",
        "Full event coordination",
        "Special dietary requests",
      ],
    },
  ];

  const testimonials = [
    {
      quote: "Our wedding catering was absolutely flawless! The food was delicious, and the service was impeccable. Our guests are still talking about it!",
      author: "- Priya & Rohan, Darjeeling",
    },
    {
      quote: "The corporate lunch provided by [Your Catering Name] was outstanding. Professional, timely, and the quality of food was superb. Highly recommend!",
      author: "- CEO, Tech Solutions, Siliguri",
    },
    {
      quote: "For our anniversary party, they created a custom menu that perfectly captured our tastes. Every dish was a work of art. Thank you!",
      author: "- The Sharmas, Gangtok, Sikkim",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-6 lg:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Our Comprehensive Catering Services</h1>
      </div>

      <div className="relative z-[-1] flex flex-col place-items-center text-center max-w-3xl mb-16">
        <p className="text-lg leading-relaxed text-gray-700">
          We are dedicated to providing exceptional catering experiences for every occasion across Darjeeling, Sikkim, Siliguri, and their beautiful surroundings. Discover our range of services designed to make your event a culinary success.
        </p>
      </div>

      <div className="w-full max-w-5xl space-y-16 mb-20">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center md:items-start bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-blue-700">{service.title}</h2>
              <p className="text-gray-700 text-lg mb-4">{service.description}</p>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Key Offerings:</h3>
              <ul className="list-disc list-inside text-gray-600 text-base space-y-2">
                {service.details.map((detail, dIndex) => (
                  <li key={dIndex}>{detail}</li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center items-center">
              {/* Placeholder for service-specific image/icon */}
              <div className="bg-gray-200 rounded-full w-32 h-32 flex items-center justify-center text-gray-500 text-sm">
                Service Image
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="w-full max-w-5xl my-16 bg-gradient-to-r from-orange-100 to-yellow-100 p-10 rounded-lg shadow-inner">
        <h2 className="text-3xl font-bold text-center mb-10 text-orange-700">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
              <p className="italic text-gray-700 mb-4">\"{testimonial.quote}\"</p>
              <p className="font-semibold text-right text-gray-800">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
