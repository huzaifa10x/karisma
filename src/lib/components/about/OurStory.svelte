<script>
  let data = $props();
</script>

<section class="bg-primary py-10 space-y-8 flex flex-wrap flex-col items-center">
  <div class="w-full lg:w-300 px-6">
   <div
  class="text-center text-[#577065] font-seasons mb-6 
         text-[22px] 
         lg:text-[26px] lg:leading-8.5"
>
  Our Story
</div>
  
    <div
  class="text-center space-y-5 mx-auto text-c5 lg:max-w-4xl  px-3.75 py-2 lg:p-auto 
         text-[17px]/[24px]
         md:text-[17px] md:leading-6 
         lg:text-[20px] lg:leading-9"
>
  {@html data.items.data.our_story.content}
</div>
  </div>

  <div class="flex items-center justify-center gap-4">
    <div class="w-24 h-0.5 bg-[#405D53]"></div>

    <div
      class="flex items-center justify-center w-6 h-6 border border-secondary rotate-45"
    >
      <div class="w-3 h-3 bg-[#405D53]"></div>
    </div>

    <div class="w-24 h-0.5 bg-[#405D53]"></div>
  </div>
</section>
