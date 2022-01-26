import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueSwal from "vue-swal";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzvfNtaPLy63rXBRNwLSXn0TpFadSfXyI",
  authDomain: "proyectofinal-leoaceituno.firebaseapp.com",
  projectId: "proyectofinal-leoaceituno",
  storageBucket: "proyectofinal-leoaceituno.appspot.com",
  messagingSenderId: "1028412602123",
  appId: "1:1028412602123:web:16427c8fa30bd2a147940e",
};

initializeApp(firebaseConfig);

Vue.use(VueSwal);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
