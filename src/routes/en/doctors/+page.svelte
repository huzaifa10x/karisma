<script lang="ts">
  import GlobalBanner from "$lib/components/GlobalBanner.svelte";
  import Navbar from "$lib/components/Navbar.svelte";

  let { data } = $props();
  console.log(data.doctorsMeta.data);
</script>

<svelte:head>
  <title
    >{data?.doctorsMeta?.data?.meta_title || "karisma Medical Center"}</title
  >
  <meta
    name="description"
    content={data?.doctorsMeta?.data?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />

  <meta
    name="keywords"
    content={data?.doctorsMeta?.data?.meta_keyword ||
      "beauty clinic, cosmetic clinic, sharjah, karisma medical center"}
  />

  <meta
    property="og:title"
    content={data?.doctorsMeta?.data?.meta_title || "karisma Medical Center"}
  />

  <meta
    property="og:description"
    content={data?.doctorsMeta?.data?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content={data?.doctorsMeta?.data?.meta_title || "karisma Medical Center"}
  />
  <meta
    name="twitter:description"
    content={data?.doctorsMeta?.data?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />
</svelte:head>

<Navbar />
<GlobalBanner
  image={data.doctorsPage.doctors[0].bannerImage}
  text="Our Doctors"
/>
<section class="py-20 bg-primary">
  <div class="mx-auto max-w-7xl px-6">
    <div class="grid grid-cols-3 gap-5">
      {#each data.doctorsPage.doctors.slice(1) as doctor}
        <div class="md:basis-1/2 lg:basis-1/3  bg-[#D8C5AD] ">
          <a href={`/en/doctor/${doctor.canonical_name}`}>
            <div class="group space-y-">
            <div class=" overflow-hidden h-123  rounded-2xl rounded-br-none">

              <img
                class="w-full object-cover rounded-2xl rounded-br-none mb-5 transition-transform duration-500 ease-in-out hover:scale-110"
                src={doctor.image || "/images/image-placeholder.png"}
                onerror={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/images/image-placeholder.png";
                }}
                alt=""
              />
            </div>
              <div class="text-[#405d53] text-[16px] lg:text-[20px]/[30px] font-semibold capitalize pt-3">
                {doctor.name}
              </div>
              <div class="text-c5 text-lg">{doctor.designation}</div>
              <div class="text-[#5c4033] text-[15px] lg:text-[18px]/[28px] font-semibold">
                {doctor.department}
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
