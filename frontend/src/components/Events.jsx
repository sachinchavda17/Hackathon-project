import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import RegistrationModal from "./RegistrationModal";

const Events = () => {
  const [showPast, setShowPast] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset body overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedEvent]);

  const pastEvents = [
    {
      title: "Workshop on React",
      date: "2024-01-15",
      description: "Learn the basics of React.js.",
    },
    {
      title: "Networking Night",
      date: "2024-02-20",
      description: "Meet industry professionals and peers.",
    },
    // Add more events as needed
  ];

  const upcomingEvents = [
    {
      title: "Advanced TailwindCSS",
      date: "2024-05-10",
      description: "Deep dive into TailwindCSS.",
    },
    {
      title: "Hackathon Prep",
      date: "2024-06-05",
      description: "Prepare for the upcoming hackathon.",
    },
    // Add more events as needed
  ];

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Logic for form submission (for frontend project demonstration)
    alert(`Thank you for registering, ${formData.firstName}!`);
    closeModal();
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-blue-800">What We Do</h2>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setShowPast(false)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              !showPast
                ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                : "bg-white text-blue-600 border-2 border-blue-600"
            } shadow-md hover:shadow-lg`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setShowPast(true)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              showPast
                ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                : "bg-white text-blue-600 border-2 border-blue-600"
            } shadow-md hover:shadow-lg`}
          >
            Past Events
          </button>
        </div>

        <Transition
          show={!showPast}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="mt-12 mx-auto max-w-full lg:max-w-2xl">
            <h3 className="text-2xl font-semibold text-center text-blue-800">Upcoming Events</h3>
            <ul className="mt-6 space-y-6">
              {upcomingEvents.map((event, index) => (
                <li
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                  <h4 className="text-xl font-bold text-blue-700">{event.title}</h4>
                  <p className="text-gray-600">{event.date}</p>
                  <p className="mt-2 text-gray-700">{event.description}</p>
                  <button
                    onClick={() => handleRegisterClick(event)}
                    className="mt-3 inline-block text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Register
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Transition>

        <Transition
          show={showPast}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="mt-12 mx-auto max-w-full lg:max-w-2xl">
            <h3 className="text-2xl font-semibold text-center text-blue-800">Past Events</h3>
            <ul className="mt-6 space-y-6">
              {pastEvents.map((event, index) => (
                <li
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                  <h4 className="text-xl font-bold text-blue-700">{event.title}</h4>
                  <p className="text-gray-600">{event.date}</p>
                  <p className="mt-2 text-gray-700">{event.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Transition>
      </div>

      {/* Registration Modal */}
      <RegistrationModal
        selectedEvent={selectedEvent}
        formData={formData}
        handleChange={handleChange}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

export default Events;
