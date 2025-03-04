<script>
    import Icon from "../icons/svelete-files/icon.svelte";
</script>

<nav class="h-[7vh] bg-red-500 flex flex-col justify-center">
    <div class="w-full mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <!-- Mobile menu button-->
                <button
                    type="button"
                    class="relative inline-flex items-center justify-center rounded-md p-2 text-red-200 hover:bg-red-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Open main menu</span>
                    <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
                    <svg
                        class="block size-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                    <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
                    <svg
                        class="hidden size-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <div
                class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
            >
                <div class="flex shrink-0 items-center">
                    <Icon
                        width="2em"
                        height="2em"
                        fill="oklch(0.98 0.016 73.684)"
                    />
                </div>
                <div class="hidden sm:ml-6 sm:block">
                    <div class="flex space-x-4">
                        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                        <a
                            href="/"
                            class="rounded-md bg-red-900 px-3 py-2 text-sm font-medium text-white"
                            aria-current="page">Home</a
                        >
                        <a
                            href="/events"
                            class="rounded-md px-3 py-2 text-sm font-medium text-red-50 hover:bg-red-800 hover:text-white"
                            >Events</a
                        >
                    </div>
                </div>
            </div>
            <div
                class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
            ></div>
        </div>
    </div>
</nav>
