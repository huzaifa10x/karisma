<script lang="ts">
  import GlobalBanner from "$lib/components/GlobalBanner.svelte";
  import Navbar from "$lib/components/Navbar.svelte";

  let { data } = $props();
  // console.log(data.doctorsPage.doctors);
</script>

<Navbar />
<GlobalBanner
  image={data.doctorsPage.doctors[0].bannerImage}
  text="Departments"
/>
<section class="py-20 bg-primary">
  <div class="mx-auto max-w-7xl px-6">
    <div class="grid grid-cols-3 gap-5">
      {#each data.doctorsPage.doctors.slice(1) as doctor}
        <div class="md:basis-1/2 lg:basis-1/3">
          <a href={doctor.link}>
            <div class="group space-y-">
              <img
                class="w-full object-cover rounded-2xl rounded-br-none mb-5"
                src={doctor.image || "/images/image-placeholder.png"}
                onerror={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/images/image-placeholder.png";
                }}
                alt=""
              />
              <div class="text-secondary text-2xl capitalize">
                {doctor.canonical_name}
              </div>
              <div class="text-c5 text-lg">{doctor.designation}</div>
              <div class="text-secondary font-semibold">
                {doctor.department}
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
