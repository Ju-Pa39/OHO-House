import React from "react";
import Screenshot1 from '../assets/img/Screenshot1.jpg'
import Screenshot2 from '../assets/img/Screenshot2.jpg'
import Screenshot3 from '../assets/img/Screenshot3.jpg'
import Screenshot4 from '../assets/img/Screenshot4.jpg'
import Screenshot5 from '../assets/img/Screenshot5.jpg'

const servicesImg = [
  {
    title: "รับสร้างบ้าน",
    description: "บริการรับสร้างบ้านคุณภาพตามงบประมาณของคุณ",
    image: Screenshot1, 
  },
  {
    title: "รับรีโนเวทบ้าน",
    description: "เปลี่ยนบ้านเก่าให้เป็นบ้านใหม่ในแบบที่คุณต้องการ",
    image: Screenshot2,
  },
  {
    title: "รับทำช้อปร้านค้า-ร้านกาแฟ",
    description: "ออกแบบและตกแต่งร้านค้าหรือร้านกาแฟในสไตล์ที่คุณชื่นชอบ",
    image: Screenshot3,
  },
  {
    title: "งานเฉพาะอย่าง ต่อเติม",
    description: "บริการต่อเติมบ้าน หรืองานก่อสร้างเฉพาะจุด", 
    image: Screenshot4,
  },
  {
    title: "ออกแบบบ้าน BOQ",
    description: "ให้คำปรึกษาและออกแบบบ้าน พร้อมรายการค่าใช้จ่าย BOQ",
    image: Screenshot5,
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">บริการของเรา</h1>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {servicesImg.map((service, index) => (
          <div key={index} className="flex-none w-64 relative group cursor-pointer">
            <div className="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-2xl p-4 mx-2 mb-2 shadow-lg transform transition-transform duration-300 group-hover:-translate-y-1">
              <h2 className="text-lg font-bold mb-1 text-gray-800">
                {service.title}
              </h2>
              <p className="text-xs text-gray-600">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

