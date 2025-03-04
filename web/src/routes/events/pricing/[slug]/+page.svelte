<script>
    import Pricing from "./Pricing.svelte";
    let { data } = $props();
</script>

<svelte:head>
    <title>Pricing</title>
</svelte:head>
{#each data.body.events as event}
    {#if data.slug === event.slug}
        <div class="w-full flex flex-col items-center justify-center">
            <Pricing
                name={event.name}
                place={event.place}
                registrationLink={event.registrationLink}
                eventpriceTagline={event.eventpriceTagline}
                priceList={event.priceList}
            />
        </div>
    {/if}
{/each}
