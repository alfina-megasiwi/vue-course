const app = Vue.createApp({
  data() {
    return {
      classType: "",
      toogle: false,
      bgColor: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.classType === "user1",
        user2: this.classType === "user2",
        visible: !this.toogle,
        hidden: this.toogle,
      };
    },
  },
  methods: {
    toogleParagraph() {
      this.toogle = !this.toogle;
    },
  },
});
app.mount("#assignment");
