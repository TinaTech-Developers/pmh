"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
} from "swiper/modules";
import ServiceCard from "./ServiceCard";

function ServicesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="p-10 md:px-[50px] flex items-center justify-center py-10 bg-white">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        centeredSlides={true}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className=""
      >
        <SwiperSlide>
          <ServiceCard
            title="Laser Cutting"
            image="/laser.webp"
            desc="At PMH, we offer precision laser cutting services that deliver unmatched
        accuracy and quality. Utilizing the latest technology, we can cut,
        engrave, and customize a wide range of materials to meet your specific
        needs. Whether you're working with metal, wood, acrylic, or other
        materials, our advanced laser cutting techniques ensure clean, precise
        results every time. Let PMH bring your ideas to life with expert
        craftsmanship and cutting-edge technology."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            title="Teardrop Banners"
            image="/teardrops.jpg"
            desc="At PMH, we specialize in creating vibrant and eye-catching teardrop banners designed to make a lasting impression. Whether for outdoor events, trade shows, or promotions, our high-quality banners are made to withstand the elements while ensuring your message stands out. With customizable sizes, designs, and materials, we help you create the perfect display to capture attention and elevate your brand visibility. Trust PMH for durable, professional, and attention-grabbing teardrop banners that bring your vision to life.

"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            title="Gazebo Tents"
            image="/gaze.png"
            desc="At PMH, we offer high-quality gazebo tents that provide reliable shelter and style for any outdoor event. Perfect for festivals, trade shows, weddings, and more, our gazebo tents are designed for both durability and ease of setup. Available in various sizes and customizable designs, they offer a professional and practical solution to ensure your event is comfortable and visually appealing. With PMH, you can trust that your event will be supported by sturdy, weather-resistant gazebo tents that stand out."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            title="Dye Sublimation"
            image="/dye.webp"
            desc="At PMH, we specialize in dye sublimation printing, offering vibrant, high-quality, and long-lasting designs on a wide range of materials. Whether for apparel, banners, or promotional items, our dye sublimation process ensures sharp colors and smooth finishes that won’t fade or crack over time. Perfect for custom products and branding, this method produces durable, full-color prints with exceptional detail. Let PMH help you bring your creative ideas to life with our advanced dye sublimation services.

"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            title="SHE Signage"
            image="/she.png"
            desc="At PMH, we offer custom signage solutions that effectively communicate your message with clarity and style. From indoor displays to large outdoor signs, we use high-quality materials and advanced printing techniques to create durable, attention-grabbing signs that elevate your brand. Whether for retail, events, or office spaces, our signage services are tailored to meet your unique needs, ensuring your business stands out and leaves a lasting impression.

"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            title="Vehicle Branding"
            image="/vehicle-branding.png"
            desc="At PMH, we provide top-tier vehicle branding services that turn your fleet into mobile billboards. Our high-quality wraps, decals, and graphics are designed to make your vehicles stand out on the road while promoting your brand. Whether for a single vehicle or an entire fleet, we ensure that your branding is bold, durable, and eye-catching. With PMH, you can increase visibility and attract more customers, all while on the move.

"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            title="Road Signs"
            image="/road.png"
            desc="At PMH, we specialize in producing durable and highly visible road signs designed to ensure safety and effective communication on the road. Whether for traffic control, directional guidance, or safety warnings, our road signs are made from high-quality materials to withstand the elements and meet regulatory standards. We offer customizable options to suit your specific needs, ensuring clear and reliable signage for any road or infrastructure project.



"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            title="DTF Printing"
            image="/dtf.png"
            desc="At PMH, we offer advanced DTF (Direct-to-Film) printing services that provide vibrant, high-quality prints on a variety of materials. This cutting-edge technology allows for full-color designs to be transferred onto fabrics, garments, and other surfaces with exceptional detail and durability. DTF printing is perfect for custom apparel, promotional items, and merchandise, offering flexibility, quick turnaround times, and long-lasting results. Trust PMH to bring your designs to life with our precise and reliable DTF printing services.

"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            title="PVC Banners"
            image="/pvc.jpg"
            desc="At PMH, we specialize in creating high-quality PVC banners that are perfect for both indoor and outdoor advertising. Made from durable, weather-resistant material, our PVC banners offer vibrant, long-lasting prints that can withstand the elements. Whether you're promoting an event, sale, or brand, our customizable PVC banners are designed to capture attention and deliver your message effectively. With PMH, you can trust that your banner will be professionally printed and built to last."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            title="Embroidery"
            image="/embroidery.jpg"
            desc="At PMH, we offer professional embroidery services that add a touch of sophistication and durability to your apparel and merchandise. Whether it's for uniforms, promotional products, or custom designs, our high-quality embroidery ensures crisp, vibrant, and long-lasting results. With attention to detail and precision, we help bring your logo or design to life on a variety of fabrics, creating a polished and professional look that stands the test of time."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ServicesSlider;
