<script>
  import { appointmentModal } from "$lib/stores/appointmentStore.js";
  import { fade, fly } from "svelte/transition";

  let name = $state("");
  let email = $state("");
  let age = $state("");
  let countryCode = $state("+971");
  let phone = $state("");
  let gender = $state("");
  let date = $state("");
  let department = $state("");
  let message = $state("");
  let isSubmitted = $state(false);

  function handleClose() {
    appointmentModal.close();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name,
      email,
      age,
      countryCode,
      phone,
      gender,
      date,
      department,
      message,
    };

    console.log("Form Submitted:", formData);
    alert("Appointment submitted! We will contact you soon");
    setTimeout(() => {
        window.location.reload(); 
      }, 2000);

    // Add your API code here

  }
  handleClose();
</script>

{#if $appointmentModal}
  <div
    class="fixed inset-0 bg-black/80 flex items-center justify-center z-9999 p-4"
    onkeydown={(e) => {
      if (e.key === "Enter" || e.key === " ") handleClose();
    }}
    role="button"
    tabindex="0"
    transition:fade={{ duration: 150 }}
  >
    <div
      class="bg-white w-full max-w-361.25 rounded-lg shadow-2xl overflow-hidden"
      transition:fly={{ y: 25, duration: 250 }}
    >
      <div
        class="flex justify-between items-center px-8 py-5 border-b border-gray-100"
      >
        <h2 class="text-2xl font-light text-gray-800">Book Appointment</h2>
        <button
          class="text-3xl text-gray-400 hover:text-gray-700 transition-colors leading-none"
          onclick={handleClose}
          aria-label="Close Modal"
        >
          &times;
        </button>
      </div>

      <div class="flex flex-col md:flex-row">
        <div
          class="hidden md:flex flex-1 bg-white items-center justify-center p-2"
        >
          <img src="/images/book-appointment.png" alt="" class="h-130" />
        </div>

        <form
          onsubmit={handleSubmit}
          class="flex-[1.3] py-2 px-5 flex flex-col justify-center gap-5"
        >
          <div class="flex flex-col">
            <input
              type="text"
              id="name"
              bind:value={name}
              required
              placeholder="Name"
              class="w-full border-b placeholder:text-[#577065] placeholder:font-semibold placeholder:italic border-secondary bg-transparent py-2 outline-none focus:border-secondary focus:placeholder:not-italic"
            />
          </div>

          <div class="flex flex-col">
            <input
              type="email"
              id="email"
              bind:value={email}
              required
              placeholder="Email"
              class="w-full border-b placeholder:text-[#577065] placeholder:font-semibold placeholder:italic border-secondary bg-transparent py-2 outline-none focus:border-secondary focus:placeholder:not-italic"
            />
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div class="flex flex-col  col-span-12 lg:col-span-1">
              <input
                type="number"
                id="age"
                bind:value={age}
                required
                placeholder="age"
                class="w-full border-b placeholder:text-[#577065] placeholder:font-semibold placeholder:italic border-secondary bg-transparent py-2 outline-none focus:border-secondary focus:placeholder:not-italic"
              />
            </div>
            <div class="flex flex-col col-span-2 lg:col-span-1">
              <input
                type="text"
                id="code"
                maxlength="4"
                bind:value={countryCode}
                placeholder="Codes"
                class="w-full border-b placeholder:text-[#577065] placeholder:font-semibold placeholder:italic border-secondary bg-transparent py-2 outline-none focus:border-secondary focus:placeholder:not-italic"
              />
            </div>
            <div class="flex flex-col col-span-10 lg:col-span-2">
              <input
                type="tel"
                id="phone"
                bind:value={phone}
                required
                placeholder="Phone"
                class="w-full border-b placeholder:text-[#577065] placeholder:font-semibold placeholder:italic border-secondary bg-transparent py-2 outline-none focus:border-secondary focus:placeholder:not-italic"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div class="flex flex-col">
              <select
                id="gender"
                bind:value={gender}
                required
                class="w-full border-b border-secondary text-[#577065] font-semibold bg-transparent py-2 outline-none focus:border-secondary"
              >
                <option value="" disabled>Select Gender</option>

                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="flex flex-col">
              <input
                type="date"
                id="date"
                bind:value={date}
                required
                placeholder="Name"
                class="w-full border-b placeholder:text-[#577065] italic border-secondary bg-transparent py-2 outline-none focus:border-secondary"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <select
              id="department"
              bind:value={department}
              required
              placeholder="Name"
              class="w-full border-b text-[#577065] font-semibold italic border-secondary bg-transparent py-2 outline-none focus:border-secondary"
            >
              <option value="" disabled>Select Department</option>
              <option value="Dental">Dental</option>
              <option value="Derma">Derma</option>
              <option value="SkinCare">SkinCare</option>
              <option value="Gynecology">Gynecology</option>
              <option value="Nutrition and Slimming">Nutrition and Slimming </option>
              <option value="Plastic Surgery">Plastic Surgery </option>
              <option value="Laser Hair Removal">Laser Hair Removal </option>


            </select>
          </div>

          <div class="flex flex-col">
    
            <textarea
              id="message"
              bind:value={message}
              rows="2"
              placeholder="Message"
              class="w-full border-b placeholder:text-[#577065] placeholder:font-semibold placeholder:italic border-secondary bg-transparent py-2 outline-none focus:border-secondary focus:placeholder:not-italic"
            ></textarea>
          </div>

          <div class="pt-2">
            <button
              type="submit"
              class="bg-[#2E4E44] hover:bg-[#1F352E] text-white font-normal text-sm px-8 py-2.5 rounded shadow-sm transition-all tracking-wide"
            >
              Send Now
            </button>
          </div>
        </form>
      
      </div>
    </div>
  </div>
{/if}
