<script>
    let props = $props();
</script>

<div class="mx-auto max-w-4xl text-center">
    <h2
        class="text-base/7 font-semibold text-red-600 uppercase tracking-widest"
    >
        {props.name}
    </h2>
    <h4
        class="text-base/7 font-semibold text-red-600 uppercase tracking-widest"
    >
        {props.place}
    </h4>
    <p
        class="mt-2 text-5xl font-semibold tracking-tight text-balance text-red-900 sm:text-6xl"
    >
        {props.eventpriceTagline}
    </p>
</div>
<div
    class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"
>
    {#each props.priceList as price, i}
        {#if i % 2 != 0}
            <div
                class="relative rounded-3xl bg-red-900 p-8 ring-1 shadow-2xl ring-red-900/10 sm:p-10"
            >
                <h3
                    id="tier-festival"
                    class="text-base/7 font-semibold text-red-400"
                >
                    {price.name}
                </h3>
                <p class="mt-4 flex items-baseline gap-x-2">
                    <span
                        class="text-5xl font-semibold tracking-tight text-white"
                        >{price.currency} {price.price}</span
                    >
                </p>
                <!-- <p class="mt-6 text-base/7 text-red-300">
                    Gives you access to the all the days of the festival.
                </p> -->
                <ul
                    role="list"
                    class="mt-8 space-y-3 text-sm/6 text-red-300 sm:mt-10"
                >
                    {#each price.features as feature}
                        <li class="flex gap-x-3">
                            <svg
                                class="h-6 w-5 flex-none text-red-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            {feature}
                        </li>
                    {/each}
                </ul>
                <a
                    href={price.actionLink}
                    target="_blank"
                    aria-describedby="tier-festival"
                    class="mt-8 block rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 sm:mt-10"
                    >{price.actionText}</a
                >
            </div>
        {:else}
            <div
                class="rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-red-900/10 sm:mx-8 sm:p-10 lg:mx-0 lg:rounded-bl-3xl"
            >
                <h3
                    id="tier-day"
                    class="text-base/7 font-semibold text-red-600"
                >
                    {price.name}
                </h3>
                <p class="mt-4 flex items-baseline gap-x-2">
                    <span
                        class="text-5xl font-semibold tracking-tight text-red-900"
                        >{price.currency} {price.price}</span
                    >
                </p>
                <!-- <p class="mt-6 text-base/7 text-red-600">
                Gives you access to one day of the festival.
            </p> -->
                <ul
                    role="list"
                    class="mt-8 space-y-3 text-sm/6 text-red-600 sm:mt-10"
                >
                    {#each price.features as feature}
                        <li class="flex gap-x-3">
                            <svg
                                class="h-6 w-5 flex-none text-red-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            {feature}
                        </li>
                    {/each}
                </ul>
                <a
                    href={price.actionLink}
                    target="_blank"
                    aria-describedby="tier-hobby"
                    class="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-red-600 ring-1 ring-red-200 ring-inset hover:ring-red-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:mt-10"
                    >{price.actionText}</a
                >
            </div>
        {/if}{/each}
</div>
