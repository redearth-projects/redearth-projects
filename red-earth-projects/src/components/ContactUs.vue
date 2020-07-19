<template>
    <div>
          <b-modal ref="contactus_popup" hide-footer size="sm" title="Contact us">
            <!-- <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group
                label="Name"
                label-for="name-input"
                invalid-feedback="Name is required"
                class="about-label"
              >
                <b-form-input
                  id="name-input"
                  v-model="contactus.name"
                  placeholder="John Doe"
                  required
                ></b-form-input>
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
              <span v-show="!validEmail && contactus.email != ''" class="warning">
                Enter a valid e-mail address
              </span>
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
              <span v-show="!validPhone && contactus.phone != ''" class="warning">
                Enter a valid phone number
              </span>
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
            </form> -->
            <a href="https://wa.link/5cfy53">
              <b-button style="width:50%;" class="contactus-send" variant="outline-danger"
                block>
                Whatsapp Us
              </b-button>
            </a>
            <!-- <b-button class="contactus-send" variant="outline-danger"
              block @click="hideModal" :disabled='isValidForm'>
              Send
            </b-button> -->
            <hr class="contact-hr">
            <div class="contact-info">
              <div class="cellphone">
                <img src="../assets/contactus/phone.png" alt="cellphone"/>
                <span class="contactus-info-bottom">9738782822 / 9035956023</span>
              </div>
              <!-- <div class="telephone">
                <img src="../assets/contactus/telephone.png" alt="telephone"/>
                <span class="contactus-info-bottom">080123456</span>
              </div> -->
              <div class="mail">
                <img src="../assets/contactus/mail.png" alt="mail"/>
                <span class="contactus-info-bottom">redearthprojects004@gmail.com</span>
              </div>
              <div class="location">
                <img src="../assets/contactus/pin.png" alt="location"/>
                <div class="contactus-info-bottom" style="display:inline;">
                  #99, First floor, 10th cross road,
                </div>
                <div style="margin-left:33px;">Yelachenahalli, Bangalore 560078</div>
              </div>
              <div class="location">
                <img src="../assets/contactus/pin.png" alt="location"/>
                <div class="contactus-info-bottom" style="display:inline;">
                  Legacy Complex,
                </div>
                <div style="margin-left:33px;">Kankanadi, Mangaluru</div>
              </div>
            </div>
          </b-modal>
        </div>
</template>
<script>
export default {
  name: 'ContactUs',
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
      this.contactus = {
        name: '',
        email: '',
        message: '',
        phone: '',
      };
      this.$refs.contactus_popup.show();
    },
    validateEmail() {
      // eslint-disable-next-line no-useless-escape
      const emailRegex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
      // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.contactus.email)) {
      this.validEmail = emailRegex.test(this.contactus.email);
    },
    validatePhone() {
      // eslint-disable-next-line no-useless-escape
      const phoneRegex = /^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,3}\)?([\-\. ])?\d{3}([\-\. ])?\d{7}$/;
      this.validPhone = phoneRegex.test(this.contactus.phone);
    },
    hideModal() {
      if (!this.validEmail || !this.validPhone) {
        this.isValidForm = false;
        return;
      }
      if (this.contactus.name === '' || this.contactus.message === '') {
        this.isValidForm = false;
        return;
      }
      Object.keys(this.contactus).forEach((key) => {
        console.log(`${key} - ${this.contactus[key]}`);
      });
      // const templateParams = {
      //   reply_to: this.email,
      //   from_name: 'Red Earth Projects',
      //   to_name: this.name,
      //   message_html: this.message,
      // };

      // const serviceId = 'gmail_test';
      // const templateId = 'template_cCyuyAq2';
      // eslint-disable-next-line no-undef
      // emailjs.send(serviceId, templateId, templateParams);
    },
  },
};
</script>
<style lang="scss" scoped>
.about-label {
  font-weight: bold;
}
.contactus-send {
  width: 90px;
  margin: 0 auto;
  background-color: #c9cd4c;
  border: none;
  color: white;
  font-weight: bold;
}
.contactus-send:hover {
  background-color: #c9cd4c !important;
  border: none;
  box-shadow: none;
}
.contactus-send:active {
  background-color: #c9cd4c !important;
  border: none;
  box-shadow: none;
}
.contactus-send:focus {
  background-color: #c9cd4c !important;
  border: none;
  box-shadow: none !important;
}
.contact-info {
  margin-left: 10px;
  font-size: 14px;
  font-family: Esteban;
}
.contact-hr {
  color: #c9cd4c;
  background-color: #c9cd4c;
}
.cellphone {
  margin-bottom: 4px;
}
.telephone {
  margin-bottom: 4px;
}
.mail {
  margin-bottom: 4px;
}
.location {
  margin-bottom: 4px;
}
.contactus-info-bottom {
  margin-left: 10px;
}

@media only screen and (max-width: 600px) {
  .modal-backdrop {
    width: 100%;
  }
}
.warning {
  color: #856404;
  font-size: 12px;
  margin-bottom: 5px;
}
.form-group {
  margin-bottom: 5px;
}
</style>
