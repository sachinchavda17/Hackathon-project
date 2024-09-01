import React from "react";
import img1 from "../assets/AliceJohnson.jpg";
import img2 from "../assets/BobSmith.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alice Johnson",
      feedback:
        "Joining this club has significantly enhanced my networking skills and opened up new opportunities.",
      image: img1,
    },
    {
      name: "Bob Smith",
      feedback:
        "The workshops are incredibly insightful and have helped me develop my technical skills.",
      image: img2,
    },
    // Add more testimonials as needed
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-800">
          Hear from Our Members
        </h2>
        <p className="mt-4 text-lg text-blue-600">
          Our members have amazing stories to tell.
        </p>
        <div className="mt-12 flex flex-wrap gap-8 justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-80 relative"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              <div className="flex justify-center mb-6 relative z-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full shadow-lg border-4 border-blue-100 transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <p className="text-gray-700 italic mb-6 relative z-10">
                "{testimonial.feedback}"
              </p>
              <h4 className="text-xl font-bold text-blue-800 relative z-10">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
