



// ========== GLOBAL HEADER (TEMPLATE 2) ==========
const header = `
<header class="w-full fixed top-0 left-0 z-50 bg-white dark:bg-[#0D0F0E] border-b border-gray-200 dark:border-gray-700">

  <div class="container mx-auto px-4 py-4 flex items-center justify-between">

    <!-- LOGO -->
    <a href="index.html" class="flex items-center gap-2">
      <img src="Images/transparent-logo-1.png" class="w-8 h-8" />
      <span class="text-xl font-bold text-[#0D0F0E] dark:text-white">Compass Housing</span>
    </a>

    <!-- DESKTOP NAV -->
    <nav class="hidden md:flex items-center gap-8 text-[#0D0F0E] dark:text-gray-200 font-medium">

      <a href="index.html" class="hover:text-[#00C29A] nav-link" data-page="home">Home 1</a>
      <a href="home2.html" class="hover:text-[#00C29A] nav-link" data-page="home2">Home 2</a>

          <a href="aboutus.html" class="hover:text-[#00C29A] nav-link" data-page="about">About Us</a>

          <a href="contact.html" class="block py-2 nav-link hover:text-[#00C29A]" data-page="contact">Contact Us</a>


      <!-- MORE DROPDOWN -->
    
         <div class="relative">
            <button id="moreBtnServices" class="hover:text-[#00C29A] nav-link flex items-center gap-1">
              Services ▼
            </button>

            <div id="moreMenuServices" class="absolute  bg-white dark:bg-[#0A0A0A] shadow-lg rounded-lg p-3 w-48 mt-2 z-50 hidden">
            <a href="services.html" class="block py-2 nav-link hover:text-[#00C29A]" data-page="services">Services</a>
            <a href="servicesDetails.html" class="block py-2 nav-link hover:text-[#00C29A]" data-page="services-details">Services Details</a>
            </div>
        </div>


          <div class="relative">
            <button id="moreBtnBlogs" class="hover:text-[#00C29A] nav-link flex items-center gap-1">
              Blogs ▼
            </button>

            <div id="moreMenuBlogs" class="absolute bg-white dark:bg-[#0A0A0A] shadow-lg rounded-lg p-3 w-48 mt-2 z-50 hidden">
              <a href="blog.html" class=" block py-2 hover:text-[#00C29A] nav-link" data-page="blog">Blog</a>
              <a href="blog-details.html" class=" block py-2 hover:text-[#00C29A] nav-link" data-page="blog-details">Blog Details</a>
            </div>
          </div>



          <div class="relative">
            <button id="moreBtn" class=" hover:text-[#00C29A] nav-link flex items-center gap-1">
              More ▼
            </button>

            <div id="moreMenu" class="absolute bg-white dark:bg-[#0A0A0A] shadow-lg rounded-lg p-3 w-48 mt-2 z-50 hidden">
              <a href="404.html" class="block py-2 hover:text-[#00C29A]" data-page="404">404 Page</a>
              <a href="comingsoon.html" class="block py-2 hover:text-[#00C29A]" data-page="comingsoon">Coming Soon</a>
            </div>
      </div>

    </nav>

    <!-- RIGHT BUTTONS (DESKTOP) --> 
    <div class="hidden md:flex items-center gap-4 font-medium">
          <a href="signup.html" class="hover:text-[#00C29A] nav-link" data-page="signup">Sign Up</a>
      <a href="404.html" class="hover:text-[#00C29A] nav-link" data-page="notfound">Login</a>

      <!-- THEME ICON -->
      <button id="themeToggle" class="w-10 h-10 flex items-center justify-center rounded-full border">
        <span id="themeIcon">🌙</span>
      </button>
    </div>

    <!-- MOBILE HAMBURGER -->
    <button id="mobileMenuBtn" class="md:hidden text-3xl dark:text-white">☰</button>
  </div>

  <!-- MOBILE MENU -->
  <div id="mobileMenu" class="hidden flex-col bg-white dark:bg-[#0D0F0E] shadow-lg px-6 py-6 md:hidden space-y-4">

    <a href="index.html" class="block py-2 border-b nav-link" data-page="home">Home 1</a>
    <a href="home2.html" class="block py-2 border-b nav-link" data-page="home2">Home 2</a>
    <a href="blog.html" class="block py-2 border-b nav-link" data-page="blog">Blog</a>
    <a href="blog-details.html" class="block py-2 border-b nav-link" data-page="blog-details">Blog Details</a>
    <a href="aboutus.html" class="block py-2 border-b nav-link" data-page="about">About Us</a>

    <a href="services.html" class="block py-2 border-b nav-link" data-page="services">Services</a>
    <a href="servicesDetails.html" class="block py-2 border-b nav-link" data-page="servicesDetails">Services Details</a>
    <a href="contact.html" class="block py-2 border-b nav-link" data-page="contact">Contact</a>
    <a href="404.html" class="block py-2 border-b nav-link" data-page="404">404 Page</a>
    <a href="comingsoon.html" class="block py-2 border-b nav-link" data-page="comingsoon">Coming Soon</a>
    <a href="signup.html" class="block py-2 border-b nav-link" data-page="signup">Signup</a>
    <a href="login.html" class="block py-2 border-b nav-link" data-page="login">Login</a>

    <!-- MOBILE THEME TOGGLE -->
    <button id="mobileThemeToggle" class="w-full py-3 rounded-lg border flex items-center justify-center">
      <span id="mobileThemeIcon">🌙</span>
    </button>

  </div>
</header>
`;

document.getElementById("site-header").innerHTML = header;


function applyTheme() {
  const isDark = localStorage.theme === "dark";

  document.documentElement.classList.toggle("dark", isDark);

  const icon = isDark ? "☀️" : "🌙";

  const themeIcon = document.getElementById("themeIcon");
  const mobileThemeIcon = document.getElementById("mobileThemeIcon");

  if (themeIcon) themeIcon.textContent = icon;
  if (mobileThemeIcon) mobileThemeIcon.textContent = icon;
}
applyTheme();


// Toggle Theme (Desktop + Mobile)
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light";
  applyTheme();
}

const themeToggle = document.getElementById("themeToggle");
const mobileThemeToggle = document.getElementById("mobileThemeToggle");

if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
if (mobileThemeToggle) mobileThemeToggle.addEventListener("click", toggleTheme);



// Mobile Menu Toggle

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.onclick = () => {
    mobileMenu.classList.toggle("hidden");
  };
}


// Highlight Active Page
const active = document.body.dataset.page;
document.querySelectorAll(".nav-link").forEach((l) => {
  if (l.dataset.page === active) {
    l.classList.add("text-[#00C29A]", "font-semibold");
  }
});


const moreBtn = document.getElementById("moreBtn");
const moreMenu = document.getElementById("moreMenu");
const moreBtnServices = document.getElementById("moreBtnServices");
const moreMenuServices = document.getElementById("moreMenuServices");
const moreBtnBlogs = document.getElementById("moreBtnBlogs");
const moreMenuBlogs = document.getElementById("moreMenuBlogs");

moreBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  moreMenu.classList.toggle("hidden");

   moreMenuServices.classList.add("hidden");
   moreMenuBlogs.classList.add("hidden");
});

moreBtnServices.addEventListener("click", (e) => {
  e.stopPropagation();
  moreMenuServices.classList.toggle("hidden");

  moreMenuBlogs.classList.add("hidden");
  moreMenu.classList.add("hidden");
});

moreBtnBlogs.addEventListener("click", (e) => {
  e.stopPropagation();
  moreMenuBlogs.classList.toggle("hidden");

   moreMenuServices.classList.add("hidden");
   moreMenu.classList.add("hidden");
});


document.addEventListener("click", () => {
  moreMenu.classList.add("hidden");
  moreMenuServices.classList.add("hidden");
  moreMenuBlogs.classList.add("hidden");
});

