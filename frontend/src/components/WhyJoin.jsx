import React from "react";

const WhyJoin = () => {
  return (
    <section
      id="why-join"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-600">
          Why Join HackOut Club?
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-blue-500 text-5xl">🤝</div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-800">
              Networking Opportunities
            </h3>
            <p className="mt-4 text-gray-600">
              Connect with like-minded individuals and industry professionals.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-blue-500 text-5xl">📚</div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-800">
              Skill Development
            </h3>
            <p className="mt-4 text-gray-600">
              Enhance your skills through workshops and seminars.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-blue-500 text-5xl">🚀</div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-800">
              Leadership Experience
            </h3>
            <p className="mt-4 text-gray-600">
              Take on leadership roles and manage projects.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-blue-500 text-5xl">🌍</div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-800">
              Community Involvement
            </h3>
            <p className="mt-4 text-gray-600">
              Participate in community service and outreach activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
