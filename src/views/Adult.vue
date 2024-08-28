<template>
  <div class="container">
    <div class="grid-container">
      <div v-for="(article, index) in articles" :key="index" class="card">
        <p class="card-content">{{ article }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        'How to make people like robots',
        'Hope for people with diabetes',
        'Going for gold in e-waste',
        'A family’s hope of ending discrimination',
        'Recycling food waste',
        'Ancient bone found in the Thames',
        'Britain’s lost Lego',
        'Boxing to beat Parkinson’s disease',
        'Out-of-hours work ban',
        'Electric buses: greener public transport',
        'Reducing construction waste',
        'Robotic surgery'
      ] // 12個不同的成人頁面文字
    }
  },
  methods: {
    goToArticle(index) {
      // 在這裡添加邏輯，處理點擊卡片後的操作
      console.log(`Navigating to article ${index + 1}`);
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
  grid-template-columns: repeat(4, 1fr); /* 每行3個卡片 */
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
  color: black;
}

.card-content {
  font-weight: bold;
  margin: 0;
}
</style>
