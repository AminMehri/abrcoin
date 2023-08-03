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
					<button type="button" @click="showPassword()" class="btn text-white mt-0 mb-3 thin">دیدن رمزعبور</button>

					<router-link class="d-block" to="/register">حساب کاربری ندارید؟ ثبت نام کنید.</router-link>

					<button type="submit" class="btn btn-outline-success mt-2 mb-4">ورود</button>

				</form>

				<!-- forget pass -->
				<button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
					رمزعبورمو فراموش کردم!
				</button>

				<!-- Modal forget pass -->
				<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-modal"></button>
							</div>
							<div class="modal-body">
								<input v-model="email" class="w-100 form-control" type="text" placeholder="لطفا ایمیل خود را وارد کنید">
							</div>
							<div class="modal-footer">
								<button @click="doForgetPassword()" type="button" class="btn btn-outline-primary">تایید ایمیل</button>
							</div>
						</div>
					</div>
				</div>

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

		let email = ref('')

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
					router.push('/dashboard')
				})
				.catch(error => {
					fullScreenLoading.value = false
					phoneNumberE.value = true
					passwordE.value = true
				})

			}
		}   

		function doForgetPassword(){
			fullScreenLoading.value = true
			document.getElementById('close-modal').click()
			axios
			.post('account/forgetPassword', {
				email: email.value,
			})
			.then(response => {
				Swal.fire({
					icon: 'success',
					title: 'هورا!!!',
					text: 'ایمیل برای شما ارسال شد.',
				})
				fullScreenLoading.value = false
				email.value = ''
			})
			.catch(error => {
				fullScreenLoading.value = false
			})
		}

		function showPassword() {
            let x = document.querySelector("#passwordInput");
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        }

		return {
			phoneNumber,
			phoneNumberE,
			phoneNumberEM,
			password,
			passwordE,
			fullScreenLoading,
			email,
			doLogin,
			doForgetPassword,
			showPassword,
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