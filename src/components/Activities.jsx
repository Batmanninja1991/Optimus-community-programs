import React from "react";

const activities = [
  {
    title: "Arts and Crafts",
    description:
      "Engage in creative projects that include painting, drawing, sculpting, and more. Our arts and crafts sessions are designed to foster creativity and improve fine motor skills.",
  },
  {
    title: "Sports and Fitness",
    description:
      "Participate in a variety of sports and fitness activities such as basketball, soccer, yoga, and aerobics. These activities promote physical health and teamwork.",
  },
  {
    title: "Music and Dance",
    description:
      "Explore your musical talents with our music and dance programs. We offer lessons in various instruments, singing, and different styles of dance.",
  },
  {
    title: "Outdoor Adventures",
    description:
      "Enjoy the great outdoors with activities like hiking, picnicking, and nature walks. Our outdoor adventures encourage physical activity and appreciation for nature.",
  },
  {
    title: "Cooking Classes",
    description:
      "Learn to cook delicious and nutritious meals in our cooking classes. These sessions teach valuable life skills and promote healthy eating habits.",
  },
  {
    title: "Community Volunteering",
    description:
      "Give back to the community through various volunteering opportunities. Our programs foster a sense of responsibility and community engagement.",
  },
];

const Activities = () => {
  return (
    <div id="activities" className="w-full py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-primary font-bold mb-8 text-center">
          Our Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {activity.title}
              </h3>
              <p className="text-gray-700">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
