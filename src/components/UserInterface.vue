<template>
    <div>
        <v-toolbar app dark>
            <v-toolbar-title class="headline">
                <span>M.Sc. Thesis</span>
                <span class="font-weight-light"> Result</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dark flat to="about">
                <span>About</span>
            </v-btn>
            <v-btn dark flat>
                Select Result
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "UserInterface",
        data () {
            return {
            }
        }
    }
</script>

<style scoped>

</style>