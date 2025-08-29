"use client";
import FeatureCard, { SingleFeatureCard } from "@/feature-card";
import styles from "./feature-section.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { FreeMode } from "swiper/modules";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/bundle";

const allDetails = [
  {
    title: "Meetings",
    message: "Oops! Something went wrong",
    description:
      "It looks like something didn't go as planned. Please try again in a moment,  We are fixing this issue very soon.",
    image: "/assets/Calling.avif",
  },
  {
    title: "Meetings",
    message: "Oops! Something went wrong",
    description:
      "It looks like something didn't go as planned. Please try again in a moment,  We are fixing this issue very soon.",
    image: "/assets/Events.avif",
  },
  {
    title: "Meetings",
    message: "Oops! Something went wrong",
    description:
      "It looks like something didn't go as planned. Please try again in a moment,  We are fixing this issue very soon.",
    image: "/assets/Meetings.avif",
  },
  {
    title: "Meetings",
    message: "Oops! Something went wrong",
    description:
      "It looks like something didn't go as planned. Please try again in a moment,  We are fixing this issue very soon.",
    image: "/assets/Calling.avif",
  },
  {
    title: "Meetings",
    message: "Oops! Something went wrong",
    description:
      "It looks like something didn't go as planned. Please try again in a moment,  We are fixing this issue very soon.",
    image: "/assets/Calling.avif",
  },
];

const FeatureSection = () => {
  const [activeOneTab, setActiveOneTab] = useState(0);
  const swiperRef = useRef(null);

  const updateActiveTab = (tabIndex) => {
    setActiveOneTab(tabIndex);
    swiperRef?.current?.slideTo(tabIndex, 1000);
  };

  return (
    <div className={styles.featuresWrapper}>
      <TabList activeTab={activeOneTab} onTabChange={updateActiveTab} />

      {activeOneTab === 0 && <SubTabList />}
      {activeOneTab === 1 && (
        <div className={styles.verticalFeatureCard}>
          <SingleFeatureCard
            isVertical
            message={allDetails[0].message}
            description={allDetails[0].description}
            image={allDetails[0].image}
          />
          <SingleFeatureCard
            isVertical
            message={allDetails[0].message}
            description={allDetails[0].description}
            image={allDetails[0].image}
          />
        </div>
      )}
      {activeOneTab === 2 && (
        <div className={styles.verticalFeatureCard}>
          <SingleFeatureCard
            isVertical
            message={allDetails[0].message}
            description={allDetails[0].description}
            image={allDetails[0].image}
          />
          <SingleFeatureCard
            isVertical
            message={allDetails[0].message}
            description={allDetails[0].description}
            image={allDetails[0].image}
          />
        </div>
      )}
    </div>
  );
};

const TabList = ({ activeTab, onTabChange }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  const tabs = ["Hybrid Work", "Experience", "Workspaces"];
  return (
    <div className={styles.hybridTabWrapper}>
      <div className={styles.tabsWrapper}>
        {tabs.map((tab, index) => (
          <Tab
            key={"desktop" + tab}
            isActive={activeTab === index}
            onClick={() => onTabChange(index)}
          >
            {tab}
          </Tab>
        ))}
      </div>

      <div className={styles.optionSwiper}>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={{
            enabled: true,
            nextEl: styles.customButtonNext,
            prevEl: styles.customButtonPrev,
          }}
          onInit={() => {
            setIsInitialized(true);
          }}
          onSlideChange={(swiper) => {
            if (isInitialized) {
              onTabChange(swiper.activeIndex);
            }
          }}
          initialSlide={1}
          enabled={true}
        >
          {tabs.map((tab, index) => (
            <SwiperSlide key={"phone" + tab}>
              <Tab isActive={activeTab === index}>{tab}</Tab>
            </SwiperSlide>
          ))}
          <NavigationButtons />
        </Swiper>
      </div>
    </div>
  );
};

const Tab = ({ isActive, onClick, children }) => (
  <li
    className={`${styles.oneTab} ${isActive ? styles.activeOneTab : ""}`}
    onClick={onClick}
  >
    {children}
  </li>
);

const SubTabList = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const changeSlider = (index) => {
    swiperRef.current?.changeSlider(index);
  };

  return (
    <>
      <ul className={styles.subTabsWrapper}>
        <Swiper
          modules={[FreeMode]}
          spaceBetween={0}
          longSwipes={false}
          centeredSlides={true}
          centeredSlidesBounds={true}
          centerInsufficientSlides={true}
        >
          {[
            "Calling",
            "Meetings",
            "Webinars",
            "Events",
            "Whiteboard",
            "Chats",
            "Recording",
          ].map((subTab, index) => (
            <SwiperSlide className={styles.featureSwiperSlider} key={subTab}>
              <SubTab
                isActive={activeIndex === index}
                onClick={() => changeSlider(index)}
              >
                {subTab}
              </SubTab>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
      <FeatureCard
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        ref={swiperRef}
      />
    </>
  );
};

const SubTab = ({ isActive, onClick, children }) => (
  <li
    className={`${styles.oneSubTabs} ${isActive ? styles.oneSubTabsActive : ""}`}
    onClick={onClick}
  >
    {children}
  </li>
);

const NavigationButtons = () => (
  <>
    <span className={styles.customButtonPrev}>
      <FaArrowAltCircleLeft />
    </span>
    <span className={styles.customButtonNext}>
      <FaArrowAltCircleRight />
    </span>
  </>
);

export default FeatureSection;
