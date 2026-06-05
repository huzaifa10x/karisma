<script lang="ts">
  const { data } = $props();
  const service = data.service.subservices;
  console.log(service);
</script>

<div class="service-detail">
  <img src={service.image} alt={service.sub_service_name} />

  <h1>{service.sub_service_name}</h1>

  <div>{@html service.small_description}</div>

  {#if service.section1_title}
    <h2>{service.section1_title}</h2>
    <div>{@html service.section1_description}</div>
  {/if}

  {#if service.section2_title}
    <h2>{service.section2_title}</h2>
    <div>{@html service.section2_description}</div>
  {/if}

  {#if service.section3_title}
    <h2>{service.section3_title}</h2>
    <div>{@html service.section3_description}</div>
  {/if}

  {#if service.section4_title}
    <h2>{service.section4_title}</h2>
    <div>{@html service.section4_description}</div>
  {/if}

  {#if service.section5_title}
    <h2>{service.section5_title}</h2>
    <div>{@html service.section5_description}</div>
  {/if}
</div>
