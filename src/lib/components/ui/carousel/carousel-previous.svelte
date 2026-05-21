<script lang="ts">
  import type { WithoutChildren } from "bits-ui";
  import { getEmblaContext } from "./context.js";
  import { cn } from "$lib/utils.js";
  import { Button, type Props } from "$lib/components/ui/button/index.js";
  import ChevronLeftIcon from "@lucide/svelte/icons/chevron-left";

  let {
    ref = $bindable(null),
    class: className,
    variant = "outline",
    size = "icon-sm",
    ...restProps
  }: WithoutChildren<Props> = $props();

  const emblaCtx = getEmblaContext("<Carousel.Previous/>");
</script>

<button
  data-slot="carousel-previous"
  aria-disabled={!emblaCtx.canScrollPrev}
  disabled={!emblaCtx.canScrollPrev}
  class={cn(
    "rounded-full absolute touch-manipulation",
    emblaCtx.orientation === "horizontal"
      ? "-inset-s-12 top-1/2 -translate-y-1/2"
      : "inset-s-1/2 -top-12 -translate-x-1/2 rotate-90",
    className,
  )}
  onclick={emblaCtx.scrollPrev}
  onkeydown={emblaCtx.handleKeyDown}
>
  <div class="rotate-180 group cursor-pointer w-10">
    <svg
      width="40"
      height="40"
      viewBox="0 0 41 72"
      fill="none"
      class="group-hover:bg-white p-2 rounded-full duration-300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.65876 70.3829C6.60731 72.4343 3.472 72.3941 1.50553 70.4679C-0.414717 68.5879 -0.560823 65.3765 1.43397 63.3802L28.8437 35.9585L1.43546 8.53835C-0.532496 6.57039 -0.425153 3.42166 1.43993 1.51632C3.32589 -0.409888 6.5432 -0.569411 8.54694 1.43284L39.505 32.379C41.4953 34.3678 41.4968 37.5478 39.505 39.5381L8.65876 70.3829Z"
        class="fill-white group-hover:fill-black transition-colors duration-300 duration-300"
      />
    </svg>
  </div>

  <!-- <img class="rotate-180 w-full" src="/images/right-arrow.webp" alt="" /> -->

  <span class="sr-only">Previous slide</span>
</button>
