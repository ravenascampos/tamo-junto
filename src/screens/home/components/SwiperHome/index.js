import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function SwiperHome() {
  const cards = [
    {
      id: 1,
      img: "",
      title: "Conversar",
      text: "Tire dúvidas e troque informações sobre estratégias de negócio, administração, marketing, gestão financeira e outros tópicos importantes. Descubra os melhores fornecedores e aprenda com a experiência compartilhada dentro do app.",
    },
    {
      id: 2,
      img: "",
      title: "Se juntar",
      text: "Crie grupos e negocie preços mais baixos ao comprar mercadorias em grandes quantidades, ou organize eventos especiais na cidade para atrair um público diferenciado. Faça parcerias ou simplesmente novas amizades com pessoas que têm os mesmos objetivos que você.",
    },
    {
      id: 3,
      img: "",
      title: "Anunciar",
      text: "Venda ou alugue equipamentos em desuso pra quem precisa. Caso você tenha uma estrutura que só funciona em um período do dia, você pode sublocar seu espaço no contraturno e aumentar a lucratividade do local.",
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      navigation={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      modules={[Navigation]}
      className="mySwiper"
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <img src={card.img} alt="" />
          <h2>{card.title}</h2>
          <p>{card.text}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
