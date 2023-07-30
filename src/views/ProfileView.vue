<template>
  <div class="profile">
		<SideBar />
		<div class="content">
			<div class="container top-container">
				<h1>پروفایل</h1>
				<div v-if="verified" class="col-md-6 border p-4 mt-4 shadow">

					<label for="inputIdNumber" class="form-label my-2">کدملی</label>
					<input type="text" class="form-control" id="inputIdNumber" disabled :value="`${profileData.id_number}`">

					<label for="inputFirstName" class="form-label my-2">نام</label>
					<input type="text" class="form-control" disabled :value="`${profileData.name}`" id="inputFirstName" >

					<label for="inputLastName" class="form-label my-2">نام خانوادگی</label>
					<input type="text" class="form-control" disabled :value="`${profileData.last_name}`" id="inputLastName" >

					<label for="inputPhoneNumber" class="form-label my-2">شماره تلفن</label>
					<input type="text" class="form-control" disabled :value="`${profileData.phone_number}`" id="inputPhoneNumber" >

					<label for="inputEmail" class="form-label my-2">ایمیل</label>
					<input type="text" class="form-control" disabled :value="`${profileData.email}`" id="inputEmail" >

					<label for="inputEmailVerified" class="form-label my-2">وضعیت احراز ایمیل</label>
					<input type="text" class="form-control" disabled :value="`${profileData.email_verified}`" id="inputEmailVerified" >

					<label for="inputAuthVerified" class="form-label my-2">وضعیت احراز هویت</label>
					<input type="text" class="form-control" disabled :value="`${profileData.authentication_status}`" id="inputAuthVerified" >

				</div>

				<div v-if="!verified" class="card col-md-6 border p-4 mt-4 shadow" aria-hidden="true">
					<div class="card-body">
						<h5 class="card-title placeholder-glow">
							<span class="placeholder col-6"></span>
						</h5>
						<p class="card-text placeholder-glow">
							<span class="placeholder col-7"></span>
							<span class="placeholder col-4"></span>
							<span class="placeholder col-4"></span>
							<span class="placeholder col-6"></span>
							<span class="placeholder col-8"></span>
						</p>
						<a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
					</div>
					<button class="btn fw-bold btn-outline-warning my-2 w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">احراز هویت</button>

				</div>

			</div>

			<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="staticBackdropLabel">ویرایش اطلاعات</h5>
							</div>
							<div v-if="!updateInfoLoading" class="modal-body">


								<div class="row g-3">

									<div class="col-md-6">
										<label for="confFirstName" class="form-label">نام</label>
										<input v-model="updateFirstName" type="text" class="form-control" id="confFirstName" >
									</div>

										<div class="col-md-6">
												<label for="confLastName" class="form-label">نام خانوادگی</label>
												<input v-model="updateLastName" type="text" class="form-control" id="confLastName" >
										</div>

										<div class="col-md-6">
												<label for="confIdNumber" class="form-label">کدملی</label>
												<input v-model="updateIdNumber" type="text" class="form-control" id="confIdNumber">
										</div>

										<div class="col-md-6">
												<label for="confEmail" class="form-label">ایمیل</label>
												<input v-model="updateEmail" type="text" class="form-control" id="confEmail">
										</div>

										<div class="">
												<div class="input-group mb-3 align-items-center">
														<label for="inputThumbnail" class="form-label ms-3">عکس کارت ملی:</label>
														<input type="file" class="form-control" id="inputThumbnail">
												</div>
										</div>
										
								</div>
								<div class="modal-footer">
										<button id="closeButton" type="button" class="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
										<button @click="updateInfo()" class="btn fw-bold bg-success">ویرایش</button>
								</div>
							</div>
							<div v-if="updateInfoLoading" class="card modal-body" aria-hidden="true">
								<div class="card-body">
									<h5 class="card-title placeholder-glow">
										<span class="placeholder col-6"></span>
									</h5>
									<p class="card-text placeholder-glow">
										<span class="placeholder col-7"></span>
										<span class="placeholder col-4"></span>
										<span class="placeholder col-4"></span>
										<span class="placeholder col-6"></span>
										<span class="placeholder col-8"></span>
									</p>
									<a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
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

export default {
  components:{
	SideBar,
  },
	setup() {
	const store = useStore()
	const router = useRouter()

	let verified = ref(false)

	let profileData = ref('')

	let idNumber = ref('')
	let firstName = ref('')
	let lastName = ref('')
	let email = ref('')

	let updateFirstName = ref('')
	let updateLastName = ref('')
	let updateIdNumber = ref('')
	let updateEmail = ref('')
	
	let updateInfoLoading = ref(false)

	function getProfileInfo(){
		verified.value = false
		axios
		.get('account/profile')
		.then(response => {
			verified.value = true
			profileData.value = response.data.data 
			console.log(profileData.value);
		})
		.catch(error => {
			verified.value = false
			console.log(error.response);
		})
	}
	getProfileInfo()

	
	// update profile information
	function updateInfo(){
		updateInfoLoading.value = true
		let formData = new FormData()
		let thumbnailPic = document.getElementById('inputThumbnail')

		formData.append('first_name', updateFirstName.value)
		formData.append('last_name', updateLastName.value)
		formData.append('id_number', updateIdNumber.value)
		formData.append('email', updateEmail.value)
		if(thumbnailPic.files[0]){
				formData.append('id_card_photo', thumbnailPic.files[0])
		}

		axios
		.post('account/authentication', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
		.then(response => {
			updateInfoLoading.value = false
			Swal.fire({
					icon: 'success',
					title: 'اطلاعات شما با موفقیت تغییر یافت.',
					showConfirmButton: false,
					backdrop: false,
					timer: 1500,
			});
			document.getElementById('closeButton').click()
			getProfileInfo()
		})
		.catch(error => {
			updateInfoLoading.value = false
			console.log(error.response)
		})

	}



	return{
		verified,
		profileData,
		idNumber,
		firstName,
		lastName,
		email,
		updateFirstName,
		updateLastName,
		updateIdNumber,
		updateEmail,
		updateInfoLoading,
		updateInfo,
	}
	
  }
}
</script>
