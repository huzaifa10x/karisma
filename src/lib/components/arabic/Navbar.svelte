<script lang="ts">
  import ChevronLeft from "@lucide/svelte/icons/chevron-left";
  import {
    Phone,
    ChevronDown,
    ChevronRight,
    Menu,
    X,
    Droplet,
    Play,
    PhoneForwardedIcon,
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
  let deptTimeout = $state<any>(null);

  const navLinks = [
    { label: "معلومات عنا", href: "/ar/about" },
    { label: "أطباؤنا", href: "/ar/doctors" },
    { label: "الوظائف", href: "/ar/careers" },
    { label: "اتصل بنا", href: "/ar/contact_us" },
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

  let logoSrc = $derived(
    lastScrollY > 50 ? "/Karisma_Logo_green_ar.png" : "/Karisma_Logo_ar.png",
  );
</script>

<nav
  dir="rtl"
  class="fixed top-0 left-0 z-50 w-full lg:shadow-lg lg:border-black/30 py-2 transition-all delay-200 duration-300 ease-in-out h-auto"
  class:translate-y-0={visible}
  class:-translate-y-full={!visible}
  class:navBg={lastScrollY > 50}
  class:backdrop-blur-md={lastScrollY > 50}
>
  <div class="flex h-full lg:h-28 items-center justify-between px-15">
    <div class="hidden lg:flex items-center gap-10">
      <a href="/ar/" class="z-50">
        <img src={logoSrc} class="w-32 h-30" alt="Logo" />
      </a>

      <div class="flex items-center gap-6">
        <a
          href="/ar/about"
          class="text-[16px] tracking-[1px] font-semibold text-white hover:text-[#c9a45c]"
        >
          معلومات عنا
        </a>

        <div
          class="relative"
          role="menu"
          tabindex="0"
          onmouseenter={() => {
            clearTimeout(deptTimeout);
            departmentsOpen = true;
          }}
          onmouseleave={() => {
            deptTimeout = setTimeout(() => {
              departmentsOpen = false;
            }, 300); // Standardized to 300ms responsive dropdown window hook
          }}
        >
          <button
            class="flex items-center CabinetGrotesk text-[16px] tracking-[1px] gap-1 font-semibold text-white hover:text-[#c9a45c]"
          >
            <a
              href="/ar/departments"
              class="font-semibold text-white hover:text-[#c9a45c]"
            >
              الأقسام
            </a>
            <ChevronDown
              size={16}
              class="transition-transform {departmentsOpen ? 'rotate-180' : ''}"
            />
          </button>

          {#if departmentsOpen}
            <div
              transition:fade
              class="absolute right-0 top-3 mt-4 w-72 rounded-bl-2xl border border-white/10 bg-white p-3 shadow-2xl"
            >
              {#each data.departmentPage?.slice(1) || [] as dept}
                <div class="group relative">
                  <a
                    href={"/ar/departments/" + dept.link}
                    class="flex items-center justify-start gap-4 rounded-lg px-4 py-2 duration-300 text-black/40 uppercase relative group/two font-semibold lg:hover:text-[#c39a51]"
                  >
                       <span class="h-1.5 w-1.5 -ml-2 -left-10 opacity-0 group-hover/two:left-1 group-hover/two:opacity-100 duration-300 rounded-full bg-c5"></span>
                    {dept.title_arabic}

                    {#if dept.listItems && dept.listItems.length > 0}
                      <ChevronLeft
                        class="duration-300 delay-100 group-hover:rotate-180"
                        size={14}
                      />
                    {/if}
                  </a>

                  {#if dept.listItems && dept.listItems.length > 0}
                    <div
                      class="invisible absolute right-full top-0 mr-2 w-56 rounded-bl-2xl border border-white/10 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100"
                    >
                      {#each dept.listItems as child}
                        <a
                          href={`/ar/departments/${dept.link}/${child.canonical_name}`}
                          class="flex items-center justify-start gap-4 rounded-lg px-4 py-2 duration-300 text-black/40 relative group/two uppercase font-semibold hover:text-[#c39a51]"
                        >
                       <span class="h-1.5 w-1.5 -ml-2 -left-10 opacity-0 group-hover/two:left-1 group-hover/two:opacity-100 duration-300 rounded-full bg-c5"></span>

                          {child.service_name_arabic}
                         
                        </a>
                      {/each}
                    </div>
                  {/if}
                </div>
              {/each}
            </div>
          {/if}
        </div>

        {#each navLinks.slice(1) as item}
          <a
            href={item.href}
            class="font-semibold text-white hover:text-[#c9a45c] text-[16px] tracking-[1px]"
          >
            {item.label}
          </a>
        {/each}
      </div>
    </div>

    <div class="hidden items-center gap-6 lg:flex">
      <a
        href="tel:+97165068777"
        class="text-white flex items-center gap-2 font-semibold font-[sans-serif] group hover:text-[#c39a51]"
      >
        <span dir="ltr">+971 6 506 8777</span>
        <PhoneForwardedIcon
          class="inline fill-white group-hover:fill-[#c39a51] scale-x-[-1]"
          size={18}
        />
      </a>
      <img src="/images/engIcon.png" class="w-7" alt="Lang" />
    </div>

    <div class="flex items-center justify-between lg:hidden w-full">
      <button onclick={toggleMobileMenu} class="z-50 text-white">
        {#if mobileMenuOpen}<X size={28} />{:else}<Menu size={28} />{/if}
      </button>

      <a href="/ar/"><img src={logoSrc} class="w-25" alt="Logo" /></a>

      <img src="/images/engIcon.png" alt="Lang" class="w-8" />
    </div>
  </div>

  {#if mobileMenuOpen}
    <div
      class="fixed inset-y-0 right-0 z-100 bg-[#d9c5ad] p-6 pt-10 h-screen w-3/4 overflow-y-auto"
      transition:slide={{ axis: "x" }}
    >
      <div class="flex justify-between items-center mb-10">
        <img src="/Karisma_Logo_green_ar.png" class="w-25" alt="Logo" />
        <button onclick={toggleMobileMenu} class="text-black">
          <X size={32} />
        </button>
      </div>

      <div class="flex flex-col gap-6 text-[#577065] text-[16px] font-medium">
        <a href="/ar/about" onclick={toggleMobileMenu}>معلومات عنا</a>

        <div>
          <button
            class="flex justify-between w-full items-center text-[16px]"
            onclick={() => (mobileDepartmentsOpen = !mobileDepartmentsOpen)}
          >
            <a href="/ar/departments">الأقسام</a>
            <Play
              style="fill:#405D53"
              size={16}
              class="transition-transform scale-x-[-1] {mobileDepartmentsOpen
                ? '-rotate-90'
                : ''}"
            />
          </button>

          {#if mobileDepartmentsOpen}
            <div
              class="flex flex-col gap-3 mt-4 pr-4 text-[16px] text-gray-600"
            >
              {#each data.departmentPage?.slice(1) || [] as dept}
                <div class="flex flex-col">
                  <button
                    onclick={() => toggleSubmenu(dept.title)}
                    class="flex items-center justify-between py-2 text-[#577065]"
                  >
                    <a href={`/ar/departments/${dept.link}`}>
                      {dept.title_arabic}
                    </a>
                    {#if dept.listItems && dept.listItems.length > 0}
                      <Play
                        style="fill:#405D53"
                        size={16}
                        class="transition-transform scale-x-[-1] {activeMobileSubmenu ===
                        dept.title
                          ? '-rotate-90'
                          : ''}"
                      />
                    {/if}
                  </button>

                  {#if activeMobileSubmenu === dept.title}
                    <div transition:slide class="flex flex-col pr-4">
                      {#each dept.listItems as child}
                        <a
                          href={`/ar/departments/${dept.link}/${child.canonical_name}`}
                          onclick={toggleMobileMenu}
                          class="py-2 text-md text-[#577065]"
                        >
                          {child.service_name_arabic}
                        </a>
                      {/each}
                    </div>
                  {/if}
                </div>
              {/each}
            </div>
          {/if}
        </div>

        <a href="/ar/doctors" onclick={toggleMobileMenu}>أطباؤنا</a>
        <a href="/ar/careers" onclick={toggleMobileMenu}>الوظائف</a>
        <a href="/ar/contact_us" onclick={toggleMobileMenu}>اتصل بنا</a>
      </div>
    </div>
  {/if}
</nav>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
