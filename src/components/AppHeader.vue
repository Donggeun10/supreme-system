<template>
    <nav class="py-2 bg-body-tertiary border-bottom">
        <div class="container d-flex flex-wrap">
            <ul class="nav me-auto">
                <li class="nav-item"><a href="/" class="nav-link link-body-emphasis px-2 active" aria-current="page">Home</a></li>
                <li class="nav-item"><a href="/play" class="nav-link link-body-emphasis px-2">Game01</a></li>
                <li class="nav-item"><a href="/play2" class="nav-link link-body-emphasis px-2">your-first-phaser-3-game</a></li>
                <li class="nav-item"><a href="/play3" class="nav-link link-body-emphasis px-2">Game03</a></li>
                <li class="nav-item"><a href="/" class="nav-link link-body-emphasis px-2">About</a></li>

            </ul>
            <ul class="nav">
                <li class="nav-item"><a href="javascript:alert('it is not yet provided')" class="nav-link link-body-emphasis px-2">Login</a></li>
                <li class="nav-item"><a href="javascript:alert('it is not yet provided')" class="nav-link link-body-emphasis px-2">Sign up</a></li>
            </ul>
        </div>
    </nav>
    <header class="py-3 mb-4 border-bottom">
        <div class="container d-flex flex-wrap justify-content-center">
            <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                <svg class="bi me-2 m-1" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
                <span class="fs-4 m-1">Vue 3 + Vite + JavaScript + Phaser</span>
            </a>
            <button type="button" class="btn btn-primary mb-3 mb-lg-0 m-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">Toggle
                offcanvas</button>
            <form class="col-3 col-lg-auto mb-3 mb-lg-0 m-1" role="search">
                <input type="search" class="form-control" placeholder="Search..." aria-label="Search" disabled>
            </form>
        </div>
    </header>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div>
                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
            </div>
            <div class="dropdown mt-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                    Dropdown button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </div>
    </div>


</template>
<script setup lang="ts">
</script>