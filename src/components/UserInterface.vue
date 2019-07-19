<template>
    <div>
        <v-toolbar app dark>
            <v-toolbar-title class="headline">
                <span>M.S. Thesis Result</span>
                <span class="font-weight-light"> | Amin Zabardast</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dark flat @click="aboutDialog = true">
                <span>About</span>
            </v-btn>
            <v-btn dark flat @click="dataSelectDialog = true">
                Select Data Point
            </v-btn>
        </v-toolbar>

        <v-dialog v-model="dataSelectDialog" dark scrollable max-width="500px">
            <v-card>
                <v-card-title>Select a Data Point</v-card-title>
                <v-divider></v-divider>
                <v-card-text style="max-height: 500px;">
                    <v-layout wrap justify-space-between>
                        <v-flex xs12 md6>
                            <v-radio-group v-model="tempMethod" column>
                                <v-radio v-for="method in methods" :key="method.value" :label="method.name" :value="method.value"></v-radio>
                            </v-radio-group>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-radio-group v-model="tempDataPoint" column>
                                <v-radio v-for="datum in data" :key="datum.value" :label="datum.name" :value="datum.value"></v-radio>
                            </v-radio-group>
                        </v-flex>
                    </v-layout>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="info" flat @click="closeDataSelectDialog">Close</v-btn>
                    <v-btn color="success" @click="goTo" flat>Submit</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="aboutDialog" dark fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark>
                    <v-btn icon dark @click="aboutDialog = false">
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>About</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cumque error ex excepturi harum modi molestias numquam officia omnis quaerat quidem saepe sapiente sed, soluta tempora temporibus totam ullam vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus esse ipsa porro quia vitae. Distinctio eius neque quae tempora. Dolore esse ipsam labore maxime natus nemo officia omnis repellendus voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorum explicabo fugit quo. Ad alias animi corporis cupiditate deserunt dolor, earum et eum illo labore mollitia odio provident sapiente, vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore eaque impedit minus nemo ullam. Esse eveniet neque tempore. Aspernatur eum excepturi veritatis vero. Aut doloribus expedita odit. Porro, unde.
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import * as _ from 'lodash'

    export default {
        name: "UserInterface",
        data () {
            return {
                dataSelectDialog: false,
                aboutDialog: false,
                method: `${this.$route.params.method}`,
                tempMethod: `${this.$route.params.method}`,
                dataPoint: `${this.$route.params.type}/${this.$route.params.number}`,
                tempDataPoint: `${this.$route.params.type}/${this.$route.params.number}`,
                methods: [
                    {name: 'Block Matching', value: 'bm'},
                    {name: 'Semi-Global Matching', value: 'sgm'},
                    {name: 'Type S Network', value: 's'},
                    {name: 'Type C Network', value: 'c'},
                    {name: 'Type CS Network', value: 'cs'},
                ]
            }
        },
        methods: {
            closeDataSelectDialog: function () {
                this.dataSelectDialog = false;
                this.tempMethod = this.method;
                this.tempDataPoint = this.dataPoint;
            },
            goTo: function () {
                this.$router.push({
                    name: 'main',
                    params: {
                        method:this.tempMethod,
                        type:this.tempDataPoint.split('/')[0], number:this.tempDataPoint.split('/')[1]
                    }
                });
                this.dataSelectDialog = false
            }
        },
        computed: {
            data: function () {
                let data = [];
                let preprocessedData = [
                    {name: 'All', value:'all', number:35, furtherDivide: []},
                    {name: 'Smoke', value:'smoke', number:5, furtherDivide: [
                            {
                                name: 'With Smoke', value: 'w'
                            },
                            {
                                name: 'Without Smoke', value: 'wo'
                            }
                        ]},
                    {name: 'Blood', value:'blood', number:2, furtherDivide: [
                            {
                                name: 'With Blood', value: 'w'
                            },
                            {
                                name: 'Without Blood', value: 'wo'
                            }
                        ]},
                ];
                _.forEach(preprocessedData, function (datum) {
                    for (let i=1; i<= datum.number; i++) {
                        if (datum.furtherDivide.length > 0) {
                            _.forEach(datum.furtherDivide, function (division) {
                                data.push({
                                    name: `${division.name} / ${i}`,
                                    value: `${datum.value}/${i}${division.value}`
                                })
                            })
                        } else {
                            data.push({
                                name: `${datum.name} / ${i}`,
                                value: `${datum.value}/${i}`
                            })
                        }
                    }
                });
                return data
            }
        }
    }
</script>

<style scoped>
</style>
