<template>
  <div class="locations">
    <!-- Main -->
    <div id="main">
      <!-- Intro -->
      <section id="top" class="one dark cover">
        <div class="container">
          <header>
            <h2 class="alt">
              Roam Around
              <strong>Travel App</strong>
            </h2>
            <p>An easy to use Travel App designed to lead you down the path to your next adventure!</p>
          </header>

          <footer>
            <a href="#portfolio" class="button scrolly">Click here for Trip Styles</a>
          </footer>
        </div>
      </section>

      <section id="about" class="three">
        <div class="container">
          <header>
            <p>
              <ul>You pick the kind of trip you want!</ul>
              We'll help you figure out where to go!
            </p>
          </header>

          <a href="#" class="image featured">
            <img src="images/pic08.jpg" alt />
          </a>

          <p>
            By selecting a trip style you give yourself more freedom to explore!
            We'll provide suggested travel locations to  your research towards your next adventure!
          </p>
        </div>
      </section>
      <!-- Trip Styles -->
      <section id="portfolio" class="two">
        <div class="container">
          <header>
            <h2>Trip Styles</h2>
          </header>

          <p>Please click your desired trip style.</p>

          <div class="row">
            <div class="col-4 col-12-mobile">
              <article class="item">
                <a href="#" class="image fit">
                  <img src="images/pic02.jpg" alt />
                </a>
                <header>
                  <h3>Girlfriends' Getaway</h3>
                </header>
              </article>
            </div>
            <div class="col-4 col-12-mobile">
              <article class="item">
                <a href="#" class="image fit">
                  <img src="images/pic02.jpg" alt />
                </a>
                <header>
                  <h3>Couples Trip</h3>
                </header>
              </article>
            </div>
            <div class="col-4 col-12-mobile">
              <article class="item">
                <a href="#" class="image fit">
                  <img src="images/pic02.jpg" alt />
                </a>
                <header>
                  <h3>Traveling with Kids</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>


<script>
import Vue2Filters from "vue2-filters";

import axios from "axios";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      locations: [],
    };
  },
  created: function() {
    axios.get("/api/locations/?style_id=2" + this.$route.query.style_id).then(response => {
      this.locations = response.data;
      console.log(response.data);
    });
  },
  methods: {},
};
</script>