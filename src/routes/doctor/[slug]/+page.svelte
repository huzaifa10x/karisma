<script>
  import Navbar from "$lib/components/Navbar.svelte";

  let { data } = $props();

  console.log(data.doctor);
</script>

<Navbar />

<section>
  <div class="grid grid-cols-2">
    <div>
      <img src={data.doctor.image} alt="" />
    </div>
    <div>
      <div>{data.doctor.name}</div>
      <div>{data.doctor.designation}</div>
    </div>
  </div>
</section>
