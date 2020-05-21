<template>
  <div>
    <Header />

    <main class="main">
      <section class="main-block">
        <div class="container">
          <div class="main-block__item">
            <div class="main-block__item_title">
              <h3>
                New Automation
                Tool for Your Home
              </h3>
            </div>
            <div
              class="main-block__item_desc"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.</div>
            <div class="main-block__item_button">
              <button>See Our Project</button>
            </div>
          </div>
          <div class="main-block__item_img">
            <img src="../assets/img/bg-main-illus.svg" />
          </div>
        </div>
      </section>

      <section class="main-cards-block">
        <div class="container">
          <div class="div1">
            <h3>
              What we do to help
              our client grow in
              digital era,
            </h3>
          </div>
          <div class="div2 card">
            <div class="card-img">
              <img src="../assets/img/cards/1.svg" />
            </div>
            <div class="card-content">
              <div class="card-content__title">
                <h3>
                  Bring Technology To Your
                  Comfrotable Home
                </h3>
              </div>
              <div class="card-content__desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="card-content__link">
                <a href="#">Learn more</a>
                <img src="../assets/img/icons/arrow.svg" />
              </div>
            </div>
          </div>
          <div class="div3 card" style="position: relative; bottom: 300px;">
            <img class="card-img" src="../assets/img/cards/2.svg" />
            <div class="card-content">
              <div class="card-content__title">
                <h3>
                  Make Your business To Be
                  Better Famous In Internet
                </h3>
              </div>
              <div class="card-content__desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="card-content__link">
                <a href="#">Learn more</a>
                <img src="../assets/img/icons/arrow.svg" />
              </div>
            </div>
          </div>
          <div class="div4 card" style="position: relative; bottom: 400px;">
            <img class="card-img" src="../assets/img/cards/3.svg" />
            <div class="card-content">
              <div class="card-content__title">
                <h3>
                  Build Your Digital Product
                  That Suitable For Your Need
                </h3>
              </div>
              <div class="card-content__desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="card-content__link">
                <a href="#">Learn more</a>
                <img src="../assets/img/icons/arrow.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="main-client-block">
        <div class="container">
          <div class="main-client-block__text">
            <div class="main-client-block__text_title">
              <h3>
                Our Beloved
                Client
              </h3>
            </div>
            <div class="main-client-block__text_desc">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>

          <div class="main-client-block__cards">
            <div class="main-client-block__cards_item">
              <a href="#">LOGO CLIENT 1</a>
            </div>
            <div class="main-client-block__cards_item">
              <a href="#">LOGO CLIENT 2</a>
            </div>
            <div class="main-client-block__cards_item">
              <a href="#">LOGO CLIENT 3</a>
            </div>
            <div class="main-client-block__cards_item">
              <a href="#">LOGO CLIENT 4</a>
            </div>
            <div class="main-client-block__cards_item">
              <a href="#">LOGO CLIENT 5</a>
            </div>
            <div class="main-client-block__cards_item">
              <a href="#">LOGO CLIENT 6</a>
            </div>
            <div class="main-client-block__cards_item">
              <a href="#">LOGO CLIENT 7</a>
            </div>
            <div class="main-client-block__cards_item" style="background: #4e86bb">
              <a href="#">More Client</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  components: { Header, Footer }
};
</script>

<style lang="scss">
@import "src/assets/styles/main.scss";
.main {
  letter-spacing: 0.04em;
  &-block {
    background: linear-gradient(
      10deg,
      #98c3e8 8.84%,
      rgba(152, 195, 232, 0) 31.12%
    );
    @include breakpoint(tablet) {
      background: none;
    }
    @include breakpoint(mobileonly) {
      background: none;
    }

    .container {
      display: flex;
      @include breakpoint(mobileonly) {
        width: 90%;
        flex-direction: column;
      }
    }
    &__item {
      text-align: left;

      &_img {
        position: relative;
        right: 70px;
        top: 10px;
        min-width: 700px;
        @include breakpoint(tablet) {
          display: none;
        }
        @include breakpoint(mobileonly) {
          display: none;
        }
      }

      &_title {
        @include font-size(45);
        color: $blue_02;
        font-family: "Playfair Display", serif !important;
        width: 118%;
        @include breakpoint(mobileonly) {
          @include font-size(23);
          width: 100%;
        }
      }
      &_desc {
        @include font-size(14);
        line-height: 26px;
        color: $blue_01;
        opacity: 0.6;
        padding: 32px 0;
        width: 425px;
        @include breakpoint(mobileonly) {
          @include font-size(16);
          width: 100%;
        }
        &_button button {
          margin-top: 40px;
        }
      }
    }
  }
  &-cards-block {
    margin-top: 180px;
    h3,
    p {
      line-height: 26px;
      letter-spacing: 0.05em;
      color: $blue_01;
      margin-bottom: 16px;
    }

    .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 40px;
      // grid-row-gap: 20px;
      @include breakpoint(tablet) {
        display: flex;
        flex-direction: column;
        .div2,
        .div3,
        .div4 {
          margin-bottom: 350px;
        }
        .div1 h3 {
          margin: 10px auto;
          text-align: center;
        }
      }
      @include breakpoint(mobileonly) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        .div2,
        .div3,
        .div4 {
          margin-bottom: 350px;
        }
        .div1 {
          margin-bottom: 10px;
        }
      }
      .div2 {
        grid-area: 1 / 2 / 2 / 3;
      }
      .div3 {
        grid-area: 2 / 1 / 3 / 2;
      }
      .div4 {
        grid-area: 3 / 2 / 4 / 3;
      }
      .div1 {
        grid-area: 1 / 1 / 2 / 2;
        h3 {
          width: 358px;
          @include font-size(30);
          line-height: 46px;
          color: $blue_02;
          @include breakpoint(mobileonly) {
            width: 100%;
            @include font-size(25);
          }
        }
      }
      .card {
        box-shadow: 12px 19px 50px -28px rgba(90, 152, 208, 1);
        width: 300px;
        height: 580px;
        border-radius: 10px;
        margin-left: 100px;
        @include breakpoint(mobileonly) {
          margin-left: 0;
          bottom: 200px;
        }
        &-img {
          margin: 0 auto;
        }
        &-content {
          margin: 48px;
          text-align: left;
          &__title {
            @include font-size(13);
          }
          &__desc {
            @include font-size(15);
            opacity: 0.6;
          }
          &__link {
            display: flex;
            @include font-size(14);
            margin-top: 50px;
            a {
              color: $blue_04;
              margin-right: 15px;
            }
          }
        }
      }
    }
  }
  &-client-block {
    background-color: $blue_04;
    border-top-left-radius: 200px;
    margin-top: -250px;
    padding: 100px 0;
    color: $white;
    &__text {
      display: flex;
      align-items: center;
      margin-bottom: 110px;
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

      &_title {
        font-size: 36px;
        line-height: 46px;
        letter-spacing: 0.05em;
        h3 {
          width: 80%;
        }
      }
      &_desc {
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0.05em;
      }
    }
    &__cards {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      // grid-gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-template-rows: repeat(2, 1fr);
      &_item {
        padding: 1.2rem;
        height: 4rem;
        align-items: center;
        display: flex;
        justify-content: center;
        border-top: 1px solid $white;
        border-right: 1px solid $white;

        &:first-child {
          border-top: none;
        }
        &:last-child {
          border-right: none;
        }
        &:nth-child(4) {
          border-top: none;
          border-right: none;
        }
        &:nth-child(3),
        &:nth-child(2) {
          border-top: none;
        }
        @include breakpoint(mobileonly) {
          &:first-child,
          &:nth-child(2),
          &:nth-child(3) {
            border-right: none;
            border-bottom: 1px solid $white;
          }
          &:nth-child(4),
          &:nth-child(5),
          &:nth-child(6),
          &:nth-child(7) {
            border-right: none;
          }
        }
        a {
          color: $white;
        }
        &:hover {
          background-color: #4e86bb;
          transition: 2s;
        }
        .border {
          border: 1px solid $white;
        }
      }
    }
  }
}
</style>