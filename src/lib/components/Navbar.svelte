<script lang="ts">
  import { Phone } from "lucide-svelte";
  import { slide, fade } from "svelte/transition";

  let departmentsOpen = false;
  let mobileMenuOpen = false;
  let mobileDepartmentsOpen = false;

  const departments = [
    { label: "Cardiology", href: "/departments/cardiology" },
    { label: "Dermatology", href: "/departments/dermatology" },
    { label: "Pediatrics", href: "/departments/pediatrics" },
  ];

  const navLinks = [
    { label: "ABOUT US", href: "/about" },
    { label: "OUR DOCTORS", href: "/doctors" },
    { label: "CAREERS", href: "/careers" },
    { label: "CONTACT US", href: "/contact" },
  ];

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    if (!mobileMenuOpen) mobileDepartmentsOpen = false;
  }
</script>

<nav class="fixed top-0 left-0 z-50 w-full border-b border-black/30 py-2">
  <div
    class="mx-auto flex h-20 lg:h-24 max-w-[1500px] items-center justify-between px-6 lg:px-10"
  >
    <!-- Logo -->
    <a href="/" class="flex flex-col leading-none z-50">
      <img src="/images/logo_main.png" class="w-32 lg:w-[150px]" alt="Logo" />
    </a>

    <!-- Desktop Navigation (lg and up) -->
    <div class="hidden items-center gap-10 lg:flex">
      <a
        href="/about"
        class="text-sm font-semibold text-white hover:text-[#c9a45c] transition-colors"
      >
        ABOUT US
      </a>

      <!-- Departments Dropdown -->
      <div
        class="relative"
        on:mouseenter={() => (departmentsOpen = true)}
        on:mouseleave={() => (departmentsOpen = false)}
      >
        <button
          class="flex items-center gap-2 text-sm font-semibold text-white hover:text-[#c9a45c]"
        >
          DEPARTMENTS
          <span
            class="text-[10px] transition-transform {departmentsOpen
              ? 'rotate-180'
              : ''}">▼</span
          >
        </button>

        {#if departmentsOpen}
          <div
            transition:fade={{ duration: 150 }}
            class="absolute left-0 top-full mt-3 w-56 rounded-2xl border border-white/10 bg-black/80 p-3 shadow-2xl backdrop-blur-xl"
          >
            {#each departments as dept}
              <a
                href={dept.href}
                class="block rounded-xl px-4 py-3 text-sm text-white hover:bg-white/10 hover:text-[#c9a45c]"
              >
                {dept.label}
              </a>
            {/each}
          </div>
        {/if}
      </div>

      {#each navLinks.slice(1) as item}
        <a
          href={item.href}
          class="text-sm font-semibold text-white hover:text-[#c9a45c] transition-colors"
        >
          {item.label}
        </a>
      {/each}
    </div>

    <!-- Right Side (Desktop) -->
    <div class="hidden items-center gap-6 lg:flex">
      <a
        href="tel:+97165068777"
        class="text-sm font-semibold text-white hover:text-[#c9a45c]"
      >
        <Phone class="inline"/> +971 6 506 8777
      </a>

      <!-- UAE Flag -->
      <div
        class="flex h-8 w-8 overflow-hidden rounded-full border border-white/20"
      >
        <div class="w-1/4 bg-red-600"></div>
        <div class="w-3/4">
          <div class="h-1/3 bg-green-500"></div>
          <div class="h-1/3 bg-white"></div>
          <div class="h-1/3 bg-black"></div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Toggle Button -->
    <button
      on:click={toggleMobileMenu}
      class="relative z-50 rounded-xl border border-white/20 bg-white/10 p-2 text-white lg:hidden"
      aria-label="Toggle Menu"
    >
      {#if !mobileMenuOpen}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      {/if}
    </button>
  </div>

  <!-- Mobile Sidebar Menu -->
  {#if mobileMenuOpen}
    <!-- Overlay -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      transition:fade
      class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
      on:click={toggleMobileMenu}
    ></div>

    <!-- Menu Panel -->
    <div
      transition:slide={{ axis: "x" }}
      class="fixed right-0 top-0 z-40 h-screen w-[280px] bg-[#1a1a1a] p-6 pt-24 shadow-2xl lg:hidden"
    >
      <div class="flex flex-col gap-4">
        <a
          on:click={toggleMobileMenu}
          href="/about"
          class="text-lg font-medium text-white border-b border-white/5 pb-2"
        >
          ABOUT US
        </a>

        <!-- Mobile Departments Accordion -->
        <div class="flex flex-col border-b border-white/5 pb-2">
          <button
            on:click={() => (mobileDepartmentsOpen = !mobileDepartmentsOpen)}
            class="flex items-center justify-between text-lg font-medium text-white"
          >
            DEPARTMENTS
            <span
              class="transition-transform {mobileDepartmentsOpen
                ? 'rotate-180'
                : ''}">▼</span
            >
          </button>

          {#if mobileDepartmentsOpen}
            <div transition:slide class="mt-2 flex flex-col gap-2 pl-4">
              {#each departments as dept}
                <a
                  on:click={toggleMobileMenu}
                  href={dept.href}
                  class="text-white/70 hover:text-[#c9a45c] py-1"
                >
                  {dept.label}
                </a>
              {/each}
            </div>
          {/if}
        </div>

        {#each navLinks.slice(1) as item}
          <a
            on:click={toggleMobileMenu}
            href={item.href}
            class="text-lg font-medium text-white border-b border-white/5 pb-2"
          >
            {item.label}
          </a>
        {/each}

        <!-- Bottom Mobile Info -->
        <div class="mt-auto flex flex-col gap-6 pt-10">
          <a
            href="tel:+97165068777"
            class="flex items-center gap-3 text-[#c9a45c] font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.405 5.405l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
            +971 6 506 8777
          </a>

          <div class="flex items-center gap-3 text-white/50 text-sm">
            <div
              class="flex h-6 w-6 overflow-hidden rounded-full border border-white/20"
            >
              <div class="w-1/4 bg-red-600"></div>
              <div class="w-3/4">
                <div class="h-1/3 bg-green-500"></div>
                <div class="h-1/3 bg-white"></div>
                <div class="h-1/3 bg-black"></div>
              </div>
            </div>
            UAE - Sharjah
          </div>
        </div>
      </div>
    </div>
  {/if}
</nav>
