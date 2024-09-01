import React from "react";
import { Transition } from "@headlessui/react";

const RegistrationModal = ({ selectedEvent, formData, handleChange, closeModal, handleSubmit }) => {
  if (!selectedEvent) return null; // Return null if no event is selected

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <Transition
        show={!!selectedEvent}
        enter="transition-all duration-500 transform"
        enterFrom="opacity-0 scale-75"
        enterTo="opacity-100 scale-100"
        leave="transition-all duration-500 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-75"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h3 className="text-2xl font-semibold mb-4 text-blue-800">
            Register for {selectedEvent.title}
          </h3>
          <p className="text-gray-700 mb-4">{selectedEvent.description}</p>

          {/* Registration Form */}
          <form>
            <div className="flex md:gap-5 flex-col md:flex-row">
              <div className="mb-4 flex-1">
                <label className="block text-sm font-semibold mb-1 text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mb-4 flex-1">
                <label className="block text-sm font-semibold mb-1 text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 bg-gray-500 text-white rounded-full shadow-md hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full shadow-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Transition>
    </div>
  );
};

export default RegistrationModal;
