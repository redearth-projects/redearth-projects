<template>
  <div class="content">
    <div class="services-head">
      <h2>
        <span class="font-red">| Your Dream</span> We make it possible
      </h2>
      <div>4 steps to bring your idea vision to reality by red earth team</div>
    </div>
    <div class="services-content">
      <div>
        <b-row>
          <b-col lg="auto" cols="12">
            <div class="image-cropper">
              <img src="../assets/interview.png" alt="avatar" class="profile-pic" />
            </div>
          </b-col>
          <img class="services-dotted" src="../assets/services-dotted.png" />
          <b-col>
            <p class="font-weight-bold">Fill the form &amp; Meet with architect</p>
            <p>
              Every great design begins with an even better story.
              The more we hear about you, the better we can design you project.
            </p>
            <!-- <b-button style="margin-top: 10px;" variant="light" @click="showModal()"
              class="appointment">
              Book appointment
            </b-button> -->
            <a href="https://wa.link/5cfy53">
              <b-button style="margin-top: 10px;" variant="light"
              class="appointment">
              Book appointment
              </b-button>
            </a>
          </b-col>
        </b-row>
      </div>
      <div>
        <b-row>
          <b-col lg="auto" cols="12">
            <div class="image-cropper">
              <img
                src="../assets/project.png"
                style="margin-top: 16px;"
                alt="avatar"
                class="project"
              />
            </div>
          </b-col>
          <img class="services-dotted" src="../assets/services-dotted.png" />
          <b-col>
            <p class="font-weight-bold">Concept design</p>
            <p>
              Concept will be a back bone and foundation of a design.
              There are several important factor that we will incorporate
              into the sequence of the project.
              Our design concept generated from the Site (climate, orientation,
              views access, context, topography, history),
              building requirements, budget etc.
            </p>
          </b-col>
        </b-row>
      </div>
      <div>
        <b-row>
          <b-col lg="auto" cols="12">
            <div class="image-cropper">
              <img
                src="../assets/administration.png"
                alt="avatar"
                class="profile-pic"
                style="margin-top: 10px;"
              />
            </div>
          </b-col>
          <img class="services-dotted" src="../assets/services-dotted.png" />
          <b-col>
            <p class="font-weight-bold">Planning and costing</p>
            <p>
              Planning is bringing future into the present.
              Our design team with strong professional qualified
              state-of-art technical support to translate the project
              needs into reality. Creating thoughful problem solving
              design solution and delivering through accurate
              documentation for construction to a state budget.
            </p>
          </b-col>
        </b-row>
      </div>
      <div>
        <b-row>
          <b-col lg="auto" cols="12">
            <div class="image-cropper">
              <img
                src="../assets/process.png"
                style="margin-top: 14px;"
                alt="avatar"
                class="profile-pic"
              />
            </div>
          </b-col>
          <img class="services-dotted" src="../assets/services-dotted.png" />
          <b-col>
            <p class="font-weight-bold">Execution</p>
            <p>
              We will provide coordination of the project requirements
              with construction team. We arrange regularly scheduled
              meeting to track project progress, observe construction for
              compliance with documents. Our experience team has ability to solve
              the problem on site if any arises.
            </p>
          </b-col>
        </b-row>
      </div>
      <div>
        <b-row>
          <b-col lg="auto" cols="12">
            <div class="image-cropper">
              <img
                src="../assets/inauguration.png"
                style="margin-top:15px;"
                alt="avatar"
                class="profile-pic"
              />
            </div>
          </b-col>
          <img class="services-dotted" src="../assets/services-dotted.png" />
          <b-col>
            <p class="font-weight-bold">Fill the form &amp; Meet with architect</p>
            <p>
              The results of this project will be carefully analysed by
              our team of expert from beginning stage so that when we hand
              you the completed project you will face no problems in future.
              After completion we hand over a thank you letter as a gratitude
              for our generous client from red earth team.
            </p>
          </b-col>
        </b-row>
      </div>
    </div>
    <b-modal ref="book_appointment" hide-footer size="sm" title="Book an Appointment">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          class="about-label"
        >
          <b-form-input id="name-input" v-model="contactus.name" placeholder="John Doe" required>
          </b-form-input>
        </b-form-group>
        <span v-show="contactus.name == ''" class="warning">Name is required*</span>
        <b-form-group
          label="E-mail"
          label-for="email-input"
          invalid-feedback="Email is required"
          class="about-label"
        >
          <b-form-input
            id="email-input"
            v-model="contactus.email"
            placeholder="johndoe@mail.com"
            required
            @blur="validateEmail()"
          ></b-form-input>
        </b-form-group>
        <span v-show="contactus.email == ''" class="warning">Email is required*</span>
        <span
          v-show="!validEmail && contactus.email != ''"
          class="warning"
        >Enter a valid e-mail address</span>
        <b-form-group
          label="Phone"
          label-for="phone-input"
          invalid-feedback="Phone is required"
          class="about-label"
        >
          <b-form-input
            id="phone-input"
            v-model="contactus.phone"
            placeholder="Number"
            required
            @blur="validatePhone()"
          ></b-form-input>
        </b-form-group>
        <span v-show="contactus.phone == ''" class="warning">Phone is required*</span>
        <span
          v-show="!validPhone && contactus.phone != ''"
          class="warning"
        >Enter a valid phone number</span>
        <b-form-group
          label="Message"
          label-for="message-input"
          invalid-feedback="Message is required"
          class="about-label"
        >
          <b-form-textarea
            id="message-input"
            v-model="contactus.message"
            required
            placeholder="Your Message goes here"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <span v-show="contactus.message == ''" class="warning">Please enter you query..</span>
      </form>
      <b-button
        class="contactus-send"
        variant="outline-danger"
        block
        @click="hideModal"
        :disabled="isValidForm"
      >Send</b-button>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: 'Services',
  data() {
    return {
      contactus: {
        name: '',
        email: '',
        message: '',
        phone: '',
      },
      validEmail: true,
      validPhone: true,
      isValidForm: false,
    };
  },
  methods: {
    showModal() {
      this.$refs.book_appointment.show();
    },
    hideModal() {
      this.$refs.book_appointment.hide();
    },
  },
};
</script>
<style lang="scss" scoped>
.services-head {
  text-align: center;
  margin-bottom: 10px;
}
.content {
  width: 845px;
  margin: 0 auto;
}
.font-red {
  color: red;
}
.interview-img {
  border-style: solid;
  border-width: 2px;
  border-color: red;
  border-radius: 50%;
  padding: 5px;
}
.image-cropper {
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  border-style: solid;
  border-color: red;
  border-width: 2px;
  text-align: center;
  background-color: white;
}
.profile-pic {
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
  padding: 0;
  height: 70px;
  margin-top: 6px;
}
span > img {
  display: block;
}
.services-content > div:nth-child(even) {
  background-color: white;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 30px;
  -moz-box-shadow: 3px 3px 1px 2px #ccc;
  -webkit-box-shadow: 3px 3px 1px 2px #ccc;
  box-shadow: 3px 3px 1px 2px #ccc;
}
.services-content > div:nth-child(odd) {
  background-color: rgba(255, 0, 0, 0.1);
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 30px;
}
.appointment {
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
.appointment:hover {
  border-color: grey;
}
p {
  margin-bottom: 0;
  font-size: 0.9em;
}
.services-dotted {
    display: block;
  }
@media only screen and (max-width: 600px) {
  .services-dotted {
    display: none;
  }
  .image-cropper {
    margin: 0 auto;
  }
  .content {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
