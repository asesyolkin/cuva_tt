<template>
  <ul class="list ul-reset-default-style">
    <li class="item">
      <a class="link a-reset-default-style" href="#">
        <div class="images-block">
          <img src="../assets/img/hotel_photo_stub.jpg" alt="фото отеля 1" width="350" height="250">
        </div>
        <div class="text-block">
          <h3 class="item-title h3-reset-default-style">Название Отеля</h3>
          <p class="item-description p-reset-default-style">Описание Отеля</p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Catalog'
  }
</script>

<style scoped lang="scss">
  .title {
    margin: 20px 0;
  }

  .item {
    padding: 5px;

    border-bottom: 1px solid black;
  }

  .link {
    display: flex;
  }

  .images-block {
    margin-right: 15px;
  }

  .text-block {
    flex-grow: 1;

    text-align: left;

    padding: 20px;
  }

  .item-title {
    margin-bottom: 15px;
  }
</style>
