import "swiper/css";
import "swiper/css/bundle";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";

import { EffectCreative } from "swiper/modules";
import PaginationDots from "@/components/pagination-dots/pagination-dots";
import { Swiper as SwiperType } from "swiper/types";
import { changeHeroSectionIndex } from "@/store/hero-section-slice";
import { chips } from "@/components/home/hero-section/data/chips";
import styles from "./hero-card-right.module.css";
import useRedux from "@/hooks/use-redux";

const HeroCardRight = () => {
	const swiperRef = useRef<SwiperType | null>(null);

	const { useTypedDispatch, useTypedSelector } = useRedux();
	const { activeIndex } = useTypedSelector((state) => state.heroSection);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		swiperRef.current?.slideToLoop(activeIndex, 1000);
	}, [activeIndex]);

	return (
		<div className={styles.heroCardRight}>
			<Swiper
				modules={[EffectCreative]}
				effect='creative'
				creativeEffect={{
					next: { opacity: 0 },
					prev: { opacity: 0 },
				}}
				onSwiper={(swiper) => (swiperRef.current = swiper)}
				onTouchEnd={(swiper) => {
					if (swiper.swipeDirection === "next") {
						dispatch(changeHeroSectionIndex((activeIndex + 1) % chips.length));
					} else if (swiper.swipeDirection === "prev") {
						dispatch(changeHeroSectionIndex((activeIndex + chips.length - 1) % chips.length));
					}
				}}
				className={styles.heroSectionRightSwipper}
				loop={true}
				spaceBetween={0}
				slidesPerView={1}
				initialSlide={0}
				enabled={true}>
				<SwiperSlide className={styles.heroSectionRightSwipperSlide}>
					<img src='/assets/events.avif' alt={"Video"} className={styles.featureCardImg} />
				</SwiperSlide>
				<SwiperSlide className={styles.heroSectionRightSwipperSlide}>
					<img src='/assets/messaging.avif' alt={"Chat"} className={styles.featureCardImg} />
				</SwiperSlide>
				<SwiperSlide className={styles.heroSectionRightSwipperSlide}>
					<img src='/assets/meetings.avif' alt={"Whiteboard"} className={styles.featureCardImg} />
				</SwiperSlide>
			</Swiper>
			<div className={styles.customPaginationWrapper}>
				<PaginationDots count={chips.length} activeIndex={activeIndex} onClick={(index) => dispatch(changeHeroSectionIndex(index))} />
			</div>
		</div>
	);
};

export default HeroCardRight;
