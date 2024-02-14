import { createApp } from 'vue';
import 'element-plus/dist/index.css'
import '@/assets/style/init.css';
import '@/assets/style/default.css';

import App from './App.vue';
import { initWebAssembly } from './wasm'
import {
  router,
  ComponentPlugin,
  DirectivePlugin,
  VueAxios,
  createPinia,
} from './FrontendCore';

const app = createApp(App);

async function initApp() {
  // 加载 webAssembly
  await initWebAssembly();
  app.
    use(router).
    use(ComponentPlugin).
    use(DirectivePlugin).
    use(VueAxios).
    use(createPinia()).
    mount('#app');
}
initApp();




export default app;
