// Inject Font Awesome CDN dynamically
const faCDN = document.createElement("link");
faCDN.rel = "stylesheet";
faCDN.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
document.head.appendChild(faCDN);


document.getElementById("site-footer").innerHTML = `
<footer class="w-full bg-[#0E1C1F] text-white pt-16 pb-10 px-14">

  <!-- TOP SUBSCRIBE SECTION -->
  <div class="container mx-auto px-4 flex flex-col lg:flex-row justify-between gap-10">

    <!-- Subscribe Text + Input -->
    <div>
      <p class="text-sm opacity-80 mb-3">
        Stay updated with the latest news,<br> promotions, and exclusive offers.
      </p>

      <div class="flex bg-white rounded-full overflow-hidden max-w-sm">
        <input id="footerEmail" type="email" placeholder="Enter your email"
          class="px-4 py-2 w-full outline-none text-black">
        <button id="footerSubscribeBtn" class="px-5 py-2 bg-[#00C29A] hover:bg-[#009f7e] text-white font-medium transition">
          Subscribe
        </button>
      </div>
    </div>

    <p class="text-sm opacity-80 max-w-sm">
      By subscribing, you agree to receive our promotional emails.<br>
      You can unsubscribe at any time.
    </p>

    <!-- SOCIAL ICONS -->
    <div class="flex items-center gap-4 text-xl opacity-80">

      <a href="https://google.com" target="_blank" class="hover:text-[#4ADE80]">
        🌐
      </a>

      <a href="https://facebook.com" target="_blank" class="hover:text-[#4ADE80]">
        <i class="fa-brands fa-facebook"></i>
      </a>

      <a href="https://instagram.com" target="_blank" class="hover:text-[#4ADE80]">
        <i class="fa-brands fa-instagram"></i>
      </a>

      <a href="https://youtube.com" target="_blank" class="hover:text-[#4ADE80]">
        <i class="fa-brands fa-youtube"></i>
      </a>

    </div>

  </div>

  <!-- Divider -->
  <div class="container mx-auto px-4 mt-12 border-t border-gray-700"></div>

  <!-- MID SECTION -->
  <div class="container mx-auto px-4 mt-10 flex flex-col lg:flex-row justify-between gap-10">

    <!-- Left CTA -->
    <div>
      <h2 class="text-3xl font-semibold mb-4 leading-snug">
        Begin your path to<br>success—contact us today.
      </h2>
      <a href="contact.html">
        <button class="px-6 py-2 rounded-full bg-[#00C29A] hover:bg-[#009f7e] text-white transition">
          Get in touch
        </button>
      </a>
    </div>

    <!-- NAV GRID -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">

      <div>
        <h4 class="font-semibold mb-3">Home</h4>
        <ul class="space-y-2 text-sm opacity-80">
          <li><a href="index.html" class="hover:text-[#4ADE80]">Home 1</a></li>
          <li><a href="home2.html" class="hover:text-[#4ADE80]">Home 2</a></li>
          <li><a href="servicesDetails.html" class="hover:text-[#4ADE80]">Services Details</a></li>
          <li><a href="comingsoon.html" class="hover:text-[#4ADE80]">Featured Properties</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-semibold mb-3">Explore</h4>
        <ul class="space-y-2 text-sm opacity-80">
          <li><a href="testimonials.html" class="hover:text-[#4ADE80]">Testimonials</a></li>
          <li><a href="blog.html" class="hover:text-[#4ADE80]">Blog</a></li>
          <li><a href="comingsoon.html" class="hover:text-[#4ADE80]">FAQs</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-semibold mb-3">Properties</h4>
        <ul class="space-y-2 text-sm opacity-80">
          <li><a href="contact.html" class="hover:text-[#4ADE80]">Contact</a></li>
          <li><a href="servicesDetails.html" class="hover:text-[#4ADE80]">Services Details</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-semibold mb-3">Support</h4>
        <ul class="space-y-2 text-sm opacity-80">
          <li><a href="contact.html" class="hover:text-[#4ADE80]">Contact</a></li>
          <li><a href="comingsoon.html" class="hover:text-[#4ADE80]">Coming Soon</a></li>
          <li><a href="404.html" class="hover:text-[#4ADE80]">404 Page</a></li>
        </ul>
      </div>

    </div>

  </div>

  <!-- BOTTOM BAR -->
  <div class="container mx-auto px-4 mt-12 flex flex-col lg:flex-row justify-between text-xs opacity-70">

    <p>© 2025 Compass Housing</p>

    <div class="flex gap-6">
      <a href="comingsoon.html" class="hover:text-[#4ADE80]">Terms of Service</a>
      <a href="comingsoon.html" class="hover:text-[#4ADE80]">Privacy Policy</a>
    </div>

  </div>

</footer>
`;
document.addEventListener("click", (e) => {
  if (e.target.id === "footerSubscribeBtn") {
    const emailInput = document.getElementById("footerEmail");
    const email = emailInput.value.trim();

    if (email === "") {
      alert("Please fill the email field");
      emailInput.focus();
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|net)$/
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      emailInput.focus();
      return;
    }

    alert("Subscribed successfully!");

    emailInput.value = "";


  }
});

