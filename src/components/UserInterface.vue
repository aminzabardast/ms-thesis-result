<template>
    <div>
        <!-- Menu Toolbar -->
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

        <!-- Method Selection Dialog -->
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

        <!-- About Dialog -->
        <v-dialog v-model="aboutDialog" dark fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark>
                    <v-btn icon dark @click="aboutDialog = false">
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>About</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <h3 class="display-1">What is the purpose of this page?</h3>
                    <p class="body-1">
                        This page contains the resulting surfaces, reconstructed from stereo images withing the <a href="http://opencas.webarchiv.kit.edu/?q=tmidataset" target="_blank">TMI dataset</a>.
                        These results are obtained within a masters' thesis research titled <strong>A Deep Learning Approach To Surface Reconstruction Using</strong>.
                    </p>
                    <p class="body-1">
                        We created this page to act as a better viewing medium for our three-dimensional result since it is not possible to fully showcase them in images.
                    </p>
                    <h3 class="display-1">How can one access the thesis?</h3>
                    <p class="body-1">
                        The material for this thesis is not publicly available now.
                        Please contact <a href="emailto:zabardast.amin@metu.edu.tr">zabardast.amin@metu.edu.tr</a> for more detail.
                    </p>
                    <h3 class="display-1">What is the TMI dataset?</h3>
                    <p class="body-1">
                        The TMI dataset is a collection of <i>in-vitro</i> stereo images collected from porcine organs in order to test surface reconstruction algorithms for Minimally Invasive Surgeries (MIS).
                    </p>
                    <h3 class="display-1">How can I use this website?</h3>
                    <p class="body-1">
                        You can select the data point and the reconstruction method by clicking on <strong>Select Data Point</strong> button.
                        A three-dimensional reconstruction of the surface in point cloud format will be loaded into this viewer.
                        You can hover around the surface by grabbing any point of the viewer and moving the cursor.
                        You also can zoom in by scrolling.
                    </p>
                    <p class="body-1">
                        This page is also touch screen friendly.
                        You can hover around the surface by swiping to the left, right, top, or bottom of your touch device.
                        You can also pinch the screen for zooming.
                    </p>
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
                                name: 'Without Smoke', value: 'wo'
                            },
                            {
                                name: 'With Smoke', value: 'w'
                            },
                        ]},
                    {name: 'Blood', value:'blood', number:2, furtherDivide: [
                            {
                                name: 'Without Blood', value: 'wo'
                            },
                            {
                                name: 'With Blood', value: 'w'
                            },
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
