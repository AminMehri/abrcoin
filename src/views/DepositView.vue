<template>
	<div class="profile">
		<SideBar />
		<div class="content">
			<div class="container top-container">
				<h2 class="bold">واریز</h2>

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
				
				<button class="btn btn-info px-5" data-bs-toggle="modal" data-bs-target="#newDepositModal"> افزایش موجودی </button>

	
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
</style>