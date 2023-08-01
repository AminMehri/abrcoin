<template>
	<div class="profile">
		<SideBar />
		<div class="content">
			<div class="container top-container">
				<h2 class="bold mt-5 mb-3"> واریزها </h2>

				<!-- loding -->
				<div v-if="depWithDataLoading" class="spinner-grow text-dark d-block mx-auto" role="status"></div>

				<table v-if="!depWithDataLoading" class="shadow">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">مقدار</th>
							<th scope="col">شناسه</th>
							<th scope="col">پرداخت شده</th>
							<th scope="col">درگاه</th>
							<th scope="col">کد پیگیری</th>
							<th scope="col">تاریخ</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="dep,index in depositData">
							<td scope="row">{{index+1}}</td>
							<td>{{dep.amount}}</td>
							<td>{{dep.authority}}</td>
							<td>
								<i v-if="dep.is_pay" class="fa fa-circle-check text-success"></i>
								<i v-else class="fa fa-times-circle text-danger"></i>
							</td>
							<td>{{dep.gateway}}</td>
							<td>{{dep.ref_id}}</td>
							<td>{{dep.created_at}}</td>
						</tr>

					</tbody>
				</table>
				
				<div class="d-flex">
					<button class="btn btn-info px-5 my-4 mx-auto" data-bs-toggle="modal" data-bs-target="#newDepositModal"> افزایش موجودی </button>
				</div>
				
	
				<div class="modal fade" id="newDepositModal" tabindex="-1">
					<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="staticBackdropLabel">اضافه کردن کیف پول</h5>
								</div>
								<div class="modal-body">

									<input v-model="amount" type="text" class="form-control w-50 mx-auto" placeholder="مقدار (USDT)">
								
									<div class="modal-footer pb-0 mt-4">
										<button id="closeButton" type="button" class="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
										<button v-if="!modalLoading" @click="createGateway" class="btn fw-bold bg-success text-light px-3">پرداخت</button>
										<button v-else class="btn fw-bold bg-success text-light px-2" disabled> 
											پرداخت
											<span class="spinner-grow spinner-grow-sm text-dark"></span>
										</button>
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

export default{
	components: {
		SideBar,
	},
	setup(){
		let depositData = ref('')
		let amount = ref('')
		let depWithDataLoading = ref(false)
		let modalLoading = ref(false)
		
		function getDepWithData(){
        depWithDataLoading.value = true
        axios
        .get('financial/transactionList')
        .then(response => {
          depWithDataLoading.value = false
          depositData.value = response.data.deposit
        })
        .catch(error => {
          depWithDataLoading.value = false
          console.log(error.response)
        })
      }
	  function createGateway(){
		modalLoading.value = true
		axios.post("financial/deposit", {
			"amount": amount.value, "gateway": "nowpayments"
		}).then((res)=>{
			modalLoading.value = false
			alert(res.data.link)
			window.location.replace(res.data.link)
		}).catch(()=>{
			modalLoading.value = false
		})
	  	}
      getDepWithData()

		return{
			depositData,
			depWithDataLoading,
			amount,
			createGateway,
			modalLoading,

		}
	}	
}
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }	
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
		content:"ردیف"
	}
	table tbody tr td:nth-child(2):before {
		content:"مقدار"
	}
	table tbody tr td:nth-child(3):before {
		content:"شناسه"
	}
	table tbody tr td:nth-child(4):before {
		content:"پرداخت شده"
	}
	table tbody tr td:nth-child(5):before {
		content:"درگاه"
	}
	table tbody tr td:nth-child(6):before {
		content:"کد پیگیری"
	}
	table tbody tr td:nth-child(7):before {
		content:"تاریخ"
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