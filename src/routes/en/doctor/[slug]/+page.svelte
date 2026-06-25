<script>
  import { page } from "$app/state";
  import Navbar from "$lib/components/Navbar.svelte";
  import { ArrowLeftIcon, ArrowRightIcon, CheckCircle } from "lucide-svelte";
  import { onMount } from "svelte";

  let { data } = $props();

  let doctors = $state([]);
  let slider = $state([]);
  let loading = $state(true);
  let error = $state(null);

  // ... previous code ...

  onMount(async () => {
    const res = await fetch("https://admin.karismamc.com/public/api/doctors");
    const apiData = await res.json();

    doctors = apiData.doctors;
    loading = false;
  });

  onMount(async () => {
    // Current route param (slug) yahan se milega
    const slug = page.params.slug;

    // Dynamic URL with slug
    const res = await fetch(
      `https://admin.karismamc.com/api/doctor/docSliderList/${slug}`,
    );
    const apiData = await res.json();

    slider = apiData.doctors;
    loading = false;
  });
</script>

<Navbar />

<section class="bg-primary md:pt-50 pt-20 [&_li]:w-auto!">
  <div
    class="mx-auto w-3/4 px-16 py-16 rounded-2xl shadow-2xl relative space-y-5 overflow-hidden"
  >
    <div class="bgImage"></div>

    <div class="grid md:grid-cols-3 items-center gap-30">
      <div>
        <img
          class="mx-auto rounded-2xl rounded-br-none"
          src={data?.doctor?.image}
          alt=""
        />
      </div>

      <div class="space-y-4 md:col-span-2 [&_li]:w-auto! [&_div]:w-auto!">
        <div class="text-3xl text-[#577065]">
          {data?.doctor?.name}
        </div>
        <div class="text-[#577065] text-lg">{data?.doctor?.designation}</div>
        <div class="text-c5 font-medium text-[16px]/[24px]">
          {@html data?.doctor?.overview?.sections[0]?.items[0]}
        </div>
      </div>
    </div>
  </div>

  <div class="mx-auto max-w-7xl px-6 mt-20 space-y-9">
    <div class="space-y-5">
      <h4 class="text-[38px] font-normal font-seasons text-[#577065]">
        {data?.doctor?.workExperience?.title}
      </h4>
      <div class="text-c5 text-[18px] flex items-start gap-2">
        <CheckCircle size={18} class="text-[#577065] mt-1 shrink-0" />

        <!-- <div class="[&>p]:m-0 [&>ul]:list-none [&>li]:mb-2 text-c5 text-[16px]/[24px]">
    {@html data?.doctor?.workExperience?.items[0]}
</div> -->
        <div
          class="[&>p]:m-0 [&>ul]:list-none [&>li]:flex [&>li]:items-start [&>li]:gap-3 [&>li]:mb-2 text-c5 text-[16px]/[24px]"
        >
          {@html data?.doctor?.workExperience?.items[0].replace(
            /<li>/g,
            '<li class="flex gap-2 "><img src="/images/svgviewer-png-output.png" class="w-4 h-4 mt-1 shrink-0 -ml-6" alt="icon" />',
          )}
        </div>
      </div>
    </div>

    <div class="">
      <div class="grid md:grid-cols-2 space-y-5">
        <div class="space-y-5">
          <h4 class="text-[38px] font-normal font-seasons text-[#577065]">
            {data?.doctor?.qualifications?.title}
          </h4>
          <div class="text-c5 text-[18px] flex items-start gap-2">
            <CheckCircle size={18} class="text-[#577065] mt-1 shrink-0" />

            <!-- <div
              class="[&>p]:m-0 [&>ul]:list-none [&>li]:mb-2 text-c5 text-[16px]/[24px]"
            >
              {@html data?.doctor?.qualifications?.items[0]}
              
            </div> -->
            <div
              class="[&>p]:m-0 [&>ul]:list-none [&>li]:flex [&>li]:items-start [&>li]:gap-3 [&>li]:mb-2 text-c5 text-[16px]/[24px]"
            >
              {@html data?.doctor?.qualifications?.items[0].replace(
                /<li>/g,
                '<li class="flex gap-2 "><img src="/images/svgviewer-png-output.png" class="w-4 h-4 mt-1 shrink-0 -ml-6" alt="icon" />',
              )}
            </div>
          </div>
        </div>

        <div class="space-y-10">
          <h4 class="text-[38px] font-normal font-seasons text-[#577065]">
            {data?.doctor?.workingShifts?.flipBack1}
          </h4>
          <div class="grid md:grid-cols-2 gap-5">
            <div class="group h-40 w-full perspective-[1000px] floating">
              <div
                class="relative h-full w-full transition-all duration-700 preserve-3d group-hover:rotate-y-180"
              >
                <div
                  class="absolute inset-0 bg-[#577065] rounded-2xl rounded-br-none flex items-center justify-center p-7 backface-hidden text-white"
                >
                  {data?.doctor?.workingShifts?.flipFrontDesc1}
                </div>
                <div
                  class="absolute inset-0 bg-[#577065] rounded-2xl rounded-br-none flex items-center justify-center p-7 backface-hidden rotate-y-180 text-white"
                >
                  {data?.doctor?.workingShifts?.flipBackDesc1}
                </div>
              </div>
            </div>

            <div class="group h-40 w-full perspective-[1000px] floating">
              <div
                class="relative h-full w-full transition-all duration-700 preserve-3d group-hover:rotate-y-180"
              >
                <div
                  class="absolute inset-0 bg-[#577065] rounded-2xl rounded-br-none flex flex-col items-center justify-center p-7 backface-hidden text-white"
                >
                  <span class="text-2xl font-seasons text-center"
                    >{data?.doctor?.workingShifts?.flipFront2}</span
                  >
                  <span class="text-center">
                    {data?.doctor?.workingShifts?.flipFrontDesc2}</span
                  >
                </div>
                <div
                  class="absolute inset-0 bg-[#577065] rounded-2xl rounded-br-none flex flex-col items-center justify-center p-7 backface-hidden rotate-y-180 text-white"
                >
                  <span class="text-2xl font-seasons text-center"
                    >{data?.doctor?.workingShifts?.flipBack2}</span
                  >
                  <span class="text-center">
                    {data?.doctor?.workingShifts?.flipBackDesc2}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="border mx-auto w-3/4 shadow-lg rounded-t-2xl rounded-l-2xl mt-5 py-10 px-10 flex items-center justify-between gap-6"
  >
    <button aria-label="Previous" class="shrink-0">
      <ArrowLeftIcon class="text-white cursor-pointer" />
    </button>

    <div class="flex flex-1 justify-between px-4 overflow-hidden">
      {#each slider.slice(0, 2) as doctor}
        <a
          href={`/en/${doctor.link}`}
          class="shrink-0 transition-opacity hover:opacity-80"
        >
          <p class="text-white whitespace-nowrap">{doctor.name}</p>
        </a>
      {/each}
    </div>

    <button aria-label="Next" class="shrink-0">
      <ArrowRightIcon class="text-white cursor-pointer" />
    </button>
  </div>
</section>
