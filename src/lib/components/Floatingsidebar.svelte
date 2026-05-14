<script>
  import { Phone, Instagram, MessageCircle } from "lucide-svelte";
</script>

<aside
  class="fixed right-5 bottom-0 flex -translate-y-1/5 flex-col items-center gap-4 z-50"
>
  <div
    class="flex h-auto w-12 flex-col py-5 items-center border-2 border-gray-400 rounded-sm shadow-gray-800 shadow-xl/100 bg-secondary-foreground"
  >
    <img src="/images/logo_main.png" alt="" />

    <div class="mt-5 mb-2">
      <span
        class="block text-white font-medium tracking-[2px] uppercase"
        style="writing-mode: vertical-rl; transform: rotate(180deg);"
      >
        Appointment
      </span>
    </div>
  </div>

  <div class="flex flex-col gap-3">
    <a
      href="https://wa.me/yournumber"
      class="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg hover:scale-105 transition-transform bg-secondary-foreground"
    >
      <MessageCircle size={22} />
    </a>

    <a
      href="tel:+123456789"
      class="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg hover:scale-105 transition-transform bg-secondary-foreground"
    >
      <Phone size={20} />
    </a>

    <a
      href="https://instagram.com/yourprofile"
      class="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg hover:scale-105 transition-transform bg-secondary-foreground"
    >
      <Instagram size={22} />
    </a>
  </div>
</aside>
