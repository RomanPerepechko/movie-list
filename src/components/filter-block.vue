<template>
    <div class="filter-block">

        <div class="filter-block__title">
            Фильмы
        </div>

        <div class="filter-block__filters">

            <div class="filter-block__filter">
                <checkbox @handle-check="$emit('toggleFilter','name')" :isCheck="filters.name"></checkbox>
                <span>Отсортировать по названию</span>
            </div>

            <div class="filter-block__filter">
                <checkbox @handle-check="$emit('toggleFilter','year')" :isCheck="filters.year"></checkbox>
                <span>Отсортировать по году</span>
            </div>

        </div>

    </div>
</template>

<script>
import Checkbox from './UI/checkbox.vue';

export default {
    props:[
        'filters'
    ],

    components: {
        Checkbox
    }
}
</script>

<style lang="scss" scoped>
.filter-block {
    padding-top: 40px;
    margin-bottom: 40px;
    border-bottom: 1px solid #C4C4C4;

    &__title {
        margin-bottom: 18px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 32px;
        color: #FFFFFF;
    }

    &__filters {
        display: flex;
        margin-bottom: 18px;
    }

    &__filter {
        display: flex;
        margin-right: 32px;
        align-items: center;

        span {
            margin-left: 12px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            color: #C4C4C4;
        }
    }
}
</style>