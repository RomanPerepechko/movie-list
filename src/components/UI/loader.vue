<template>
    <div class="loader">
        <div class="loader__black-elipse">
            <svg class="loader__black-svg"  width="100%" height="100%" viewBox="0 0 88 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M1.41074 20.3217C0.623152 19.7303 0.463339 18.6077 1.08367 17.8426C17.2531 -2.09889 46.6844 -5.58888 67.673 10.1727C88.6616 25.9342 93.5162 55.1714 78.8739 76.2598C78.3121 77.0688 77.1895 77.2283 76.4019 76.6369C75.6143 76.0455 75.4599 74.9277 76.0191 74.1169C89.4494 54.6456 84.9866 27.6349 65.5312 13.0248C46.0758 -1.58541 18.8919 1.66 3.93752 19.9867C3.31482 20.7498 2.19832 20.9132 1.41074 20.3217Z"
                    fill="black" />
            </svg>
        </div>
        <div class="loader__red-elipse">
            <svg class="loader__red-svg" width="100%" height="100%" viewBox="0 0 80 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.619194 29.5527C0.619165 29.5527 0.61915 29.5528 0.619161 29.5528C8.60465 50.3491 32.1963 60.5895 53.2823 52.4927C74.3683 44.396 85.0431 20.9977 77.0576 0.201441C77.0576 0.201412 77.0575 0.201396 77.0575 0.20141L74.257 1.27677C74.257 1.27678 74.257 1.27682 74.257 1.27684C81.6318 20.4829 71.7899 42.1725 52.2069 49.6921C32.6238 57.2118 10.7947 47.6834 3.41979 28.4774C3.41978 28.4774 3.41974 28.4773 3.41971 28.4774L0.619194 29.5527Z"
                    fill="#FA2828" fill-opacity="0.98" />
            </svg>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.loader {
    width: 93px;
    height: 93px;
    position: relative;

    &__red-elipse {
        width: 78px;
        height: 78px;
        min-height: 78px;
        animation-name: rotation;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in;
        transform: rotate(52deg);
        top: -87px;
        left: 9px;
        position: relative;
        z-index: 1000;
    }

    &__red-svg{
        position: absolute;
        right: -1px;
        top: 13px;
    }

    &__black-svg{
        position: absolute;
        right: -8px;
        top: -13px
    }

    &__black-elipse {
        width: 93px;
        height: 93px;
        min-height: 93px;
        animation-name: rotation;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in;
        position: relative;
    }

    @keyframes rotation {
        0% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(720deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
}


</style>