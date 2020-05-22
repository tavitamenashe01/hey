<template>
  <div>
    <Header />

    <section class="banner">
      <img class="banner__img" src="../assets/img/bg-contactUs.svg" />
      <div class="banner__text">
        <div class="banner__text_title">
          <h3>Contact Us</h3>
        </div>
        <div class="banner__text_desc">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </section>

    <section class="send-message">
      <div class="container">
        <div class="send-message__wrapper">
          <div class="send-message__contacts">
            <img src="../assets/img/send-message-block.svg" />
            <ul style="margin-top: 4.3rem">
              <li>
                <a href="#">
                  <h3 class="send-message__contacts_title">ADDRESS</h3>
                </a>
              </li>
              <li>
                <a href="#">Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">
                  <h3 class="send-message__contacts_title">Phone</h3>
                </a>
              </li>
              <li class="send-message__contacts_icon-item">
                <img src="../assets/img/icons/phone.svg" />
                <a class="send-message__contacts_icon-item-link" href="#">+62-812-7313-4321</a>
              </li>
              <li class="send-message__contacts_icon-item">
                <img src="../assets/img/icons/phone.svg" />
                <a class="send-message__contacts_icon-item-link" href="#">+62-817-000-1234</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">
                  <h3 class="send-message__contacts_title">ONLINE SERVICE</h3>
                </a>
              </li>
              <li class="send-message__contacts_icon-item">
                <img src="../assets/img/icons/language.svg" />
                <a class="send-message__contacts_icon-item-link" href="#">www.afrianska.com</a>
              </li>
              <li class="send-message__contacts_icon-item">
                <img src="../assets/img/icons/email.svg" />
                <a class="send-message__contacts_icon-item-link" href="#">hello.afrian@gmail.com</a>
              </li>
            </ul>
          </div>

          <div class="send-message__form-container">
            <h3 class="send-message__form-container_title">Send us a message</h3>
            <form class="send-message__form-container_form" @submit.prevent="submitForm">
              <p class="full-width" :class="{ 'hasError': $v.form.name.$error }">
                <label>Full name</label>
                <input type="text" placeholder="Your Name" v-model="form.name" />
              </p>
              <p class="full-width" :class="{ 'hasError': $v.form.email.$error }">
                <label>Email</label>
                <input type="email" placeholder="Your Email" v-model="form.email" />
              </p>
              <p class="full-width">
                <label>Message</label>
                <textarea cols="30" rows="7" placeholder="Your Message" v-model="form.message"></textarea>
              </p>
              <p class="full-width">
                <button class="form-button" type="submit">SUBMIT</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="map">
      <Map />
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Map from "../components/Map";

import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  validations: {
    form: {
      name: { required, min: minLength(4) },
      email: { required, email }
    }
  },
  methods: {
    submitForm() {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      alert("Form submitted");
    }
  },
  components: {
    Header,
    Footer,
    Map
  }
};
</script>

<style lang="scss">
@import "src/assets/styles/main.scss";
.wrapper {
  background-color: $white;
}
.banner {
  &__img {
    position: relative;
    display: inline-block;
  }
  img {
    max-width: 100%;
  }
  &__text {
    color: $white;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    @include breakpoint(laptop) {
      top: 17%;
    }
    @include breakpoint(tablet) {
      top: 20%;
    }
    &_title {
      h3 {
        @include font-size(44);
        padding-bottom: 1.25rem;
        text-align: center;
        @include breakpoint(mobileonly) {
          display: none;
        }
      }
    }
    &_desc {
      width: 43.7rem;
      p {
        text-align: center;
        font-size: 1.25rem;
        line-height: 1.85rem;
        text-align: center;
        color: rgba(255, 255, 255, 0.6);
        @include breakpoint(mobileonly) {
          display: none;
        }
      }
    }
  }
}
.send-message {
  .container {
    @include breakpoint(mobileonly) {
      width: 90%;
    }
  }
  margin: 6.25rem 0;
  h3,
  a {
    color: $blue_01;
  }

  img {
    max-width: 100%;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid $blue_01;
    border-radius: 10px;
    font-family: "Poppins", sans-serif;

    &:focus {
      border-radius: 0;
    }
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 3.125rem;

    & > * {
      padding: 3.5rem;
    }
  }

  &__contacts {
    ul {
      margin-bottom: 2.5rem;
    }
    li {
      margin-bottom: 1rem;
    }
    &_title {
      margin-bottom: 1.5rem;
    }
    &_icon-item {
      display: flex;
      align-items: center;
      opacity: 0.6;
    }
    &_icon-item-link {
      padding-left: 1rem;
    }
  }

  &__form-container {
    box-shadow: -1px 0px 20px 1px rgba(16, 112, 177, 0.2);
    border-radius: 10px;

    &_title {
      padding-bottom: 2.6rem;
      text-transform: uppercase;
    }

    &_form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1.25rem;
    }

    .full-width {
      grid-column: 1 / 3;
      input[type="email"],
      input[type="text"] {
        height: 3.125rem;
        margin-bottom: 2rem;
        @include font-size(16);
        padding-left: 10px;
        &::placeholder {
          padding: 1.3rem 2.6rem;
          font-family: "Poppins", sans-serif;
          color: $blue_01;
          opacity: 0.2;
        }
      }
      textarea {
        padding-left: 10px;
        @include font-size(16);

        &::placeholder {
          @include font-size(16);
          padding: 21px 42px;
          font-family: "Poppins", sans-serif;
          color: $blue_01;
          opacity: 0.2;
        }
      }
      label {
        display: block;
        margin-bottom: 0.5rem;
      }
      p {
        padding-bottom: 2rem;
      }
      .form-button {
        background: $blue_04;
        font-weight: bold;
        letter-spacing: 0.4px;
        width: 100%;
        margin-top: 2.5rem;
        box-shadow: 5px 10px 15px 3px rgba(16, 112, 177, 0.2);
      }
    }
  }
}
</style>