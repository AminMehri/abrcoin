<template>
	<div class="login p-5">

		<div v-if="fullScreenLoading" class="fullscreen-loading">Loading&#8230;</div>

		<div class="container">
			<div class="login-title align-items-center">
				<img src="../assets/logo192.png" class="d-inline" width="30" alt="">
				<h4 class="d-inline mx-1 fw-bold">ابرکوین</h4>
			</div>

			<div class="border w-50 mx-auto p-4 mt-3 login-card">
				<h4 class="mb-4">ورود به حساب کاربری</h4>
				<form @submit.prevent="doLogin()">
					<div class="">
						<label for="phoneNumberInput" class="form-label">شماره تلفن</label>
						<input 
							v-model="phoneNumber" 
							type="text" 
							class="form-control" 
							id="phoneNumberInput" 
							placeholder="09123456789"
							:class="{'is-invalid':phoneNumberE===true, 'is-valid':phoneNumberE===false}"
						>
						<div class="invalid-feedback">
							{{ phoneNumberEM }}
						</div>
					</div>

					<div class="mt-3 mb-2">
						<label for="passwordInput" class="form-label">رمزعبور</label>
						<input 
							v-model="password" 
							type="password" 
							class="form-control" 
							id="passwordInput" 
							:class="{'is-invalid':passwordE===true, 'is-valid':passwordE===false}"
						>
					</div>

					<router-link class="d-block" to="/register">حساب کاربری ندارید؟ ثبت نام کنید.</router-link>

					<button type="submit" class="btn btn-outline-success mt-2 mb-4">ورود</button>

				</form>

			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import axios from 'axios'

export default {
	setup() {
		const store = useStore()
		const router = useRouter()

		let phoneNumber = ref('')
		let phoneNumberE = ref()
		let phoneNumberEM = ref('')
		let password = ref('')
		let passwordE = ref()

		let fullScreenLoading = ref(false)

		function doLogin() {
			let access = true
			if(phoneNumber.value.length != 11){
					phoneNumberE.value = true
					access = false
					phoneNumberEM.value = "لطفا شماره تلفن خود را به صورت صحیح وارد کنید."
			} else {
					phoneNumberE.value = false
					phoneNumberEM.value = ''
					access = true
			}

			if(access){
				fullScreenLoading.value = true
				axios
				.post('account/login', {
						username: phoneNumber.value,
						password: password.value,
				})
				.then(response => {
					fullScreenLoading.value = false
					store.commit('login', response.data.access)
					router.push('/')
				})
				.catch(error => {
					fullScreenLoading.value = false
					phoneNumberE.value = true
					passwordE.value = true
				})

			}
		}   

		return {
			phoneNumber,
			phoneNumberE,
			phoneNumberEM,
			password,
			passwordE,
			fullScreenLoading,
			doLogin
		}
	}
}
</script>

<style scoped>
.login-title {
	text-align: center;
}
.login {
	background-color: rgb(22, 20, 46);
	color: aliceblue;
}

.container{
	margin-top: 3rem;
	margin-bottom: 3rem;
}
.login-title{
	font-size: 3rem;
	font-weight: 900;
	letter-spacing: 0.065em;

}
@media (max-width: 900px) {
	.login-card{
		width: 100% !important;
	}

}
</style>