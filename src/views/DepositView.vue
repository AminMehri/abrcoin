<template>
	<div class="profile">
		<SideBar />
		<div class="content">
			<div class="container top-container">
				<h1>واریز</h1>

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
				
				<button class="btn btn-info w-25">افزایش موجودی</button>

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
		let depWithDataLoading = ref(false)
		
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
      getDepWithData()

		return{
			depositData,
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