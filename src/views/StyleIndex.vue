<template>
  <div class="container">
    <h2>{{ style.trip_name }}</h2>
    <router-link to="/styles">Show trip styles</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      style: {},
    };
  },
  created: function() {
    axios.get("/api/styles/" + this.$route.params.id).then(response => {
      this.style = response.data;
    });
  },
  methods: {},
};
</script>

</template>