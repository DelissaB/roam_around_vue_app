<template>
  <div class="styles-show">
    <div class="container">
      <h2>Trip Name: {{ style.trip_name }}</h2>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  data: function() {
    return {
      styles: [],
      trip_name: "",
    };
  },
  created: function() {},
  methods: {},
};
</script>