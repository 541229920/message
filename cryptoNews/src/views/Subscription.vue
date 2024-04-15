<template>
    <div class="content" v-for="(item, index) in activeData.slice(0, 1)" :key="index">
        <h2>{{ item.title }}</h2>
        <p><i>xPanse 快讯</i>{{ item.published_at }}</p>
        <span>{{ item.description }}</span>
        <p><a :href="item.link">来源链接</a></p>
    </div>
    <div class="floot">
        <div class="floot_first">
            <div class="info">
                xPanse Ventures 是一家以实验性投资为核心而成立的机构，致力推动与区块链与现实经济发展的有效桥梁，构建庞大的华人投资机构。
            </div>
        </div>
        <div class="floot_end">
            <h3>其他更多资讯</h3>
            <div class="end_content" v-for="(item, index) in activeData.slice(1, 4)" :key="index"
                @click="linkTo(item.link)">
                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';

const getData = async () => {
    try {
        axios.get('http://192.168.0.119:3030/odaliy').then(res => {
            OdaliyData.value = res.data
        }).catch(err => {
            console.log(err)
        })
    } catch (err) {
        console.log(err)
    }

}

</script>