const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      currentTask: "",
      toogle: false,
    };
  },
  computed: {
    buttonCaption() {
        return this.toogle ? "Show List" : "Hide"
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.currentTask);
    },
    toogleList() {
      this.toogle = !this.toogle;
    },
  },
});
app.mount("#assignment");
