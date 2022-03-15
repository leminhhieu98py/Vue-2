const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue",
      vueLink: "https://www.google.com",
    };
  },
  methods: {
    outputGoal() {
      const courseGoalA = "Finish the course and learn Vue";
      const courseGoalB = "Master Vue";
      const randomNumber = Math.floor(Math.random() * 10);
      console.log(randomNumber);
      if (randomNumber % 2 === 0) {
        this.courseGoal = courseGoalA;
      } else {
        this.courseGoal = courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
