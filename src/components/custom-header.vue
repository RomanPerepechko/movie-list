<template>
  <header class="custom-header">
    <div class="custom-header__title">
        #movienow
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.custom-header {
    height: 100px;
    width: 100%;
    background: rgba(250, 40, 40, 0.98);
    box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.28);
    display: flex;
    justify-content: center;
    z-index: 100;

    &__title {
        margin-top: 36px;
        letter-spacing: 0.21em;
        text-transform: uppercase;
        color: #000000;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 48px;
    }
}
</style>