<template>
    <div @click="$emit('handleCheck')" class="custom-checkbox" :class="{'checked': isCheck}">
        <svg v-if="isCheck" width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4.33317 9.16649L0.166504 4.99982L1.3415 3.82482L4.33317 6.80815L10.6582 0.483154L11.8332 1.66649L4.33317 9.16649Z"
                fill="white" />
        </svg>

    </div>
</template>

<script>
export default {
   props:[
    'isCheck'
   ]
}
</script>

<style lang="scss" scoped>
.custom-checkbox {
    width: 15px;
    height: 15px;
    border: 1px solid #C4C4C4;
    display: flex;
    align-items: center;
    justify-content: center;

    &.checked {
        border: 1px solid rgba(255, 82, 82, 0.98);
        background: rgba(255, 82, 82, 0.98);
    }
}
</style>