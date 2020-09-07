<template>
  <h1>{{ username }}</h1>
  <div id="nav">
    <router-link :to="{ name: 'UserProfile', params: { username } }">Profile</router-link> |
    <router-link :to="{ name: 'UserFriends', params: { username } }">Friends</router-link> |
    <router-link :to="{ name: 'UserActivity', params: { username } }">Activity</router-link>
  </div>
  <router-view :username="username" />
</template>
<script>
export default {
  props: ["username"]
};
</script>
