<template>
  <div id="app">
    <!-- Header -->
    <header id="header">
      <h1>Roam Around Travel App!</h1>
      <nav>
        <ul>
          <!-- This links to the App.vue page -->
          <li>
            <a href="/logout">Home</a>
          </li>
          <!-- <li>
            <a href="/home">Home</a>
          </li>-->
          <li>
            <a href="/signup">Signup</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/styles">Trip Styles</a>
          </li>
          <li>
            <a href="/locations">Locations</a>
          </li>
          <li>
            <a href="/home">Logout</a>
          </li>
        </ul>
      </nav>
    </header>

    <router-view />

    <!-- Footer -->
    <footer id="footer">
      <!-- Icons
      <!-- <ul class="icons">-->
      <a
        href="http://www.cdc.gov/vitalsigns/index.html?s_cid=vitalsigns_004"
        title="DC Vital Signs™ – Learn about the latest public health data. Read CDC Vital Signs™…"
      >
        <img
          src="http://www.cdc.gov/images/campaigns/vitalsigns/vitalsigns_150x120.jpg"
          style="width:150px; height:120px; border:0px;"
          alt="CDC Vital Signs™ – Learn about the latest public health data. Read CDC Vital Signs™…"
        />
      </a>
      <!-- <li>
          <a href="#" class="icon brands fa-twitter">
            <span class="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon brands fa-facebook-f">
            <span class="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon brands fa-instagram">
            <span class="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon brands fa-linkedin-in">
            <span class="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon brands fa-dribbble">
            <span class="label">Dribbble</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon brands fa-pinterest">
            <span class="label">Pinterest</span>
          </a>
        </li>
      </ul>-->
      <!-- -->
      <!-- Menu -->
      <ul class="menu">
        <li>&copy; Untitled</li>
        <li>
          Created by Delissa Beaman
          <a href="#"></a>
        </li>
      </ul>
    </footer>
  </div>
</template>




<style>
</style>
