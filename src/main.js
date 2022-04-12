/* eslint-disable prettier/prettier */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
    // create naive ui
    create,
    // component
    NButton,
    NSelect,
    darkTheme,
    NDialog,
    NDialogProvider,
    NMessageProvider,
    NConfigProvider,
    NAvatarGroup,
  } from 'naive-ui';

const naive = create({
components: [NButton, NSelect, darkTheme, NDialog, NDialogProvider, NMessageProvider, NConfigProvider, NAvatarGroup]
})

createApp(App).use(store).use(router).use(naive).mount("#app");
