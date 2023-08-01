<template>
  <div class="profile">
		<SideBar />
		<div class="content">
			<div class="container top-container">
				<h2 class="bold mt-5 mb-4">تیکت ها</h2>

				<!-- loding -->
				<div v-if="ConversationListLoading" class="spinner-grow text-dark d-block mx-auto" role="status"></div>

				<table v-if="!ConversationListLoading" class="shadow">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">موضوع</th>
							<th scope="col">دیده شده</th>
							<th scope="col">تاریخ آخرین تغییر</th>
							<th scope="col">وضعیت</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="conv,index in ConversationListData">
							<th scope="row">{{index}}</th>
							<td>{{conv.subject}}</td>
							<td>
								<i v-if="conv.is_seen" class="fa fa-circle-check text-success"></i>
								<i v-else class="fa fa-times-circle text-danger"></i>
							</td>
							<td>{{conv.last_change}}</td>
							<td>{{conv.status}}</td>
							<td><router-link :to="`/ticket/${conv.id}`" class="btn btn-outline-primary">دیدن جزییات</router-link> </td>
						</tr>

					</tbody>
				</table>

				<div class="d-flex">
					<button class="btn btn-info my-4 mx-auto px-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">ایجاد تیکت</button>
				</div>

				<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
					<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="staticBackdropLabel">ایجاد تیکت</h5>
								</div>
								<div v-if="!createTicketLoading" class="modal-body">


									<div class="row g-3">

										<div class="col-md-12">
											<label for="inputSubject" class="form-label">موضوع</label>
											<input v-model="createSubject" type="text" class="form-control" id="inputSubject" >
										</div>

											<div class="col-md-12">
													<label for="inputText" class="form-label">متن تیکت</label>
													<textarea v-model="createText" type="text" class="form-control" id="inputText"></textarea>
											</div>
											
									</div>
									<div class="modal-footer">
											<button id="closeButton" type="button" class="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
											<button @click="createTicket()" class="btn fw-bold bg-success">ایجاد تیکت</button>
									</div>
								</div>
								<div v-if="createTicketLoading" class="card modal-body" aria-hidden="true">
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

export default{
	components: {
		SideBar,
	},
	setup(){
		let ConversationListData = ref('')
		let ConversationListLoading = ref(false)

		let createText = ref('')
		let createSubject = ref('')
		
		let createTicketLoading = ref(false)
		
		function getConversationList(){
        ConversationListLoading.value = true
        axios
        .get('support/conversationList')
        .then(response => {
          ConversationListLoading.value = false
          ConversationListData.value = response.data.data
        })
        .catch(error => {
          ConversationListLoading.value = false
          console.log(error.response)
        })
      }
      getConversationList()

			function createTicket(){
				createTicketLoading.value = true
				axios
				.post('support/newConversation', {
					subject: createSubject.value,
					text: createText.value
				})
				.then(response => {
					createTicketLoading.value = false
					document.getElementById('closeButton').click()
					getConversationList()
					Swal.fire({
							icon: 'success',
							title: 'تیکت جدید با موفقیت ایجاد شد',
							showConfirmButton: false,
							backdrop: false,
							timer: 1500,
					});
					
				})
				.catch(error => {
					createTicketLoading.value = false
					console.log(error.response)
				})
			}


		return{
			createSubject,
			createText,
			ConversationListData,
			ConversationListLoading,
			createTicketLoading,
			getConversationList,
			createTicket,

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