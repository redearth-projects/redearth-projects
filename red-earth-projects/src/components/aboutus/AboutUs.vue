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
        <b-row>
            <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="img-align">
                <img src="../../assets/re-logo-slim.png" alt="Read Earth Projects"
                    class="logo"/>
            </b-col>
            <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="solution-all">
                <h1 class="one-solution">One Solution</h1>
                <h1>For all Architectural Needs</h1>
            </b-col>
        </b-row>
        <carousel :per-page="1" :mouse-drag="false"
            :autoplay-timeout="5000" :loop="true" :autoplay="true"
            :pagination-active-color="paginationColor">
            <slide>
                <b-row>
                    <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="slide-sec-one img-align">
                        <img src="../../assets/2_team.png" class="md-image"
                        alt="Managing Director"/>
                    </b-col>
                    <b-col xs="12" sm="6" md="6" lg="6" xl="6">
                        <div class="md-background">
                            <h2 class="heading-two">Our Team</h2>
                            <div class="director-name">MOHAMMED RIZWAN</div>
                            <div class="director-designation">Technical Director</div>
                            <p class="p-bottom">
                                Mohammad Rizwan one of the keystone in finding red earth team.
                                Rizwan knows how to play with space.
                                He tries to incorporate many themes thus not making
                                it complicated but a unique style. He graduated from
                                Sri Devi college of interior design, Mangalore.
                            </p>
                            <p>
                                He is trained under architect ganesh bhut who was one
                                of his key mentor in his journey.
                                He also worked with architect yaseer at milestone consultancy
                                from 2012 to 2017. At opus architect he worked with
                                Ar.sujay ghorpadkar. He has 8 years of work experience in
                                interior and architectural design field.
                                He is also a master in 3d renders.
                                He expertise in field of residential, commercial,institutional
                                and industrial architecture.
                            </p>
                        </div>
                    </b-col>
                </b-row>
            </slide>
            <slide>
                <b-row>
                    <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="slide-sec-one img-align">
                        <img src="../../assets/1_team.png" class="md-image"
                        alt="Managing Director"/>
                    </b-col>
                    <b-col xs="12" sm="6" md="6" lg="6" xl="6">
                        <div class="md-background">
                            <h2 class="heading-two">Our Team</h2>
                            <div class="director-name">MOHAMMAD FARAZ B</div>
                            <div class="director-designation">Managing Director</div>
                            <p class="p-bottom">
                                An extrovert with a passion for exploring cities of different
                                architectural style which contributed in shaping his own
                                though process. By Exploring diverse places and culture he have
                                learned  how architecture plays an important role
                                in our day to day life.
                            </p>
                            <p>
                                Mr faraz is one of the founding pillars of red earth team.
                                He as persuade b.arch from vtu in Karnataka.worked as an
                                architect at Doha in Qatar where he worked on major projects
                                such as Hilton pearl. He opened his firm in Bangalore one of
                                its own silicon valley of India. Red earth team has achieved years
                                of success due to his hardwork and passion
                                to play with forms and space.
                            </p>
                        </div>
                    </b-col>
                </b-row>
            </slide>
            <slide>
                <b-row>
                    <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="slide-sec-one img-align">
                        <img src="../../assets/3_team.png" class="md-image"
                        alt="Managing Director"/>
                    </b-col>
                    <b-col xs="12" sm="6" md="6" lg="6" xl="6">
                        <div class="md-background">
                            <h2 class="heading-two">Our Team</h2>
                            <div class="director-name">MASANI</div>
                            <div class="director-designation">Interior Designer</div>
                            <p class="p-bottom">
                                Mr Masani is an established designer for more than
                                5 years of experience. Clients often refer to the design process
                                with Masani as more fun than work,
                                saying he keeps their personality and comfort in mind
                                with his instinctive eye for beauty and assured sense of scale,
                                his design style is truly distinctive,
                                beautiful and intimate.
                            </p>
                            <p>
                                Mr Masani believes that good design is an expression of
                                many contradiction. One that is simple yet complex considers
                                form and function whilst possessing a timeless quality
                                but pushes the boundaries of design. He specializes in creating
                                and re-imagining beautiful interior spaces that
                                reflect your authentic self, lifestyle, or brand.
                            </p>
                        </div>
                    </b-col>
                </b-row>
            </slide>
            <slide>
                <b-row>
                    <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="slide-sec-one img-align">
                        <img src="../../assets/4_team.png" class="md-image"
                        alt="Site Enginner"/>
                    </b-col>
                    <b-col xs="12" sm="6" md="6" lg="6" xl="6">
                        <div class="md-background">
                            <h2 class="heading-two">Our Team</h2>
                            <div class="director-name">MOHAMMAD FARHAN</div>
                            <div class="director-designation">Site Enginner</div>
                            <p class="p-bottom">
                                Farhan recieved his diploma in civil engineering from MIT.
                                He worked with many well know engineers at mangalore and worked
                                on big projects like lady goschen hospital.
                            </p>
                            <p>
                                Having gained experience in his respective field Mr farhan has
                                joined the red earth team helping them with all the site supervision
                                and structural supports. He has excellent interpersonal skills,
                                organization, time management skills ,attention to details and
                                the ability to react to client's desires for their project.
                                In his spare time farhan likes exploring the city's cultural,
                                art and food scene as well as travelling
                                for experiences and inspiration.
                            </p>
                        </div>
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
    background-repeat: no-repeat;
    background-size: 450px;
    height: 100%;
    background-position: center;
}
.md-image {
    height: 358px;
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
.solution-all {
    display: block;
}
@media only screen and (max-width: 600px) {
    .logo {
        width: 100%;
    }
    .md-image {
        height: 221px;
    }
    .image-fit {
        width: 100%;
    }
    .slide-sec-one {
        background-repeat: no-repeat;
        background-size: 100%;
        height: 100%;
        background-position: center;
    }
    .solution-all {
        display: none;
    }
}
p {
    font-size: 16px;
}
.about-us-sec {
    padding:10px;
}
.VueCarousel-dot-container {
    margin-top:0px !important;
}
</style>
