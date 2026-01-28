// // ========== GLOBAL HEADER (TEMPLATE 2) ==========

// const header = `
// <header class="w-full fixed top-0 left-0 z-50 bg-white dark:bg-[#0D0F0E] border-b border-gray-200 dark:border-gray-700">

//   <div class="container mx-auto px-4 py-4 flex items-center justify-between">

//     <!-- LOGO -->
//     <a href="index.html" class="flex items-center gap-2">
//       <img src="Images/transparent-logo-1.png" class="w-8 h-8" />
//       <span class="text-xl font-bold text-[#0D0F0E] dark:text-white">Compass Housing</span>
//     </a>

//     <!-- DESKTOP MENU -->
//     <nav class="hidden md:flex items-center gap-8 text-[#0D0F0E] dark:text-gray-200 font-medium">

//       <a href="index.html" class="hover:text-[#00C29A] nav-link" data-page="home">Home 1</a>
//       <a href="home2.html" class="hover:text-[#00C29A] nav-link" data-page="home2">Home 2</a>
//       <a href="blog.html" class="hover:text-[#00C29A] nav-link" data-page="blog">Blog</a>
//       <a href="blog-details.html" class="hover:text-[#00C29A] nav-link" data-page="blog-details">Blog Details</a>
//       <a href="aboutus.html" class="hover:text-[#00C29A] nav-link" data-page="about">About Us</a>

//       <!-- MORE DROPDOWN -->
//       <div class="relative group">
//         <button class="hover:text-[#00C29A] flex items-center gap-1">
//           More ▼
//         </button>
        
//         <div class="absolute hidden group-hover:block bg-white dark:bg-[#0A0A0A] shadow-lg rounded-lg p-3 w-48 mt-2">
//           <a href="listing.html" class="block py-2 hover:text-[#00C29A]">Listings</a>
//           <a href="propertydetails.html" class="block py-2 hover:text-[#00C29A]">Property Details</a>
//           <a href="contact.html" class="block py-2 hover:text-[#00C29A]">Contact</a>
//           <a href="404.html" class="block py-2 hover:text-[#00C29A]">404 Page</a>
//           <a href="comingsoon.html" class="block py-2 hover:text-[#00C29A]">Coming Soon</a>
//           <a href="signup.html" class="block py-2 hover:text-[#00C29A]">Signup</a>
//           <a href="login.html" class="block py-2 hover:text-[#00C29A]">Login</a>
//         </div>
//       </div>

//     </nav>

//     <!-- RIGHT BUTTONS -->
//     <div class="hidden md:flex items-center gap-4">

//       <a href="signup.html" class="text-[#0D0F0E] dark:text-gray-200 hover:text-[#00C29A]">
//         Sign Up
//       </a>

//       <!-- THEME SWITCH -->
//       <button id="themeToggle" class="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center">
//         🌓
//       </button>
//     </div>

//     <!-- MOBILE HAMBURGER -->
//     <button id="mobileMenuBtn" class="md:hidden text-3xl dark:text-white">☰</button>

//   </div>

//   <!-- MOBILE MENU -->
//  <div id="mobileMenu" class="hidden flex-col bg-white dark:bg-[#0D0F0E] shadow-lg px-6 py-6 md:hidden space-y-4">

//     <a href="index.html" class="py-2 border-b hover:text-[#00C29A] nav-link" data-page="home">Home 1</a>
//     <a href="home2.html" class="py-2 border-b hover:text-[#00C29A] nav-link" data-page="home2">Home 2</a>
//     <a href="blog.html" class="py-2 border-b hover:text-[#00C29A] nav-link" data-page="blog">Blog</a>
//     <a href="blog-details.html" class="py-2 border-b hover:text-[#00C29A] nav-link" data-page="blog-details">Blog Details</a>
//     <a href="aboutus.html" class="py-2 border-b hover:text-[#00C29A] nav-link" data-page="about">About Us</a>

//     <a href="listing.html" class="py-2 border-b hover:text-[#00C29A]">Listings</a>
//     <a href="propertydetails.html" class="py-2 border-b hover:text-[#00C29A]">Property Details</a>
//     <a href="contact.html" class="py-2 border-b hover:text-[#00C29A]">Contact</a>
//     <a href="404.html" class="py-2 border-b hover:text-[#00C29A]">404 Page</a>
//     <a href="comingsoon.html" class="py-2 border-b hover:text-[#00C29A]">Coming Soon</a>
//     <a href="signup.html" class="py-2 border-b hover:text-[#00C29A]">Signup</a>
//     <a href="login.html" class="py-2 border-b hover:text-[#00C29A]">Login</a>
//     <button id="mobileThemeToggle" class="mt-4 py-2 border rounded-md dark:border-gray-700 text-center">
//       Toggle Theme
//     </button>
  //  <button id="themeToggle" class="w-10 h-10 flex items-center justify-center rounded-full border">
  //       <span id="themeIcon">🌙</span>
  //     </button>
//   </div>
// </header>
// `;

// document.getElementById("site-header").innerHTML = header;


// // ================= THEME LOGIC =================
// function applyTheme() {
//   if (localStorage.theme === "dark") {
//     document.documentElement.classList.add("dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//   }
// }
// applyTheme();

// document.addEventListener("click", (e) => {
//   if (e.target.id === "themeToggle" || e.target.id === "mobileThemeToggle") {
//     const isDark = document.documentElement.classList.toggle("dark");
//     localStorage.theme = isDark ? "dark" : "light";
//   }
// });

// // Mobile Menu Toggle
// document.getElementById("mobileMenuBtn").onclick = () => {
//   document.getElementById("mobileMenu").classList.toggle("hidden");
// };

// // Highlight Active Page
// const active = document.body.dataset.page;
// document.querySelectorAll(".nav-link").forEach((l) => {
//   if (l.dataset.page === active) {
//     l.classList.add("text-[#00C29A]", "font-semibold");
//   }
// });



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
      <a href="blog.html" class="hover:text-[#00C29A] nav-link" data-page="blog">Blog</a>
      <a href="blog-details.html" class="hover:text-[#00C29A] nav-link" data-page="blog-details">Blog Details</a>
      <a href="aboutus.html" class="hover:text-[#00C29A] nav-link" data-page="about">About Us</a>

      <!-- MORE DROPDOWN -->
      <div class="relative group">
        <button class="hover:text-[#00C29A] flex items-center gap-1">
          More ▼
        </button>

        <div class="absolute hidden group-hover:block bg-white dark:bg-[#0A0A0A] shadow-lg rounded-lg p-3 w-48 mt-2">
          <a href="listing.html" class="block py-2 hover:text-[#00C29A]">Listings</a>
          <a href="propertydetails.html" class="block py-2 hover:text-[#00C29A]">Property Details</a>
          <a href="contact.html" class="block py-2 hover:text-[#00C29A]">Contact</a>
          <a href="404.html" class="block py-2 hover:text-[#00C29A]">404 Page</a>
          <a href="comingsoon.html" class="block py-2 hover:text-[#00C29A]">Coming Soon</a>
          <a href="signup.html" class="block py-2 hover:text-[#00C29A]">Signup</a>
          <a href="login.html" class="block py-2 hover:text-[#00C29A]">Login</a>
        </div>
      </div>

    </nav>

    <!-- RIGHT BUTTONS (DESKTOP) -->
    <div class="hidden md:flex items-center gap-4">
      <a href="signup.html" class="hover:text-[#00C29A]">Sign Up</a>

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

    <a href="listing.html" class="block py-2 border-b">Listings</a>
    <a href="propertydetails.html" class="block py-2 border-b">Property Details</a>
    <a href="contact.html" class="block py-2 border-b">Contact</a>
    <a href="404.html" class="block py-2 border-b">404 Page</a>
    <a href="comingsoon.html" class="block py-2 border-b">Coming Soon</a>
    <a href="signup.html" class="block py-2 border-b">Signup</a>
    <a href="login.html" class="block py-2 border-b">Login</a>

    <!-- MOBILE THEME TOGGLE -->
    <button id="mobileThemeToggle" class="w-full py-3 rounded-lg border flex items-center justify-center">
      <span id="mobileThemeIcon">🌙</span>
    </button>

  </div>
</header>
`;

document.getElementById("site-header").innerHTML = header;


// ================= THEME LOGIC =================
function applyTheme() {
  const isDark = localStorage.theme === "dark";

  document.documentElement.classList.toggle("dark", isDark);

  const icon = isDark ? "☀️" : "🌙";

  document.getElementById("themeIcon").textContent = icon;
  document.getElementById("mobileThemeIcon").textContent = icon;
}
applyTheme();

// Toggle Theme (Desktop + Mobile)
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light";
  applyTheme();
}

// Desktop toggle
document.getElementById("themeToggle").addEventListener("click", toggleTheme);

// Mobile toggle
document.getElementById("mobileThemeToggle").addEventListener("click", toggleTheme);







// ================= THEME LOGIC =================
// function applyTheme() {
//   const dark = localStorage.theme === "dark";
//   document.documentElement.classList.toggle("dark", dark);

//   document.getElementById("themeIcon").textContent = dark ? "☀️" : "🌙";
//   document.getElementById("mobileThemeIcon").textContent = dark ? "☀️" : "🌙";
// }
// applyTheme();

// document.addEventListener("click", (e) => {
//   if (e.target.id === "themeToggle" || e.target.id === "mobileThemeToggle") {
//     const isDark = document.documentElement.classList.toggle("dark");
//     localStorage.theme = isDark ? "dark" : "light";

//     applyTheme();
//   }
// });

// // Mobile Menu Toggle
document.getElementById("mobileMenuBtn").onclick = () => {
  document.getElementById("mobileMenu").classList.toggle("hidden");
};

// Highlight Active Page
const active = document.body.dataset.page;
document.querySelectorAll(".nav-link").forEach((l) => {
  if (l.dataset.page === active) {
    l.classList.add("text-[#00C29A]", "font-semibold");
  }
});
