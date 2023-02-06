<template>
  <div class="center-container">
    <div class="center-container-top">
      <div class="account">
        <!-- <img src="@/assets/icons/svg/vue.svg" alt="头像" class="account-img"> -->
        <div class="account-info">
          <span style="font-size: 30px; font-weight: 900">admin</span>
          <span>密码：admin123</span>
        </div>
      </div>
      <div class="distribution" id="main-pie" style="height: 100%;width: 100%">

      </div>
    </div>

    <div class="center-container-consumption" id="main-line">
      2021年各部门每月消费金额
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import {onMounted} from "vue";

onMounted(() => {
  // 饼状图
  const chartsPieFun = () => {
    // Echarts
    const chartDom = document.getElementById('main-pie')
    const myChart = echarts.init(chartDom as HTMLElement)
    type EChartsOption = echarts.EChartsOption

    let option: EChartsOption
    option = option = {
      title: {
        text: '公司人数分布情况（人）',
        left: 'center'
        
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '人员分布表单',
          type: 'pie',
          radius: '50%',
          data: [
            {value: 1048, name: '研发部'},
            {value: 735, name: '行政部'},
            {value: 580, name: '财务部'},
            {value: 484, name: '人事部'},
            {value: 300, name: '销售部'}
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    option && myChart.setOption(option)
  }
  // 初始化饼状图
  chartsPieFun()

  // 折线图
  const chartsLineFun = () => {
    // Echarts
    const chartDom = document.getElementById('main-line')
    const myChart = echarts.init(chartDom as HTMLElement)
    type EChartsOption = echarts.EChartsOption

    let option: EChartsOption
    option = option = {
      title: {
        text: '2021各部门每月消费金额'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['行政部', '财务部', '人事部', '研发部', '营销部']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '行政部',
          type: 'line',
          stack: 'Total',
          data: [100000, 120000, 110000, 122210, 155000, 122221, 155000, 123112, 132131, 177777.122222, 300000, 522222]
        },
        {
          name: '财务部',
          type: 'line',
          stack: 'Total',
          data: [200000, 120000, 110000, 322210, 155000, 122221, 151000, 123112, 132131, 117737.122222, 300000, 522222]
        },
        {
          name: '人事部',
          type: 'line',
          stack: 'Total',
          data: [100000, 120000, 110000, 122210, 155000, 122221, 155000, 123112, 132131, 177777.122222, 300000, 122222]
        },
        {
          name: '研发部',
          type: 'line',
          stack: 'Total',
          data: [100000, 130000, 110000, 162210, 155000, 122221, 455000, 123112, 132131, 177777.122222, 300000, 122222]
        },
        {
          name: '营销部',
          type: 'line',
          stack: 'Total',
          data: [100000, 120000, 110000, 122210, 155000, 122221, 155000, 123112, 132131, 177777.122222, 300000, 122222]
        }
      ]
    };
    option && myChart.setOption(option)
  }
  // 初始化折线图
  chartsLineFun()
})

</script>

<style lang="scss" scoped>
.center-container {
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 120px);

  .center-container-top {
    display: flex;
    justify-content: space-between;
    height: 39%;

    .account {
      flex: 0.39;
      height: 100%;
      display: flex;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 0 10px #999;
      justify-content: start;
      align-items: center;
      padding: 0 80px;

      .account-img {
        width: 150px;
        height: 150px;
        border-radius: 50px;
      }

      .account-info {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        height: 60px;
        margin-left: 50px;
      }
    }

    .distribution {
      flex: 0.6;
      height: 100%;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px #999;
    }
  }

  .center-container-consumption {
    height: 60%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px #999;
  }
}
</style>
