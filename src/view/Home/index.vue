<template>
  <div class="home-container">
    <div class="home-left">
      <div class="home-left-date">
        <span style="font-size: 60px;letter-spacing: 15px; font-weight: 900;">08:39:42</span>
        <span style="font-size: 30px;letter-spacing: 10px">2022年7月6日 星期三</span>
      </div>
      <div class="home-left-info">
        <div class="title">
          <span>通知</span>
          <span style="color: #5a9cf8">通知详情</span>
        </div>
        <div class="content">
          <div class="content-item">
            <div class="content-left">
              <el-icon>
                <Location />
              </el-icon>
              <span>
                关于开展核实部门虚假消费报销工作
              </span>
            </div>
            <div class="content-right">
              2022-6-12
            </div>
          </div>
          <div class="content-item">
            <div class="content-left">
              <el-icon>
                <Location />
              </el-icon>
              <span>
                关于开展核实部门虚假消费报销工作
              </span>
            </div>
            <div class="content-right">
              2022-6-12
            </div>
          </div>
          <div class="content-item">
            <div class="content-left">
              <el-icon>
                <Location />
              </el-icon>
              <span>
                关于开展核实部门虚假消费报销工作
              </span>
            </div>
            <div class="content-right">
              2022-6-12
            </div>
          </div>
          <div class="content-item">
            <div class="content-left">
              <el-icon>
                <Location />
              </el-icon>
              <span>
                关于开展核实部门虚假消费报销工作
              </span>
            </div>
            <div class="content-right">
              2022-6-12
            </div>
          </div>
          <div class="content-item">
            <div class="content-left">
              <el-icon>
                <Location />
              </el-icon>
              <span>
                关于开展核实部门虚假消费报销工作
              </span>
            </div>
            <div class="content-right">
              2022-6-12
            </div>
          </div>
          <div class="content-item">
            <div class="content-left">
              <el-icon>
                <Location />
              </el-icon>
              <span>
                关于开展核实部门虚假消费报销工作
              </span>
            </div>
            <div class="content-right">
              2022-6-12
            </div>
          </div>
          <div class="content-item">
            <div class="content-left">
              <el-icon>
                <Location />
              </el-icon>
              <span>
                关于开展核实部门虚假消费报销工作
              </span>
            </div>
            <div class="content-right">
              2022-6-12
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-right">
      <div class="sales-summary">
        <div class="sales-summary-item">
          <div class="title" style="background-color: #3595fb">
            上周
          </div>
          <span style="font-size: 10px;color: #666">
            盈利金额(元)
          </span>
          <span style="font-size: 20px; color: #000; font-weight: 500">
            $60000
          </span>
        </div>
        <div class="sales-summary-item">
          <div class="title" style="background-color: #5db93f">
            本月
          </div>
          <span style="font-size: 10px;color: #666">
            盈利金额(元)
          </span>
          <span style="font-size: 20px; color: #000; font-weight: 500">
            $60000
          </span>
        </div>
        <div class="sales-summary-item">
          <div class="title" style="background-color: #f46162">
            今年
          </div>
          <span style="font-size: 10px;color: #666">
            盈利金额(元)
          </span>
          <span style="font-size: 20px; color: #000; font-weight: 500">
            $60000
          </span>
        </div>
        <div class="sales-summary-item">
          <div class="title" style="background-color: #e3973e">
            去年
          </div>
          <span style="font-size: 10px;color: #666">
            盈利金额(元)
          </span>
          <span style="font-size: 20px; color: #000; font-weight: 500">
            $60000
          </span>
        </div>
      </div>
      <div class="cost-breakdown">
        <div class="cost-breakdown-title">
          各部门六月份费用明细
        </div>
        <div class="cost-breakdown-content">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="Department" label="部门" width="300" />
            <el-table-column prop="Manager" label="经理" width="300" />
            <el-table-column prop="Cost" label="总费用" />
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tableData = [
  {
    Department: '行政部',
    Manager: '程浩',
    Cost: '125000',
  },
  {
    Department: '财务部',
    Manager: '徐琦',
    Cost: '115000',
  },
  {
    Department: '人事部',
    Manager: '徐明哲',
    Cost: '155000',
  },
  {
    Department: '研发部',
    Manager: '王艺博',
    Cost: '185000',
  },
  {
    Department: '技术部',
    Manager: '孙子文',
    Cost: '205000',
  },
]
</script>

<style lang="scss" scoped>
.home-container {
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 120px);

  .home-left {
    width: 40%;

    .home-left-date {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      box-shadow: 0 0 15px #666;
      border-radius: 10px;
      height: 40%;
      background-color: white;
    }

    .home-left-info {
      margin-top: 20px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 0 15px #666;
      border-radius: 10px;
      height: 45%;
      background-color: white;


      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        border-bottom: 1px solid #999;
      }

      .content {
        margin-top: 10px;

        .content-item {
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
        }
      }
    }
  }

  .home-right {
    width: 60%;
    margin-left: 10px;

    .sales-summary {
      height: 24%;
      display: flex;
      justify-content: space-between;

      .sales-summary-item {
        background-color: white;
        box-sizing: border-box;
        width: 22%;
        height: 100%;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: start;
        border-radius: 10px;
        box-shadow: 0 0 10px #999999;

        .title {
          width: 100%;
          height: 40px;
          font-size: 30px;
          font-weight: 500;
          text-align: center;
          line-height: 40px;
          color: #b82123;
          //background-color: #999;
          border-radius: 10px;
          box-shadow: 0 0 10px #999;
        }
      }
    }

    .cost-breakdown {
      margin-top: 20px;
      height: 60%;
      border-radius: 10px;
      box-shadow: 0 0 10px #999;
      padding: 10px;
      background-color: white;

      .cost-breakdown-title {
        height: 50px;
        line-height: 50px;
        text-align: start;
        font-size: 17px;
        font-weight: 900;
        border-bottom: 1px solid #666;
      }

      .cost-breakdown-content {
        padding: 10px 0;

      }
    }
  }
}
</style>
