<script>
    import { getDrawerStore } from "@skeletonlabs/skeleton";

    const drawerStore = getDrawerStore();

    function closeDrawer() {
        drawerStore.close();
    }

</script>
<main>
    <!-- (August 6th, 2023) xmark from FontAwesome. https://fontawesome.com/icons/xmark?f=classic&s=solid&sz=2xl -->
    <button class="pt-8 pl-8" on:click={closeDrawer}>
        <i class="fa-solid fa-xmark fa-2xl"></i>
    </button>
    <div class="container pb-0">
        <img class="container w-[10rem]" alt="Endurance Elite" src="$lib/Logos/ee-icon.png">
    </div>

    <div class="m-8">
        Store
    </div>
</main>