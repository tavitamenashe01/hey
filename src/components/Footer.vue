<template>
  <div class="wrapper">
    <footer class="footer">
      <div class="container">
        <section class="footer-begin">
          <div class="footer-begin__info">
            <h3 class="footer-begin__info_title">
              Intersted to work
              with our team?
            </h3>
            <p
              class="footer-begin__info_desc"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div class="footer-begin__button">
            <button>Let's talk</button>
          </div>
        </section>
        <hr class="footer-line" />

        <section class="footer-end">
          <div class="footer-end__grid">
            <div class="footer-end__grid_col">
              <a href="#" style="display: flex; align-items: center;">
                <img src="../assets/img/icons/logo-footer.svg" />
                <span style="font-size: 20px; padding-left: 10px">Afrianska</span>
              </a>
              <ul class="footer-end__grid_col margin">
                <li style="width: 300px">
                  <a class="footer-end__grid_col bold" href="#">
                    <b>A.</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </a>
                </li>
                <li>
                  <a class="footer-end__grid_col bold" href="#">
                    <b>T.</b>
                    <p>+62-812-7313-4321</p>
                  </a>
                </li>
                <li>
                  <a class="footer-end__grid_col bold" href="#">
                    <b>E.</b>
                    <p>hello.afrian@gmail.com</p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="social">
              <div class="footer-end__grid_col" style="margin-right: 100px">
                <a class="footer-end__grid_col title" href="#">About US</a>
                <ul class="footer-end__grid_col margin">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">What we do</a>
                  </li>
                  <li>
                    <a href="#">Project</a>
                  </li>
                  <li>
                    <a href="#">How It Work With Us</a>
                  </li>
                </ul>
              </div>
              <div class="footer-end__grid_col">
                <a class="footer-end__grid_col title" href="#">Follow US</a>
                <ul class="footer-end__grid_col margin">
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">LinkedIn</a>
                  </li>
                  <li>
                    <a href="#">Youtube</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <p class="footer-copyright">2019 © Afrianska. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "src/assets/styles/main.scss";
.wrapper {
  background-color: $blue_04;
  .footer {
    a,
    h3,
    p {
      color: $white;
    }
    text-align: left;
    background-color: $blue_02;
    border-top-right-radius: 110px;
    width: 90%;
    .container {
      .footer-begin {
        padding: 90px 0;
        display: grid;
        grid-gap: 1rem;
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 3fr));
        &__info {
          &_title {
            font-size: 28px;
            line-height: 46px;
            letter-spacing: 0.05em;
            width: 80%;
          }
          &_desc {
            font-size: 14px;
            line-height: 26px;
            letter-spacing: 0.05em;
            opacity: 0.6;
            width: 80%;
            margin-top: 32px;
          }
        }
      }

      .footer-end {
        font-weight: 400;
        margin-top: 100px;
        &__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 3fr));
          .social {
            display: flex;
          }
          &_col {
            .title {
              font-weight: bolder;
            }
            .margin {
              margin: 32px 0;
            }
            .bold {
              display: flex;
            }
            p {
              margin-left: 5px;
            }
            li {
              margin-bottom: 16px;
            }
          }
        }
      }
    }
    &-copyright {
      font-size: 16px;
      line-height: 26px;
      letter-spacing: 0.05em;
      opacity: 0.4;
      padding-bottom: 54px;
    }
  }
}
</style>