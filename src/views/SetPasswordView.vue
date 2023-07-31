<template>
	<div class="set-pass p-5">

		<div v-if="fullScreenLoading" class="fullscreen-loading">Loading&#8230;</div>

		<div class="container">
			<div class="setpass-title align-items-center">
				<img src="../assets/logo192.png" class="d-inline" width="30" alt="">
				<h4 class="d-inline mx-1 fw-bold">ابرکوین</h4>
			</div>

			<div class="border w-50 mx-auto p-4 mt-3 setpass-card">
				<h4 class="mb-4">تغییر رمزعبور</h4>
				<form @submit.prevent="doSetPassword()">

					<div class="mt-3 mb-2">
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

					<div class="mt-3 mb-2">
						<label for="passwordConfirmInput" class="form-label">تکرار رمزعبور</label>
						<input 
							v-model="passwordConfirm" 
							type="password" 
							class="form-control" 
							id="passwordConfirmInput" 
							:class="{'is-invalid':passwordConfirmE===true, 'is-valid':passwordConfirmE===false}"
						>
					</div>
					<button type="submit" class="btn btn-outline-success mt-2 mb-4">تغییر رمزعبور</button>

				</form>

			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import Swal from 'sweetalert2'
import axios from 'axios'

export default {
	setup() {
		const store = useStore()
		const router = useRouter()
		const route = useRoute();

		let password = ref('')
		let passwordConfirm = ref('')
		let passwordE = ref()
		let passwordConfirmE = ref('')
		let passwordEM = ref('')

		let fullScreenLoading = ref(false)

		function doSetPassword() {
			let access = true

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
				.post('account/setPassword', {
					token: route.params.token,
					password: password.value
				})
				.then(response => {
					fullScreenLoading.value = false
					Swal.fire({
						icon: 'success',
						text: 'کلمه عبور با موفقیت تغییر یافت.',
					})
					router.push('/login')
				})
				.catch(error => {
					fullScreenLoading.value = false
					passwordE.value = true
				})	
			}
		}

		return {
			password,
			passwordE,
			passwordConfirm,
			passwordConfirmE,
			passwordEM,
			fullScreenLoading,
			doSetPassword,
		}
	}
}
</script>

<style scoped>
.setpass-title {
	text-align: center;
}
.setpass-card {
	background-color: rgb(22, 20, 46);
	color: aliceblue;
}

.container{
	margin-top: 3rem;
	margin-bottom: 3rem;
}
.setpass-title{
	font-size: 3rem;
	font-weight: 900;
	letter-spacing: 0.065em;

}
@media (max-width: 900px) {
	.setpass-card{
		width: 100% !important;
	}

}
</style>