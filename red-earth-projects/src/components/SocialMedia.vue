<template>
    <div>
        <div class="social-media">
            <div>
                <a href="https://www.facebook.com/redearthprojects/">
                    <img src="../assets/facebook.png" alt="Facebook" class="facebook" />
                </a>
            </div>
            <div>
                <a href="#">
                    <img src="../assets/twitter.png" alt="Twitter" class="twitter" />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/redearthprojects/">
                    <img src="../assets/instagram.png" alt="Instagram" />
                </a>
            </div>
        </div>
        <div class="mob-social">
            <b-row>
                <b-col>
                    <a href="https://www.facebook.com/redearthprojects/">
                        <img src="../assets/facebook.png" alt="Facebook" class="facebook" />
                    </a>
                </b-col>
                <b-col>
                    <a href="#">
                        <img src="../assets/twitter.png" alt="Twitter" class="twitter" />
                    </a>
                </b-col>
                <b-col>
                    <a href="https://www.instagram.com/redearthprojects/">
                        <img src="../assets/instagram.png" alt="Instagram" />
                    </a>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SocialMedia',
};
</script>
<style lang="scss">
.facebook {
    margin-bottom: 20px;
}
.twitter {
    margin-bottom: 20px;
}
.social-media {
    margin-left: 20px;
    margin-top: -8%;
}
.mob-social {
    display: none;
}
@media only screen and (max-width: 600px) {
    .social-media {
        margin-left: 20px;
        margin-top: -8%;
        display: none;
    }
    .mob-social {
        margin-top: 30px;
        display: inherit;
        text-align: center;
    }
}
</style>
