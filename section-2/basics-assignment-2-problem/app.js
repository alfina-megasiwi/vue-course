const app = Vue.createApp({
  data() {
    return {
      user: "",
      confirmedUser: "",
    };
  },
  methods: {
    setConfirmedUser() {
      this.confirmedUser = this.user;
    },
    setUser(event) {
      this.user = event.target.value;
    },
    buttonClicked() {
      alert("Alert showed!");
    },
  },
});

app.mount("#assignment");
