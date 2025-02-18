<script>
    let { children } = $props();
    import "../app.css";
</script>

<div class="bg-orange-50">
    {@render children()}
</div>
