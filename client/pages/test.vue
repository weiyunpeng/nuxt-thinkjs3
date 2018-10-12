<style scoped>
#about {
    width: 1200px;
    min-height: 500px;
    margin: 30px auto;
    font-size: 20px;
}
.mu-card {
    transition: 0.5s;
    margin-bottom: 20px;
    cursor: pointer;
}
.page-wrap {
    display: table;
    margin: 0 auto;
}
.mu-card:hover {
    transform: scale(1.01, 1.01);
}
</style>

<template>
    <div>
        <my-header />
        <div id="about">
            <ul>
                <li v-for="item in 10">
                    <mu-card>
                        <mu-card-text>
                            散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
                            调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
                            似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
                            找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
                        </mu-card-text>
                        <mu-card-actions>
                            <mu-flat-button label="Action 1" />
                            <mu-flat-button label="Action 2" />
                        </mu-card-actions>
                    </mu-card>
                </li>
            </ul>

            <!--分页-->
            <div class="page-wrap">
                <mu-pagination :total="total" :current="current" :pageSize="pageSize" @pageChange="handleClick">
                </mu-pagination>
            </div>

        </div>
        <my-footer />
    </div>

</template>
<script>
export default {
    data() {
        return {
            total: 100,
            current: 1,
            pageSize: 6
        };
    },
    computed: {},
    props: [],
    components: {},
    methods: {
        handleClick(current) {
            alert(current);
        }
    },
    mounted() {}
};
</script>