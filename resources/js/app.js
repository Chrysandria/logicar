import "bootstrap";
import { createApp } from "vue";
import alerts from "./alerts.js";
import { fetcher } from "./fetcher.js";

window.alerts = alerts;
window.fetcher = fetcher;

import app from "./app.vue";


createApp(app).mount("#app")