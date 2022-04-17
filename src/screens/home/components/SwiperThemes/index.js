import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { AppContext } from "../../../../context/AppContext";
import { SwiperWrapper } from "../SwiperHome/swiperHome.style";
import "swiper/css";
import "swiper/css/pagination";
import MediaQuery from "react-responsive";
import { Container } from "./swiperThemes.style";
import { Card } from "../CardThemes/cardThemes.style";
import CardThemes from "../CardThemes";

export default function SwiperThemes() {
  const { themesList } = useContext(AppContext);
  return (
    <Container>
      <h2>O que rola na nossa comunidade:</h2>
      <MediaQuery maxWidth={1023}>
        <SwiperWrapper>
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              375: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {themesList.map((theme, i) => (
              <SwiperSlide key={i}>
                <Card>
                  <img src={theme.img} alt={theme.title} />
                  <span>{theme.title} </span>
                  <p>{theme.text}</p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrapper>
      </MediaQuery>
      <MediaQuery minWidth={1024}>
        <CardThemes />
      </MediaQuery>
    </Container>
  );
}
