<template>
  <div id="app">
    <router-view />
    <!-- Header -->
    <header id="header">
      <h1>Roam Around</h1>
      <nav>
        <ul>
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
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Footer -->
    <footer id="footer">
      <!-- Icons -->
      <ul class="icons">
        <li>
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
      </ul>

      <!-- Menu -->
      <ul class="menu">
        <li>&copy; Untitled</li>
        <li>
          Design:
          <a href="/https://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style>
</style>
