<template>
	<div class="profile">
		<SideBar />
		<div class="content">
			<div class="container top-container">
				<h1>برداشت</h1>

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

				<button class="btn btn-warning w-25">درخواست برداشت از موجودی</button>

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
		let withdrawData = ref('')
		let depWithDataLoading = ref(false)

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
		getDepWithData()

		return{
			withdrawData,
			depWithDataLoading,
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
