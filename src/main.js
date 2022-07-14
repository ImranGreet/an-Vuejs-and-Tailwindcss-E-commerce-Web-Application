import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';


//global component
import HeadingText from './components/ReusableComponents/Heading&Text.vue';

/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import {faMagnifyingGlass,faHeart,faBagShopping,
    faUser,faAlignJustify,faPlus,faMoneyCheckDollar,
    faClockRotateLeft,faTruck,faMinus,faAnglesLeft,
    faAnglesRight,faTrash} from '@fortawesome/free-solid-svg-icons';

import {faFacebook,faTwitter,faYoutube,faPinterest} from '@fortawesome/free-brands-svg-icons';

library.add(faMagnifyingGlass,faHeart,faBagShopping,
    faUser,faAlignJustify,faPlus,faMoneyCheckDollar,
    faClockRotateLeft,faTruck,faFacebook,faTwitter,
    faYoutube,faPinterest,faMinus,faAnglesLeft,
    faAnglesRight,faTrash);

createApp(App).
component('font-awesome-icon',FontAwesomeIcon).
component('headingAndtext',HeadingText).
use(router).
use(store).
mount('#app');





