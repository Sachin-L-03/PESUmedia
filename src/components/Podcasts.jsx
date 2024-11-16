import React from 'react';
import "swiper/css"; // Import Swiper CSS
import "swiper/css/navigation"; // Import Navigation CSS
import "swiper/css/pagination"; // Import Pagination CSS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import PodcastImage1 from '../assets/Mainpodcast.png';  // Replace with your actual image assets
import PodcastImage2 from '../assets/podcast2.jpeg';
import PodcastImage3 from '../assets/podcast3.jpeg';
import PodcastImage4 from '../assets/podcast4.jpeg';
import PodcastImage5 from '../assets/podcast5.jpeg';
import FooterImage from '../assets/Logo.png';

const Podcasts = () => {
  const podcastImages = [
    PodcastImage1,
    PodcastImage2,
    PodcastImage3,
    PodcastImage4,
    PodcastImage5,
  ];

  const podcastDescriptions = [
    "Join us for an amazing podcast experience filled with stories and inspiration.",
    "Get ready for insightful discussions and exciting content.",
    "Dive into the world of podcasts with our featured episodes.",
    "Listen to stories that will captivate and inspire you.",
    "An experience you don't want to miss, full of knowledge and creativity."
  ];

  return (
    <div className="w-full min-h-full bg-black text-white p-4">
      {/* First Section: Big Podcast Image with Title and Description */}
      <div className="relative w-full h-[70vh] bg-black">
        <img
          src={PodcastImage1}
          alt="Main Podcast"
          className="w-full h-full object-contain rounded-2xl"
        />
        {/* Title and Description */}
        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="text-3xl font-bold">ETCETERA</h2>
          <p className="mt-2 text-lg">{podcastDescriptions[0]}</p>
        </div>
        {/* Listen Now Button */}
        <button className="absolute bottom-8 right-8 p-4 bg-white text-black rounded-full shadow-lg hover:bg-gray-200">
          Listen Now
        </button>
      </div>

      {/* Second Section: Grid of Podcast Boxes (Sliding) */}
      <div className="relative w-full mt-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Podcasts</h2>
        <Swiper
          spaceBetween={30} // Spacing between slides
          slidesPerView={4} // Show 4 podcasts at once
          loop={true} // Infinite loop
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay
          pagination={{ clickable: true }} // Pagination dots
          navigation={{
            nextEl: '.swiper-button-next-podcasts',
            prevEl: '.swiper-button-prev-podcasts',
          }} // Navigation arrows
          modules={[Navigation, Pagination, Autoplay]}
          className="h-[350px]" // Height for the slide area
        >
          {podcastImages.map((image, index) => (
            <SwiperSlide key={index} className="relative w-full h-full">
              <div className="relative w-full h-full bg-gray-700 rounded-md overflow-hidden">
                <img
                  src={image}
                  alt={`Podcast ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Title and Description Below the Image */}
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-4 text-white">
                  <h3 className="font-bold text-xl">Podcast {index + 1}</h3>
                  <p className="text-sm">{podcastDescriptions[index]}</p>
                </div>
                {/* Play Button */}
                <button className="absolute bottom-4 right-4 p-3 bg-white text-black rounded-full shadow-lg hover:bg-gray-200">
                  <span className="text-3xl">&#9654;</span> {/* Play icon */}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="swiper-button-prev-podcasts absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#040404] text-white p-4 border-2 border-[#7E5ACD] rounded-md z-20 shadow-lg hover:bg-[#7E5ACD] cursor-pointer">
          <span className="text-3xl">{"<"}</span>
        </div>
        <div className="swiper-button-next-podcasts absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#020202] text-white p-4 border-2 border-[#7E5ACD] rounded-md z-20 shadow-lg hover:bg-[#7E5ACD] cursor-pointer">
          <span className="text-3xl">{">"}</span>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#0c0c0c] text-white mt-20">
        {/* First Part: Image */}
        <div className="w-full h-[80px] bg-[#020202] flex justify-center items-center">
          <img
            src={FooterImage}
            alt="Footer Image"
            className="object-cover"
            style={{ width: 'auto', height: '100%' }}
          />
        </div>

        {/* Second Part: Contact & Other Details */}
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

export default Podcasts;
