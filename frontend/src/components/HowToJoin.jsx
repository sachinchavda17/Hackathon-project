import React from "react";

const HowToJoin = () => {
  return (
    <section id="how-to-join" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-12">
          Ready to Join Us?
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          <div className="bg-gradient-to-r from-blue-200 via-blue-100 to-white p-8 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-gray-800">
              Eligibility
            </h3>
            <p className="mt-4 text-gray-700">
              Open to [e.g., students, professionals, etc.] who share our
              passion for [field/interest].
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-200 via-blue-100 to-white p-8 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-gray-800">
              Membership Process
            </h3>
            <ol className="mt-4 list-decimal list-inside text-left text-gray-700 mx-auto">
              <li className="mb-2">Fill out the online membership form.</li>
              <li className="mb-2">Attend an orientation session.</li>
              <li className="mb-2">
                Pay the annual membership fee of &#8377;100.
              </li>
              <li>Start participating in our events and activities!</li>
            </ol>
          </div>

          <div className="bg-gradient-to-r from-blue-200 via-blue-100 to-white p-8 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-gray-800">Need Help?</h3>
            <p className="mt-4 text-gray-700">
              Contact us at{" "}
              <a
                href="mailto:contact@yourclub.com"
                className="text-blue-500 hover:underline"
              >
                contact@yourclub.com
              </a>{" "}
              or call us at (123) 456-7890.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
