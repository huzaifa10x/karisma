<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import { ArrowLeftIcon, ArrowRightIcon } from "lucide-svelte";
  import { onMount } from "svelte";

  let { data } = $props();

  let doctors = $state([]);
  let loading = $state(true);
  let error = $state(null);

  // ... previous code ...

  let randomDoctors = $state([]);

  function getRandomDoctors() {
    const shuffled = [...doctors].sort(() => Math.random() - 0.5);
    randomDoctors = shuffled.slice(0, 2);
  }

  onMount(async () => {
    const res = await fetch("https://admin.karismamc.com/public/api/doctors");
    const apiData = await res.json();

    doctors = apiData.doctors;
    getRandomDoctors(); // ✅ data aane ke baad random karo
    loading = false;
  });
</script>

<Navbar />

<section class="bg-primary md:py-50 py-20 [&_li]:w-auto!">
  <div
    class="mx-auto max-w-7xl px-6 py-16 rounded-2xl shadow-2xl relative space-y-5"
  >
    <div
      class="absolute inset-0 bg-[url('/images/team-bg-1.webp')] pointer-events-none bg-no-repeat bg-contain bg-right opacity-40"
    ></div>

    <div class="grid md:grid-cols-3 items-center gap-10">
      <div>
        <img
          class="mx-auto rounded-2xl rounded-br-none"
          src={data?.doctor?.image}
          alt=""
        />
      </div>

      <div class="space-y-4 md:col-span-2 [&_li]:w-auto! [&_div]:w-auto!">
        <div class="text-3xl text-secondary">
          {data?.doctor?.name}
        </div>
        <div class="text-secondary text-lg">{data?.doctor?.designation}</div>
        <div class="text-c5">
          {@html data?.doctor?.overview?.sections[0]?.items[0]}
        </div>
      </div>
    </div>
  </div>

  <div class="mx-auto max-w-7xl px-6 mt-20 space-y-9">
    <div class="space-y-5">
      <h4 class="text-3xl font-seasons text-secondary">
        {data?.doctor?.workExperience?.title}
      </h4>
      <div class="text-c5">
        {@html data?.doctor?.workExperience?.items[0]}
      </div>
    </div>

    <div class="">
      <div class="grid md:grid-cols-2 space-y-5">
        <div class="space-y-5">
          <h4 class="text-3xl font-seasons text-secondary">
            {data?.doctor?.qualifications?.title}
          </h4>
          <div class="text-c5">
            {@html data?.doctor?.qualifications?.items[0]}
          </div>
        </div>

        <div class="space-y-5">
          <h4 class="text-3xl font-seasons text-secondary">
            {data?.doctor?.workingShifts?.flipBack1}
          </h4>
          <div class="grid md:grid-cols-2 gap-5">
            <div
              class="bg-secondary-foreground rounded-2xl rounded-br-none text-center text-white flex items-center justify-center p-7 transition-all duration-700 perspective-[1000px] hover:transform-[rotateY(180deg)]"
            >
              {data?.doctor?.workingShifts?.flipBackDesc1}
            </div>

            <div
              class="bg-secondary-foreground space-y-3 rounded-2xl rounded-br-none text-white flex flex-col items-center justify-center p-7 transition-all duration-700 perspective-[1000px] hover:transform-[rotateY(180deg)]"
            >
              <div class="text-2xl font-seasons">
                {data?.doctor?.workingShifts?.flipBack2}
              </div>

              <div class="text-center">
                {data?.doctor?.workingShifts?.flipBackDesc2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border shadow-2xl rounded-2xl p-6 flex gap-3 justify-between">
      <ArrowLeftIcon
        class="text-white cursor-pointer"
        onclick={getRandomDoctors}
      />
      <div class="flex justify-between w-full">
        {#each randomDoctors as doctor}
          <div class="text-white">{doctor.name}</div>
        {/each}
      </div>
      <ArrowRightIcon
        class="text-white cursor-pointer"
        onclick={getRandomDoctors}
      />
    </div>
  </div>
</section>
