<template>

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
                router.push('/dashboard/profile')
            })
            .catch(error => {
                store.commit('logout')
                router.push('/profile')
            })
        }
        getData()


		return {
            getData

		}
    
	},

}

</script>