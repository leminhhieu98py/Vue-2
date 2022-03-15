<template>
  <li>
    <h2>{{ friend.name }} {{ isLocalFavorite ? "Loved" : "" }}</h2>
    <button @click="toogleVisible">Show details</button>
    <button @click="toogleFavorite">Love</button>
    <ul v-show="isVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
const FriendContact = {
  props: {
    friend: Object,
  },
  data() {
    return {
      isVisible: false,
      isLocalFavorite: this.isFavorite,
    };
  },
  methods: {
    toogleVisible() {
      this.isVisible = !this.isVisible;
    },
    toogleFavorite() {
      this.isLocalFavorite = !this.isLocalFavorite;
    },
  },
};

export default FriendContact;
</script>