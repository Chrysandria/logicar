import "bootstrap";
import { createApp } from "vue";
import alerts from "./alerts.js";
import { fetcher } from "./fetcher.js";

window.alerts = alerts;
window.fetcher = fetcher;

import app from "./app.vue";

async function linear(request){
    alerts.loading("Traitement en cours ...");
    var response = await fetcher(request);
    alerts.close();
    alerts.switch(response);
}

window.linear = linear;


createApp(app).mount("#app")