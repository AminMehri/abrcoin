<template>
	<div class="register p-5">

		<div v-if="fullScreenLoading" class="fullscreen-loading">Loading&#8230;</div>

		<div class="container">
			<div class="register-title align-items-center">
				<img src="../assets/logo192.png" class="d-inline" width="30" alt="">
				<h4 class="d-inline mx-1 fw-bold">ابرکوین</h4>
			</div>

			<div class="border w-50 mx-auto p-4 mt-3 register-card">
				<h4 class="mb-4">ثبت نام</h4>
				<form @submit.prevent="doRegister()">

					<form @submit.prevent="sendOTP()">
						<div class="mb-3">
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

						<button v-if="!enterNumber" type="submit" class="btn btn-outline-success mt-2 mb-4">ارسال کد تایید</button>
					</form>

					<div v-if="enterNumber" class="mb-2">
						<label for="OTPInput" class="form-label">کد ارسالی</label>
						<input 
							v-model="OTP" 
							type="text" 
							class="form-control" 
							id="OTPInput" 
						>
					</div>

					<div v-if="enterNumber" class="mt-3 mb-2">
						<label for="passwordInput" class="form-label">رمزعبور</label>
						<input 
							v-model="password" 
							type="password" 
							class="form-control" 
							id="passwordInput" 
							:class="{'is-invalid':passwordE===true, 'is-valid':passwordE===false}"
						>
						<div class="invalid-feedback">
							{{ passwordEM }}
						</div>
					</div>

					<div v-if="enterNumber" class="mt-3 mb-2">
						<label for="passwordConfirmInput" class="form-label">تکرار رمزعبور</label>
						<input 
							v-model="passwordConfirm" 
							type="password" 
							class="form-control" 
							id="passwordConfirmInput" 
							:class="{'is-invalid':passwordConfirmE===true, 'is-valid':passwordConfirmE===false}"
						>
					</div>

					<router-link class="d-block" to="/login">قبلا ثبت نام کرده اید؟‌ورود</router-link>

					<button v-if="enterNumber" type="submit" class="btn btn-outline-success mt-2 mb-4">ثبت نام</button>

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
		let passwordConfirm = ref('')
		let passwordE = ref()
		let passwordConfirmE = ref('')
		let passwordEM = ref('')
		let OTP = ref('')
	
		let enterNumber = ref(false)


		let fullScreenLoading = ref(false)

		function sendOTP() {
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
				.post('account/getOTP', {
					phone_number: phoneNumber.value,
				})
				.then(response => {
					fullScreenLoading.value = false
					enterNumber.value = true
					document.getElementById('phoneNumberInput').disabled = true;
				})
				.catch(error => {
					fullScreenLoading.value = false
					phoneNumberE.value = true
					enterNumber.value = false
				})

			}
		}   

		function doRegister() {
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

			if(password.value.length < 8){
				passwordE.value = true
				access = false
				if(password.value.length == 0){
					passwordEM.value = 'رمزعبور اجباری است'
				} else {
					passwordEM.value = 'رمزعبور باید بیشتر از ۷ کاراکتر باشد'
				}
			} else {
				passwordE.value = false
				passwordEM.value = ''
			}

			if(password.value != passwordConfirm.value){
				access = false
				passwordE.value = true
				passwordConfirmE.value = true
				passwordEM.value = 'رمزعبور و تکرار آن با هم مطابقت ندارد'
			} else {
				if(!passwordE.value && passwordConfirmE.value) {
					access = true
				}
			}

			if(access) {
				fullScreenLoading.value = true
				axios
				.post('account/signup', {
					phone_number: phoneNumber.value,
					otp: OTP.value,
					password: password.value
				})
				.then(response => {
					fullScreenLoading.value = false
					Swal.fire({
						icon: 'success',
						text: 'شما با موفقیت ثبت نام کردید',
					})
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

		return {
			phoneNumber,
			phoneNumberE,
			phoneNumberEM,
			password,
			passwordE,
			passwordConfirm,
			passwordConfirmE,
			passwordEM,
			OTP,
			enterNumber,
			fullScreenLoading,
			doRegister,
			sendOTP,
		}
	}
}
</script>

<style scoped>
.register-title {
	text-align: center;
}
.register-card {
	background-color: rgb(22, 20, 46);
	color: aliceblue;
}

.container{
	margin-top: 3rem;
	margin-bottom: 3rem;
}
.register-title{
	font-size: 3rem;
	font-weight: 900;
	letter-spacing: 0.065em;

}
@media (max-width: 900px) {
	.register-card{
		width: 100% !important;
	}

}
</style>