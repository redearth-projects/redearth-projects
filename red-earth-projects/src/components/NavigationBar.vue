<template>
    <div>
        <b-navbar toggleable="lg">
            <!-- <b-navbar-brand href="#">
                <img src="../assets/re-logo-slim.png" class="d-inline-block align-top navbar-logo"
                alt="Red Earth">
            </b-navbar-brand> -->
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#" @click="activeView('Home')">
                    <router-link :to="{name: 'Home'}" exact>
                        HOME
                    </router-link>
                    <span v-bind:class="{dot: isHome}"></span>
                </b-nav-item>
                <b-nav-item href="#" @click="activeView('Architecture')">
                    <router-link :to="{name: 'Architecture'}" exact>
                        ARCHITECTURE
                    </router-link>
                    <span v-bind:class="{dot: isArch}">
                    </span>
                </b-nav-item>
                <b-nav-item href="#" @click="activeView('Interior')">
                    INTERIOR
                    <span v-bind:class="{dot: isInterior}">
                    </span>
                </b-nav-item>
                <b-nav-item href="#" @click="activeView('AboutUs')">
                    <router-link :to="{name: 'AboutUs'}" exact>
                      ABOUT US
                    </router-link>
                    <span v-bind:class="{dot: isAboutUs}">
                    </span>
                </b-nav-item>
                <b-nav-item href="#" @click="activeView('Services')">
                    SERVICES
                    <span v-bind:class="{dot: isServices}">
                    </span>
                </b-nav-item>
                <b-nav-item href="#" @click="activeView('Contact')">
                    CONTACT
                    <span v-bind:class="{dot: isContact}">
                    </span>
                </b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      isHome: this.$router.currentRoute.name === 'Home',
      isArch: this.$router.currentRoute.name === 'Architecture',
      isInterior: this.$router.currentRoute.name === 'Interior',
      isAboutUs: this.$router.currentRoute.name === 'AboutUs',
      isServices: this.$router.currentRoute.name === 'Services',
      isContact: this.$router.currentRoute.name === 'Contact',
    };
  },
  methods: {
    activeView(view) {
      switch (view) {
        case 'Home':
          this.isHome = true;
          // eslint-disable-next-line no-multi-assign
          this.isInterior = this.isArch = this.isAboutUs = this.isServices = this.isContact = false;
          break;
        case 'Architecture':
          this.isArch = true;
          // eslint-disable-next-line no-multi-assign
          this.isInterior = this.isHome = this.isAboutUs = this.isServices = this.isContact = false;
          break;
        case 'Interior':
          this.isInterior = true;
          // eslint-disable-next-line no-multi-assign
          this.isArch = this.isHome = this.isAboutUs = this.isServices = this.isContact = false;
          break;
        case 'AboutUs':
          this.isAboutUs = true;
          // eslint-disable-next-line no-multi-assign
          this.isArch = this.isHome = this.isInterior = this.isServices = this.isContact = false;
          break;
        case 'Services':
          this.isServices = true;
          // eslint-disable-next-line no-multi-assign
          this.isArch = this.isHome = this.isInterior = this.isAboutUs = this.isContact = false;
          break;
        case 'Contact':
          this.isContact = true;
          // eslint-disable-next-line no-multi-assign
          this.isArch = this.isHome = this.isInterior = this.isAboutUs = this.isServices = false;
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style  scoped>
.navbar-logo { width: 150px;}
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
</style>
