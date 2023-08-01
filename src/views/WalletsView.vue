<template>
  <div class="profile">
		<div v-if="fullScreenLoading" class="fullscreen-loading">Loading&#8230;</div>
		<SideBar/>
		<div class="content">
			<div class="container top-container">
				<h2 class="bold mt-5 mb-4">کیف پول ها</h2>

				<!-- loading -->
				<div v-if="walDataLoading" class="spinner-grow text-dark d-block mx-auto" role="status"></div>

				<table v-if="!walDataLoading" class="shadow">
					<thead>
						<tr>
							<th scope="col">آدرس</th>
							<th scope="col">نتورک</th>
							<th scope="col">زمان ساخت</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="wallet in walletsData">
							<td>{{wallet.address}}</td>
							<td>{{ wallet.network }}</td>
							<td>{{wallet.created_at}}</td>
							<td><button @click="deleteWallet(wallet.id)" class="btn btn-danger" title="حذف"><i class="fa fa-trash"></i> </button></td>
						</tr>
					</tbody>
				</table>

				<div class="d-flex">
					<button class="btn btn-info my-4 mx-auto" data-bs-toggle="modal" data-bs-target="#addWalletModal">اضافه کردن کیف</button>
				</div>

				<div class="modal fade" id="addWalletModal" tabindex="-1">
					<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="staticBackdropLabel">اضافه کردن کیف پول</h5>
								</div>
								<div v-if="!addWalletLoading" class="modal-body">

									<div class="row g-3">

										<div class="col-md-6">
											<label for="inputAddress" class="form-label">آدرس</label>
											<input v-model="addAddress" type="text" class="form-control" id="inputAddress" >
										</div>

										<div class="col-md-6">
											<label for="inputNetwork" class="form-label">نتورک</label>
											<input v-model="addNetwork" type="text" class="form-control" id="inputNetwork" >
										</div>
											
									</div>
									<div class="modal-footer">
										<button id="closeButton" type="button" class="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
										<button @click="addWallet()" class="btn fw-bold bg-success text-light">اضافه کردن</button>
									</div>
								</div>
								<div v-if="addWalletLoading" class="card modal-body" aria-hidden="true">
									<div class="card-body">
										<h5 class="card-title placeholder-glow">
											<span class="placeholder col-6"></span>
										</h5>
										<p class="card-text placeholder-glow">
											<span class="placeholder col-7"></span>
											<span class="placeholder col-4"></span>
											<span class="placeholder col-4"></span>
										</p>
										<a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
										<button id="closeButton" type="button" class="btn btn-secondary invisible" data-bs-dismiss="modal">بستن</button>
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

export default {
  components:{
	SideBar,
  },

	setup() {

		let walletsData = ref('')
		let addAddress = ref('')
		let addNetwork = ref('')

		let addWalletLoading = ref(false)
		let fullScreenLoading = ref(false)

		let walDataLoading = ref(false)

		function getWallets(){
			walDataLoading.value = true
			axios
			.get('wallet/list')
			.then(response => {
				walDataLoading.value = false
				walletsData.value = response.data.data
			})
			.catch(error => {
				walDataLoading.value = false
				console.log(error.response)
			})
		}
		getWallets()

		function addWallet(){
			addWalletLoading.value = true
			axios
			.post('wallet/add', {
				address: addAddress.value,
				network: addNetwork.value
			})
			.then(response => {
				addWalletLoading.value = false
				document.getElementById('closeButton').click()
				getWallets()
				Swal.fire({
						icon: 'success',
						title: 'کیف پول با موفقیت اضافه شد',
						showConfirmButton: false,
						backdrop: false,
						timer: 1500,
				});
				
			})
			.catch(error => {
				addWalletLoading.value = false
				console.log(error.response)
			})
		}

		function deleteWallet(walletId){
			fullScreenLoading.value = true
			axios
			.post('wallet/remove', {
				id: walletId,
			})
			.then(response => {
				fullScreenLoading.value = false
				Swal.fire({
						icon: 'success',
						title: 'کیف پول با موفقیت حذف شد',
						showConfirmButton: false,
						backdrop: false,
						timer: 1500,
				});
				getWallets()
			})
			.catch(error => {
				fullScreenLoading.value = false
				console.log(error.response)
			})
		}


		return {
			addWalletLoading,
			addAddress,
			addNetwork,
			fullScreenLoading,
			walletsData,
			walDataLoading,
			getWallets,
			addWallet,
			deleteWallet,
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
		content:"آدرس"
	}
	table tbody tr td:nth-child(2):before {
		content:"نتورک"
	}
	table tbody tr td:nth-child(3):before {
		content:"زمان ساخت"
	}
	table tbody tr td:nth-child(4):before {
		content:"حذف کردن"
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