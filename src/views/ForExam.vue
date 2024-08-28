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
        'Office Relocation Notice',
        'Product Recall Announcement',
        'Employee Survey Results',
        'Conference Invitation',
        'Job Posting',
        'Hotel Promotion',
        'Newsletter Subscription',
        'Event Schedule',
      ] // 這裡放12個不同的文字
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
}

.card-content {
  font-weight: bold;
  margin: 0; /* 確保段落沒有額外的邊距 */
}
</style>
