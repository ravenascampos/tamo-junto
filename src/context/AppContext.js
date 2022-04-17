import { createContext, useEffect, useState } from "react";
import { cards, themes } from "./api";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [cardsList, setCardsList] = useState([]);
  const [themesList, setThemesList] = useState([]);

  async function loadCards() {
    try {
      setCardsList(cards);
    } catch (error) {
      setCardsList(null);
    }
  }

  async function loadThemes() {
    try {
      setThemesList(themes);
    } catch (error) {
      setThemesList(null);
    }
  }

  useEffect(() => {
    loadCards();
    loadThemes();
  }, []);

  return (
    <AppContext.Provider
      value={{
        cardsList,
        themesList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
