<template>
  <div class="trade-history">
		<SideBar />
		<div class="content">
			<div class="container top-container">
				<h1>تاریخچه تریدها</h1>

				<!-- loading -->
				<div v-if="tradeDataLoading" class="spinner-grow text-dark d-block mx-auto" role="status"></div>

				<table v-if="!tradeDataLoading" class="table table-dark table-hover">
					<thead>
						<tr>
							<th scope="col">نماد</th>
							<th scope="col">مقدار</th>
							<th scope="col">سود</th>
							<th scope="col">درصد سود</th>
							<th scope="col">آیدی درخواست</th>
							<th scope="col">زمان ساخت</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="trade in tradeHistoryData">
							<th scope="row">{{trade.symbol}}</th>
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

		let tradeHistoryData = ref('')
		let tradeDataLoading = ref(false)

		function getTradeHistory(){
			tradeDataLoading.value = true
			axios
			.get('trade/history')
			.then(response => {
				tradeDataLoading.value = false
				tradeHistoryData.value = response.data.data
			})
			.catch(error => {
				tradeDataLoading.value = false
				console.log(error.response)
			})
		}
		getTradeHistory()

		return {
			tradeHistoryData,
			tradeDataLoading,
			getTradeHistory,
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