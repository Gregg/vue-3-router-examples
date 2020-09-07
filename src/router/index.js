import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import UserProfile from "../views/user/Profile.vue";
import UserFriends from "../views/user/Friends.vue";
import UserActivity from "../views/user/Activity.vue";
import UserLayout from "../views/user/Layout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:username",
    name: "UserLayout",
    component: UserLayout,
    props: true,
    children: [
      {
        path: "",
        name: "UserProfile",
        component: UserProfile,
        props: true,
      },
      {
        path: "friends",
        name: "UserFriends",
        component: UserFriends,
        props: true,
      },
      {
        path: "activity",
        name: "UserActivity",
        component: UserActivity,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
