import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-blue-600">About HackOut Club</h2>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          HackOut Club is a community-driven organization dedicated to fostering innovation, creativity, and collaboration among passionate tech enthusiasts. Our mission is to empower individuals by providing a platform for them to transform ideas into reality through hackathons, workshops, and networking events.
        </p>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          At HackOut Club, we believe in the power of technology to solve real-world problems and drive social change. Our core values are centered around inclusivity, learning, and teamwork. Whether you’re a seasoned developer or just starting, our goal is to help you grow, connect with like-minded individuals, and make a meaningful impact.
        </p>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Join us in our journey to create, innovate, and inspire. Together, we can push the boundaries of what's possible and build a better future, one hackathon at a time.
        </p>
      </div>
    </section>
  );
};

export default About;
