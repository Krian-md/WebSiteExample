<template>
    <v-btn icon>
        <v-icon :size="size">
            {{iconName}}
        </v-icon> 
    </v-btn>
</template>

<script>
export default {
    name: 'BaseIcon',
    props: {
        iconName: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 16
        }
    }
}
</script>

<style>

</style>