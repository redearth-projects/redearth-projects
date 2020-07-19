<template>
    <div>
        <b-navbar toggleable="lg">
            <b-navbar-brand href="#" :class="[currentPage() === '/' ? 'logo-visibility' : '']">
                <img src="../assets/re-logo-slim.png" class="d-inline-block align-top navbar-logo"
                alt="Red Earth">
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">
                    <router-link :to="{name: 'Home'}" exact>
                        HOME
                    </router-link>
                    <span :class="[currentPage() === '/' ? 'dot' : '']"></span>
                </b-nav-item>
                <b-nav-item href="#">
                    <router-link :to="{name: 'Architecture'}" exact>
                        ARCHITECTURE
                    </router-link>
                    <span :class="[currentPage() === '/architecture' ? 'dot' : '']"></span>
                </b-nav-item>
                <b-nav-item href="#">
                  <router-link :to="{name: 'Interior'}" exact>
                    INTERIOR
                  </router-link>
                    <span :class="[currentPage() === '/interior' ? 'dot' : '']"></span>
                </b-nav-item>
                <b-nav-item href="#">
                    <router-link :to="{name: 'AboutUs'}" exact>
                      ABOUT US
                    </router-link>
                    <span :class="[currentPage() === '/about-us' ? 'dot' : '']"></span>
                </b-nav-item>
                <b-nav-item href="#">
                  <router-link :to="{name: 'Services'}" exact>
                    SERVICES
                  </router-link>
                    <span :class="[currentPage() === '/services' ? 'dot' : '']"></span>
                </b-nav-item>
                <b-nav-item href="#" @click="showModal">
                    CONTACT
                </b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <ContactUs ref="contactUs"/>
    </div>
</template>
<script>
import ContactUs from './ContactUs.vue';

export default {
  name: 'NavigationBar',
  components: {
    ContactUs,
  },
  methods: {
    showModal() {
      this.$refs.contactUs.showModal();
    },
    currentPage() {
      return this.$route.path;
    },
  },
};
</script>
<style  scoped>
.navbar-logo {
  height: 35px;
  margin-left: 55px;
}
a {
  font-family: montserrat;
  color: rgba(0, 0, 0, 0.5);
  font-size: 18px;;
}
a:hover {
    font-family: montserrat;
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none;
}
.router-link-active {
    font-weight: bold;
    color: black !important;
}
.dot {
    height: 8px;
    width: 8px;
    background-color: red;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
    margin-top: -4px;
}
@media only screen and (max-width: 600px) {
  .dot {
    height: 8px;
    width: 8px;
    background-color: red;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
    margin-top: -15px;
    margin-left: -15px;
  }
}
li {
  padding-left: 15px;
  padding-right: 15px;
}
.logo-visibility {
  visibility: hidden;
}
</style>
