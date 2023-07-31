<template>
	<!-- The sidebar -->
	<div class="sidebar shadow-lg">
		<router-link class="hover-underline" to="/dashboard">داشبورد</router-link>
		<router-link class="hover-underline" to="/dashboard/profile">پروفایل</router-link>
		<router-link class="hover-underline" to="/wallets">کیف پول ها</router-link>

    <a @click="collapseOpen = !collapseOpen" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
      مالی
      <svg v-if="!collapseOpen" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short text-white" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
      </svg>

      <svg v-if="collapseOpen" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
      </svg>
    </a>
    
    <div class="collapse" id="collapseExample">
      <router-link class="hover-underline me-md-4" to="/deposit">واریزها</router-link>
		  <router-link class="hover-underline me-md-4" to="/withdraw">برداشت ها</router-link>
    </div>

		<div class="dropdown hover-underline" id="username-dropdown">
			<a class="dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
				امین مهری
			</a>
			<ul class="dropdown-menu bg-dark">
				<li><a @click="doLogout()" href="#" class="dropdown-item">خروج</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import { ref } from "vue";
import Swal from 'sweetalert2'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

export default {
	setup() {
		const store = useStore()
    const router = useRouter()

    let collapseOpen = ref(false)

		function doLogout(){
      store.commit('logout')
      router.push('/')
    }

		return{
			doLogout,
      collapseOpen
		}

	}
}
</script>

<style>
 .sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #000000;
  position: fixed;
  height: 100%;
  overflow: auprofileto;
}


.hover-underline {
  display: inline-block;
  position: relative;
  color: #0087ca;
}
.hover-underline:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.sidebar a {
  display: block;
  color: rgb(255, 255, 255);
  padding: 8px 16px;
}
#username-dropdown{
	display: block;
}
.sidebar a.router-link-exact-active {
  color: cyan;
}

.content {
  margin-right: 200px;
  padding: 1px 16px;
  height: 1000px;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    /* position: relative; */
		z-index: 5;
  }
  .sidebar a {float: right;}
  .content {margin-right: 0;}
	.top-container{margin-top: 4rem;}
}

@media screen and (max-width: 674px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
  .sidebar {
    position:static;
  }
	/* .top-container{margin-top: 16rem;} */
} 

</style>