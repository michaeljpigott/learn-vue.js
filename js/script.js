const App = {
  data() {
    return {
      cities: [
        {
          id: "1",
          name: "London",
          description: "London, UK",
          image: "/images/london.jpg",
          photographer: "Alex Azabache (unsplash)",
          continent: "Europe",
        },
        {
          id: "2",
          name: "Paris",
          description: "Paris, France",
          image: "/images/paris.jpg",
          photographer: "cyril mazarin (unsplash)",
          continent: "Europe",
        },
        {
          id: "3",
          name: "New York",
          description: "Manhattan, New York, United States",
          image: "/images/new-york.jpg",
          photographer: "Fabien Bazanegue (unsplash)",
          continent: "North America",
        },
        {
          id: "4",
          name: "Sydney",
          description: "Sydney, NSW, Australia",
          image: "/images/Sydney.jpg",
          photographer: "Kewal (unsplash)",
          continent: "Australia",
        },
        {
          id: "5",
          name: "Rio",
          description: "Rio de Janeiro, Brazil",
          image: "/images/rio.jpg",
          photographer: "Agustin Diaz Gargiulo (unsplash)",
          continent: "South America",
        },
      ],
    };
  },
};

Vue.createApp(App).mount("#app");
