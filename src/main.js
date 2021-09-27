import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import store from './store';

const app = createApp(App);
app.config.productionTip = false;

app.use(Antd).use(store).mount('#app');
