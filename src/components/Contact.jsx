import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('ขอบคุณสำหรับข้อความของคุณ เราจะติดต่อกลับโดยเร็วที่สุด');
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">ติดต่อเรา</h1>
            <p className="text-xl text-gray-600">
              ติดต่อเราเพื่อเริ่มต้นสร้างบ้านในฝันของคุณ
            </p>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/path-to-your-header-image.jpg"
              alt="Home Construction"
              className="w-full h-full object-cover opacity-25"
            />
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Contact Information */}
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <h2 className="text-2xl font-bold mb-6">ข้อมูลการติดต่อ</h2>
              <div className="mb-6">
                <h3 className="font-semibold mb-2">ที่อยู่</h3>
                <p>123/45 ถนนสุขสบาย แขวง/เขต กรุงเทพมหานคร</p>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold mb-2">เบอร์โทรศัพท์</h3>
                <a href="tel:+66123456789" className="text-blue-600 hover:underline">
                  02-123-4567
                </a>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold mb-2">อีเมล</h3>
                <a href="mailto:info@yourhomebuilder.com" className="text-blue-600 hover:underline">
                  info@yourhomebuilder.com
                </a>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold mb-2">เวลาทำการ</h3>
                <p>เปิดทุกวันจันทร์-ศุกร์ เวลา 9.00 - 18.00 น.</p>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold mb-2">ติดตามเรา</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.411 24H4.58C2.053 24 0 21.947 0 19.42V4.58C0 2.053 2.053 0 4.58 0h14.83C21.947 0 24 2.053 24 4.58v14.84C24 21.947 21.947 24 19.411 24zM12 3.333c-4.963 0-9 3.205-9 7.154 0 3.537 3.137 6.501 7.375 7.064.287.062.68.191.78.439.089.224.058.574.028.802l-.118.749c-.036.228-.168.894.777.488 1.654-.71 5.71-3.362 7.79-5.758h.001C21.449 12.44 21 9.849 21 10.487c0-3.949-4.037-7.154-9-7.154z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3 px-4">
              <h2 className="text-2xl font-bold mb-6">ส่งข้อความถึงเรา</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    ชื่อ-นามสกุล
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    อีเมล
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    เบอร์โทรศัพท์
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    ข้อความ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2 border rounded-md"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                >
                  ส่งข้อความ
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">ที่ตั้งของเรา</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5438577345306!2d100.56324715!3d13.7455676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ0JzQ0LjAiTiAxMDDCsDMzJzQ3LjciRQ!5e0!3m2!1sen!2sth!4v1629788150000!5m2!1sen!2sth"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

