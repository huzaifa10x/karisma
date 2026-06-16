<script lang="ts">
  import { DropdownMenu } from "bits-ui";
  import {
    Phone,
    ChevronDown,
    ChevronRight,
    Menu,
    X,
    Droplet,
    Play,
  } from "lucide-svelte";
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
  class="fixed top-0 left-0 z-50 w-full lg:shadow-lg lg:border-black/30 py-2 transition-all delay-200 duration-300 ease-in-out h-auto"
  class:translate-y-0={visible}
  class:-translate-y-full={!visible}
  class:navBg={lastScrollY > 50}
  class:backdrop-blur-md={lastScrollY > 50}
>
  <div class="flex h-full lg:h-28 items-center justify-between px-15">
    <div class="hidden lg:flex items-center gap-10">
      <a href="/en/" class="z-50">
        <img src="/images/logo_main.png" class="w-33 h-auto" alt="Logo" />
      </a>

      <div class="flex items-center gap-6">
        <a
          href="/en/about"
          class="text-[16px] tracking-[1px] font-semibold text-white hover:text-[#c9a45c]"
          >ABOUT US</a
        >
        <div
          class="relative"
          role="menu"
          tabindex="0"
          onmouseenter={() => (departmentsOpen = true)}
          onmouseleave={() => (departmentsOpen = false)}
        >
          <button
            class="flex items-center CabinetGrotesk text-[16px] tracking-[1px] gap-1 font-semibold pl-4 text-white hover:text-[#c9a45c]"
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
              class="absolute left-0 top-3 mt-4 w-72 rounded-bl-2xl border border-white/10 bg-white p-3 shadow-2xl"
            >
              {#each data.departmentPage?.slice(1) || [] as dept}
                <div class="group relative">
                  <a
                    href={"/en/" + dept.link}
                    class="flex items-center justify- gap-4 rounded-lg px-4 py-2 relative group/two duration-300 text-black/40 uppercase font-semibold lg:hover:text-primary"
                  >
                    <span
                      class="h-1.5 w-1.5 -ml-4 -left-10 opacity-0 group-hover/two:left-1 group-hover/two:opacity-100 duration-300 rounded-full bg-c5"
                    ></span>
                    {dept.title}
                    <!-- {#if  dept.listItems[0] != ""} -->

                     {#if dept.listItems && dept.listItems.length > 0}
                    <ChevronRight
                      class="duration-300 delay-100 group-hover:rotate-180 absolute right-0"
                      size={14}
                    />
                    {/if}
                    <!-- {/if} -->
                  </a>
                  <!-- Submenu -->
                  <!-- {#if dept.listItems > 0} -->
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
                  <!-- {/if} -->
                </div>
              {/each}
            </div>
          {/if}
        </div>

        {#each navLinks.slice(1) as item}
          <a
            href={item.href}
            class="font-semibold text-white hover:text-[#c9a45c] text-[16px] tracking-[1px] pl-4"
            >{item.label}</a
          >
        {/each}
      </div>
    </div>

    <div class="hidden items-center gap-6 lg:flex">
      <a
        href="tel:+97165068777"
        class="text-white space-x-5 font-semibold hover:text-[#c9a45c]"
      >
        <Phone class="inline" size={18} /> +971 6 506 8777
      </a>
      <img src="/images/arabIcon.png" alt="Lang" />
    </div>

    <div class="flex items-center justify-between gap-10 lg:hidden w-full">
      <button onclick={toggleMobileMenu} class="z-50 text-white">
        {#if mobileMenuOpen}<X size={28} />{:else}<Menu size={28} />{/if}
      </button>
      <a href="/en/"
        ><img src="/images/logo_main.png" class="w-25" alt="Logo" /></a
      >

      <img src="/images/arabIcon.png" alt="Lang" class="w-8" />
    </div>
  </div>
  {#if mobileMenuOpen}
    <div
      class="fixed inset-0 z-100 bg-[#d9c5ad] p-6 pt-10 h-screen w-3/4 overflow-y-auto"
      transition:slide={{ axis: "x" }}
    >
      <div class="flex justify-between items-center mb-10">
        <img src="/images/greemlogo_main.png" class="w-25" alt="Logo" />
        <button onclick={toggleMobileMenu} class="text-black"
          ><X size={32} /></button
        >
      </div>

      <div class="flex flex-col gap-6 text-[#405d53] text-[16px] font-medium">
        <a href="/en/about" onclick={toggleMobileMenu}>About Us</a>

        <div>
          <button
            class="flex gap-3 w-full items-center text-[16px]"
            onclick={() => (mobileDepartmentsOpen = !mobileDepartmentsOpen)}
          >
            Departments <Play
              style="fill:#405D53"
              size={16}
              class={mobileDepartmentsOpen ? "rotate-90" : ""}
            />
          </button>

          {#if mobileDepartmentsOpen}
            <div
              class="flex flex-col gap-3 mt-4 ml-4 text-[16px] text-gray-600"
            >
              {#each data.departmentPage?.slice(1) || [] as dept}
                <div class="flex flex-col">
                 
                  <button
                    onclick={() => toggleSubmenu(dept.title)}
                    class="flex items-center gap-3 py-2 text-[#405d53]"
                  >
                    <a href={`/en/${dept.link}`}>
                      {dept.title}
                    </a>
                    {#if dept.listItems && dept.listItems.length > 0}
                      <Play
                        style="fill:#405D53"
                        size={16}
                        class={activeMobileSubmenu === dept.title
                          ? "rotate-90 transition-transform"
                          : "transition-transform"}
                      />
                    {/if}
                  </button>

                  {#if activeMobileSubmenu === dept.title}
                    <div transition:slide class="flex flex-col ml-4 pl-2">
                      {#each dept.listItems as child}
                        <a
                          href={`/en/${dept.link}/${child.canonical_name}`}
                          onclick={toggleMobileMenu}
                          class="py-2 text-md text-[#405d53]"
                        >
                          {child.service_name}
                        </a>
                      {/each}
                    </div>
                  {/if}
                </div>
              {/each}
            </div>
          {/if}
        </div>

        <a href="/en/doctors" onclick={toggleMobileMenu}>Our Doctors</a>
        <a href="/en/careers" onclick={toggleMobileMenu}>Careers</a>
        <a href="/en/contact_us" onclick={toggleMobileMenu}>Contact Us</a>
      </div>
    </div>
  {/if}
</nav>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
