<template>
  <div class="intro">
    <h1>{{ message }}</h1>
    <!-- Intro -->
    <section id="intro" class="main style1 dark fullscreen">
      <div class="content">
        <header>
          <h2>
            Welcome to
            <strong>Roam Around!</strong>
          </h2>
        </header>
        <p>
          <strong>Roam Around!</strong>
          An interactive travel app which encourages travel to places in the world that you may not have initially
          considered.




          
        </p>




        
        




        
        
        
        
        
        
        
        .
        <hr />

        <a href="/signup" class="button">Signup!</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <!-- This added space between the buttons -->
        <a href="/login" class="button">Login!</a>

        <!-- <a href="https://html5up.net/license">Creative Commons Attribution license</a> -->

        <footer>
          <a href="#one" class="button style2 down">More</a>
        </footer>
      </div>
      <!-- <a href="#one" class="button style2 down anchored">Next</a> -->
    </section>
    <!-- One -->
    <section id="one" class="main style2 right dark fullscreen">
      <div class="content box style2">
        <header>
          <h2>Girlfriends' Getaway!</h2>
        </header>
        <p>
          Amazing sightseeing, shopping, beautiful beaches and endless fun with your gal pals!



          









          
          <hr>
          <strong>"We Travel not to Escape Life, but for Life not to escape us" - Anonymous</strong>
        </p>
      </div>
      <a href="#two" class="button style2 down anchored">Next</a>
    </section>


    <!-- Two -->
    <section id="two" class="main style2 left dark fullscreen">
      <div class="content box style2">
        <header>
          <h2>Couples' Trip</h2>
        </header>
        <p>
          In search of a romantic escape? Click here to find your next travel destination! From romantic and relaxing to a party goers wildest dreams.  Discover beautiful scenery  fabulous dining and dancing while exploring!
          <hr>
          <strong>"Wheresoever you go, go with all your heart." - Confucius</strong> 
        </p>
      </div>
      <a href="#work" class="button style2 down anchored">Next</a>
    </section>

    <!-- Three -->
    <section id="three" class="main style2 right dark fullscreen">

      <!-- main style2 right dark fullscreen -->
      <div class="content box style2">
        <header>
          <h2>Fun with the family!</h2>
        </header>
        <p>Create memories of active learning! Discover cool places and experiencing different cultures with children!
          <hr>
           <strong>"If kids live there, then kids can travel there" - TravelwithMeko</strong></p>
      </div>
      <a href="#work" class="button style2 down anchored">Next</a>
    </section>
    
    <!-- Trip Styles -->
    <section id="tripstyles" class="main style3 primary">
      <div class="content">
        <header>
          <h2>Trip Styles</h2>
          <a href="/signup" class="button style2 down anchored">Signup</a>
          <p><strong>
            You pick the style of trip you want!
            <br />Let us suggest where you should go!
            </strong>
          </p>
          <!-- <a href="/locations/?style_id=1" class="button">Girlfriends' Getaway!</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/locations/?style_id=2" class="button">Couples' Trip!</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/locations/?style_id=3" class="button">Fun with the Family!</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
        </header>



<!-- Gallery  -->
    <div class="gallery">
      <article class="from-left">
        <a href="/Users/acltc/actualize/roam_around_vue_app/public/images/CouplesTrip.jpg" class="image fit">
          <img width="100px " src="/images/CouplesTrip.jpg" title="Chiang Mai, Thailand" alt="" />
        </a>
      </article>
      <article class="from-right">
        <a href="/Users/acltc/actualize/roam_around_vue_app/public/images/CapeTown.jpg" class="image fit">
          <img width="100px " src="/images/CapeTown.jpg" title="Cape Town, South Africa" alt="" />
        </a>
      </article>
      <article class="from-left">
        <a href="/Users/acltc/actualize/roam_around_vue_app/public/images/Brazil.jpg" class="image fit">
          <img width="100px " src="/images/Brazil.jpg" title="Air Lounge" alt="" />
        </a>
      </article>
      <article class="from-right">
        <a href="http://sphm-finder-site-production.s3-ap-southeast-1.amazonaws.com/2018/03/lombok-pink-beach-1.jpg" class="image fit">
          <img width="100px " src="http://sphm-finder-site-production.s3-ap-southeast-1.amazonaws.com/2018/03/lombok-pink-beach-1.jpg" title="Carry on" alt="" />
        </a>
      </article>
      <article class="from-left">
        <a href="/Users/acltc/actualize/roam_around_vue_app/public/images/Greece.JPG" class="image fit">
          <img width="100px " src="/images/Greece.JPG" title="The sparkling shell" alt="" />
        </a>
      </article>
      <article class="from-right">
        <a href="/Users/acltc/actualize/roam_around_vue_app/public/images/GirlfriendGetaway.jpg" class="image fit">
          <img width="100px " src="/images/GirlfriendGetaway.jpg" title="Bent IX" alt="" />
        </a>
      </article>
    </div>   
  </div>
</section>







    <!-- Contact
    <section id="contact" class="main style3 secondary">
      <div class="content">
        <header>
          <h2>Stay Connected.</h2>
          <p>Signup to be added to our email list. <hr> Receive travel related news updates and sample travel itineraries.</p>
        </header>
        <div class="box">
          <form method="post" action="#">
            <div class="fields">
              <div class="field half">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div class="field half">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <!-- <div class="field">
                <textarea name="message" placeholder="Message" rows="6"></textarea>
              </div> -->
            <!-- </div> -->
            <ul class="actions special">
              <li>
                <a href="/signup" class="button">Thank you for signing up to the Roam Around!</a>
                <!-- <input type="submit" value="Send Message" /> -->
              </li>
              
            </ul>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      message: "",
    };
  },
  created: function() {},
  methods: {},
};
</script>