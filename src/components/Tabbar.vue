<template>
    <section class="tabbar">
        <router-link :to="{ name: 'home' }" class="tab-item" exact>
            <!-- <div class="tab-item-icon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shelf"></use>
                </svg>
            </div> -->
            <p class="tab-item-label">首页</p>
        </router-link>
        <router-link :to="{ name: 'message' }" class="tab-item" exact>
            <!-- <div class="tab-item-icon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shelf"></use>
                </svg>
            </div> -->
            <p class="tab-item-label">消息</p>
        </router-link>
        <router-link :to="{ name: 'dynamic' }" class="tab-item" exact>
            <!-- <div class="tab-item-icon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shelf"></use>
                </svg>
            </div> -->
            <p class="tab-item-label">动态</p>
        </router-link>
        <router-link :to="{ name: 'mine' }" class="tab-item" exact>
            <!-- <div class="tab-item-icon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shelf"></use>
                </svg>
            </div> -->
            <p class="tab-item-label">我的</p>
        </router-link>
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
.tabbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    height: 60px;
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, .1);
    box-sizing: border-box;

    .tab-item {
        display: block;
        flex: 1;
        padding: 10px 0;

        &.router-link-exact-active {
            color: #ed424b;
        }
    }

    .tab-item-icon {
        width: 24px;
        height: 24px;
        margin: 0 auto 4px;

        .icon {
            width: 24px;
            height: 24px;
        }
    }
    .tab-item-label {
        text-align: center;
        font-size: 12px;
    }
}
</style>




