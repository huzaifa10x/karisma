<script lang="ts">
  import { Phone, ChevronDown, ChevronRight, Menu, X } from "lucide-svelte";
  import { slide, fade } from "svelte/transition";

  let visible = $state(true);
  let lastScrollY = $state(0);

  function handleScroll() {
    const currentScrollY = window.scrollY;
    if (currentScrollY <= 0) {
      visible = true;
    } else if (currentScrollY > lastScrollY) {
      visible = false;
    } else {
      visible = true;
    }
    lastScrollY = currentScrollY;
  }

  let data = $state<any>(null);
  let loading = $state(true);
  let error = $state<string | null>(null);

  $effect(() => {
    window.addEventListener("scroll", handleScroll);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://admin.karismamc.com/api/departments",
        );
        if (!response.ok) throw new Error("Network response was not ok");
        data = await response.json();
      } catch (err: unknown) {
        if (err instanceof Error) {
          error = err.message;
        } else {
          error = String(err);
        }
      } finally {
        loading = false;
      }
    };
    fetchData();
    return () => window.removeEventListener("scroll", handleScroll);
  });

  let departmentsOpen = $state(false);
  let mobileMenuOpen = $state(false);
  let mobileDepartmentsOpen = $state(false);
  let activeMobileSubmenu = $state<string | null>(null);

  const navLinks = [
    { label: "ABOUT US", href: "/en/about" },
    { label: "OUR DOCTORS", href: "/en/doctors" },
    { label: "CAREERS", href: "/en/careers" },
    { label: "CONTACT US", href: "/en/contact_us" },
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

<nav
  class="fixed top-0 left-0 z-50 w-full shadow-lg border-black/30 py-2 transition-all delay-200 duration-300 ease-in-out"
  class:translate-y-0={visible}
  class:-translate-y-full={!visible}
  class:navBg={lastScrollY > 50}
  class:backdrop-blur-2xl={lastScrollY > 50}
  class:backdrop-blur-md={lastScrollY > 50}
>
  <div
    class="mx-auto flex h-24 items-center justify-between px-6 lg:h-24 lg:px-10"
  >
    <div class="flex items-center gap-10">
      <a href="/en/" class="z-50">
        <img src="/images/logo_main.png" class="w-32 lg:w-37.5" alt="Logo" />
      </a>

      <div class="hidden items-center gap-10 lg:flex">
        <a
          href="/en/about"
          class=" font-semibold text-white hover:text-[#c9a45c]"
        >
          ABOUT US
        </a>

        <div
          class="relative"
          role="menu"
          tabindex="0"
          onmouseenter={() => (departmentsOpen = true)}
          onmouseleave={() => (departmentsOpen = false)}
        >
          <button
            class="flex items-center gap-2 font-semibold text-white hover:text-[#c9a45c]"
          >
            <a
              href="/en/departments"
              class="font-semibold text-white hover:text-[#c9a45c]"
            >
              DEPARTMENTS
            </a>
            <ChevronDown
              size={16}
              class={`transition-transform ${departmentsOpen ? "rotate-180" : ""}`}
            />
          </button>

          {#if departmentsOpen}
            <div
              transition:fade
              class="absolute left-0 top-3 mt-3 w-72 rounded-bl-2xl border border-white/10 bg-white p-3 shadow-2xl"
            >
              {#each data.departmentPage?.slice(1) || [] as dept}
                <div class="group relative">
                  <a
                    href={"/en/" + dept.link}
                    class="flex items-center justify- gap-4 rounded-lg px-4 py-2 relative group/two duration-300 text-black/40 uppercase font-semibold hover:text-primary"
                  >
                    <span
                      class="h-1.5 w-1.5 -ml-4 -left-10 opacity-0 group-hover/two:left-1 group-hover/two:opacity-100 duration-300 rounded-full bg-c5"
                    ></span>

                    {dept.title}
                    <ChevronRight
                      class="duration-300 delay-100 group-hover:rotate-180 absolute right-0"
                      size={14}
                    />
                  </a>

                  <!-- Submenu -->
                  <div
                    class="invisible absolute left-full -top-3.5 ml-2 w-56 rounded-bl-2xl border border-white/10 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100"
                  >
                    {#each dept.listItems as child}
                      <a
                        href={`/en/${dept.link}/${child.canonical_name}`}
                        class="flex items-center gap-4 rounded-lg px-4 py-2 relative group/two duration-300 text-black/40 uppercase font-semibold hover:text-primary"
                      >
                        <span
                          class="h-1.5 w-1.5 -ml-4 -left-10 opacity-0 group-hover/two:left-1 group-hover/two:opacity-100 duration-300 rounded-full bg-c5"
                        ></span>
                        {child.service_name}
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
            class="font-semibold text-white hover:text-[#c9a45c]"
          >
            {item.label}
          </a>
        {/each}
      </div>
    </div>

    <!-- Desktop Right -->
    <div class="hidden items-center gap-6 lg:flex">
      <a
        href="tel:+97165068777"
        class="text-white space-x-5 font-semibold hover:text-[#c9a45c]"
      >
        <Phone class="inline" size={18} />
        +971 6 506 8777
      </a>
      <img src="/images/arabIcon.png" alt="" />
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

  <!-- Mobile Sidebar (unchanged design) -->
  {#if mobileMenuOpen}
    <button
      aria-label="button"
      class="fixed inset-0 z-40 bg-black/60 lg:hidden"
      onclick={toggleMobileMenu}
    ></button>
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
        <!-- ... Rest of your mobile menu ... -->
      </div>
    </div>
  {/if}
</nav>

<style>
  /* Optional: Smooth scroll for the whole page */
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
