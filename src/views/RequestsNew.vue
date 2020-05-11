<template>
  <div class="requests-new">
    <div class="container">
      <form v-on:submit.prevent="createRequest()">
        <h1>New Request</h1>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>Trip_Style:
        <input type="text" v-model="newRequestTripStyle" />
        <input type="text" v-model="newRequestPassport" />
        <input type="submit" value="Create" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newRequestTripStyle: "",
      newRequestPassport: "",
      error: [],
    };
  },
  created: function() {},
  methods: {
    createRequestsubmit: function() {
      var params = {
        trip_style: this.newRequestTripStyle,
        passport: this.newRequestPassport,
      };
      axios
        .post("/api/requests", params)
        .then(response => {
          this.$router.push("/requests");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>