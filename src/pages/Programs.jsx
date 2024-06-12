import React from "react";

const programs = [
  {
    title: "Residential Services",
    description:
      "Providing 24/7 care and supervision in a safe, supportive living environment. Our residential services ensure that individuals with intellectual and developmental disabilities receive the assistance they need with daily activities, personal care, and social interaction.",
  },
  {
    title: "Day Programs",
    description:
      "Offering structured activities and programs during the day to promote skill development, socialization, and community involvement. Our day programs are designed to help individuals build independence and enhance their quality of life.",
  },
  {
    title: "Behavioral Support",
    description:
      "Our team of experienced professionals provides behavioral support services to help individuals manage challenging behaviors and develop positive coping strategies. We work closely with families and caregivers to create customized plans that meet each individual's unique needs.",
  },
  {
    title: "Recreational Activities",
    description:
      "Providing a variety of recreational activities and outings to promote physical health, social interaction, and community engagement. From sports and fitness programs to arts and crafts, we offer something for everyone.",
  },
  {
    title: "Educational Support",
    description:
      "Our educational support services are designed to help individuals with intellectual and developmental disabilities achieve their academic goals. We offer tutoring, mentoring, and support with educational planning and advocacy.",
  },
];

const Programs = () => {
  return (
    <div id="programs" className="w-full pt-24 py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-primary font-bold mb-8 text-center">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {program.title}
              </h3>
              <p className="text-gray-700">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
