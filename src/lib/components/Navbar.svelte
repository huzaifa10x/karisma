<script lang="ts">
  import { Phone, ChevronDown, ChevronRight, Menu, X } from "lucide-svelte";
  import { slide, fade } from "svelte/transition";

  let departmentsOpen = $state(false);
  let mobileMenuOpen = $state(false);
  let mobileDepartmentsOpen = $state(false);
  let activeMobileSubmenu = $state<string | null>(null);

  const departments = [
    {
      label: "Cardiology",
      href: "/departments/cardiology",
      children: [
        { label: "Heart Checkup", href: "/departments/cardiology/checkup" },
        { label: "ECG", href: "/departments/cardiology/ecg" },
      ],
    },
    {
      label: "Dermatology",
      href: "/departments/dermatology",
      children: [
        { label: "Skin Care", href: "/departments/dermatology/skincare" },
        { label: "Laser Treatment", href: "/departments/dermatology/laser" },
      ],
    },
    {
      label: "Pediatrics",
      href: "/departments/pediatrics",
      children: [
        { label: "Child Checkup", href: "/departments/pediatrics/checkup" },
        { label: "Vaccination", href: "/departments/pediatrics/vaccine" },
      ],
    },
  ];

  const navLinks = [
    { label: "ABOUT US", href: "/about" },
    { label: "OUR DOCTORS", href: "/doctors" },
    { label: "CAREERS", href: "/careers" },
    { label: "CONTACT US", href: "/contact" },
  ];

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;

    if (!mobileMenuOpen) {
      mobileDepartmentsOpen = false;
      activeMobileSubmenu = null;
    }
  }

  function toggleSubmenu(label: string) {
    activeMobileSubmenu = activeMobileSubmenu === label ? null : label;
  }
</script>

<nav class="absolute top-0 left-0 z-50 w-full border-b border-black/30 py-2">
  <div
    class="mx-auto flex h-20 max-w-375 items-center justify-between px-6 lg:h-24 lg:px-10"
  >
    <!-- Logo -->
    <a href="/" class="z-50">
      <img src="/images/logo_main.png" class="w-32 lg:w-37.5" alt="Logo" />
    </a>

    <!-- Desktop Nav -->
    <div class="hidden items-center gap-10 lg:flex">
      <a
        href="/about"
        class="text-sm font-semibold text-white hover:text-[#c9a45c]"
      >
        ABOUT US
      </a>

      <!-- Desktop Departments -->
      <div
        class="relative"
        role="menu"
        tabindex="0"
        onmouseenter={() => (departmentsOpen = true)}
        onmouseleave={() => (departmentsOpen = false)}
      >
        <button
          class="flex items-center gap-2 text-sm font-semibold text-white hover:text-[#c9a45c]"
        >
          DEPARTMENTS
          <ChevronDown
            size={16}
            class={`transition-transform ${
              departmentsOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {#if departmentsOpen}
          <div
            transition:fade
            class="absolute left-0 top-full mt-3 w-72 rounded-2xl border border-white/10 bg-black/90 p-3 shadow-2xl"
          >
            {#each departments as dept}
              <div class="group relative">
                <a
                  href={dept.href}
                  class="flex items-center justify-between rounded-xl px-4 py-3 text-white hover:bg-white/10"
                >
                  {dept.label}
                  <ChevronRight size={14} />
                </a>

                <!-- Submenu -->
                <div
                  class="invisible absolute left-full top-0 ml-2 w-56 rounded-2xl border border-white/10 bg-black/95 p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100"
                >
                  {#each dept.children as child}
                    <a
                      href={child.href}
                      class="block rounded-lg px-4 py-2 text-white hover:bg-white/10"
                    >
                      {child.label}
                    </a>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        {/if}
      </div>

      {#each navLinks.slice(1) as item}
        <a
          href={item.href}
          class="text-sm font-semibold text-white hover:text-[#c9a45c]"
        >
          {item.label}
        </a>
      {/each}
    </div>

    <!-- Desktop Right -->
    <div class="hidden items-center gap-6 lg:flex">
      <a
        href="tel:+97165068777"
        class="text-sm font-semibold text-white hover:text-[#c9a45c]"
      >
        <Phone class="inline" />
        +971 6 506 8777
      </a>
    </div>

    <!-- Mobile Toggle -->
    <button
      onclick={toggleMobileMenu}
      class="z-50 rounded-xl border border-white/20 bg-white/10 p-2 text-white lg:hidden"
    >
      {#if mobileMenuOpen}
        <X size={24} />
      {:else}
        <Menu size={24} />
      {/if}
    </button>
  </div>

  <!-- Mobile Sidebar -->
  {#if mobileMenuOpen}
    <!-- Overlay -->
    <button
      class="fixed inset-0 z-40 bg-black/60 lg:hidden"
      onclick={toggleMobileMenu}
      aria-label="Close menu"
    ></button>

    <!-- Sidebar -->
    <div
      transition:slide={{ axis: "x", duration: 300 }}
      class="fixed right-0 top-0 z-50 h-screen w-75 bg-[#111] p-6 pt-24 shadow-2xl lg:hidden"
    >
      <div class="flex flex-col gap-4">
        <a
          href="/about"
          class="border-b border-white/10 pb-3 text-lg text-white"
          onclick={toggleMobileMenu}
        >
          ABOUT US
        </a>

        <!-- Mobile Departments -->
        <div class="border-b border-white/10 pb-3">
          <button
            onclick={() => (mobileDepartmentsOpen = !mobileDepartmentsOpen)}
            class="flex w-full items-center justify-between text-lg text-white"
          >
            DEPARTMENTS
            <ChevronDown
              class={`transition-transform ${
                mobileDepartmentsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {#if mobileDepartmentsOpen}
            <div transition:slide class="mt-3 space-y-3">
              {#each departments as dept}
                <div>
                  <button
                    onclick={() => toggleSubmenu(dept.label)}
                    class="flex w-full items-center justify-between py-2 text-white/80"
                  >
                    {dept.label}
                    <ChevronDown
                      size={14}
                      class={`transition-transform ${
                        activeMobileSubmenu === dept.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {#if activeMobileSubmenu === dept.label}
                    <div transition:slide class="ml-4 mt-2 flex flex-col gap-2">
                      {#each dept.children as child}
                        <a
                          href={child.href}
                          onclick={toggleMobileMenu}
                          class="text-sm text-white/60 hover:text-[#c9a45c]"
                        >
                          {child.label}
                        </a>
                      {/each}
                    </div>
                  {/if}
                </div>
              {/each}
            </div>
          {/if}
        </div>

        <!-- Other Links -->
        {#each navLinks.slice(1) as item}
          <a
            href={item.href}
            class="border-b border-white/10 pb-3 text-lg text-white"
            onclick={toggleMobileMenu}
          >
            {item.label}
          </a>
        {/each}

        <!-- Bottom -->
        <div class="mt-8">
          <a
            href="tel:+97165068777"
            class="flex items-center gap-3 font-semibold text-[#c9a45c]"
          >
            <Phone size={18} />
            +971 6 506 8777
          </a>
        </div>
      </div>
    </div>
  {/if}
</nav>
