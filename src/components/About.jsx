import React from 'react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <img
              src="/path-to-your-logo.png"
              alt="Company Logo"
              className="mx-auto mb-6 h-24"
            />
            <h1 className="text-4xl font-bold mb-4">บริษัท สร้างบ้านดี จำกัด</h1>
            <p className="text-xl text-gray-600 mb-6">
              เราเชี่ยวชาญในการสร้างบ้านคุณภาพสูงที่ตอบโจทย์ทุกไลฟ์สไตล์
            </p>
            <p className="text-lg text-gray-500">
              บริษัทรับสร้างบ้านที่มีประสบการณ์กว่า 10 ปี พร้อมทีมผู้เชี่ยวชาญที่เน้นคุณภาพและความคุ้มค่า
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">ประวัติความเป็นมา</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-semibold mb-4">จุดเริ่มต้นของเรา</h3>
                <p className="text-gray-600">
                  บริษัท สร้างบ้านดี จำกัด ก่อตั้งขึ้นในปี 2556 โดยทีมสถาปนิกและวิศวกรที่มีความฝันอยากสร้างบ้านที่มีคุณภาพในราคาที่เข้าถึงได้สำหรับทุกครอบครัว
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/path-to-your-history-image.jpg"
                  alt="Company History"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-center">ความสำเร็จที่ผ่านมา</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>สร้างบ้านคุณภาพแล้วกว่า 500 หลัง</li>
                <li>ได้รับรางวัล "บ้านยอดเยี่ยมแห่งปี" ในปี 2565</li>
                <li>ขยายการให้บริการครอบคลุม 5 จังหวัดทั่วประเทศ</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">ทำไมต้องเลือกเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🏗️", title: "วัสดุคุณภาพสูง", description: "เราใช้เฉพาะวัสดุคุณภาพดีที่ผ่านการคัดสรรมาอย่างดี" },
              { icon: "📐", title: "การออกแบบที่ตอบโจทย์", description: "ทีมสถาปนิกของเราพร้อมออกแบบบ้านให้ตรงใจคุณ" },
              { icon: "👥", title: "ทีมงานมืออาชีพ", description: "ทีมงานของเรามีประสบการณ์และความเชี่ยวชาญสูง" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">ทีมงานของเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "คุณสมชาย ใจดี", position: "ผู้ก่อตั้งและซีอีโอ", description: "ผู้มีประสบการณ์กว่า 20 ปีในวงการก่อสร้าง" },
              { name: "คุณสมหญิง รักงาน", position: "หัวหน้าสถาปนิก", description: "สถาปนิกมืออาชีพที่ได้รับรางวัลการออกแบบมากมาย" },
              { name: "คุณสมศักดิ์ ทำงานเก่ง", position: "ผู้จัดการโครงการอาวุโส", description: "ผู้เชี่ยวชาญในการบริหารโครงการก่อสร้าง" },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src={`/path-to-${member.name.split(' ')[0].toLowerCase()}-image.jpg`}
                  alt={member.name}
                  className="mx-auto rounded-full mb-4 w-32 h-32 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-500 mb-2">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

