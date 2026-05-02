<script lang="ts">
  import {
    Facebook,
    Instagram,
    Youtube,
    Twitter,
    Linkedin,
  } from "lucide-svelte";
</script>

<footer class="w-full bg-primary-color px-6 py-12 text-[#4a4a4a] lg:px-20">
  <div class="mx-auto mb-12 h-[1px] w-full max-w-7xl bg-[#4a4a4a]/20"></div>
  <div class="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-4">
    <div class="flex flex-col gap-6">
      <img src="/images/logo_main.png" alt="Karisma Logo" class="w-32" />
      <p class="text-sm leading-relaxed">
        Karisma's philosophy is that true beauty lies within everyone, and
        through their innovative, luxurious treatments, they help individuals
        embrace their natural allure and shine in their own way.
      </p>
      <div class="flex flex-wrap gap-4 text-[#4a4a4a]">
        <a href="/" class="hover:opacity-70"><Facebook size={20} /></a>
        <a href="/" class="hover:opacity-70"><Instagram size={20} /></a>
        <a href="/" class="hover:opacity-70"><Youtube size={20} /></a>
        <a href="/" class="hover:opacity-70">
          <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current"
            ><path
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            /></svg
          >
        </a>
        <a href="/" class="hover:opacity-70"><Linkedin size={20} /></a>
      </div>
    </div>

    <div>
      <h3 class="mb-6 font-serif text-3xl italic text-[#4a5d4e]">
        Departments
      </h3>
      <ul class="space-y-3 text-sm">
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
      <h3 class="mb-6 font-serif text-3xl italic text-[#4a5d4e]">About Us</h3>
      <ul class="space-y-3 text-sm">
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
      <h3 class="mb-6 font-serif text-3xl italic text-[#4a5d4e]">
        Information
      </h3>
      <ul class="space-y-3 text-sm">
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