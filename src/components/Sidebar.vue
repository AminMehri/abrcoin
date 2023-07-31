<template>
  <!-- The sidebar -->
  <div class="sidebar">
    <router-link class="bg-hover bold" to="/" style="font-size: larger;"> 
      <img src="../assets/logo192.png" class="d-inline" width="30" alt="">
      ابرکوین 
    </router-link>
    <br>
    <router-link class="bg-hover" to="/dashboard">
      <i class="fa fa-dashboard"></i> 
      داشبورد
    </router-link>
    
    <router-link class="bg-hover" to="/dashboard/profile">
      <i class="fa fa-user"></i>
      پروفایل
    </router-link>

    <a @click="collapseOpen = !collapseOpen" data-bs-toggle="collapse" href="#collapseExample" class="bg-hover">
      <i class="fa fa-coin"></i>
      مالی
      <i :class="{'fa-rotate-180': collapseOpen, 'fa fa-angle-down': true}"></i>
    </a>
    
    <div class="collapse" id="collapseExample" style="background-color: rgb(115,115,115);">
      <router-link class="bg-hover me-md-4" to="/deposit">
        <i class="fa fa-sign-in"></i>
        واریزها
      </router-link>
		  <router-link class="bg-hover me-md-4" to="/withdraw">
        <i class="fa fa-sign-out"></i>
        برداشت ها
      </router-link>
    </div>
    
    <router-link class="bg-hover" to="/wallets">
      <i class="fa fa-wallet"></i>
      کیف پول ها
    </router-link>
    <router-link class="bg-hover" to="/tickets">
      <i class="fa fa-headset"></i>
      تیکت ها
    </router-link>
    <button class="btn btn-sm btn-danger px-3" @click="doLogout" style="margin-right: 42px; margin-top: 30px;">
      خروج
    </button>
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
  padding: 10px 40px 0px 0px;
  width: 240px;
  background-color: #494949;
  position: fixed;
  height: 100%;
  overflow: auto;
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
  padding: 9.5px 16px;
}
#username-dropdown{
  display: block;
}
.sidebar a.router-link-exact-active {
  color: #1095c1;
}

.bg-hover{
  background: linear-gradient(#1095c1 0 0) var(--p, 0) / var(--p, 0) no-repeat;
  transition: .45s, background-position 0s;
}
.bg-hover:hover:not(.router-link-active) {
  --p: 100%;
  color: #fff;
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