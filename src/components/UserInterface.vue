<template>
    <div>
        <v-toolbar app dark>
            <v-toolbar-title class="headline">
                <span>M.Sc. Thesis Result</span>
                <span class="font-weight-light"> | Amin Zabardast</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dark flat to="about">
                <span>About</span>
            </v-btn>
            <v-btn dark flat @click="methodSelectDialog = true">
                Select Method
            </v-btn>
            <v-btn dark flat @click="dataTypeSelectDialog = true">
                Select Data Type
            </v-btn>
        </v-toolbar>

        <v-dialog v-model="methodSelectDialog" scrollable max-width="300px">
            <v-card>
                <v-card-title>Select Method</v-card-title>
                <v-divider></v-divider>
                <v-card-text style="height: 300px;">
                    <v-radio-group v-model="method" column>
                        <v-radio label="Type C Network" value="c"></v-radio>
                        <v-radio label="Type S Network" value="s"></v-radio>
                        <v-radio label="Type CS Network" value="cs"></v-radio>
                        <v-radio label="Block Matching" value="bm"></v-radio>
                        <v-radio label="Semi-Global Matching" value="sgm"></v-radio>
                    </v-radio-group>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="blue darken-1" flat @click="methodSelectDialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="dataTypeSelectDialog" scrollable max-width="300px">
            <v-card>
                <v-card-title>Select Method</v-card-title>
                <v-divider></v-divider>
                <v-card-text style="height: 300px;">
                    <v-radio-group v-model="dataType" column>
                        <v-radio label="All Data Points" value="all"></v-radio>
                        <v-radio label="Smoke Data Points" value="smoke"></v-radio>
                        <v-radio label="Blood Data Points" value="blood"></v-radio>
                        <v-radio label="Angle Data Points" value="angle"></v-radio>
                        <v-radio label="Distance Data Points" value="distance"></v-radio>
                    </v-radio-group>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="blue darken-1" flat @click="dataTypeSelectDialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-btn id="next" fab dark large depressed :disabled="this.disableNext" @click="next">
            <v-icon dark>chevron_right</v-icon>
        </v-btn>

        <v-btn id="prev" fab dark large depressed :disabled="this.disablePrev" @click="prev">
            <v-icon dark>chevron_left</v-icon>
        </v-btn>
    </div>
</template>

<script>
    import * as _ from 'lodash'
    export default {
        name: "UserInterface",
        data () {
            return {
                methodSelectDialog: false,
                method: 'c',
                dataTypeSelectDialog: false,
                dataType: 'all',
                maxData: {
                    all: 4,
                    smoke: 5,
                    blood: 2,
                    angle: 15,
                    distance: 1
                },
                dataNumber: 1,
            }
        },
        methods: {
            next: function () {
                this.dataNumber++
            },
            prev: function () {
                this.dataNumber--
            }
        },
        computed: {
            disableNext: function () {
                return this.dataNumber === _.get(this.maxData, `${this.dataType}`)
            },
            disablePrev: function () {
                return this.dataNumber === 1
            }
        }
    }
</script>

<style scoped>
    #next {
        position: fixed;
        top: 50%;
        right: 2em;
        z-index: 2;
    }

    #prev {
        position: fixed;
        top: 50%;
        left: 2em;
        z-index: 2;
    }
</style>