const app = Vue.createApp({
  data() {
    return {
      name: "Alfina Megasiwi",
      age: 20,
      image: "https://www.qries.com/images/banner_logo.png",
    };
  },
  methods: {
    ageInFiveYears() {
        return this.age + 5;
    },
    favoriteNumber() {
        return Math.random();
    },
  },
});
app.mount("#assignment");
