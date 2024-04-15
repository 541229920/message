<script lang="ts" setup>
import axios from 'axios';
import { link } from 'fs';
import { ref, computed, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const OdaliyData = ref()
const t = ref(0)
let counter = 0

const activeData = computed(() => {
    return OdaliyData.value
})

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

const tick = () => {
    counter += 1;
    if (counter % 10 === 0) {
        getData();
        counter = 0
    }
    t.value = counter % 10;
}
const interval = setInterval(tick, 1000);
const linkTo = (a: any) => {
    window.open(a, '_blank')
}


onBeforeUnmount(() => {
    clearInterval(interval);
});

getData()

</script>
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

<style scoped lang="less">
@w: 600px;

h1,
h2,
h3,
h4,
span,
p {
    color: black;
}

.wrapper {

    .content {
        padding: 20px 10px;

        h2 {
            font-weight: bold;
        }

        h2,
        p,
        span {
            display: block;
            margin: 15px 0;
        }

        p:nth-child(2) {
            color: #aaa;
        }

        i {
            background: linear-gradient(90deg, rgb(255, 28, 28), rgb(255, 166, 83));
            border-radius: 50px 0 50px 0;
            color: white;
            font-weight: 700;
            padding: 3px 10px;
            margin-right: 20px;
        }
    }
}

.floot {

    .floot_first {
        padding: 20px;
        border: 1px solid #eee;

        .info {
            color: #666666;
            font-size: 14px;
        }
    }

    .floot_end {
        padding: 20px;
        background: #eee;

        h3 {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
        }

        .end_content {
            width: initial;
            font-size: 12px;
            margin: 10px 0;
            background: white;
            padding: 10px;
            border-radius: 5px;

            h2 {
                font-weight: bold;
                margin-bottom: 5px;
            }

            p {
                width: initial;
                line-break: 2;
                box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                line-height: 1.5em;
                color: #666666;
            }

        }
    }
}
</style>