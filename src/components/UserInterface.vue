<template>
    <div>
        <v-toolbar app dark>
            <v-toolbar-title class="headline">
                <span>M.S. Thesis Result</span>
                <span class="font-weight-light"> | Amin Zabardast</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dark flat to="about">
                <span>About</span>
            </v-btn>
            <v-btn dark flat @click="dataSelectDialog = true">
                Select Data Point
            </v-btn>
        </v-toolbar>

        <v-dialog v-model="dataSelectDialog" scrollable max-width="500px">
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
    </div>
</template>

<script>
    import * as _ from 'lodash'

    export default {
        name: "UserInterface",
        data () {
            return {
                dataSelectDialog: false,
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
                    {name: 'All', value:'all', number:35},
                ];
                _.forEach(preprocessedData, function (datum) {
                    for (let i=1; i<= datum.number; i++) {
                        data.push({
                            name: `${datum.name}/${i}`,
                            value: `${datum.value}/${i}`
                        })
                    }
                });
                return data
            }
        }
    }
</script>

<style scoped>
</style>
