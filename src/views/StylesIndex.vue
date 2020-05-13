<template>
  <div class="styles">
    <div v-for="style in styles">
      <p>Trip Style: {{ style.trip_name }}</p>
      <!-- <button v-href='locations'>Select a Trip Style</button> -->
      <a href="/locations?style_id=1">
        <button type="button" class="btn btn-primary">Select a Trip Style!</button>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      styles: [],
      selectTripStyle: "",
    };
  },
  created: function() {
    axios.get("/api/styles/").then(response => {
      this.styles = response.data;
      console.log(response.data);
    });
  },
  methods: {},
};
</script>

</template>