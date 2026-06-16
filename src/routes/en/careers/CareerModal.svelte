<script>
    import { enhance } from "$app/forms";

    let { isOpen = $bindable(), onClose, data, desktop_image } = $props();
    let formData = $state({ name: "", email: "", phone: "", resume: null });
    let errors = $state({});

    function validate() {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        if (!formData.resume) newErrors.resume = "Resume is required";
        errors = newErrors;
        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (validate()) console.log("Form Submitted", formData);
    }

    let loading = $state(false);
</script>

{#if isOpen}
    <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
    >
        <div class="w-full max-w-7xl rounded-lg bg-white p-6 shadow-xl">
            <div class="flex justify-between items-center mb-4 border-b-2">
                <h2 class="text-[30px]/[45px] font-normal font-cabinet-grotesk">
                    Apply Now
                </h2>
                <button onclick={onClose}>✕</button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                <!-- Image Section -->

                <div class="md:col-span-4 bg-gray-200 rounded hidden lg:block">
                    <img
                        src={desktop_image || "/images/image-placeholder.png"}
                        alt="Join Team"
                        class="h-full w-full object-cover"
                    />
                </div>

                <div class="md:col-span-8 space-y-4">
                    <form method="POST"
                    class="space-y-4" 
    action="?/apply" 
    enctype="multipart/form-data"
    use:enhance={() => {
        // 1. RUN CLIENT-SIDE VALIDATION HERE
        if (!validate()) {
            return async ({ update }) => {
                await update(); // Prevent submission if validation fails
            };
        }

        // 2. IF VALID, PROCEED TO SUBMIT
        loading = true;
        return async ({ result, update }) => {
            loading = false;
            if (result.type === 'success') {
                alert("Application sent successfully!");
                onClose();
            } else {
                alert("Error submitting application.");
            }
            await update();
        };
    }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            class="w-full border-b-2 border-[#577065] p-2 placeholder:text-[#577065] placeholder:font-bold placeholder:text-md focus:outline-none focus:border-[#405d53] placeholder:italic"
                            bind:value={formData.name}
                        />
                        {#if errors.name}
                            <p class="text-red-500 text-sm mt-1">
                                {errors.name}
                            </p>
                        {/if}

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            class="w-full border-b-2 border-[#577065] p-2 placeholder:text-[#577065] placeholder:font-bold placeholder:text-md focus:outline-none focus:border-[#405d53] placeholder:italic"
                            bind:value={formData.email}
                        />
                        {#if errors.email}<p class="text-red-500 text-sm">
                                {errors.email}
                            </p>{/if}

                        <div class="flex gap-2">
                            <input
                                type="text"
                                name="countrycode"
                                value="+971"
                                maxlength="4"
                                class="w-4/12 border-b-2 border-[#577065] p-2 placeholder:text-[#577065] placeholder:font-bold placeholder:text-md focus:outline-none focus:border-[#405d53] placeholder:italic"
                            />
                         
                            <input
                                type="number"
                                name="phone"
                                placeholder="Phone"
                                class="w-8/12 border-b-2 border-[#577065] p-2 placeholder:text-[#577065] placeholder:font-bold placeholder:text-md focus:outline-none focus:border-[#405d53] placeholder:italic"
                                bind:value={formData.phone}
                            /> 
                        </div>
                        {#if errors.phone}<p class="text-red-500 text-sm">
                           {errors.phone}
                       </p>{/if}
                      

                        <label class="block text-sm"
                            >Upload Resume (PDF/DOC)</label
                        >
                        <input name="resume" type="file" accept=".pdf,.doc,.docx" class="w-full border p-2" />
                          {#if errors.resume}<p class="text-red-500 text-sm">
                                {errors.resume}
                            </p>{/if}

                        <button
                            type="submit"
                            class="bg-[#405d53] text-white px-6 py-2 rounded text-[18px]/[26px]"
                            >{loading ? "Sending..." : "Send Now"}</button
                        >
                    </form>
                </div>
                <!-- Form Section -->
            </div>
        </div>
    </div>
{/if}
