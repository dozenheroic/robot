import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/home/HomePage.vue'
import RobotBuilder from '@/build/RobotBuilder.vue'
import Partinfo from '@/parts/Partinfo.vue'
import QRCode from '@/build/QRCode.vue';

const routes = [
  {
    path: '/',
    name: 'ГЛАВНАЯ',
    component: HomePage,
  },
  {
    path: '/build',
    name: 'ПОСТРОЙ БОТА',
    component: RobotBuilder,
  },
  {
    path: '/qrcode',
    name: 'QR КОД',
    component: QRCode,
  },
  {
    path: '/parts/partType/:id',
    name: 'ЗАПЧАСТИ',
    component: Partinfo,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
