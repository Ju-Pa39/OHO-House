import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    name: "บ้านริมทะเลสาบ",
    images: [
      "/placeholder.svg?height=400&width=600&text=บ้านริมทะเลสาบ 1",
      "/placeholder.svg?height=400&width=600&text=บ้านริมทะเลสาบ 2",
      "/placeholder.svg?height=400&width=600&text=บ้านริมทะเลสาบ 3",
    ],
    area: "250 ตารางเมตร",
    duration: "8 เดือน",
    budget: "15 ล้านบาท",
    location: "เขาใหญ่, นครราชสีมา"
  },
  {
    id: 2,
    name: "อพาร์ทเมนท์กลางเมือง",
    images: [
      "/placeholder.svg?height=400&width=600&text=อพาร์ทเมนท์กลางเมือง 1",
      "/placeholder.svg?height=400&width=600&text=อพาร์ทเมนท์กลางเมือง 2",
      "/placeholder.svg?height=400&width=600&text=อพาร์ทเมนท์กลางเมือง 3",
    ],
    area: "1,500 ตารางเมตร",
    duration: "18 เดือน",
    budget: "50 ล้านบาท",
    location: "สุขุมวิท, กรุงเทพมหานคร"
  },
  {
    id: 3,
    name: "บ้านตากอากาศชายทะเล",
    images: [
      "/placeholder.svg?height=400&width=600&text=บ้านตากอากาศชายทะเล 1",
      "/placeholder.svg?height=400&width=600&text=บ้านตากอากาศชายทะเล 2",
      "/placeholder.svg?height=400&width=600&text=บ้านตากอากาศชายทะเล 3",
    ],
    area: "300 ตารางเมตร",
    duration: "10 เดือน",
    budget: "20 ล้านบาท",
    location: "หัวหิน, ประจวบคีรีขันธ์"
  },
];

const Portfolio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(Array(projects.length).fill(0));

  const nextImage = (projectIndex) => {
    setCurrentImageIndex(prevState => {
      const newState = [...prevState];
      newState[projectIndex] = (newState[projectIndex] + 1) % projects[projectIndex].images.length;
      return newState;
    });
  };

  const prevImage = (projectIndex) => {
    setCurrentImageIndex(prevState => {
      const newState = [...prevState];
      newState[projectIndex] = (newState[projectIndex] - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length;
      return newState;
    });
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">ผลงานของเรา</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <img
                  src={project.images[currentImageIndex[index]]}
                  alt={`${project.name} - รูปที่ ${currentImageIndex[index] + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => prevImage(index)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                  &#10094;
                </button>
                <button
                  onClick={() => nextImage(index)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                  &#10095;
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">ขนาดพื้นที่ใช้สอย:</span> {project.area}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">ระยะเวลาการก่อสร้าง:</span> {project.duration}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">งบประมาณ:</span> {project.budget}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">ที่ตั้ง:</span> {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

