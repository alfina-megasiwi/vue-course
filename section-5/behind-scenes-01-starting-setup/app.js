const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },

  // VUE LIFECYCLE
  // Hook (use sources file on browser debugger and set the desired breakpoint place):
  beforeCreate() {
    // in this method not even vue app will have been fully initiated
    console.log("beforeCreated()");
  },
  created() {
    // the vue app was initialized internally but was not mounted yet
    // visually we'll still not see anything
    console.log("created()");
  },
  beforeMount() {
    // triggers right before this app really is mounted
    // right before we see something on the screen
    console.log("beforeMount()");
  },
  mounted() {
    // we'll se something on the screen
    // vue app was mounted on the screen, it was initialized internally,
    // all the data was processed, the template was compiled, and it's showing
    // its output on the screen
    console.log("mounted()");
  },
  beforeUpdate() {
    // we'll not see the changes on the screen yet
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

app.mount("#app");
setTimeout(function () {
  app.unmount();
}, 3000);

const app2 = Vue.createApp({
  template: `
  <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
});
app2.mount("#app2");

// This is what Vue does under the hood!

// const data = {
//   message: "Hello!",
//   longMessage: "Hello World!",
// };

// const handler = {
//   set(target, key, value) {
//     if (key === "message") {
//       target.longMessage = value + " World";
//     }
//     target.message = value;
//   },
// };

// const proxy = new Proxy(data, handler);
// proxy.message = "Hello!!!!";

// console.log(proxy.longMessage);
