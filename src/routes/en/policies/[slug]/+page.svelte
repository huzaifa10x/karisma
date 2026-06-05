<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";

  let { data } = $props();
  function addCheckToBold(html: string) {
    return html.replace(
      /<li>(.*?)<\/li>/g,
      `<b><span class="inline-flex font-light items-center gap-2">
          <span class='text-[#008000] -ml-5'>✓</span>
          $1
        </span></b>`,
    );
  }
</script>

<Navbar />
<section class="py-10 pt-40 bg-primary">
  <div
    class="max-w-7xl mx-auto px-6 text-xl first:space-y-5 space-y-5 [&_span]:inline-block! [&>div>div>div]:my-5 [&_h4]:text-[34px] [&_h4]:font-seasons! [&_h4]:text-secondary"
  >
    <div class="text-[34px] text-secondary">
      {@html data.policy?.title}
    </div>
    <div>
      {@html data?.policy?.description}
    </div>
    <div class="[&_ul]:ml-6 [&_ul]:my-6">
      {@html addCheckToBold(data?.policy?.more_details)}
    </div>
  </div>
</section>
