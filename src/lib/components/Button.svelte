<script>
  let { text = "Click Here", href = "" } = $props();
</script>

<button
  class="relative cursor-pointer rounded-lg rounded-br-none bg-[#405D53] overflow-hidden text-white uppercase px-7 py-4 group">
    <span class="relative z-10">{text}</span>
  <div
    class="bottom-0 left-0 bg-primary-foreground w-0 group-hover:w-full h-0 group-hover:h-full duration-300 absolute pointer-events-none"></div>
</button>
