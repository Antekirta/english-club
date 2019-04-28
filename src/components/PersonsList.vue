<template>
    <div class="persons-list">
        <ul class="persons-list__list" v-for="(person, index) in persons" v-bind:key="index">
            <li class="persons-list__item">{{person.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'PersonsList',
        
        data () {
            return {
                persons: [
                    {
                        name: 'Kirill'
                    },
                    {
                        name: 'Emma'
                    }
                ]
            }
        }
    }
</script>

