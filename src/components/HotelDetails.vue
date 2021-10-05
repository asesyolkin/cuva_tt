<template>
  <div v-if="hotelsData.length">
    <h2 class="title h2-reset-default-style">{{ hotelsData[index].title }}</h2>
    <div class="details">
      <img src="../assets/img/hotel_photo_stub.jpg" alt="фото отеля 1" width="350" height="250">
      <p class="description p-reset-default-style">{{ hotelsData[index].body }}</p>
    </div>
    <form class="booking-form">
      <div class="field-wrapper">
        <label class="label" for="address">Адрес:</label>
        <input class="input" type="text" id="address" maxlength="150">
      </div>
      <div class="field-wrapper">
        <label class="label" for="name">Имя:</label>
        <input class="input" type="text" id="name" maxlength="50">
      </div>
      <div class="field-wrapper">
        <label class="label" for="telephone">Телефон:</label>
        <input 
          class="input"
          type="tel" 
          id="telephone" 
          placeholder="в формате +7 987 6543210"
          pattern="\+7\s[0-9]{3}\s[0-9]{7}"
        >
      </div>
      <button class="button-submit" type="submit">Забронировать</button>
    </form>
    <div>
      <p>Бронь подтверждена. Спасибо за заявку!</p>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'HotelDetails',
    props: {
      index: String
    },
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
  .title {
    margin-bottom: 15px;
  }

  .details {
    display: flex;

    .description {
      padding: 10px;
    }
  }

  .booking-form {
    display: flex;
    flex-direction: column;

    width: 40%;
    margin-top: 30px;
    margin-left: 50%;

    transform: translateX(-50%);

    .field-wrapper {
      display: flex;
      margin-bottom: 10px;

      .label {
        flex: 0 0 30%;
        text-align: end;
        margin-right: 5px;
      }

      .input {
        flex-basis: 70%;
      }
    }

    .button-submit {
      align-self: flex-end;
    }
  }
</style>
