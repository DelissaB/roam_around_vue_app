<template>
  <div class="locations">
    <div v-for="location in locations">
      <h3>{{ location.name }}</h3>
      <p>Intro: {{ location.intro }}</p>
      <p>Sightseeing Score: {{ location.sightseeing_score}}</p>
      <p>Images: {{ location.images }}</p>
      <img v-bind:src="location.images" v-bind:alt="location.images" />
      <p>Country: {{ location.country_id }}</p>
      <!-- <p>Score: {{ location.score }}</p>
      <p>Climate: {{ location.climate }}</p>
      <p>Beach Score: {{ location.district_beach_score }}</p>
      <p>Dancing Score: {{ location.dancing_score }}</p>
      <p>Night Life Score: {{ location.nightlife_score }}</p>
      <p>Kid Friendly Score: {{ location.character-Kid_friendly_score }}</p>-->

      <!-- t.integer "Location_id" -->

      <hr />
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
    axios.get("/api/locations/" + this.$route.query.style_id).then(response => {
      this.locations = response.data;
      console.log(response.data);
    });
  },
  methods: {},
};
</script>