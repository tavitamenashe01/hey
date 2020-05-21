<template>
  <div>
    <div class="card">
      <img class="card-img" card src="../assets/img/cards/1.svg" />
      <div class="card-content">
        <div class="card-content__title">
          <h3>{{title}}</h3>
        </div>
        <div class="card-content__desc">
          <p>{{desc}}</p>
        </div>
        <div class="card-content__link">
          <a href="#">Learn more</a>
          <img :src="require(`../assets/img/cards/${imageUrl}`)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  }
};
</script>



<style lang="scss">
@import "src/assets/styles/main.scss";

.card {
  box-shadow: 12px 19px 80px -28px rgba(90, 152, 208, 1);
  width: 350px;
  height: 520px;
  border-radius: 10px;
  &-img {
    // margin-bottom: ;
    position: relative;
    top: -20px;
  }
  &-content {
    margin: 48px;
    text-align: left;
    &__title {
      font-size: 15px;
      line-height: 30px;
      letter-spacing: 0.05em;
      color: $blue_01;
      margin-bottom: 16px;
      // width: 257px;
    }
    &__desc {
      font-size: 12px;
      line-height: 26px;
      letter-spacing: 0.05em;
      color: $blue_01;
      opacity: 0.6;
      margin-bottom: 16px;
    }
    &__link {
      display: flex;
      font-size: 14px;
      line-height: 30px;
      letter-spacing: 0.05em;
      a {
        color: $blue_04;
        margin-right: 15px;
      }
    }
  }
}
</style>