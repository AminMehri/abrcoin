<template>
	<div class="profile">
		<div v-if="fullScreenLoading" class="fullscreen-loading">Loading&#8230;</div>
		<SideBar />
		<div class="content">
			<div class="container top-container">
				<h2 class="bold">برداشت</h2>

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

				<button class="btn btn-warning w-25" @click="openModal"> درخواست برداشت از موجودی </button>

				<div class="modal fade" id="withdrawModal" tabindex="-1">
					<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="staticBackdropLabel">ثبت درخواست برداشت</h5>
								</div>
								<div class="modal-body">

									<div v-if="!selectedWallet">
										<p> کیف پول مورد نظر برای برداشت را انتخاب کنید: </p>
										<div dir="ltr">
											<div v-if="!walletsData[0]">
												<router-link class="btn btn-primary px-4" to="/wallets"> افزودن کیف پول </router-link>
											</div>
											<button class="btn btn-primary w-100 d-block my-2 bold" v-for="wallet in walletsData" @click="selectedWallet = wallet">
												{{wallet.address}} - ({{wallet.network}})
											</button>
										</div>
									</div>

									<div v-else>
										<input v-model="amount" type="text" class="form-control w-50 mx-auto" placeholder="مقدار برداشت (USDT)">
										<div dir="ltr" class="mt-4 text-center">
											<span class="pointer text-secondary mx-auto" @click="selectedWallet = ''"> بازگشت </span>
										</div>
									</div>

									<div class="modal-footer pb-0 mt-3">
										<button id="closeButton" type="button" class="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
										<button v-if="!modalLoading" @click="createWithdraw" class="btn fw-bold bg-success text-light px-3" :disabled="!selectedWallet && !amount">
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
		let amount = ref('')
		let network = ref('')
		let selectedWallet = ref('')
		

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
				console.log(error.response)
			})
		}
		function createWithdraw(){
			modalLoading.value = true
			axios.post("financial/createWithdraw", {
				"wallet_id": selectedWallet.value.id, "amount": amount.value
			}).then((res)=>{
				modalLoading.value = false
				alert(res.data.link)
				window.location.replace(res.data.link)
			}).catch(()=>{
				modalLoading.value = false
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
			selectedWallet
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
</style>
