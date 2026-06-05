<script lang="ts">
  import { appointmentModal } from "$lib/stores/appointmentStore.js";
  import { Phone, Mail, MapPin } from "lucide-svelte";
  let { items } = $props();
  let formType = $state("Enquiry");

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: items.data.phone1,
      href: "tel:+97165068777",
    },
    {
      icon: Mail,
      title: "Email",
      detail: items.data.email,
      href: "mailto:info@karismamc.com",
    },
    {
      icon: MapPin,
      title: "Address",
      detail: items.data.address,
      href: "#",
    },
  ];
</script>

<section class="min-h-screen bg-[#DBC8B0] px-6 py-20 md:px-20">
  <div class="mx-auto max-w-7xl">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
      <div class="flex flex-col justify-center">
        <h2
          class="text-5xl leading-tight text-secondary font-seasons font-medium! md:text-5xl"
        >
          Talk To One of Our Experts <br /> Today
        </h2>

        <div class="mt-10">
          <h3 class="text-3xl font-seasons text-secondary">Working Hours</h3>
          <p class="mt-4 text-lg text-c5">
            Sunday- Thursday 10:00 AM to 8:00 PM
          </p>
          <p class="text-lg text-c5">Saturday from 10:00 AM to 9:00 PM</p>
        </div>

        <div class="relative group mt-12 w-fit">
          <div
            class="absolute bottom-2 group-hover:bottom-0 -left-2 duration-500 group-hover:left-0 h-full w-full rounded-lg rounded-br-none bg-secondary"
          ></div>
          <button
            onclick={() => appointmentModal.open()}
            class="relative rounded-lg rounded-br-none border hover:bg-secondary hover:text-white duration-500 border-secondary transition-colors bg-white px-10 py-5 text-sm font-bold tracking-widest text-secondary active:translate-y-1 active:-translate-x-1"
          >
            APPOINTMENT
          </button>
        </div>
      </div>

      <div
        class="rounded-3xl rounded-br-none bg-[#F4F7F8] p-8 shadow-sm md:p-12"
      >
        <div class="flex gap-10">
          <label class="flex cursor-pointer items-center gap-2 text-secondary">
            <input
              type="radio"
              bind:group={formType}
              value="Enquiry"
              class="accent-second text-secondary h-4 w-4"
            />
            <span class="font-medium">Enquiry</span>
          </label>
          <label class="flex cursor-pointer items-center gap-2 text-secondary">
            <input
              type="radio"
              bind:group={formType}
              value="Feedback"
              class="accent-second text-secondary h-4 w-4"
            />
            <span class="font-medium">Feedback</span>
          </label>
        </div>

        <form class="mt-10 space-y-3">
          <div class="relative">
            <!-- <label class="block italic text-secondary">Name</label> -->
            <input
              type="text"
              placeholder="Name"
              class="w-full border-b placeholder:text-secondary placeholder:font-semibold placeholder:italic border-secondary bg-transparent py-4 outline-none focus:border-secondary focus:placeholder:not-italic"
            />
          </div>

          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <!-- <label class="block italic text-secondary">Email</label> -->
              <input
                type="email"
                placeholder="Email"
                class="w-full border-b placeholder:text-secondary placeholder:font-semibold placeholder:italic border-secondary bg-transparent py-4 outline-none focus:border-secondary focus:placeholder:not-italic"
              />
            </div>
            <div class="flex gap-4">
              <div class="w-16">
                <!-- <label class="block italic text-secondary">+971</label> -->
                <input
                  type="text"
                  placeholder="+971"
                  disabled
                  class="w-full border-b placeholder:text-secondary placeholder:font-semibold placeholder:italic border-secondary bg-transparent py-4 outline-none"
                />
              </div>
              <div class="flex-1">
                <!-- <label class="block italic text-secondary">Phone</label> -->
                <input
                  type="tel"
                  placeholder="Phone"
                  class="w-full border-b placeholder:text-secondary placeholder:font-semibold placeholder:italic border-secondary bg-transparent py-4 outline-none focus:border-secondary focus:placeholder:not-italic"
                />
              </div>
            </div>
          </div>

          <div>
            <!-- <label class="block italic text-secondary">Message</label> -->
            <textarea
              rows="1"
              placeholder="Message"
              class="w-full border-b placeholder:text-secondary placeholder:font-semibold placeholder:italic border-secondary bg-transparent py-4 outline-none focus:border-secondary focus:placeholder:not-italic"
            ></textarea>
          </div>

          <button
            class="mt-4 rounded-md rounded-br-none bg-secondary px-12 py-4 font-bold text-white transition-opacity hover:opacity-90"
          >
            SEND NOW
          </button>
        </form>
      </div>
    </div>

    <div class="mt-24 grid grid-cols-1 gap-6 md:grid-cols-3">
      {#each contactInfo as item}
        <a
          href={item.href}
          class="group flex items-center gap-6 rounded-2xl border border-white/40 p-8 transition-all hover:bg-white/10"
        >
          <divs
            class="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white"
          >
            <item.icon size={28} strokeWidth={1.5} />
          </divs>
          <div>
            <h4
              class="text-3xl text-black/60 font-seasons group-hover:text-secondary"
            >
              {item.title}
            </h4>
            <p class="text-black/60 group-hover:text-secondary">
              {item.detail}
            </p>
          </div>
        </a>
      {/each}
    </div>

    <!-- svelte-ignore a11y_missing_attribute -->
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4463.473841064783!2d55.4080799!3d25.3856592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59a94f0585bf%3A0xb9dd440e8cd8f955!2sKarisma%20Medical%20Center!5e1!3m2!1sen!2sin!4v1779265077845!5m2!1sen!2sin"
      width="100%"
      height="450"
      style="border:0;"
      loading="lazy"
      class="mt-20"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>

<style>
  /* Optional: Add a custom serif font if you want it exactly like the image */
  :global(body) {
    -webkit-font-smoothing: antialiased;
  }
</style>
