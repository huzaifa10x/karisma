<script>
  import ContactSection from "$lib/components/ContactSection.svelte";
  import GlobalBanner from "$lib/components/GlobalBanner.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
    import CareerModal from "./CareerModal.svelte";
  let isModalOpen = $state(false);
  let { data } = $props();
  const desktop_image = data.careerBanner.banners[0].desktop_image;
</script>

<Navbar />
<GlobalBanner image={data?.careersPage[0]?.bannerImage} text={"Careers"} />

<section class="bg-[#D9C5AD] py-20 text-center">
  <div class="max-w-2xl mx-auto px-6">
    <h2 class="text-[32px]/[28px] font-medium text-[#333] font-[seasons] mb-4 ">Join Our Team</h2>
    <p class="mb-8 text-[#666] text-[16px]/[26px] lg:text-[20px]/[30px] ">
      We are always looking for exceptional talent to join our team. Submit your application now and we will contact you when a suitable opportunity becomes available.
    </p>
    <button 
      onclick={() => isModalOpen = true}
      class="bg-[#405d53] text-white rounded px-8 py-3 font-semibold hover:bg-[#324a41] transition"
    >
      Apply Now
    </button>
  </div>
</section>

<CareerModal isOpen={isModalOpen} onClose={() => isModalOpen = false} desktop_image={desktop_image}/>

