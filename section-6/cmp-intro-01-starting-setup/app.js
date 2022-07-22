const app = Vue.createApp({
  data() {
    return {
      friends: [
        { id: "fina", name: "Alfina Megasiwi", email: "alfnms@gmail.com" },
        { id: "haruto", name: "Haruto Watanabe", email: "haru@gmail.com" },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails()">
            {{ detailsAreVisible? 'Hide' : 'Show'}} Details
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "fina",
        name: "Alfina Megasiwi",
        email: "alfnms@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
