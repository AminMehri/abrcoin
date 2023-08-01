<template>
	<div class="profile">
		<div v-if="fullScreenLoading" class="fullscreen-loading">Loading&#8230;</div>
		<SideBar />
		<div class="content">
			<div class="container top-container">
				<h2 class="bold mt-5 mb-4"> برداشت ها </h2>

				<!-- loding -->
				<div v-if="depWithDataLoading" class="spinner-grow text-dark d-block mx-auto" role="status"></div>

				<table v-if="!depWithDataLoading" dir="ltr" class="shadow">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">مقدار</th>
							<th scope="col">هش</th>
							<th scope="col">ولت آدرس</th>
							<th scope="col">تمام شده</th>
							<th scope="col">تاریخ ساخت</th>
							<th scope="col">تاریخ اتمام</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="wit,index in withdrawData">
							<td scope="row">{{index+1}}</td>
							<td>{{wit.amount}}</td>
							<td>{{wit.hash}}</td>
							<td>{{wit.wallet_address}}</td>
							<td>
								<i v-if="wit.is_done" class="fa fa-circle-check text-success"></i>
								<i v-else class="fa fa-times-circle text-danger"></i>
							</td>
							<td>{{wit.created_at}}</td>
							<td>{{wit.done_at}}</td>
						</tr>
					</tbody>
				</table>
				
				<div class="d-flex">
					<button class="btn btn-secondary px-5 my-4 mx-auto" @click="openModal"> درخواست برداشت از موجودی </button>
				</div>

				<div class="modal fade" id="withdrawModal" tabindex="-1">
					<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="staticBackdropLabel">ثبت درخواست برداشت</h5>
								</div>
								<div class="modal-body">

									<div v-if="in_otp">
										<p> کدهای ارسالی به تلفن و ایمیلتان را وارد کرده و تایید نمایید </p>

										<div class="pt-4 pb-5 px-5">
											<div class="position-relative">
												<input v-model="phone_otp" maxlength="6" type="text" :class="['form-control', 'my-3', {'submited-inp' :submited_phone}]" placeholder="کد تایید پیامک" :disabled="submited_phone">
												<button @click="confirmWithdraw('phone')" v-if="!confirmLoading" class="inp-btn btn btn-sm btn-success" :disabled="phone_otp.length != 6 || submited_phone"> تایید </button>
												<button v-else class="inp-btn btn btn-sm btn-success" disabled>
													<span class="spinner-grow spinner-grow-sm text-dark"></span>
													تایید
												</button>
											</div>
											<div class="position-relative">
												<input v-model="email_otp" maxlength="6" type="text" :class="['form-control', 'my-3', {'submited-inp' :submited_email}]" placeholder="کد تایید ایمیل" :disabled="submited_email">
												<button @click="confirmWithdraw('email')" v-if="!confirmLoading" class="inp-btn btn btn-sm btn-success" :disabled="email_otp.length != 6 || submited_email"> تایید </button>
												<button v-else class="inp-btn btn btn-sm btn-success" disabled>
													<span class="spinner-grow spinner-grow-sm text-dark"></span>
													تایید
												</button>
											</div>
										</div>
									</div>

									<div v-else-if="!selectedWallet">
										<p> کیف پول مورد نظر برای برداشت را انتخاب کنید: </p>
										<div dir="ltr">
											<button class="btn btn-primary w-100 d-block my-2 bold" v-for="wallet in walletsData" @click="selectedWallet = wallet">
												{{wallet.address}} - ({{wallet.network}})
											</button>

											<div class="d-flex mt-4">
												<button class="btn btn-success px-3 mx-auto" data-bs-dismiss="modal" @click="router.push('/wallets')"> 
													افزودن کیف پول
												</button>
											</div>
										</div>
									</div>

									<div v-else>
										<input v-model="amount" type="text" class="form-control w-50 mx-auto" placeholder="مقدار برداشت (USDT)">
										<div dir="ltr" class="mt-4 text-center">
											<span class="pointer text-secondary mx-auto" @click="selectedWallet = ''"> بازگشت </span>
										</div>
									</div>

									<div v-if="!in_otp" class="modal-footer pb-0 mt-3">
										<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
										<button v-if="!modalLoading" @click="createWithdraw" class="btn fw-bold bg-success text-light px-3" :disabled="!selectedWallet || !amount">
											ثبت
										</button>
										<button v-else class="btn fw-bold bg-success text-light px-2" disabled> 
											ثبت
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
import { Modal } from 'bootstrap';

export default{
	components: {
		SideBar,
	},
	setup(){
		let withdrawData = ref('')
		let walletsData = ref('')
		let depWithDataLoading = ref(false)
		let fullScreenLoading = ref(false)
		let modalLoading = ref(false)
		let confirmLoading = ref(false)
		let amount = ref('')
		let network = ref('')
		let selectedWallet = ref('')
		let phone_otp = ref('')
		let email_otp = ref('')
		let in_otp = ref(false)
		let submited_phone = ref(false)
		let submited_email = ref(false)
		let withdraw_id = ref()

		function getDepWithData(){
			depWithDataLoading.value = true
			axios
			.get('financial/transactionList')
			.then(response => {
				depWithDataLoading.value = false
				withdrawData.value = response.data.withdraw
			})
			.catch(error => {
				depWithDataLoading.value = false
			})
		}
		function createWithdraw(){
			modalLoading.value = true
			axios.post("financial/createWithdraw", {
				"wallet_id": selectedWallet.value.id, "amount": amount.value
			}).then((res)=>{
				modalLoading.value = false
				in_otp.value = true
				withdraw_id.value = res.data.withdraw_id
			}).catch(()=>{
				modalLoading.value = false
			})
		}


		function confirmWithdraw(otp_type){
			let data = otp_type == "email" ? {"withdraw_id": withdraw_id.value, "email_otp": email_otp.value} : {"withdraw_id": withdraw_id.value, "phone_otp": phone_otp.value}
			confirmLoading.value = true
			axios.post("financial/confirmWithdraw", data).then((res)=>{
				confirmLoading.value = false
				if(otp_type == 'email'){
					submited_email.value = true
				}else{
					submited_phone.value = true
				}
				if (res.status == 201){
					new Modal(document.getElementById("withdrawModal")).hide()
					getDepWithData()
				}
			}).catch(()=>{
				confirmLoading.value = false
			})
		}


		function openModal(){
			selectedWallet.value = ''
			fullScreenLoading.value = true
			axios
			.get('wallet/list')
			.then(response => {
				fullScreenLoading.value = false
				walletsData.value = response.data.data
				new Modal(document.getElementById("withdrawModal")).show()
			})
			.catch(error => {
				fullScreenLoading.value = false
				console.log(error.response)
			})
		}

		getDepWithData()

		return{
			withdrawData,
			depWithDataLoading,
			modalLoading,
			amount,
			network,
			createWithdraw,
			openModal,
			fullScreenLoading,
			walletsData,
			selectedWallet,
			router: useRouter(),
			in_otp,
			phone_otp,
			email_otp,
			submited_phone,
			submited_email,
			confirmLoading,
			confirmWithdraw

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

.inp-btn{
	position: absolute;
	top: 4px;
	left: 6px;
}

.submited-inp{
	border-color: seagreen;
	background-color: rgba(46, 139, 87, .15) !important;
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
		content:"آدرس ولت"
	}
	table tbody tr td:nth-child(4):before {
		content:"هش"
	}
	table tbody tr td:nth-child(5):before {
		content:"تمام شده"
	}
	table tbody tr td:nth-child(6):before {
		content:"تاریخ ساخت"
	}
	table tbody tr td:nth-child(7):before {
		content:"تاریخ اتمام"
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
