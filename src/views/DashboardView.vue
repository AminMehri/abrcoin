<template>
    <div class="Dashboard">
      <SideBar />
      <div class="content">
        <div class="container top-container">
          <div class="mt-4">
            <div v-if="profileData.name">
              <i class="fa fa-user"></i> <span> {{profileData.name}} {{profileData.last_name}} </span> - 
              <span class="text-muted">وضعیت:</span> {{auth_translate[profileData.authentication_status]}}
            </div>
            <div v-else>
              <i class="fa fa-user"></i> <span> {{profileData.phone_number}} </span> - 
              <span class="text-muted">وضعیت:</span> {{auth_translate[profileData.authentication_status]}}
            </div>
          </div>
          <hr>
          <h2 class="bold mt-5 mb-4"> سوابق تریدها </h2>
          
          <!-- loading -->
          <div v-if="tradeHistoryLoading" class="spinner-grow text-dark d-block mx-auto" role="status"></div>

          <table v-if="!tradeHistoryLoading" class="shadow mb-4">
            <thead>
              <tr>
                <th scope="col">Symbol</th>
                <th scope="col">Amount</th>
                <th scope="col">Profit</th>
                <th scope="col">Profit Percent</th>
                <th scope="col">Order id</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="trade in tradeHistoryData">
                <td scope="row">{{trade.symbol}}</td>
                <td>{{trade.amount}}</td>
                <td>{{trade.profit}}</td>
                <td>{{trade.profit_percent}}</td>
                <td>{{trade.order_id}}</td>
                <td>{{trade.created_at}}</td>
              </tr>
            </tbody>
          </table>

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
  
  export default {
    components:{
      SideBar,
    },
      setup() {
      const store = useStore()
      const router = useRouter()

      let tradeHistoryData = ref('')
      let profileData = ref('')
      let tradeHistoryLoading = ref()
      let auth_translate = {"No": "احراز هویت نشده", "Yes": "احراز هویت شده", "Pending": "درحال بررسی احراز هویت"}

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
      function getProfileInfo(){
        axios
        .get('account/profile')
        .then(response => {
          profileData.value = response.data.data 
        })
      }
	    getProfileInfo()
      getTradeHistory()
  
      return{
        tradeHistoryData,
        tradeHistoryLoading,
        profileData,
        auth_translate
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


  @media screen and (max-width:992px) {
 	table {
  		display:block
 	}
	table>*,
	table tr,
	table td,
	table th {
		display:block;
		word-break: break-all;
	}
	table thead {
		display:none
	}
	table tbody tr {
		height:auto;
		padding:37px 0
	}
	table tbody tr td {
		padding-left:40%!important;
		margin-bottom:24px
	}
	table tbody tr td:last-child {
		margin-bottom:0
	}
	table tbody tr td:before {
		font-family:OpenSans-Regular;
		font-size:14px;
		color:#999;
		line-height:1.2;
		font-weight:unset;
		position:absolute;
		width:40%;
		left:30px;
		top:0
	}
	table tbody tr td:nth-child(1):before {
		content:"Symbol"
	}
	table tbody tr td:nth-child(2):before {
		content:"Amount"
	}
	table tbody tr td:nth-child(3):before {
		content:"Profit"
	}
	table tbody tr td:nth-child(4):before {
		content:"Profit Percent"
	}
	table tbody tr td:nth-child(5):before {
		content:"Order id"
	}
	table tbody tr td:nth-child(6):before {
		content:"Time"
	}
	.column4,
	.column5,
	.column6 {
		text-align:left
	}
	.column4,
	.column5,
	.column6,
	.column1,
	.column2,
	.column3 {
		width:100%
	}
	tbody tr {
		font-size:14px
	}
}

  </style>