<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">Home</router-link>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item">
                        <router-link class="nav-link" to="/service">Service</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About Us</router-link>
                    </li>
                    <li>
                        <router-link class="nav-link" to="/contact">Contact Us</router-link>
                    </li>

                </ul>
                <div class="d-flex" role="search">
                    <ol class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            SignUp / SignIn
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/login">Login</router-link></li>
                            <li><router-link class="dropdown-item" to="/register">Register</router-link></li>
                        </ul>
                    </ol>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style></style>