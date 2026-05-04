<script lang="ts">
  import {
    Facebook,
    Instagram,
    Youtube,
    Twitter,
    Linkedin,
  } from "lucide-svelte";
</script>

<footer class="w-full bg-primary px-6 py-12 text-[#4a4a4a] lg:px-20">
  <div class="mx-auto mb-12 h-px w-full max-w-7xl bg-[#4a4a4a]/20"></div>
  <div class="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-5">
    <div class="flex flex-col gap-6 col-span-2">
      <img src="/images/logo_main.png" alt="Karisma Logo" class="w-32" />
      <p class="leading-relaxed">
        Karisma's philosophy is that true beauty lies within everyone, and
        through their innovative, luxurious treatments, they help individuals
        embrace their natural allure and shine in their own way.
      </p>
      <div class="flex flex-wrap gap-4 text-[#4a4a4a]">
        <a href="/" class="hover:opacity-70"><Facebook size={30} /></a>
        <a href="/" class="hover:opacity-70"><Instagram size={30} /></a>
        <a href="/" class="hover:opacity-70"><Youtube size={35} /></a>
        <a href="/" aria-label='button' class="hover:opacity-70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="30"
            viewBox="0 0 21.407 20.793"
            ><path
              id="Path_321"
              data-name="Path 321"
              d="M24.711,8.381,31.921,0H30.213l-6.26,7.277L18.952,0H13.185l7.561,11-7.561,8.789h1.709L21.5,12.108l5.281,7.685h5.767L24.711,8.381Zm-2.34,2.72-.766-1.1-6.1-8.719h2.624l4.919,7.037.766,1.1,6.395,9.146H27.589L22.371,11.1Z"
              transform="translate(-12.095 0.5)"
              stroke-width="1"
            ></path></svg
          >
        </a>
        <a href="/" aria-label='button' class="hover:opacity-70"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="30.158"
            height="30.396"
            viewBox="0 0 23.158 26.396"
            ><path
              id="tiktok"
              d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
            ></path></svg
          ></a
        >
        <a href="/" aria-label='button' class="hover:opacity-70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30.158"
            height="30.396"
            viewBox="0 0 23.158 26.396"
            ><path
              d="M5.829 4.533c-.6 1.344-.363 3.752-.267 5.436-.648.359-1.48-.271-1.951-.271-.49 0-1.075.322-1.167.802-.066.346.089.85 1.201 1.289.43.17 1.453.37 1.69.928.333.784-1.71 4.403-4.918 4.931-.251.041-.43.265-.416.519.056.975 2.242 1.357 3.211 1.507.099.134.179.7.306 1.131.057.193.204.424.582.424.493 0 1.312-.38 2.738-.144 1.398.233 2.712 2.215 5.235 2.215 2.345 0 3.744-1.991 5.09-2.215.779-.129 1.448-.088 2.196.058.515.101.977.157 1.124-.349.129-.437.208-.992.305-1.123.96-.149 3.156-.53 3.211-1.505.014-.254-.165-.477-.416-.519-3.154-.52-5.259-4.128-4.918-4.931.236-.557 1.252-.755 1.69-.928.814-.321 1.222-.716 1.213-1.173-.011-.585-.715-.934-1.233-.934-.527 0-1.284.624-1.897.286.096-1.698.332-4.095-.267-5.438-1.135-2.543-3.66-3.829-6.184-3.829-2.508 0-5.014 1.268-6.158 3.833z"
            ></path></svg
          ></a
        >
        <a href="/" class="hover:opacity-70"><Linkedin size={30} /></a>
      </div>
    </div>

    <div>
      <h3 class="mb-6 text-3xl text-secondary font-seasons">Departments</h3>
      <ul class="space-y-3">
        <li class="flex items-center gap-2">
          <span class="h-1 w-1 rounded-full bg-[#4a4a4a]"></span>
          <a href="/dental" class="hover:underline">Dental</a>
        </li>
        <li class="flex items-center gap-2">
          <span class="h-1 w-1 rounded-full bg-[#4a4a4a]"></span>
          <a href="/derma" class="hover:underline">Derma</a>
        </li>
        <li class="flex items-center gap-2">
          <span class="h-1 w-1 rounded-full bg-[#4a4a4a]"></span>
          <a href="/laser" class="hover:underline">Laser Hair Removal</a>
        </li>
        <li class="flex items-center gap-2">
          <span class="h-1 w-1 rounded-full bg-[#4a4a4a]"></span>
          <a href="/skincare" class="hover:underline">Skincare</a>
        </li>
      </ul>
    </div>

    <!-- About Us -->
    <div>
      <h3 class="mb-6 text-3xl text-secondary font-seasons">About Us</h3>
      <ul class="space-y-3">
        <li class="flex items-center gap-2">
          <span class="h-1 w-1 rounded-full bg-[#4a4a4a]"></span>
          <a href="/about" class="hover:underline">About Us</a>
        </li>
        <li class="flex items-center gap-2">
          <span class="h-1 w-1 rounded-full bg-[#4a4a4a]"></span>
          <a href="/doctors" class="hover:underline">Our Doctors</a>
        </li>
        <li class="flex items-center gap-2">
          <span class="h-1 w-1 rounded-full bg-[#4a4a4a]"></span>
          <a href="/careers" class="hover:underline">Careers</a>
        </li>
        <li class="flex items-center gap-2">
          <span class="h-1 w-1 rounded-full bg-[#4a4a4a]"></span>
          <a href="/contact" class="hover:underline">Contact Us</a>
        </li>
      </ul>
    </div>

    <!-- Information -->
    <div>
      <h3 class="mb-6 text-3xl text-secondary font-seasons">Information</h3>
      <ul class="space-y-3">
        <li class="flex items-center gap-2">
          <span class="h-1 w-1 rounded-full bg-[#4a4a4a]"></span>
          <a href="/privacy" class="hover:underline">Privacy Policy</a>
        </li>
        <li class="flex items-center gap-2">
          <span class="h-1 w-1 rounded-full bg-[#4a4a4a]"></span>
          <a href="/cookie" class="hover:underline">Cookie Policy</a>
        </li>
        <li class="flex items-center gap-2">
          <span class="h-1 w-1 rounded-full bg-[#4a4a4a]"></span>
          <a href="/terms" class="hover:underline">Terms and conditions</a>
        </li>
      </ul>
    </div>
  </div>

  <!-- Bottom Copyright -->
  <div class="mt-16 border-t border-[#4a4a4a]/10 pt-8 text-center text-xs">
    © Copyright 2025. Karisma Medical Center
  </div>
</footer>
