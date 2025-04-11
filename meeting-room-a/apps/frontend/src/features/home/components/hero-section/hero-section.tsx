"use client";
import { useState, forwardRef, useImperativeHandle, useRef } from "react";
import { EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import styles from "./hero-section.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { MdVideoCameraFront, MdChat } from "react-icons/md";
import { BiSolidChalkboard } from "react-icons/bi";
import SwiperNavigation from "../swiper-navigation/swiper-navigation";
import "swiper/css";
import "swiper/css/bundle";
import { Blur } from "@/components/blur/blur";
import Button from "@/components/button/button";
import Navigation from "@/components/navigation/navigation";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const changeSlider = (index) => {
    swiperRef.current?.changeSlider(index);
  };

  return (
    <>
      <Navigation />
      <section className={styles.heroSection}>
        <Blur />
        <div className={styles.heroContentWrapper}>
          <div className={styles.heroCard}>
            <HeroCardLeft
              activeIndex={activeIndex}
              setActiveIndex={changeSlider}
            />
            <HeroCardRight
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              ref={swiperRef}
            />
          </div>
        </div>
      </section>
    </>
  );
};

const HeroCardLeft = ({ activeIndex, setActiveIndex }) => {
  const router = useRouter();
  const onJoinClick = () => router.push("/authenticate");
  return (
    <div className={styles.heroCardLeft}>
      <div className={styles.heroContent}>
        <div className={styles.heroDetailsWrapper}>
          <p className={styles.heroMessage}>
            <img src="/assets/npm.png" alt="logo" className={styles.npmImage} />
            <span>Connect and Collaborate</span> <span>Seamlessly with</span>
            <span className={styles.heroSectionMessageHighLightWrapper}>
              <span
                className={`${styles.heroSectionMessageHighLight} ${activeIndex === 0 && styles.heroSectionMessageHighLightHover}`}
                onMouseEnter={() => setActiveIndex(0)}
              >
                Video
                <span className={styles.heroSectionMessageHighLightIcon}>
                  <MdVideoCameraFront />
                </span>
              </span>
              <span
                className={`${styles.heroSectionMessageHighLight} ${activeIndex === 1 && styles.heroSectionMessageHighLightHover}`}
                onMouseEnter={() => setActiveIndex(1)}
              >
                Chat
                <span className={styles.heroSectionMessageHighLightIcon}>
                  <MdChat />
                </span>
              </span>
              <span className={styles.heroSectionMessageHighLightAnd}>&</span>
              <span
                className={`${styles.heroSectionMessageHighLight} ${activeIndex === 2 && styles.heroSectionMessageHighLightHover}`}
                onMouseEnter={() => setActiveIndex(2)}
              >
                Whiteboarding
                <span className={styles.heroSectionMessageHighLightIcon}>
                  <BiSolidChalkboard />
                </span>
              </span>
            </span>
            <span>Anytime, Anywhere!</span>
          </p>
          <div className={styles.heroDescriptionWrapper}>
            <p className={styles.heroDescription}>
              Seamlessly connect with high-quality video, real-time chat, and
              easy presentation tools anytime, anywhere. Transform your teamwork
              and drive projects forward effortlessly!
            </p>
          </div>
          <div className={styles.buttonWrapper}>
            <Button onClick={onJoinClick} className={styles.buttonExtention}>
              <span>{"Join now"}</span>
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroCardRight = forwardRef(({ activeIndex, setActiveIndex }, ref) => {
  const swiperRef = useRef(null);

  const changeSlider = (index) => {
    swiperRef.current?.slideTo(index, 1000);
    setActiveIndex(index);
  };

  useImperativeHandle(ref, () => ({
    changeSlider,
  }));

  return (
    <div className={styles.heroCardRight}>
      <Swiper
        modules={[EffectCreative]}
        effect="creative"
        creativeEffect={{
          next: { opacity: 0 },
          prev: { opacity: 0, translateX: [10, 0, 0] },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className={styles.heroSectionRightSwipper}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        initialSlide={0}
        enabled={true}
      >
        <SwiperSlide className={styles.heroSectionRightSwipperSlide}>
          <img
            src="/assets/Events.avif"
            alt={"Meetings"}
            className={styles.featureCardImg}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.heroSectionRightSwipperSlide}>
          <img
            src="/assets/Meetings.avif"
            alt={"Meetings"}
            className={styles.featureCardImg}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.heroSectionRightSwipperSlide}>
          <img
            src="/assets/Messaging.avif"
            alt={"Meetings"}
            className={styles.featureCardImg}
          />
        </SwiperSlide>
      </Swiper>
      <div className={styles.customPaginationWrapper}>
        <SwiperNavigation activeIndex={activeIndex} onClick={changeSlider} />
      </div>
    </div>
  );
});

export default HeroSection;
