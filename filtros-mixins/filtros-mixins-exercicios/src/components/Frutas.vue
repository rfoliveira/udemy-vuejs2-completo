<template>
    <div>
        <h1>{{global}}</h1>
        <ul>
            <li v-for="f in frutas" :key="f">{{f}}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
</template>

<script>
import frutasMixin from '@/frutasMixin'

export default {
    mixins: [frutasMixin]
}
</script>

<style>

</style>