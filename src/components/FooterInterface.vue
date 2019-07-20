<template>
    <div>
        <v-footer dark height="auto">
            <v-card class="flex" flat tile>
                <v-card-text>
                    <p class="text-xs-center ma-0">
                        Method: <strong>{{methods[method]}}</strong> |
                        Data Category: <strong>{{type}}</strong> |
                        Number: <strong>{{number}}</strong>
                    </p>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
    export default {
        name: "FooterInterface",
        data: function () {
            return {
                method: this.$route.params.method,
                number: /(?<number>\d+)(?<sub>\w*)/gm.exec(this.$route.params.number).groups.number,
                sub: /(?<number>\d+)(?<sub>\w*)/gm.exec(this.$route.params.number).groups.sub,
                methods: {
                    bm: 'Block Matching',
                    sgm: 'Semi-Global Matching',
                    s: 'Type S Network',
                    c: 'Type C Network',
                    cs: 'Type CS Network',
                },
                types: {
                    all: 'All',
                    smoke: 'Smoke',
                    blood: 'Blood',
                    angle: 'Angle',
                    distance: 'Distance'
                },
                subs: {
                    w: 'With',
                    wo: 'With Out'
                },
            }
        },
        computed: {
            type: function () {
                if (this.sub) {
                    return `${this.subs[this.sub]} ${this.types[this.$route.params.type]}`
                } else {
                    return this.$route.params.type
                }
            }
        },
        watch: {
            '$route': function () {
                this.method = this.$route.params.method;
                this.number = /(?<number>\d+)(?<sub>\w*)/gm.exec(this.$route.params.number).groups.number;
                this.sub = /(?<number>\d+)(?<sub>\w*)/gm.exec(this.$route.params.number).groups.sub;
            }
        }
    }
</script>

<style scoped>

</style>