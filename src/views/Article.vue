<template>
  <div class="container">
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
  </div>
</template>

<script>
// 引入文章數據模塊
import { getArticleById } from '../data/articles';

export default {
  props: ['id'],
  data() {
    return {
      article: {}
    }
  },
  created() {
    // 使用數據模塊中的函數來獲取文章標題
    this.article = getArticleById(this.id);
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
</style>
