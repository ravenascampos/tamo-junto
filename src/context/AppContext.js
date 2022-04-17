import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [cardsList, setCardsList] = useState([]);

  const cards = [
    {
      img: "/icons/talk-icon.svg",
      title: "Conversar",
      text: "Tire dúvidas e troque informações sobre estratégias de negócio, administração, marketing, gestão financeira e outros tópicos importantes. Descubra os melhores fornecedores e aprenda com a experiência compartilhada dentro do app.",
    },
    {
      img: "/icons/together-icon.svg",
      title: "Se juntar",
      text: "Crie grupos e negocie preços mais baixos ao comprar mercadorias em grandes quantidades, ou organize eventos especiais na cidade para atrair um público diferenciado. Faça parcerias ou simplesmente novas amizades com pessoas que têm os mesmos objetivos que você.",
    },
    {
      img: "/icons/announce-icon.svg",
      title: "Anunciar",
      text: "Venda ou alugue equipamentos em desuso pra quem precisa. Caso você tenha uma estrutura que só funciona em um período do dia, você pode sublocar seu espaço no contraturno e aumentar a lucratividade do local.",
    },
  ];

  async function loadCards() {
    try {
      setCardsList(cards);
    } catch (error) {
      setCardsList(null);
    }
  }

  useEffect(() => {
    loadCards();
  }, []);

  return (
    <AppContext.Provider
      value={{
        cardsList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
