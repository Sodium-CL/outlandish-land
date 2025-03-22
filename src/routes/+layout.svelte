<script>
    let { children } = $props();
    import "../app.css";
    import Header from "../components/header.svelte";
    import Footer from "../components/footer.svelte";
</script>

<div class="font-primary bg-orange-50">
    <Header />
    <div class="min-h-[86vh] w-full flex flex-column">
        {@render children()}
    </div>
    <Footer />
</div>
