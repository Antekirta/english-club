<template>
    <div id="app" class="app">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <header class="alert alert-primary app__alert">Pairs</header>

                    <ul
                            class="list-group mb-5"
                    >
                        <li class="list-group-item mb-2 app__list-group-item app__person"
                            v-for="(person, index) in persons"
                            v-bind:key="index">
                            <span>{{ person.name }}</span>
                            <span class="badge badge-danger" @click="removePerson(index)"
                            >Remove</span
                            >
                        </li>
                    </ul>

                    <form @submit="addPerson" class="row justify-content-between">
                        <div class="col-7">
                            <input
                                    v-model="newParticipantName"
                                    type="text"
                                    class="form-control"
                                    placeholder="Имя участника"
                            />
                        </div>

                        <div class="col-5">
                            <button :disabled="!newParticipantName" class="btn btn-success ">
                                Add participant
                            </button>
                        </div>
                    </form>

                    <button :disabled="!topicsToShow.length" @click="sortPersons" class="btn btn-success mt-3">
                        Sort participants
                    </button>
                </div>

                <div class="col-7">
                    <header class="alert alert-primary app__alert">Topics and questions</header>

                    <ul
                            class="list-group mb-5"
                    >
                        <li class="list-group-item mb-2 app__list-group-item" style="font-size: 16px; width: 100%"
                            v-for="(topic, index) in topicsToShow"
                            v-bind:key="index" v-html="topic">
                        </li>
                    </ul>

                    <button :disabled="!topicsToShow.length" @click="sortTopics" class="btn btn-success">
                        Sort topics
                    </button>

                    <div></div>

                    <button @click="downloadTopics" class="btn btn-danger mt-2">
                        Redownload topics
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import PersonsList from './components/PersonsList.vue';

    export default {
        name: 'app',

        components: {
            PersonsList,
        },

        data() {
            return {
                newParticipantName: '',

                persons: [],

                topics: [],

                stackOverflowSite: 'meta'
            };
        },

        computed: {
            topicsToShow: function () {
                return this.topics.slice(0, this.persons.length / 2);
            },
        },

        methods: {
            addPerson(event) {
                event.preventDefault();

                if (this.newParticipantName) {
                    this.persons.push({
                        name: this.newParticipantName,
                    });

                    this.newParticipantName = '';
                }
            },

            removePerson(index) {
                this.persons.splice(index, 1);
            },

            sortPersons() {
                this.persons.sort(() => Math.random() - 0.5)
            },

            downloadTopics() {
                axios
                    .get('https://opentdb.com/api.php?amount=10')
                    .then(res => {
                        this.topics = res.data.results.map(item => item.question);
                    });
            },

            sortTopics() {
                this.topics.sort(() => Math.random() - 0.5)
            }
        },

        created() {
            this.downloadTopics();
        },
    };
</script>
<style lang="stylus">
    .app
        padding: 30px

        &__alert
            font-size: 22px

        .list-group
            display: flex
            flex-direction: row
            flex-wrap wrap
            justify-content: space-between

        &__person
            width: 48%

        .list-group-item&__list-group-item
            display: flex
            justify-content: space-between
            align-items: center
            height: 80px
            font-size: 20px
            cursor: pointer
            transition: .2s
            &:hover
                opacity: .7

            .badge
                height: 30px
                line-height: 170%
                font-size: 12px
                letter-spacing: 0.07em
</style>
