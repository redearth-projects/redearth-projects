<template>
    <div class="soc-mob">
        <div class="social-media">
            <a href="https://www.facebook.com/redearthprojects/" target="blank">
                <img src="../assets/facebook.png" alt="Facebook" class="facebook" />
            </a>
            <a href="https://www.linkedin.com/company/redearthprojects" target="blank">
                <img src="../assets/in.jpg" alt="LinkedIn" class="twitter" />
            </a>
            <a href="https://www.instagram.com/redearthprojects/" target="blank">
                <img src="../assets/instagram.png" alt="Instagram" />
            </a>
        </div>
        <div class="mob-social">
            <a href="https://www.facebook.com/redearthprojects/" target="blank">
                <img src="../assets/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/company/redearthprojects" target="blank">
                <img src="../assets/in.jpg" alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/redearthprojects/" target="blank">
                <img src="../assets/instagram.png" alt="Instagram" />
            </a>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SocialMedia',
};
</script>
<style lang="scss">
.social-media > a {
    padding: 10px;
    display: block;
}
.mob-social {
    display: none;
}
.soc-mob {
    width:75px;
    position: absolute;
    top: 50%;
    margin-top: -50px;
}
a > img {
    height: 20px;
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
    .mob-social > a {
        padding: 40px;
    }
    .soc-mob {
        margin-top:0;
        width:100%;
        position: relative;
    }
}
</style>
