<script>
    import Event from "./Event.svelte";
    let { data } = $props();
</script>

<svelte:head>
    <title>Events</title>
</svelte:head>
{#each data.body.events as event}
    <div class="w-full flex flex-col items-center justify-center">
        <Event
            name={event.name}
            tagline={event.tagline}
            place={event.place}
            slug={event.slug}
            startDate={event.startDate}
            endDate={event.endDate}
            brief={event.brief}
            imageURL={event.imageUrl}
            registrationLink={event.registrationLink}
            priceList={event.priceList}
        />
    </div>
{/each}
