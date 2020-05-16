<template>
  <div class="styles">
    <div v-for="style in styles">
      <p>Trip Style: {{ style.trip_name }}</p>

      <!-- <button v-href="/locations">Select a Trip Style</button> -->

      <router-link v-bind:to="`/locations?style_id=${style.id}`" tag="button">Select a Trip Style!</router-link>

      <!-- <button v-on:click="location.href=url('events')" class="button uk-button-link">Trip Style</button> -->

      <!-- <a href="/locations">
        <button type="button" class="btn btn-primary">Select a Trip Style!</button>
      </a>-->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      styles: [],
      selectTripStyle: {},
    };
  },
  created: function() {
    axios.get("/api/styles").then(response => {
      console.log(response.data);
      this.styles = response.data;
    });
  },
  methods: {},
};
</script>

</template>