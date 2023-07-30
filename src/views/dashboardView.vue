<template>
    <div class="Dashboard">
      <SideBar />
      <div class="content">
        <div class="container top-container">
          <div class="row align-items-center">
  
            <div class="col-xl-8">
              <div class="card border-0">
                <div class="card-body">
                  <h5 class="card-title">فعالیت ها</h5>
                </div>
                <!-- <img src="@/assets/chart.jpg" alt="..."> -->
                <div style="height: 300px !important;">
                  <LineChart/>
  
                </div>
              </div>
            </div>
  
            <div class="col-xl-4 mt-5">
              <!-- <img src="@/assets/pie.png" alt="" class="img-fluid"> -->
              <PieChart />
            </div>
  
          </div>
          <div class="">
              <button @click="toggleDepWith()" class="btn btn-outline-secondary w-50" id="depwith">برداشت ها</button>
          </div>

          <div class="row mt-1">
            <div v-if="toggledepo" class="col-xl-6">
              
              <!-- loding -->
              <div v-if="depWithDataLoading" class="spinner-grow text-dark d-block mx-auto" role="status"></div>

              <table v-if="!depWithDataLoading" class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">مقدار</th>
                    <th scope="col">آتوریتی</th>
                    <th scope="col">ایز پی</th>
                    <th scope="col">گیت وی</th>
                    <th scope="col">رف آیدی</th>
                    <th scope="col">تاریخ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="dep,index in depositData">
                    <th scope="row">{{index}}</th>
                    <td>{{dep.amount}}</td>
                    <td>{{dep.authority}}</td>
                    <td>{{dep.is_pay}}</td>
                    <td>{{dep.gateway}}</td>
                    <td>{{dep.ref_id}}</td>
                    <td>{{dep.created_at}}</td>
                  </tr>

                </tbody>
              </table>
            </div>

            <div v-if="!toggledepo" class="col-xl-6">

              <!-- loding -->
              <div v-if="depWithDataLoading" class="spinner-grow text-dark d-block mx-auto" role="status"></div>

              <table v-if="!depWithDataLoading" class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">مقدار</th>
                    <!-- <th scope="col">هش</th> -->
                    <th scope="col">ولت آدرس</th>
                    <th scope="col">تمام شده</th>
                    <th scope="col">تاریخ ساخت</th>
                    <th scope="col">تاریخ اتمام</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="wit,index in withdrawData">
                    <th scope="row">{{index}}</th>
                    <td>{{wit.amount}}</td>
                    <!-- <td>{{wit.hash}}</td> -->
                    <td>{{wit.wallet_address}}</td>
                    <td>{{wit.is_done}}</td>
                    <td>{{wit.created_at}}</td>
                    <td>{{wit.done_at}}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="col-xl-6">
              <div class="row ">
                
                <div v-if="!tradeHistoryLoading" v-for="trade in tradeHistoryData" class="col-lg-6">
                  <div class="card l-bg-cherry">
                    <div class="card-statistic-3 p-3">
                      <div class="card-icon card-icon-large"><i class="fas fa-shopping-cart"></i></div>
                      <div class="mb-2">
                        <h5 class="card-title mb-0">{{trade.symbol}}</h5>
                        <span>{{trade.amount}}</span>
                      </div>
                      <div class="row align-items-center d-flex">
                        <div class="col-8">
                          <h2 class="d-flex align-items-center mb-0">
                              {{trade.profit}}
                          </h2>
                        </div>
                          <div class="col-4 text-right">
                            <span>{{trade.profit_percent}}% <i class="fa fa-arrow-up"></i></span>
                          </div>
                      </div>
                      <div class="progress mt-1 " data-height="8" style="height: 8px;">
                        <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="tradeHistoryLoading" class="col-lg-6 placeholder-glow">
                    <div class="card l-bg-blue-dark">
                        <div class="card-statistic-3 p-4">
                            <div class="card-icon card-icon-large"><i class="fas fa-users"></i></div>
                            <div class="mb-4">
                                <h5 class="card-title placeholder mb-0">XXXXXXXXXXXX</h5>
                            </div>
                            <div class="row align-items-center mb-2 d-flex">
                                <div class="col-8">
                                    <h2 class="d-flex placeholder align-items-center mb-0">
                                        
                                    </h2>
                                </div>
                                <div class="col-4 text-right placeholder">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="tradeHistoryLoading" class="col-lg-6 placeholder-glow">
                    <div class="card l-bg-blue-dark">
                        <div class="card-statistic-3 p-4">
                            <div class="card-icon card-icon-large"><i class="fas fa-users"></i></div>
                            <div class="mb-4">
                                <h5 class="card-title placeholder mb-0">XXXXXXXXXXXX</h5>
                            </div>
                            <div class="row align-items-center mb-2 d-flex">
                                <div class="col-8">
                                    <h2 class="d-flex placeholder align-items-center mb-0">
                                        
                                    </h2>
                                </div>
                                <div class="col-4 text-right placeholder">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="tradeHistoryLoading" class="col-lg-6 placeholder-glow">
                    <div class="card l-bg-blue-dark">
                        <div class="card-statistic-3 p-4">
                            <div class="card-icon card-icon-large"><i class="fas fa-users"></i></div>
                            <div class="mb-4">
                                <h5 class="card-title placeholder mb-0">XXXXXXXXXXXX</h5>
                            </div>
                            <div class="row align-items-center mb-2 d-flex">
                                <div class="col-8">
                                    <h2 class="d-flex placeholder align-items-center mb-0">
                                        
                                    </h2>
                                </div>
                                <div class="col-4 text-right placeholder">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card l-bg-blue-dark">
                        <div class="card-statistic-3 p-4">
                            <div class="card-icon card-icon-large"><i class="fas fa-users"></i></div>
                            <div class="mb-4">
                                <h5 class="card-title mb-0">Customers</h5>
                            </div>
                            <div class="row align-items-center mb-2 d-flex">
                                <div class="col-8">
                                    <h2 class="d-flex align-items-center mb-0">
                                        15.07k
                                    </h2>
                                </div>
                                <div class="col-4 text-right">
                                    <span>9.23% <i class="fa fa-arrow-up"></i></span>
                                </div>
                            </div>
                            <div class="progress mt-1" data-height="8" style="height: 8px;">
                                <div class="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card l-bg-green-dark">
                        <div class="card-statistic-3 p-4">
                            <div class="card-icon card-icon-large"><i class="fas fa-ticket-alt"></i></div>
                            <div class="mb-4">
                                <h5 class="card-title mb-0">Ticket Resolved</h5>
                            </div>
                            <div class="row align-items-center mb-2 d-flex">
                                <div class="col-8">
                                    <h2 class="d-flex align-items-center mb-0">
                                        578
                                    </h2>
                                </div>
                                <div class="col-4 text-right">
                                    <span>10% <i class="fa fa-arrow-up"></i></span>
                                </div>
                            </div>
                            <div class="progress mt-1 " data-height="8" style="height: 8px;">
                                <div class="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card l-bg-orange-dark">
                        <div class="card-statistic-3 p-4">
                            <div class="card-icon card-icon-large"><i class="fas fa-dollar-sign"></i></div>
                            <div class="mb-4">
                                <h5 class="card-title mb-0">Revenue Today</h5>
                            </div>
                            <div class="row align-items-center mb-2 d-flex">
                                <div class="col-8">
                                    <h2 class="d-flex align-items-center mb-0">
                                        $11.61k
                                    </h2>
                                </div>
                                <div class="col-4 text-right">
                                    <span>2.5% <i class="fa fa-arrow-up"></i></span>
                                </div>
                            </div>
                            <div class="progress mt-1 " data-height="8" style="height: 8px;">
                                <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios'
  import { ref } from "vue";
  import Swal from 'sweetalert2'
  import { useStore } from 'vuex'
  import { useRoute, useRouter } from 'vue-router'
  import SideBar from '@/components/Sidebar.vue'
  import PieChart from '@/components/PieChart.vue'
  import LineChart from '@/components/LineChart.vue'
  
  export default {
    components:{
      SideBar,
      PieChart,
      LineChart,
    },
      setup() {
      const store = useStore()
      const router = useRouter()

      let depositData = ref('')
      let withdrawData = ref('')
      let tradeHistoryData = ref('')

      let depWithDataLoading = ref(false)

      let tradeHistoryLoading = ref()

      let toggledepo = ref(true)

      function getDepWithData(){
        depWithDataLoading.value = true
        axios
        .get('financial/transactionList')
        .then(response => {
          depWithDataLoading.value = false
          depositData.value = response.data.deposit
          withdrawData.value = response.data.withdraw

          console.log(depositData.value);
        })
        .catch(error => {
          depWithDataLoading.value = false
          console.log(error.response)
        })
      }
      getDepWithData()

      function getTradeHistory(){
        tradeHistoryLoading.value = true
        axios
        .get('trade/history')
        .then(response => {
          tradeHistoryLoading.value = false
          tradeHistoryData.value = response.data.data
        })
        .catch(error => {
          tradeHistoryLoading.value = false
          console.log(error.response)
        })
      }
      getTradeHistory()
  
      function toggleDepWith(){
        if(toggledepo.value){
            toggledepo.value = false
            document.getElementById('depwith').innerHTML = 'واریزها'
        } else {
            toggledepo.value = true
            document.getElementById('depwith').innerHTML = 'برداشت ها'
        }
      }
  
      return{
        toggledepo,
        withdrawData,
        depositData,
        depWithDataLoading,
        tradeHistoryData,
        tradeHistoryLoading,
        toggleDepWith
      }
      
    }
  }
  </script>
  
  <style scoped>
  .card {
      background-color: #fff;
      border-radius: 10px;
      border: none;
      position: relative;
      margin-bottom: 30px;
      box-shadow: 0 0.46875rem 2.1875rem rgba(90,97,105,0.1), 0 0.9375rem 1.40625rem rgba(90,97,105,0.1), 0 0.25rem 0.53125rem rgba(90,97,105,0.12), 0 0.125rem 0.1875rem rgba(90,97,105,0.1);
  }
  .l-bg-cherry {
      background: linear-gradient(to right, #493240, #f09) !important;
      color: #fff;
  }
  
  .l-bg-blue-dark {
      background: linear-gradient(to right, #373b44, #4286f4) !important;
      color: #fff;
  }
  
  .l-bg-green-dark {
      background: linear-gradient(to right, #0a504a, #38ef7d) !important;
      color: #fff;
  }
  
  .l-bg-orange-dark {
      background: linear-gradient(to right, #a86008, #ffba56) !important;
      color: #fff;
  }
  
  .card .card-statistic-3 .card-icon-large .fas, .card .card-statistic-3 .card-icon-large .far, .card .card-statistic-3 .card-icon-large .fab, .card .card-statistic-3 .card-icon-large .fal {
      font-size: 110px;
  }
  
  .card .card-statistic-3 .card-icon {
      text-align: center;
      line-height: 50px;
      margin-left: 15px;
      color: #000;
      position: absolute;
      right: -5px;
      top: 20px;
      opacity: 0.1;
  }
  
  .l-bg-cyan {
      background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
      color: #fff;
  }
  
  .l-bg-green {
      background: linear-gradient(135deg, #23bdb8 0%, #43e794 100%) !important;
      color: #fff;
  }
  
  .l-bg-orange {
      background: linear-gradient(to right, #f9900e, #ffba56) !important;
      color: #fff;
  }
  
  .l-bg-cyan {
      background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
      color: #fff;
  }

  .table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
  </style>