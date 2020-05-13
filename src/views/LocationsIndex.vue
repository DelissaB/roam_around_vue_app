<template>
  <div class="locations">
   <div v-for="location in locations">
      <p>Name: {{ location.name }}</p>
      <p>Intro: {{ location.intro }}</p>
      <p>Sightseeing Score: {{ location.sightseeing_score }}</p>

      <!-- <router-link to="/styles">Show trip styles</router-link> -->
    </div>
  </div>
</template>

<script>
import Vue2Filters from "vue2-filters"

import axios from "axios";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      locations: [],
    };
  },
  created: function() {

    axios.get("/api/locations/?style_id=" + this.$route.query.style_id).then(response => {
      this.locations = response.data;
      console.log(response.data);
    });
  },
  methods: {

  },
};
</script>

</template>