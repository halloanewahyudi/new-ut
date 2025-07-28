import VueSplide from '@splidejs/vue-splide';
// or only core styles
import '@splidejs/vue-splide/css/core';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueSplide);
})
