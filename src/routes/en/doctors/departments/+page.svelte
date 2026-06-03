<script lang="ts">
  import GlobalBanner from "$lib/components/GlobalBanner.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import { Check } from "lucide-svelte";

  let { data } = $props();
</script>

<Navbar />
<GlobalBanner
  image={data.departmentsPage.departmentPage[0].bannerImage}
  text={data.departmentsPage.departmentPage[0].deptName}
/>
<section class="py-20 bg-primary">
  <div class="mx-auto max-w-375 px-6">
    <div class="grid grid-cols-4 gap-5">
      {#each data.departmentsPage.departmentPage.slice(1) as Department}
        <div class="md:basis-1/2 lg:basis-1/3">
          <a href={Department.link}>
            <div class="group relative overflow-hidden">
              <img
                class="w-full object-cover h-112.5 brightness-50 rounded-br-none"
                src={Department.imageUrl || "/images/image-placeholder.png"}
                onerror={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/images/image-placeholder.png";
                }}
                alt=""
              />
              <div
                class="text-white absolute group-hover:opacity-0 duration-300 top-7 left-0 w-full text-center text-2xl capitalize"
              >
                {Department.title}
              </div>

              <div
                class="absolute top-0 translate-y-90 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out space-y-5 w-full max-h-75 depart-list overflow-auto text-white"
              >
                <div
                  class="text-white w-full mt-6 text-center text-2xl capitalize"
                >
                  {Department.title}
                </div>
                <ul class="space-y-5">
                  {#each Department.listItems as items}
                    <li class="px-10 flex items-center gap-2">
                      <Check />
                      {items.service_name}
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
