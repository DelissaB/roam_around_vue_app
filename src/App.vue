<template>
  <div id="app">
    <!-- Nav -->
    <nav id="nav">
      <ul>
        <li>
          <a href="#top" id="top-link">
            <span class="icon solid fa-home">Intro</span>
          </a>
        </li>
        <li>
          <a href="#portfolio" id="portfolio-link">
            <span class="icon solid fa-th">Portfolio</span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- Header -->
    <div id="header">
      <div class="top">
        <!-- Logo -->
        <div id="logo">
          <span class="95c29e02-8a66-470d-b88c-4be8f005613e.JPG">
            <img src="images/thailand.jpg" alt />
          </span>
        </div>
      </div>
    </div>

    <router-view />

    <!-- Footer -->
    <div id="footer">
      <!-- Copyright -->
      <ul class="copyright">
        <li>&copy; Untitled. All rights reserved.</li>
        <li>
          Design:
          <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </div>
</template>


<style>
</style>
