<template>
    <div class="about-us">
        <b-row>
            <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="img-align">
                <img src="../../assets/people-table.png" alt="People at the table"
                class="image-fit"/>
            </b-col>
            <b-col xs="12" sm="12" md="6" lg="6" xl="6">
                <div class="about-us-sec">
                    <h2 class="heading-one">About us</h2>
                    <p class="p-bottom">
                        We look for solution that can have an impact beyond the projects.
                        Which can contribute to your lifestyle and culture.
                        Our design process is open, interactive and collaborative.
                        We believe that great design need to be crated through
                        creativity and innovation with collaboration of clients needs.
                    </p>
                    <p class="p-bottom">
                        Design idea comes from our team And design inspiration from a range of
                        sources including Art, Science, History, Climate,
                        Tropical condition and Vastu.
                    </p>
                    <p>
                        We believe deeply in the importance of designing sustainably.
                        Sustainable design is at the core of our practice. We ensure
                        that our sustainable solution makes easy for both clients and society.
                    </p>
                </div>
            </b-col>
        </b-row>
        <b-row class="row-margin">
            <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="img-align">
                <img src="../../assets/re-logo-slim.png" alt="Read Earth Projects"
                    class="logo"/>
            </b-col>
            <b-col xs="12" sm="12" md="6" lg="6" xl="6">
                <h1 class="one-solution">One Solution</h1>
                <h1>For all Architectural Needs</h1>
            </b-col>
        </b-row>
        <carousel :per-page="1" :mouse-drag="false"
            :autoplay-timeout="5000" :loop="true"
            :pagination-active-color="paginationColor" class="row-margin">
            <slide>
                <b-row>
                    <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="slide-sec-one img-align">
                       <img src="../../assets/person-one.png" class="md-image"
                        alt="Managing Director"/>
                    </b-col>
                    <b-col xs="12" sm="6" md="6" lg="6" xl="6">
                        <div class="md-background">
                            <h2 class="heading-two">Our Team</h2>
                            <div class="director-name">MOHAMMAD FARAZ B</div>
                            <div class="director-designation"> Managing Director</div>
                            <p class="p-bottom">
                                We look for solution that can have an impact beyond
                                the projects. Which can contribute to your lifestyle and culture.
                                Our design process is open, interactive and collaborative.
                                We believe that great design need to be created through creativity
                                and innovation with collaborative of clients needs.
                            </p>
                            <p>
                                Design idea comes from our team. And design inspiration from
                                a range of sources.
                            </p>
                        </div>
                    </b-col>
                </b-row>
            </slide>
            <slide>
                <b-row>
                    <b-col xs="12" sm="12" md="6" lg="6" xl="6">
                        Dummy Dummy
                    </b-col>
                    <b-col xs="12" sm="6" md="6" lg="6" xl="6">
                        Dummy Dummy
                    </b-col>
                </b-row>
            </slide>
        </carousel>
    </div>
</template>
<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      paginationColor: 'red',
    };
  },
  mounted() {
    const element = this.$el.querySelector('.VueCarousel-pagination');
    element.setAttribute('style', 'text-align: center !important');
  },
};
</script>
<style lang="scss">
.about-us {
    font-family: monsterrat;
}
// .VueCarousel-pagination {
//     text-align: center !important;
// }
.image-fit {
    width: 450px;
}
.logo {
    width: 400px;
}
.img-align {
    text-align:center;
}
.heading-one {
    text-decoration: underline;
    text-decoration-color: #ee3a3f;
}
.heading-two {
    text-decoration: underline;
    text-decoration-color: #ee3a3f;
    margin-bottom: 10px;
}
.one-solution {
    color: #ee3a3f;
}
.slide-sec-one {
    background-image: url('../../assets/sub-image.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
}
.md-image {
    width: 450px;
}
.director-name {
    font-weight: bold;
}
.director-designation {
    font-weight: 400;
    margin-bottom: 20px;
}
.row-margin {
    margin-top: 20px;
}
.md-background {
    background-color: rgba(255, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    padding: 10px;
}
.p-bottom {
    margin-bottom: 20px;
}
@media only screen and (max-width: 600px) {
    .logo {
        width: 100%;
    }
    .md-image {
        width: 100%;
    }
    .image-fit {
        width: 100%;
    }
}
p {
    font-size: 16px;
}
.about-us-sec {
    padding:10px;
}
</style>
