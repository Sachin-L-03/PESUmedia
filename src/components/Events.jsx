import React from 'react';
import "swiper/css"; // Import Swiper CSS
import "swiper/css/navigation"; // Import Navigation CSS
import "swiper/css/pagination"; // Import Pagination CSS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Importing images
import EventImage1 from '../assets/At.jpg';
import EventImage2 from '../assets/Kr24.jpg';
import EventImage3 from '../assets/Epoch.jpg';
import EventImage4 from '../assets/Missing.jpg';
import EventImage5 from '../assets/AI.jpg';
import FooterImage from '../assets/Logo.png'; // Replace with the image you want for the footer

const Events = () => {
  const eventImages = [
    {
      src: EventImage1,
      title: "AT - NITE",
      description: "This is the first event happening soon.",
    },
    {
      src: EventImage2,
      title: "Sangeetha vaibhava",
      description: "Join us for this amazing event filled with excitement.",
    },
    {
      src: EventImage3,
      title: "Epoch",
      description: "Don't miss out on this incredible experience.",
    },
    {
      src: EventImage4,
      title: "Missing",
      description: "Experience innovation and creativity at this event.",
    },
    {
      src: EventImage5,
      title: "AI - week",
      description: "A special event you will never forget.",
    },
  ];

  return (
    <div className="w-full min-h-screen p-4 bg-[#0c0c0c] overflow-hidden">
      {/* Upcoming Events Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Upcoming Events</h2>
        <div className="relative w-full h-[80vh]">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next-upcoming',
              prevEl: '.swiper-button-prev-upcoming',
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="h-full"
          >
            {eventImages.map((event, index) => (
              <SwiperSlide key={index} className="relative flex flex-col items-center">
                {/* Event Image */}
                <img
                  src={event.src}
                  alt={`Upcoming Event ${index + 1}`}
                  className="w-full h-2/3 object-cover rounded-md"
                />
                {/* Title and Description */}
                <div className="mt-4 text-center text-white">
                  <h3 className="font-bold text-lg">{event.title}</h3>
                  <p className="text-sm">{event.description}</p>
                </div>
                {/* Buttons */}
                <div className="mt-4 flex gap-4">
                  <button className="p-4 bg-[#9B7BDB] text-white rounded-xl border-2 border-[#7E5ACD] shadow-lg hover:bg-[#7E5ACD]">
                    Register
                  </button>
                  <button className="p-4 bg-[#9B7BDB] text-white rounded-xl border-2 border-[#7E5ACD] shadow-lg hover:bg-[#7E5ACD]">
                    Explore
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev-upcoming absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#040404] text-white p-4 border-2 border-[#7E5ACD] rounded-md z-20 shadow-lg hover:bg-[#7E5ACD] cursor-pointer">
            <span className="text-3xl">{"<"}</span>
          </div>
          <div className="swiper-button-next-upcoming absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#020202] text-white p-4 border-2 border-[#7E5ACD] rounded-md z-20 shadow-lg hover:bg-[#7E5ACD] cursor-pointer">
            <span className="text-3xl">{">"}</span>
          </div>
        </div>
      </div>

      {/* Past Events Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Past Events</h2>
        <div className="relative w-full h-[80vh]">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next-past',
              prevEl: '.swiper-button-prev-past',
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="h-full"
          >
            {eventImages.map((event, index) => (
              <SwiperSlide key={index} className="relative flex flex-col items-center">
                <img
                  src={event.src}
                  alt={`Past Event ${index + 1}`}
                  className="w-full h-2/3 object-cover rounded-md"
                />
                {/* Title and Description */}
                <div className="mt-4 text-center text-white">
                  <h3 className="font-bold text-lg">{event.title}</h3>
                  <p className="text-sm">{event.description}</p>
                </div>
                <div className="mt-4">
                  <button className="p-4 bg-[#9B7BDB] text-white rounded-xl border-2 border-[#7E5ACD] shadow-lg hover:bg-[#7E5ACD]">
                    Explore
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev-past absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#0d0d0d] text-white p-4 border-2 border-[#7E5ACD] rounded-md z-20 shadow-lg hover:bg-[#7E5ACD] cursor-pointer">
            <span className="text-3xl">{"<"}</span>
          </div>
          <div className="swiper-button-next-past absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#141414] text-white p-4 border-2 border-[#7E5ACD] rounded-md z-20 shadow-lg hover:bg-[#7E5ACD] cursor-pointer">
            <span className="text-3xl">{">"}</span>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#0c0c0c] text-white mt-20">
        <div className="w-full h-[80px] bg-[#020202] flex justify-center items-center">
          <img
            src={FooterImage}
            alt="Footer Image"
            className="object-cover"
            style={{ width: 'auto', height: '100%' }}
          />
        </div>
        <div className="w-full py-10 text-center">
          <h3 className="text-2xl font-semibold">Contact Us</h3>
          <p className="mt-4">Email: hopes@pesu.com</p>
          <p className="mt-2">Phone: +1 234 567 890</p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-[#0d0d0e] text-white py-2 px-6 rounded-xl border-2 border-white hover:bg-[#7E5ACD]">
              Facebook
            </button>
            <button className="bg-[#040404] text-white py-2 px-6 rounded-xl border-2 border-white hover:bg-[#7E5ACD]">
              Twitter
            </button>
            <button className="bg-[#020202] text-white py-2 px-6 rounded-xl border-2 border-white hover:bg-[#7E5ACD]">
              Instagram
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Events;
