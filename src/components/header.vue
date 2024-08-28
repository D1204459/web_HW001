


<template>
  <header class="header">
    <div class="choose">
      <button class="menu-button" id="menuButton" title="點擊進入選單">☰</button>
      <aside class="sidebar" id="sidebar">
        <div class="d-flex justify-content-between">
          <div></div>
          <button class="menu-button text-center" id="closeButton" title="關閉選單">x</button>
        </div>
        <router-link to="/homepage" class="nav-link active">首頁</router-link>
        <router-link to="/allArticle" class="nav-link ">文章總覽</router-link>
        <router-link to="/aboutUs" class="nav-link ">關於我們</router-link>
        <router-link to="/contact" class="nav-link ">聯絡客服</router-link>
        <router-link to="/hire" class="nav-link ">人才招募</router-link>
        <router-link to="/donate" class="nav-link ">贊助專區</router-link>
      </aside>
    </div>
    <div class="site-name">
      <img src="/img/webtitle.png" >
    </div>
    <div class="search-container">
      <button type="button" class="search-button" data-bs-toggle="modal" data-bs-target="#user_search">搜尋</button>
    </div>
  </header>

  <div class="modal fade" id="user_search">
    <div class="modal-dialog">
      <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">請輸入欲搜尋項目</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <input type="text" class="modal-search-input w-100">
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary">搜尋</button>
        </div>

      </div>
    </div>
  </div>

</template>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* 陰影效果 */
  position: fixed; /* 固定在網頁最上方 */
  z-index: 1000; /* 確保在其他元素之上 */
  top: 0;
  width: 100%; /* 佔滿整個寬度 */
}

.site-name {
  justify-content: center;
  margin: auto;
}


.header img {
  width: 100px;
  height: 45px;
}

.menu-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
}

#closeButton {
  color: #000000
}


#closeButton:hover {
  color: #ffd500
}

.menu-button:hover {
  color: #007bff;
}

.site-name {
  flex: 1;
  text-align: center;
  margin: 0;
  font-size: 24px;
}

.search-container {
  display: flex;
  align-items: center;
}

.search-input {
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

.search-button {
  padding: 5px 10px;
  font-size: 16px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 5px;
}

.search-button:hover {
  background-color: #0056b3;
}

.sidebar {
  height: 100%;
  width: 250px;
  position: fixed;
  top: 0;
  left: -250px; /* 初始隱藏在視口外 */
  background-color: rgb(71, 118, 181);
  color: white;
  overflow-x: hidden;
  transition: 0.3s; /* 平滑過渡效果 */
  z-index: 1000;
  padding: 10px;
}

.sidebar a {
  padding: 10px;
  text-decoration: none;
  font-size: 18px;
  color: white;
  display: block;
}

.sidebar a:hover {
  background-color: rgba(44, 78, 115, 0.9);
}

.sidebar.show {
  left: 0; /* 顯示選單 */
}




</style>

<script>
export default {
  name: 'Header',
  mounted() {
    const menuButton = document.getElementById('menuButton');
    const sidebar = document.getElementById('sidebar');
    const closeButton = document.getElementById('closeButton');
    menuButton.addEventListener('click', () => {
      sidebar.classList.toggle('show');
    });
    closeButton.addEventListener('click', () => {
      sidebar.classList.remove('show');
  });
  }
}
// 當用戶點擊按鈕時，切換選單顯示


</script>