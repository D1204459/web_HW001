import { createRouter, createWebHistory } from 'vue-router'
import Adult from '@/views/Adult.vue';
import Child from '@/views/Child.vue';
import ForExam from '@/views/ForExam.vue';
import Article from '@/views/Article.vue';  // 新增文章顯示頁面


const routes = [
  { path: '/', redirect: '/adult' },  // 默認路由，重定向到成人頁
  { path: '/adult', name: 'adult', component: Adult },
  { path: '/child', name: 'child', component: Child },
  { path: '/exam', name: 'exam', component: ForExam },
  { path: '/article/:id', name: 'Article', component: Article, props: true }  // 文章頁面的動態路由
];



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router
