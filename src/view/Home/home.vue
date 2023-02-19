<template>
  <div class="home-container">
    <div class="broken-line">
      <div class="title">
        <div class="title-item">
          <div class="icon-box visitUser">
            <Icon ref="visitUser" icon="svg-icon:visitUser" @mousemove="changeColor" :size="50" color="#6bc6c5"/>
          </div>
          <div class="item-box">
            <p class="subTitle">访问量</p>
            <span style="color: #000; font-size: 20px; font-weight: bold">102,400</span>
          </div>
        </div>
        <div class="title-item">
          <div class="icon-box message">
            <Icon icon="svg-icon:message" :size="50" color="#57a1f0"/>
          </div>
          <div class="item-box">
            <p class="subTitle">消息</p>
            <span style="color: #000; font-size: 20px; font-weight: bold">81,212</span>
          </div>
        </div>
        <div class="title-item">
          <div class="icon-box money">
            <Icon icon="svg-icon:money" :size="50" color="#e25d6f"/>
          </div>
          <div class="item-box">
            <p class="subTitle">购买量</p>
            <span style="color: #000; font-size: 20px; font-weight: bold">9,280</span>
          </div>
        </div>
        <div class="title-item">
          <div class="icon-box shopping">
            <Icon class="icon" icon="svg-icon:shopping" :size="50" color="#61bca4"/>
          </div>
          <div class="item-box">
            <p class="subTitle">销售量</p>
            <span style="color: #000; font-size: 20px; font-weight: bold">13,600</span>
          </div>
        </div>
      </div>
      <div id="initBrokenLine" style="width: 100%; height: 500px"/>
    </div>
    <div class="twoRowEcharts">
      <div id="itemOne" class="item" style="width: 30%;height: 400px"></div>
      <div id="itemTwo" class="item" style="width: 30%;height: 400px"></div>
      <div id="itemThree" class="item" style="width: 30%;height: 400px"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted } from "vue"

type EChartsOption = echarts.EChartsOption

// 初始化折线图  期望值、实际值
const initBrokenLine = () => {
  let chartDom = document.getElementById('initBrokenLine')!
  let myChart = echarts.init(chartDom)
  let option: EChartsOption

  option = {
    legend: {
      data: [ '预期值', '实际值' ]
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    xAxis: {
      type: 'category',
      data: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ],
      axisLabel: {}
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '预期值',
        data: [ 820, 932, 901, 934, 1290, 1330, 1320 ],
        type: 'line',
        smooth: true
      },
      {
        name: '实际值',
        data: [ 520, 532, 901, 1034, 1190, 1330, 1390 ],
        type: 'line',
        smooth: true
      }
    ]
  }
  option && myChart.setOption(option);

}

// 初始化第二行第一个图标
const initTwoEchartsOne = () => {
  type EChartsOption = echarts.EChartsOption

  let chartDom = document.getElementById('itemOne')!
  let myChart = echarts.init(chartDom);
  let option: EChartsOption;

  option = {
    legend: {
      data: [ 'Allocated Budget', 'Actual Spending' ]
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [ 4200, 3000, 20000, 35000, 50000, 18000 ],
            name: 'Allocated Budget'
          },
          {
            value: [ 5000, 14000, 28000, 26000, 42000, 21000 ],
            name: 'Actual Spending'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);

}
// 初始化第二行第二个图标
const initTwoEchartsTwo = () => {
  let chartDom = document.getElementById('itemTwo')!;
  let myChart = echarts.init(chartDom);
  let option: EChartsOption;

  option = {
    legend: {
      top: 'bottom'
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [ 20, 150 ],
        center: [ '50%', '50%' ],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
          { value: 22, name: 'rose 7' },
          { value: 18, name: 'rose 8' }
        ]
      }
    ]
  };

  option && myChart.setOption(option);
}
// 初始化第二行第三个图标
const initTwoEchartsThree = () => {
  let chartDom = document.getElementById('itemThree')!;
  let myChart = echarts.init(chartDom);
  let option: EChartsOption;

  option = {
    xAxis: {
      type: 'category',
      data: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [ 120, 200, 150, 80, 70, 110, 130 ],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  };

  option && myChart.setOption(option);
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
