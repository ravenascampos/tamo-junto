import { createContext, useEffect, useState } from "react";
import { cards, themes, testimonial } from "./api";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [cardsList, setCardsList] = useState([]);
  const [themesList, setThemesList] = useState([]);
  const [testimonialList, setTestimonialList] = useState([]);

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

  async function loadTestimonial() {
    try {
      setTestimonialList(testimonial);
    } catch (error) {
      setTestimonialList(null);
    }
  }

  useEffect(() => {
    loadCards();
    loadThemes();
    loadTestimonial();
  }, []);

  return (
    <AppContext.Provider
      value={{
        cardsList,
        themesList,
        testimonialList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
