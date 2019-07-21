<template>
    <div>
        <v-footer dark height="auto">
            <v-card class="flex" flat tile>
                <v-card-text>
                    <p class="text-xs-center ma-0">
                        <v-tooltip top>
                            <template v-slot:activator="{ on }">
                                <v-chip label dark v-on="on">
                                    <strong>{{methods[method]}}</strong>
                                </v-chip>
                            </template>
                            <span>Method</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template v-slot:activator="{ on }">
                                <v-chip label dark v-on="on">
                                    <strong>{{type}}</strong>
                                </v-chip>
                            </template>
                            <span>Data Category</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template v-slot:activator="{ on }">
                                <v-chip label dark v-on="on">
                                    <strong>{{number}}</strong>
                                </v-chip>
                            </template>
                            <span>Number</span>
                        </v-tooltip>
                        |
                        <v-btn depressed small @click="imagesDialog = true">Original Images</v-btn>
                    </p>
                </v-card-text>
            </v-card>
        </v-footer>

        <!-- Images Dialog -->
        <v-dialog v-model="imagesDialog" dark width="720" height="576">
            <v-card>
                <v-card-text id="stereo-image-container">
                    <v-btn small block @click="showLeft = !showLeft" :disabled="interval">Switch Images</v-btn>
                    <v-btn small block @click="interval = !interval">{{intervalBtnText}}</v-btn>
                    <v-img @click="showLeft = !showLeft" v-if="showLeft" :src="leftImage" contain aspect-ratio="1.25"></v-img>
                    <v-img @click="showLeft = !showLeft" v-else :src="rightImage" contain aspect-ratio="1.25"></v-img>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    let interval;

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
                imagesDialog: false,
                showLeft: false,
                intervalBtnText: 'Auto Switch',
                interval: false,
                leftImage: `original_images/${this.$route.params.type}/${this.$route.params.number}left.jpg`,
                rightImage: `original_images/${this.$route.params.type}/${this.$route.params.number}right.jpg`
            }
        },
        computed: {
            type: function () {
                if (this.sub) {
                    return `${this.subs[this.sub]} ${this.types[this.$route.params.type]}`
                } else {
                    return this.types[this.$route.params.type]
                }
            }
        },
        watch: {
            '$route': function () {
                this.method = this.$route.params.method;
                this.number = /(?<number>\d+)(?<sub>\w*)/gm.exec(this.$route.params.number).groups.number;
                this.sub = /(?<number>\d+)(?<sub>\w*)/gm.exec(this.$route.params.number).groups.sub;
                this.leftImage = `original_images/${this.$route.params.type}/${this.$route.params.number}left.jpg`;
                this.rightImage = `original_images/${this.$route.params.type}/${this.$route.params.number}right.jpg`;
            },
            interval: function () {
                if (this.interval) {
                    this.intervalBtnText = 'Stop Auto Switch'
                    interval = setInterval(function () {
                        this.showLeft = !this.showLeft
                    }.bind(this), 200)
                } else {
                    clearInterval(interval)
                    this.intervalBtnText = 'Auto Switch'
                }
            },
            imagesDialog: function () {
                if (!this.imagesDialog) {
                    this.interval = false
                }
            }
        },
    }
</script>

<style scoped>

</style>