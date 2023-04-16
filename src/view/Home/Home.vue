<template>
  <div class="home-container">
    <div class="broken-line">
      <div class="title">
        <div class="title-item">
          <div class="icon-box visitUser">
            <SvgIcon
              ref="visitUser"
              icon="svg-icon:visitUser"
              :size="50"
              color="#6bc6c5"
            />
          </div>
          <div class="item-box">
            <p class="subTitle">
              新增用户
            </p>
            <span style="color: #000; font-size: 20px; font-weight: bold">102,400</span>
          </div>
        </div>
        <div class="title-item">
          <div class="icon-box message">
            <SvgIcon
              icon="svg-icon:message"
              :size="50"
              color="#57a1f0"
            />
          </div>
          <div class="item-box">
            <p class="subTitle">
              未读消息
            </p>
            <span style="color: #000; font-size: 20px; font-weight: bold">81,212</span>
          </div>
        </div>
        <div class="title-item">
          <div class="icon-box money">
            <SvgIcon
              icon="svg-icon:money"
              :size="50"
              color="#e25d6f"
            />
          </div>
          <div class="item-box">
            <p class="subTitle">
              成交金额
            </p>
            <span style="color: #000; font-size: 20px; font-weight: bold">9,280</span>
          </div>
        </div>
        <div class="title-item">
          <div class="icon-box shopping">
            <SvgIcon
              class="icon"
              icon="svg-icon:shopping"
              :size="50"
              color="#61bca4"
            />
          </div>
          <div class="item-box">
            <p class="subTitle">
              购物总量
            </p>
            <span style="color: #000; font-size: 20px; font-weight: bold">13,600</span>
          </div>
        </div>
      </div>
      <div
        id="initBrokenLine"
        style="width: 100%; height: 500px"
      />
    </div>
    <div class="twoRowEcharts">
      <div
        id="itemOne"
        class="item"
        style="width: 30%;height: 420px"
      />
      <div
        id="itemTwo"
        class="item"
        style="width: 37%;height: 420px"
      />
      <div
        id="itemThree"
        class="item"
        style="width: 30%;height: 420px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted } from 'vue'
import SvgIcon from '@/components/Icon/src/SvgIcon.vue'

type EChartsOption = echarts.EChartsOption
// 初始化折线图  期望值、实际值
const initBrokenLine = () => {
  const chartDom = document.getElementById('initBrokenLine')!
  const myChart = echarts.init(chartDom)
  const option: EChartsOption = {
    title: {
      text: ' 每月销售额(万)'
    },
    legend: {
      data: ['预期值', '实际值']
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    xAxis: {
      type: 'category',
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      axisLabel: {}
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '预期值',
        data: [820, 932, 901, 1234, 1290, 1230, 1220, 1650, 1590, 1222, 1611, 1500],
        type: 'line',
        smooth: true
      },
      {
        name: '实际值',
        data: [520, 532, 901, 834, 1190, 1530, 1690, 1229, 1150, 1311, 1500, 1490],
        type: 'line',
        smooth: true
      }
    ]
  }
  option && myChart.setOption(option)
}

// 初始化第二行第一个图标
const initTwoEchartsOne = () => {
  type EChartsOption = echarts.EChartsOption

  const chartDom = document.getElementById('itemOne')!
  const myChart = echarts.init(chartDom)
  const option: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      data: ['预期预算(万)', '实际花费(万)']
    },
    radar: {
      shape: 'circle',
      indicator: [
        { name: '销售部门', max: 6500 },
        { name: '管理部门', max: 16000 },
        { name: '信息技术', max: 30000 },
        { name: '客户服务', max: 38000 },
        { name: '研发部门', max: 52000 },
        { name: '市场营销部门', max: 25000 }
      ]
    },
    series: [
      {
        name: '预算与花费',
        type: 'radar',
        tooltip: {
          trigger: 'item'
        },
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: '预期预算(万)'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: '实际花费(万)'
          }
        ]
      }
    ]
  }

  option && myChart.setOption(option)
}
// 初始化第二行第二个图标
const initTwoEchartsTwo = () => {
  const chartDom = document.getElementById('itemTwo')!
  const myChart = echarts.init(chartDom)
  const option: EChartsOption = {
    title: {
      text: '每周发布文章数',
      // left: "center",
      top: 'bottom',
      left: 'center'
    },
    legend: {
      top: 'left'
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: '每周发布文章数(单位:篇)',
        type: 'pie',
        radius: [20, 150],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 45, name: '专题研究' },
          { value: 35, name: '技术研究' },
          { value: 28, name: '外汇交易市场' },
          { value: 18, name: '行业发展' },
          { value: 10, name: '外来趋势预测' }
        ]
      }
    ]
  }

  option && myChart.setOption(option)
}
// 初始化第二行第三个图标
const initTwoEchartsThree = () => {
  const chartDom = document.getElementById('itemThree')!
  const myChart = echarts.init(chartDom)
  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    title: {
      text: '季度用户活跃量(千人)',
      left: 'center'
    },
    xAxis: {
      type: 'category',
      data: ['第一季度', '第二季度', '第三季度', '第四季度']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80],
        type: 'bar'
      }
    ]
  }
  option && myChart.setOption(option)
}

onMounted(() => {
  // 初始化initBrokenLine
  initBrokenLine()
  // 初始化第二行第一个Echarts
  initTwoEchartsOne()
  // 初始化第二行第二个Echarts
  initTwoEchartsTwo()
  // 初始化第二行第三个Echarts
  initTwoEchartsThree()
})
</script>

<style lang="scss" scoped>
.home-container {
  padding: 20px;

  .broken-line {
    .title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title-item {
        width: 20%;
        padding: 10px 20px;
        border-radius: 15px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .icon-box {
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          cursor: pointer;
          transition: all .5s;
          border-radius: 10px;
        }

        //.visitUser:hover {
        //  background-color: #6bc6c5;
        //}
        //
        //.message:hover {
        //  background-color: #57a1f0;
        //}
        //
        //.money:hover {
        //  background-color: #e25d6f;
        //}
        //
        //.shopping:hover {
        //  background-color: #61bca4;
        //}

        .item-box {

          // border-radius: 10px;
          .subTitle {
            font-size: 25px;
            margin: 10px 0;
            line-height: 25px;
            color: #8c8c8c;
          }

          span {
            margin: 10px 0;
          }
        }
      }
    }

    #initBrokenLine {
      background-color: white;
      margin-top: 20px;
      padding: 20px;

    }
  }

  .twoRowEcharts {
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .item {
      background-color: white;
    }
  }

}
</style>
