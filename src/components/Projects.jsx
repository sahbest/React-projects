import React from "react";
import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/autoplay/autoplay";

const Projects = () => {
  return (
    <div id="project">
      <Typography variant="h5" align="center" color="white" mt={2}>
        MY PROJECTS
      </Typography>
      <div style={{ transform: "scale(.8)" }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: "true" }}
          navigation={{ disableOnInteraction: "false" }}
          autoplay
          loop={true}
        >
          <SwiperSlide>
            <div
              style={{
                width: "100vw",
                transform: "scale(.98)",
                height: "78vh",
              }}
            >
              <img
                src="./images/social.jpg"
                alt=""
                style={{ height: "100%", width: "100%", objectFit: "fill" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: "100vw",
                transform: "scale(.98)",
                height: "78vh",
              }}
            >
              <img
                src="./images/devweb.jpg"
                alt=""
                style={{ height: "100%", width: "100%", objectFit: "fill" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: "100vw",
                transform: "scale(.98)",
                height: "78vh",
              }}
            >
              <img
                src="./images/search.jpg"
                alt=""
                style={{ height: "100%", width: "100%", objectFit: "fill" }}
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <Typography variant="h5" my={1} align="center" color="white">
          All the source code can be found in my github repository
        </Typography>
      </div>
    </div>
  );
};

export default Projects;
