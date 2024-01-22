<script>
    import { getDrawerStore } from "@skeletonlabs/skeleton";
    import logo from "$lib/Logos/M4L-transparent.png"
    const drawerStore = getDrawerStore();

    function closeDrawer() {
        drawerStore.close();
    }

</script>
<main class="p-8 bg-secondary-500 h-full">
    <!-- (August 6th, 2023) xmark from FontAwesome. https://fontawesome.com/icons/xmark?f=classic&s=solid&sz=2xl -->
    <div class="flex gap-[3rem]">
        <button on:click={closeDrawer}>
            <i class="fa-solid fa-xmark fa-2xl"></i>
        </button>
        <div class="">
            <img class="w-[12rem]" alt="Malunggay4Life" src={logo}>
        </div>
    </div>

    <div class="flex flex-col p-8 pt-20 gap-8">
        <a href="/shop" class="font-bold">Shop</a>
        <a href="/contact-us" class="font-bold">Contact Us</a>
        <a href="/our-story" class="font-bold">Our Story</a>
        <a href="/our-story" class="font-bold">Account</a>
    </div>
</main>