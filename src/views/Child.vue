<template>
  <div class="container">
    <div class="grid-container">
      <div v-for="(article, index) in articles" :key="index" class="card" @click="goToArticle(index)">
        <p class="card-content">{{ article.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        { id: 1, title: 'Exam time' },
        { id: 2, title: 'Shopping trip' },
        { id: 3, title: 'Rainy day' },
        { id: 4, title: 'School trip' },
        { id: 5, title: 'Camping' },
        { id: 6, title: 'No Pets Here' },
        { id: 7, title: 'Sick Day' },
        { id: 8, title: 'Football Match' },
        { id: 9, title: 'Back to School' },
        { id: 10, title: 'The Robot' },
        { id: 11, title: 'Nell’s Books' },
        { id: 12, title: 'Little Monsters' }
      ]
    }
  },
  methods: {
    goToArticle(index) {
      // 導航到對應的文章詳細頁面，將文章ID作為參數
      this.$router.push({ name: 'Article', params: { id: this.articles[index].id } });
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  color: white;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 每行4個卡片 */
  gap: 10px;
  padding: 20px;
  background-color: #333;
  margin: 0 auto;
}

.card {
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px; /* 減少內邊距 */
  text-align: center;
  height: 100px; /* 增加高度 */
  display: flex;
  align-items: center;
  justify-content: center;
  color: black; /* 確保文字顏色為黑色 */
  cursor: pointer; /* 鼠標移動到卡片上時顯示為點擊手勢 */
}

.card-content {
  font-weight: bold;
  margin: 0; /* 確保段落沒有額外的邊距 */
}
</style>
