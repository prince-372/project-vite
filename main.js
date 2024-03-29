import './style.css'
import { setupCounter } from './counter.js'
import 'bootstrap/dist/css/bootstrap.css';
import imglaptop from './assets/image/img-laptop.png';
import camra from './assets/image/camra-img.png';
import iceimg from './assets/image/ice-image.png';
import icon from './assets/image/icon-img.png'

document.querySelector('#app').innerHTML = `
<div class="container">
<div class="d-flex pt-5 gap-3 align-items-center font-lexend">
  <img src=${icon} alt="icon" />
  <h2 class="fs-xl fw-semibold text-lightblack">Records</h2>
</div>
<div class="row pt-4">
  <div class="col-lg-4 col-md-6 col-12 pt-3 pt-md-0">
    <img
      class="w-100"
      src=${imglaptop}
      alt="img-laptop"
    />
    <div class="card-border">
      <div class="pt-3 gap-2 px-3">
        <button class="fw-normal fs-sm text-darkgrey btn-small">
          Tech
        </button>
        <button class="fw-normal fs-sm text-darkgrey btn-small">
          Startups
        </button>
        <button class="fw-normal fs-sm text-darkgrey btn-small">
          AI
        </button>
      </div>
      <h2 class="fw-semibold fs-md1 font-lexend pt-2 px-3">
        How to choose the right colors when...
      </h2>
      <p class="fw-normal fs-sm1 font-lexend pt-2 px-3">
        The app is a comprehensive resource that can help you stay
        up-to-date on everything that's happening at the
      </p>
      <div class="px-3 pb-3">
        <button class="fw-normal fs-sm1 font-lexend btn-cta w-100 mt-3">
          CTA button
        </button>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-6 col-12 pt-3 pt-md-0">
    <img
      class="w-100"
      src=${camra}
      alt="img-laptop"
    />
    <div class="card-border">
      <div class="pt-3 gap-2 px-3">
        <button class="fw-normal fs-sm text-darkgrey btn-small">
          Tech
        </button>
        <button class="fw-normal fs-sm text-darkgrey btn-small">
          Startups
        </button>
        <button class="fw-normal fs-sm text-darkgrey btn-small">
          AI
        </button>
      </div>
      <h2 class="fw-semibold fs-md1 font-lexend pt-2 px-3">
        How does writing influence your per
      </h2>
      <p class="fw-normal fs-sm1 font-lexend pt-2 px-3">
        Welcome to the company app! This is your one-stop shop for all
        company news, announcements, and
      </p>
      <div class="px-3 pb-3">
        <button class="fw-normal fs-sm1 font-lexend btn-cta w-100 mt-3">
          CTA button
        </button>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-6 col-12 pt-3 pt-lg-0">
    <img
      class="w-100"
      src=${iceimg}
      alt="img-laptop"
    />
    <div class="card-border">
      <div class="pt-3 gap-2 px-3">
        <button class="fw-normal fs-sm text-darkgrey btn-small">
          Tech
        </button>
        <button class="fw-normal fs-sm text-darkgrey btn-small">
          Startups
        </button>
        <button class="fw-normal fs-sm text-darkgrey btn-small">
          AI
        </button>
      </div>
      <h2 class="fw-semibold fs-md1 font-lexend pt-2 px-3">
        How to choose the right customer for
      </h2>
      <p class="fw-normal fs-sm1 font-lexend pt-2 px-3">
        If you have any questions or need help with anything, please don't
        hesitate to reach out to us. We're .
      </p>
      <div class="px-3 pb-3">
        <button class="fw-normal fs-sm1 font-lexend btn-cta w-100 mt-3">
          CTA button
        </button>
      </div>
    </div>
  </div>
</div>
</div>         
`

setupCounter(document.querySelector('#counter'))
