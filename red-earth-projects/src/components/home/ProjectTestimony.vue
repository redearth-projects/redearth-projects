<template>
    <carousel :per-page="1" :mouse-drag="false" :autoplay="true"
        :autoplay-timeout="5000" :loop="true" :pagination-position="paginationAlign">
        <slide>
            <b-row>
                <b-col xs="12" sm="12" md="4" lg="4" xl="4">
                    <img src="../../assets/re-logo-slim.png" alt="Red Earth Porojects"
                        class="logo-explore"/>
                </b-col>
            </b-row>
            <b-row>
                <b-col xs="12" sm="12" md="4" lg="4" xl="4">
                    <p class="tm-slide-1 tm-font">
                        Red earth is the symbol of fertility. Fertile land is more precious
                        than anything
                        else on the face of earth. And it should be taken cared at the most.
                        Our client is red earth. Every project we do is red earth for us
                        irrespective of scale.
                        We work towards the growth of our clients which ultimately
                        relects in our growth.
                    </p>
                    <span class="explore-projects">Explore Projects</span>
                    <img src="../../assets/arrow.png" alt="Explore Projects" />
                </b-col>
            </b-row>
        </slide>
        <slide>
            <b-row>
                <b-col xs="12" sm="12" md="4" lg="4" xl="4">
                    <p class="tm-slide-2 tm-font">
                        "My friend from bangalore suggested me red earth projects
                        for my interior work in Erode tamil nadu. At the begining
                        I was little worried weather they can execute my work since
                        they are based in bangalore. But they were exceptionally good
                        whe it comes to work. They were able to finish my work within
                        the estimated cost without compromising quality. Thank you
                        red earth team"
                    </p>
                    <img src="../../assets/jayaprakash.jpg" class="avatar" alt="Jayaprakash Erod" />
                    <div class="username tm-font">Jayaprakash Erod</div>
                    <div class="location tm-font">Tamil Nadu</div>
                </b-col>
            </b-row>
        </slide>
        <slide>
            <b-row>
                <b-col xs="12" sm="12" md="4" lg="4" xl="4">
                    <p class="tm-slide-2 tm-font">
                        "Very happy and satisfied with this young architects. Initially I was bit
                        confused, later on while project ongoing they were awesome with cost
                        control and planning. Best part is on time execution. Weather its
                        architecture or interior I would suggest red earth projects"
                    </p>
                    <img src="../../assets/nowaiser.jpg" class="avatar" alt="Mr. Nowaiser" />
                    <div class="username tm-font">Mr. Nowaiser</div>
                    <div class="location tm-font">Mangalore</div>
                </b-col>
            </b-row>
        </slide>
        <slide>
            <b-row>
                <b-col xs="12" sm="12" md="4" lg="4" xl="4">
                    <p class="tm-slide-2 tm-font">
                        "We were very impressed with their creative approach and modern
                        solution which fullfilled our brief perfectly.
                        Their solution was not only interns of architecture but also
                        it came from business orientation as well.
                        Which helped us to generate more profit
                        from our commercial properties. Thank you team REP"
                    </p>
                    <img src="../../assets/anas.jpg" class="avatar" alt="Mr. Anas" />
                    <div class="username tm-font">Mr. Anas</div>
                    <div class="location tm-font">Mangalore</div>
                </b-col>
            </b-row>
        </slide>
        <slide>
            <b-row>
                <b-col xs="12" sm="12" md="4" lg="4" xl="4">
                    <p class="tm-slide-2 tm-font">
                        "The architects provided complete design and construction
                        supervision. They suggested several ideas according to our needs.
                        The best part is they retained 50 year old existing mango tree.
                        Which I used to play with it in childhood. They were sensitive
                        to the environment.  They were available to us whenever required.
                        We would work again."
                    </p>
                    <img src="../../assets/manjunath.jpg" class="avatar" alt="Mr. Manjunath" />
                    <div class="username tm-font">Mr. Manunath</div>
                    <div class="location tm-font">Bengaluru</div>
                </b-col>
            </b-row>
        </slide>
        <slide>
            <b-row>
                <b-col xs="12" sm="12" md="4" lg="4" xl="4">
                    <p class="tm-slide-2 tm-font">
                        "We had to rebuild and redesign our house. Working with red
                        earth was a delight. They had this keen sense of capturing the
                        essence of our personality and style.
                        They were able to incorporate our personal taste into every room.
                        Red earth takes your vision and helps you make it real,
                        and if you don't have vision they points you in the right direction.
                        They were reliable, professional and creative. Red earth projects is
                        everything you look for in your building."
                    </p>
                    <img src="../../assets/nayana.jpg" class="avatar" alt="Ms. Nayana" />
                    <div class="username tm-font">Ms. Nayana</div>
                    <div class="location tm-font">Bengaluru</div>
                </b-col>
            </b-row>
        </slide>
    </carousel>
</template>
<script>
export default {
  name: 'ProjectTestimony',
  data() {
    return {
      paginationAlign: 'left',
    };
  },
  mounted() {
    const element = this.$el.querySelector('.VueCarousel-pagination');
    element.setAttribute('style', 'text-align: left !important');
  },
};
</script>
<style lang="scss">
// .VueCarousel-pagination {
//     text-align: left !important;
// }
.tm-slide-1 {
    text-align: justify;
    font-family: montserrat;
}
.explore-projects {
    font-family: Esteban;
    font-weight: bold;
    padding-right: 15px;
    font-size: 16px;
}
.tm-slide-2 {
    text-align: justify;
    font-family: montserrat;
}
.username {
    font-family: Esteban;
    font-weight: bold;
}
.location {
    font-family: Esteban;
}
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.logo-explore {
    width: inherit;
    margin-bottom: 10px;
}
.tm-font {
    font-size: 12px;
}
// @media only screen and (max-width: 600px) {
//     .tm-font {
//         font-size: 22px;
//     }
// }
</style>
