<template>
	<div class="single-ticket">
		<div v-if="fullScreenLoading" class="fullscreen-loading">Loading&#8230;</div>
		<SideBar />
		<div class="content">
			<div class="container top-container">

					<div class="row mt-5">
						<div class="col-lg-6 col-md-8 col-sm-10 col-11 mx-auto position-relative" id="chat-message">

							<div class="d-flex justify-content-between">
								<h3 class="bold">{{conversationData.subject}}</h3>
								<button @click="closeConversation()" type="button" class="btn btn-danger">بستن گفتگو</button>
							</div>

							<hr>

							<!-- loding -->
							<div v-if="getTicketLoading" class="spinner-grow text-dark d-block mx-auto" role="status"></div>
							<div v-for="mess in conversationData.messages">

								<p class="host-message rounded py-1 px-2">{{mess.text}}</p>
								<p v-for="ans in mess.answers" class="guest-message me-0 me-auto text-end rounded py-1 px-2 ">{{ans.text}}</p>

							</div>
							
							<form @submit.prevent="sendMessage()" id="input-message">
								<input v-model="inputText" type="text" class="form-control" placeholder="message">
							</form>

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
		const route = useRoute()
		const router = useRouter()

		let conversationData = ref('')
		let inputText = ref('')

		let getTicketLoading = ref(false)
		let fullScreenLoading = ref(false)

		function getTickets(){
			getTicketLoading.value = true
			axios
			.get(`support/detail/${route.params.id}`)
			.then(response => {
				getTicketLoading.value = false
				conversationData.value = response.data 
			})
			.catch(error => {
				getTicketLoading.value = true
			})
		}
		getTickets()

		function sendMessage(){
			fullScreenLoading.value = true
			axios
			.post('support/newTicket', {
				conversation_id: route.params.id,
				text: inputText.value 
			})
			.then(response => {
				fullScreenLoading.value = false
				getTickets()
			})
			.catch(error => {
				fullScreenLoading.value = false
			})
			inputText.value = ''
		}

		function closeConversation() {
			fullScreenLoading.value = true
			axios
			.post(`support/closeConversation/${route.params.id}`)
			.then(response => {
				fullScreenLoading.value = false
				router.push('/tickets')
			})
			.catch(error => {
				fullScreenLoading.value = false
			})
		}

		return {
			getTicketLoading,
			conversationData,
			inputText,
			fullScreenLoading,
			getTickets,
			sendMessage,
			closeConversation,
		}
	}
}
</script>

<style scoped>
a {
	text-decoration: none;
	color: black;
}

.host-message {
	background-color: rgb(205, 255, 255);
	width: 200px;
}

.guest-message {
	background-color: rgb(206, 206, 206);
	width: 200px;
}

.pointer-cursor{
	cursor: pointer;
}
#chat-message {
	display: block;
	overflow-y: auto;
	white-space: nowrap;
	height: 80vh;
}

#input-message {
	position: sticky;
	bottom: 0;
	left: 0;
	width: 100%;
}
</style>