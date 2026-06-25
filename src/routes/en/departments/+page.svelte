<script lang="ts">
  import GlobalBanner from "$lib/components/GlobalBanner.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import { Check } from "lucide-svelte";
  // ./$types.ts

  let { data } = $props();
</script>

<Navbar />
<GlobalBanner
  image={data.departmentsPage.departmentPage[0].bannerImage}
  text={data.departmentsPage.departmentPage[0].deptName}
/>


<section class="py-20 bg-primary">
  <div class="mx-auto max-w-375 px-6">
    <div class="grid grid-cols-3 lg:grid-cols-4 gap-8">
      {#each data.departmentsPage.departmentPage.slice(1) as Department}
        <div class="md:basis-1/2 lg:basis-1/3">
          <a   href={"/en/departments/" + Department.link}>
            <div class="group relative overflow-hidden">
              <img
                class="w-57 lg:w-90 lg:h-90 object-cover brightness-50 rounded-br-none"
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
                class="absolute top-0 translate-y-90 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out space-y-5 w-full h-full lg:pb-12 depart-list overflow-auto text-white"
              >
                <div
                  class="text-white w-full mt-6 text-center text-2xl capitalize"
                >
                  {Department.title}
                </div>
                <ul class="md:space-y-1 lg:space-y-5">
                  {#each Department.listItems as items}
                    <li class="px-10 flex items-center md:gap-0 lg:gap-2">
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


 <!-- <section class="py-20 bg-primary">
  <div class="mx-auto max-w-375 px-6">
    <div class="grid lg:grid-cols-3 xl:grid-cols-4 gap-5">
      
      {#each data.departmentsPage.departmentPage.slice(1) as Department}
        <a href={"/en/departments/" + Department.link} class="block">
          
          <div class="relative overflow-hidden group h-61 lg:h-112.5">
        <img
  class="w-full object-cover brightness-50"
  src={Department.imageUrl || "/images/image-placeholder.png"}
  alt={Department.title}
/>
            <div class="text-white absolute group-hover:opacity-0 duration-300 top-7 left-0 w-full text-center text-2xl capitalize" >
                {Department.title}
              </div>
           <div
                class="absolute top-0 translate-y-90 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out space-y-5 w-full h-full lg:pb-12 depart-list overflow-auto text-white"
              >
                <div
                  class="text-white w-full mt-6 text-center text-2xl capitalize"
                >
                  {Department.title}
                </div>
                <ul class="md:space-y-1 lg:space-y-5">
                  {#each Department.listItems as items}
                    <li class="px-10 flex items-center md:gap-0 lg:gap-2">
                      <Check />
                      {items.service_name}
                    </li>
                  {/each}
                </ul>
                
              </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section> -->