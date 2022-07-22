const app = Vue.createApp({
  data() {
    return {
      current: 0,
    };
  },
  watch: {
    result() {
      const that = this;
      setTimeout(function () {
        that.current = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.current == 37) {
        return this.current + " YEEEEEEES!";
      } else if (this.current < 37) {
        return this.current + " Not there yet";
      } else {
        return this.current + " Too much";
      }
    },
  },
  methods: {
    addNumber(num) {
      this.current = this.current + num;
    },
  },
});

app.mount("#assignment");
