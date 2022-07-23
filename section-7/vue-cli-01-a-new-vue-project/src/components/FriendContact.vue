<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toogleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>
<script>
export default {
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
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
