"use client";
import React from "react";
import styles from "@/industries.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaSchool } from "react-icons/fa6";
import { GiShop } from "react-icons/gi";
import { BsBank2 } from "react-icons/bs";
import { FaHospital } from "react-icons/fa";
import { FaCity } from "react-icons/fa6";
import { RiGovernmentFill } from "react-icons/ri";
import {
  Virtual,
  Keyboard,
  Navigation,
  Pagination,
  Parallax,
  A11y,
  Autoplay,
  EffectCoverflow,
  EffectCards,
  Mousewheel,
} from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/bundle";
import { useRouter } from "next/navigation";
import Button from "@/components/button/button";

const industries = [
  {
    title: "Education",
    description: "Teach online and empower students",
    icon: <FaSchool />,
    bg: "#fff5f5",
  },
  {
    title: "Retail",
    description: "Improve sales with video shopping",
    icon: <GiShop />,
    bg: "#fff9e6",
  },
  {
    title: "Banking",
    description: "Build better customer relationships",
    icon: <BsBank2 />,
    bg: "#f3ffe6",
  },
  {
    title: "Goverment",
    description: "Improve inter-agency communication",
    icon: <RiGovernmentFill />,
    bg: "#f0f9ff",
  },
  {
    title: "Healthcare",
    description: "Provide remote medical consultations",
    icon: <FaHospital />,
    bg: "#f5fff5",
  },
  {
    title: "IT Industries",
    description: "Enhance colaboration and boost productivity",
    icon: <FaCity />,
    bg: "#ffbfbf",
  },
];

const Industries = () => {
  return (
    <div className={styles.industriesWrapper}>
      <div className={styles.industriesHeadingWrapper}>
        <div className={styles.industriesHeadingTitle}>
          Connecting Teams Across Industries and Geographies for Enhanced
          Collaboration.
        </div>
        <div className={styles.industriesHeadingSubTitle}>
          Our online meeting software is flexible enough to meet growing video
          conferencing needs across industries. Connect, collaborate, and
          empower your business to stand out in your industry with our secure
          web meeting software.
        </div>
      </div>
      <div className={styles.industriesCardWrapper}>
        <Swiper
          modules={[
            Virtual,
            Keyboard,
            Navigation,
            Pagination,
            Parallax,
            A11y,
            Autoplay,
            EffectCoverflow,
            EffectCards,
            Mousewheel,
          ]}
          spaceBetween={0}
          autoplay={{ pauseOnMouseEnter: true }}
          mousewheel={true}
          grabCursor={true}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index} className={styles.industriesSwiperSlide}>
              <IndustryCard industry={industry} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

function IndustryCard({ industry }) {
  const router = useRouter();
  return (
    <div className={styles.cardWrapper}>
      <div style={{ "--bg": industry.bg }} className={styles.card}>
        <div className={styles.cardHeadingWrapper}>
          <span className={styles.cardImage}>{industry.icon}</span>
          <h1 className={styles.cardHeading}>{industry.title}</h1>
        </div>
        <div className={styles.cardSubtitleWrapper}>
          <div className={styles.cardParagraphWrapper}>
            <p className={styles.cardParagraph}>{industry.description}</p>
            <div className={styles.loginBtn}>
              <Button onClick={() => router.push("/authenticate")}>
                <span>Join Now</span>
                <FaArrowRight className={styles.buttonIcon} />
              </Button>
            </div>
          </div>
          <span className={styles.cardImage}>{industry.icon}</span>
        </div>
      </div>
    </div>
  );
}

export default Industries;
