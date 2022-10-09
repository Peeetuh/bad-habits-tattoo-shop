import "./Home.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import img1 from "../Logo/1.jpg";
import img2 from "../Logo/2.jpg";
import img3 from "../Logo/3.jpg";
import img4 from "../Logo/4.jpg";
import img5 from "../Logo/5.jpg";
import img6 from "../Logo/6.jpg";
import img7 from "../Logo/7.jpg";
import img8 from "../Logo/8.jpg";
import img9 from "../Logo/9.jpg";
import img10 from "../Logo/10.jpg";
import img11 from "../Logo/11.jpg";
import img12 from "../Logo/12.jpg";





export default function Home() {
    return (
      <div id="main-home-container">
        <div id="title-container">
        <div id="title-home"></div>
        </div>
      <section id="home-page">
      <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} className="tat-gallery" alt="tattoo-dragon" /></SwiperSlide>
        <SwiperSlide><img src={img2} className="tat-gallery" alt="tattoo-dragon" /></SwiperSlide>
        <SwiperSlide><img src={img3} className="tat-gallery" alt="tattoo-dragon" /></SwiperSlide>
        <SwiperSlide><img src={img4} className="tat-gallery" alt="tattoo-dragon" /></SwiperSlide>
        <SwiperSlide><img src={img5} className="tat-gallery" alt="tattoo-dragon" /></SwiperSlide>
        <SwiperSlide><img src={img6} className="tat-gallery" alt="tattoo-dragon" /></SwiperSlide>
        <SwiperSlide><img src={img7} className="tat-gallery" alt="tattoo-dragon" /></SwiperSlide>
        <SwiperSlide><img src={img8} className="tat-gallery" alt="tattoo-dragon" /></SwiperSlide>
        <SwiperSlide><img src={img9} className="tat-gallery" alt="tattoo-dragon" /></SwiperSlide>
        <SwiperSlide><img src={img10} className="tat-gallery" alt="tattoo-dragon" /></SwiperSlide>
        <SwiperSlide><img src={img11} className="tat-gallery" alt="tattoo-dragon" /></SwiperSlide>
        <SwiperSlide><img src={img12} className="tat-gallery" alt="tattoo-dragon" /></SwiperSlide>
      </Swiper>
    </>
      </section>
      </div>
    );
  }