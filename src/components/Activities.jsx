import React from "react";

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
