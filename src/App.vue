<template>
  <router-view/>
</template>

<script>
import { useStore } from 'vuex'
import { onMounted } from "vue";

export default {
	setup() {
		const store = useStore()

		onMounted(() => {
			store.dispatch('onStart')
    })

    },
}

</script>

<style>
@font-face {
  font-family: 'Vazir';
  src: url('@/assets/fonts/Vazir.woff2') format('woff2'),
  url('@/assets/fonts/Vazir.woff') format('woff'),
  url('@/assets/fonts/Vazir.ttf') format('truetype');
}
@font-face {
  font-family: 'Vazir-Bold';
  src: url('@/assets/fonts/Vazir-Bold.woff2') format('woff2'),
  url('@/assets/fonts/Vazir-Bold.woff') format('woff'),
  url('@/assets/fonts/Vazir-Bold.ttf') format('truetype');
}
@font-face {
  font-family: 'Vazir-Thin';
  src: url('@/assets/fonts/Vazir-Thin.woff2') format('woff2'),
  url('@/assets/fonts/Vazir-Thin.woff') format('woff'),
  url('@/assets/fonts/Vazir-Thin.ttf') format('truetype');
}
@font-face {
  font-family: 'Vazir-Light';
  src: url('@/assets/fonts/Vazir-Light.woff2') format('woff2'),
  url('@/assets/fonts/Vazir-Light.woff') format('woff'),
  url('@/assets/fonts/Vazir-Light.ttf') format('truetype');
}

#app {
  font-family: Vazir;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.swal2-popup{
	font-family: Vazir !important;
	direction: rtl;
	font-size: .8rem !important;
}

.swal2-title{
	font-family: Vazir-Bold !important;
}

.bold{
  font-family: Vazir-Bold !important;
}
.thin{
  font-family: Vazir-Thin !important;
}
.light{
  font-family: Vazir-Light !important;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

a {
	text-decoration: none !important;
}

.pointer{
  cursor: pointer;
}



/* fullscreen loading */
/* Absolute Center Spinner */
.fullscreen-loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Transparent Overlay */
.fullscreen-loading:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
    background: radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8));

  background: -webkit-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0,.8));
}

/* :not(:required) hides these rules from IE9 and below */
.fullscreen-loading:not(:required) {
  /* hide "loading..." text */
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.fullscreen-loading:not(:required):after {
  content: '';
  display: block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  -webkit-animation: spinner 150ms infinite linear;
  -moz-animation: spinner 150ms infinite linear;
  -ms-animation: spinner 150ms infinite linear;
  -o-animation: spinner 150ms infinite linear;
  animation: spinner 150ms infinite linear;
  border-radius: 0.5em;
  -webkit-box-shadow: rgba(255,255,255, 0.75) 1.5em 0 0 0, rgba(255,255,255, 0.75) 1.1em 1.1em 0 0, rgba(255,255,255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255,255,255, 0.75) 0 -1.5em 0 0, rgba(255,255,255, 0.75) 1.1em -1.1em 0 0;
box-shadow: rgba(255,255,255, 0.75) 1.5em 0 0 0, rgba(255,255,255, 0.75) 1.1em 1.1em 0 0, rgba(255,255,255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255,255,255, 0.75) 0 -1.5em 0 0, rgba(255,255,255, 0.75) 1.1em -1.1em 0 0;
}

/* Animation */

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}


table {
	border-spacing:1;
	border-collapse:collapse;
	background:#fff;
	border-radius:10px;
	overflow:hidden;
	width:100%;
	margin:0 auto;
	position:relative;
  direction: ltr;
}

table * {
 	position:relative
}

table td,
table th {
 	padding-left:8px
}

table thead tr {
	height:60px;
	background:#E3EBF8
}

table tbody tr {
 	height:50px
}

table tbody tr:last-child {
 	border:0
}

table td,
table th {
 	text-align:center
}

table td.l,
table th.l {
 	text-align:center
}

table td.c,
table th.c {
 	text-align:center
}

table td.r,
table th.r {
 	text-align:center
}

.table100-head th {
	font-family:OpenSans-Regular;
	font-size:18px;
	color:#fff;
	line-height:1.2;
	font-weight:unset
}

tbody tr:nth-child(even) {
 	background-color:#f5f5f5
}

tbody tr {
	font-size:15px;
	color:gray;
	line-height:1.2;
	font-weight:unset
}

tbody tr:hover {
	color:#555;
	background-color:#f5f5f5;
}

.column1 {
	width:260px;
	padding-left:40px
}

.column2 {
 	width:160px
}

.column3 {
 	width:245px
}

.column4 {
	width:110px;
	text-align:right
}

.column5 {
	width:170px;
	text-align:right
}

.column6 {
	width:222px;
	text-align:right;
	padding-right:62px
}


</style>
