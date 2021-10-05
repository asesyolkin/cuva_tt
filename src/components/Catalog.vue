<template>
  <div>
    <h2 class="catalog-title h2-reset-default-style">Каталог</h2>
    <ul class="list ul-reset-default-style">
      <li class="item" v-for="(hotel, i) in hotelsData" :key="i">
        <router-link class="link a-reset-default-style" :to="`/hotels-details/${i}`">
          <div class="images-block">
            <img src="../assets/img/hotel_photo_stub.jpg" :alt="`фото ${hotel.title}`" width="350" height="250">
          </div>
          <div class="text-block">
            <h3 class="item-title h3-reset-default-style">{{ hotel.title }}</h3>
            <p class="item-description p-reset-default-style">{{ hotel.body }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Catalog',
    computed: mapState([
      'hotelsData'
    ]),
    mounted() {
      if (!this.hotelsData.length) {
        this.$store.dispatch('loadHotelsData')
      }
    }
  }
</script>

<style scoped lang="scss">
  .catalog-title {
    margin: 20px 0;
  }

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
