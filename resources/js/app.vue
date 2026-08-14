<template>
    Ton app vue.js
    <button class="btn btn-primary" @click="test">Tester</button>
</template>
<script setup>
import axios from 'axios';
import { fetcher } from './fetcher';
import { onMounted } from 'vue';

async function test() {
    let request = {
        method: "post",
        url: "/test"
    }

    var response = await fetcher(request);
    console.log(response)
}
</script>