<script>
    let { children } = $props();
    import "../app.css";
</script>

<div class="h-screen font-primary bg-orange-50">
    <ul class="h-1/10 flex flex-row items-center justify-between">
        <li>
            <ul class="px-4 py-2 font-semibold">
                <li class="text-2xl">outlandish</li>
                <li class="tracking-widest uppercase">land</li>
            </ul>
        </li>
        <li>
            <ul class="px-2 flex flex-row items-center justify-between">
                <li class="p-2"><a href="/">Home</a></li>
                <li class="p-2"><a href="/resources">Resources</a></li>
                <li class="p-2"><a href="/pricing">Pricing</a></li>
            </ul>
        </li>
    </ul>
    {@render children()}
</div>
