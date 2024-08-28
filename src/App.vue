<template>
  <div id="app">
    <!-- 頁面頭部，這裡可以放置導航欄等 -->
    <header>
      <nav>
        <!-- 使用這個按鈕樣式 -->
        <button @click="navigateTo('adult')" class="custom-button">成人頁面</button>
        <button @click="navigateTo('child')" class="custom-button">兒童頁面</button>
        <button @click="navigateTo('exam')" class="custom-button">考試頁面</button>
      </nav>
    </header>

    <!-- 主要內容區域，根據路由動態顯示不同頁面 -->
    <main>
      <router-view>
      </router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    navigateTo(page) {
      this.$router.push({ name: page });
    }
  }
}
</script>

<style>

/* From Uiverse.io by cssbuttons-io */
button.custom-button {
  appearance: none;
  background-color: #1899D6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 19px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  position: relative; /* 添加 position 來使 :after 伪元素正常顯示 */
}

button.custom-button:after {
  background-clip: padding-box;
  background-color: #1CB0F6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

button.custom-button:focus, button.custom-button:hover {
  user-select: auto;
}

button.custom-button:hover:not(:disabled) {
  filter: brightness(1.1);
}

button.custom-button:disabled {
  cursor: auto;
}

button.custom-button:active:after {
  border-width: 0 0 0px;
}

button.custom-button:active {
  padding-bottom: 10px;
}


/* 設置整個頁面的背景顏色為白色 */
body {
  margin: 0;
  padding: 0;
  background-color: white; /* 整個頁面的背景設為白色 */
}
/* 基本樣式設定 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #21bd06;
  background-color: white; /* 整個頁面的背景設為白色 */
  min-height: 100vh; /* 保證應用至少占滿整個視窗高度 */
  display: flex;
  flex-direction: column;
}

header {
  background-color: #35495e;
  padding: 20px;
  color: white;
  border-bottom: 1px solid #ccc;
  margin-top: 250px; /* 在 header 上方添加 margin，使其與視窗頂端保持距離 */
}

nav {
  display: flex;
  justify-content: space-around;
  gap: 20px; /* 控制導航連結之間的間距 */
}

nav a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  padding: 10px;
}

nav a:hover {
  text-decoration: underline;
}

main {
  flex: 1; /* 確保主內容區域填充剩餘空間 */
  padding: 20px;
}

footer {
  padding: 10px;
  background-color: rgba(17, 17, 17, 0.98);
  color: #e40580;
}
</style>
