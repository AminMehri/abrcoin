<template>
    <div v-if="fullScreenLoading" class="fullscreen-loading">Loading&#8230;</div>
</template>


<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    setup() {

        const store = useStore()
        const route = useRoute();
        const router = useRouter();

        let fullScreenLoading = ref(true)
        
        function getData(){
            axios
            .post('account/submitVerifyEmail', {
                slug: route.params.token
            })
            .then(response => {
                Swal.fire({
                    icon: 'success',
                    title: 'ایمیل شما با موفقیت تایید شد.',
                    text: '',
                    backdrop: false,
                    timer: 2000,
                    showConfirmButton: false,
                })
                fullScreenLoading.value = false
                router.push('/dashboard/profile')    
            })
            .catch(error => {
                fullScreenLoading.value = false
                router.push('/dashboard/profile')
            })
            
        }
        getData()


		return {
            getData,
            fullScreenLoading,
		}
    
	},

}

</script>