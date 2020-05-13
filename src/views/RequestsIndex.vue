<template>
  <div class="requests-index">
    <div class="container">
      <h1>Saved Requests</h1>
      <div v-for="request in requests">
        <h2>Style{{ request.style_id }}</h2>
        <p>Location: {{ request.location_id }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      photos: [],
    };
  },
  created: function() {
    axios.get("/api/requests").then(response => {
      this.photos = response.data;
    });
  },
  methods: {},
};
</script>