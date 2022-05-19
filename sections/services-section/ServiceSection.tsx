import React from "react";
import Section from "../../components/section/Section";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import ServiceCard, {
  ServiceCardProps,
} from "../../components/service-card/ServiceCard";
import LinkButton from "../../components/link-button/LinkButton";

export default function ServiceSection() {
  const services: ServiceCardProps[] = [
    {
      image: "/assets/icons/javascript.svg",
      title: "Deploy digital services to the web",
      description:
        "Do you need help bringing your services to the web? I can help you deploy your service to the cloud.",
    },
    {
      image: "/assets/icons/javascript.svg",
      title: "Implementing designs or wireframes",
      description:
        "I can help turn your idea into a pixel-perfect interactive prototype using CSS,HTML and JavaScript.",
    },
    {
      image: "/assets/icons/javascript.svg",
      title: "Developing Responsive Web apps",
      description:
        "I can help you create complex software for your business that will run on web browsers and mobile application user interfaces.",
    },
    {
      image: "/assets/icons/javascript.svg",
      title: "Create static or server side rendered webpages",
      description:
        "If you require static webpages such as a blog or personal website, please get in touch.",
    },
    {
      image: "/assets/icons/javascript.svg",
      title: "Restful API implementation",
      description:
        "I can help you create RESTful api services with JavaScript frameworks such as Express.js or Nest.js.",
    },
    {
      image: "/assets/icons/javascript.svg",
      title: "Improve quality and reliability of your app",
      description:
        "I can help ensure the realiablity and quality of your application by implementing tests against your applications scope and specification.",
    },
  ];
  return (
    <Section
      {...{
        backgroundColour: "light",
        id: "services",
        backgroundImages: false,
      }}
    >
      <div className="w-full flex flex-col space-y-6 justify-center items-center mb-6">
        <h1>Services</h1>
        <h2>I can help you with</h2>
      </div>
      <div className="mb-10">
        <Swiper
          modules={[Pagination, Grid]}
          pagination={{ clickable: true }}
          spaceBetween={25}
          slidesPerView={1}
          grid={{
            rows: 2,
            fill: "row",
          }}
          breakpoints={{
            700: {
              slidesPerView: 2,
              spaceBetween: 25,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {services.map((service) => (
            <SwiperSlide key={service.title}>
              <ServiceCard
                {...{
                  title: service.title,
                  image: service.image,
                  description: service.description,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full flex justify-center">
        <LinkButton {...{ href: "#contact" }}>Contact me</LinkButton>
      </div>
    </Section>
  );
}
