<template>
  <div class="locations">
    <div v-for="location in locations">
      <h3>{{ location.name }}</h3>
      <p>Intro: {{ location.intro }}</p>
      <p>Sightseeing Score: {{ location.sightseeing_score}}</p>
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
    axios.get("/api/locations/?style_id=" + this.$route.query.style_id).then(response => {
      this.locations = response.data;
      console.log(response.data);
    });
  },
  methods: {},
};
</script>