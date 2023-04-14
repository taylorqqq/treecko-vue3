<template>
  <div>
    <div class="grid md:grid-cols-4 gap-3">
      <el-card
        class="cursor-pointer"
        shadow="hover"
        :body-style="{ padding: '20px' }"
        v-for="card in cardList"
        :ke="card.id"
      >
        <template #header>
          <div class="flex justify-between items-center">
            {{ card.title }}
            <el-tag type="danger" size="small" effect="dark">月</el-tag>
          </div>
        </template>

        <section class="flex justify-between items-center mt-3">
          <span class="text-3xl">{{ card.price }}</span>
          <i
            class="text-violet-500 text-3xl"
            :class="[card.icon, card.iconColor]"
          ></i>
        </section>

        <section class="flex justify-between items-center mt-6 text-base">
          <span>{{ card.totalTitle }}</span>
          <span class="text-gray-500">{{ card.total }}</span>
        </section>
      </el-card>
    </div>
    <div class="grid md:grid-flow-col md:grid-cols-2 gap-3 bg-gray-100 mt-5">
      <el-card shadow="hover" :body-style="{ padding: '20px' }">
        <template #header>
          <div>用户统计</div>
        </template>
        <div id="main" class="h-72"></div>
      </el-card>
      <el-card shadow="hover" :body-style="{ padding: '20px' }">
        <template #header>
          <div>销售量</div>
        </template>
        <div id="main2" class="h-72"></div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, getCurrentInstance, nextTick } from "vue";
import { echartDemoOption, echartDemoOption2 } from "./echart";
import * as echarts from "echarts";
interface ICard {
  id: number;
  title: string;
  price: number;
  icon: string;
  iconColor: string;
  totalTitle: string;
  total: number;
}
const cardList: ICard[] = reactive([
  {
    id: 1,
    title: "用户数",
    price: 2313,
    icon: "fab fa-atlassian",
    iconColor: "text-violet-500",
    totalTitle: "总人数",
    total: 1064640,
  },
  {
    id: 2,
    title: "销售额",
    price: 431,
    icon: "fab fa-bilibili",
    iconColor: "text-blue-500",
    totalTitle: "总销售额",
    total: 132300,
  },
  {
    id: 3,
    title: "评论数",
    price: 435,
    icon: "fab fa-airbnb",
    iconColor: "text-green-500",
    totalTitle: "总评论数",
    total: 13200,
  },
  {
    id: 4,
    title: "用户数",
    price: 6565,
    icon: "fab fa-angular",
    iconColor: "text-yellow-500",
    totalTitle: "总人数",
    total: 143500,
  },
]);
onMounted(() => {
  nextTick(() => {
    var myChart1 = echarts.init(
      document.getElementById("main") as HTMLDivElement
    );
    // 绘制图表
    myChart1.setOption(echartDemoOption);

    var myChart2 = echarts.init(
      document.getElementById("main2") as HTMLDivElement
    );
    myChart2.setOption(echartDemoOption2);

    window.addEventListener("resize", () => {
      myChart1.resize();
      myChart2.resize();
    });
  });
});
</script>
