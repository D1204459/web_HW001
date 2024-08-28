<script>

</script>

<template>
  <legend class="title text-center mt-3">精選文章</legend>

<!--選擇按鈕-->
  <fieldset>


    <div class="button-group">
      <input type="radio" id="FORchild" name="frameworks" checked="" />
      <label for="FORchild">兒童</label>
    </div>

    <div class="button-group">
      <input type="radio" id="FORadult" name="frameworks" />
      <label for="FORadult">成人</label>
    </div>

    <div class="button-group">
      <input type="radio" id="FORexam" name="frameworks" />
      <label for="FORexam">考試</label>
    </div>
  </fieldset>


<!--文章-->
  <div class="row d-flex">
    <div class="col-4  d-flex w-100 justify-content-around">
      <div class="card">
        <div class="card-border-top">
        </div>
        <div class="img">
        </div>
        <span> Person</span>
        <button> Click
        </button>
      </div>

      <div class="card">
        <div class="card-border-top">
        </div>
        <div class="img">
        </div>
        <span> Person</span>
        <button> Click
        </button>
      </div>

      <div class="card">
        <div class="card-border-top">
        </div>
        <div class="img">
        </div>
        <span> Person</span>
        <button> Click
        </button>
      </div>

      <div class="card">
        <div class="card-border-top">
        </div>
        <div class="img">
        </div>
        <span> Person</span>
        <button> Click
        </button>
      </div>

    </div>
  </div>





</template>

<style>

.title {
  font-size: 20px;
  color: #d7d9fa;
  font-weight: 600;
  background-color: #385c7e;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  width: 10%;
}

/* 選擇按鈕*/
.button-group {
  margin: 20px;
}

.button-group input[type="radio"] {
  display: none;
}

.button-group label {
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid #2b426d;
  background-color: #385c7e;
  color: white;
  border-radius: 15px;
  transition: all ease 0.2s;
  text-align: center;
  flex-grow: 1;
  flex-basis: 0;
  width: 90px;
  font-size: 13px;
  margin: 5px;
  box-shadow: 0px 0px 50px -15px #000000;
}

.button-group input[type="radio"]:checked + label {
  background-color: white;
  color: #02375a;
  border: 1px solid #2b426d;
}

fieldset {
  border: 0;
  display: flex;
  flex-wrap: wrap;
}


/*文章*/
.card {
  width: 250px;
  height: 300px;
  background: #3405a3;
  border-radius: 15px;
  box-shadow: 1px 5px 60px 0px #100a886b;
}

.card .card-border-top {
  width: 60%;
  height: 3%;
  background: #6b64f3;
  margin: auto;
  border-radius: 0px 0px 15px 15px;
}

.card span {
  font-weight: 600;
  color: white;
  text-align: center;
  display: block;
  padding-top: 3px;
  font-size: 16px;
}

.card .img {
  width: 85%;
  height: 60%;
  background: #6b64f3;
  border-radius: 15px;
  margin: auto;
  margin-top: 25px;
}

.card button {
  padding: 8px 25px;
  display: block;
  margin: 5px;

  border-radius: 8px;
  border: none;
  background: #6b64f3;
  color: white;
  font-weight: 600;
}

.card button:hover {
  background: #534bf3;
}

</style>