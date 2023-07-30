<template>
	<!-- The sidebar -->
	<div class="sidebar shadow-lg">
		<router-link class="hover-underline" to="/dashboard">داشبورد</router-link>
		<router-link class="hover-underline" to="/dashboard/profile">پروفایل</router-link>
		<router-link class="hover-underline" to="/">واریز</router-link>
		<router-link class="hover-underline" to="/">برداشت</router-link>
		<router-link class="hover-underline" to="/wallets">کیف پول ها</router-link>
		<router-link class="hover-underline" to="/trade-history">تاریخچه معاملات</router-link>
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

		function doLogout(){
      store.commit('logout')
      router.push('/')
    }

		return{
			doLogout,
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