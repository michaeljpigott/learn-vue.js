const App = {
  data() {
    return {
      displayLabels: true,
      max: 1,
      cities: [
        {
          id: "1",
          name: "London",
          description: "Big Ben, London, United Kingdom",
          image: "/images/london.jpg",
          photographer: "Marcin Nowak  (unsplash)",
          continent: "Europe",
          rating: "9",
        },
        {
          id: "2",
          name: "Paris",
          description: "Paris, France",
          image: "/images/paris.jpg",
          photographer: "Anthony DELANOIX (unsplash)",
          continent: "Europe",
          rating: "7",
        },
        {
          id: "3",
          name: "New York",
          description: "Manhattan, New York, United States",
          image: "/images/new-york.jpg",
          photographer: "Michael Discenza (unsplash)",
          continent: "North America",
          rating: "9",
        },
        {
          id: "4",
          name: "Sydney",
          description: "Sydney, Australia",
          image: "/images/Sydney.jpg",
          photographer: "Dan Freeman (unsplash)",
          continent: "Australia",
          rating: "9",
        },
        {
          id: "5",
          name: "Rio",
          description: "Rio de Janeiro, Brazil",
          image: "/images/rio.jpg",
          photographer: "Agustin Diaz Gargiulo (unsplash)",
          continent: "South America",
          rating: "7",
        },
      ],
    };
  },
};

Vue.createApp(App).mount("#app");
