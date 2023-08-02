<template>
  <div class="home">
	  
	  <div class="header-section">
			<Navbar />
			<iframe id="crypto-price" scrolling="no" allowtransparency="true" style="user-select: none; margin-bottom: 7rem; box-sizing: border-box; display: block; height: 46px; width: 100%;" src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#{%22symbols%22:[{%22description%22:%22%22,%22proName%22:%22BINANCE:BTCUSDT%22},{%22description%22:%22%22,%22proName%22:%22BINANCE:ETHUSDT%22},{%22description%22:%22%22,%22proName%22:%22COINBASE:USDTUSD%22},{%22description%22:%22%22,%22proName%22:%22BINANCE:BNBUSDT%22},{%22description%22:%22%22,%22proName%22:%22BINANCE:XRPUSDT%22},{%22description%22:%22%22,%22proName%22:%22BINANCE:DOGEUSDT%22},{%22description%22:%22%22,%22proName%22:%22BINANCE:ADAUSDT%22},{%22description%22:%22%22,%22proName%22:%22BINANCE:SOLUSDT%22},{%22description%22:%22%22,%22proName%22:%22BINANCE:TRXUSDT%22},{%22description%22:%22%22,%22proName%22:%22BINANCE:LTCUSDT%22}],%22showSymbolLogo%22:true,%22colorTheme%22:%22light%22,%22isTransparent%22:false,%22displayMode%22:%22adaptive%22,%22width%22:%22100%25%22,%22height%22:46}" frameborder="0"></iframe>
			<header class="container section">
				<div class="row align-items-center g-0">
					<div class="col-md-5">
						<h1 class="header-h1 mb-5 bold">صرافی و ربات آربیتراژ</h1>
						<p>با ابرکوین به راحتی و بدون ریسک درآمد داشته باشید</p>
						<router-link to="/register" class="btn btn-warning btn-rounded mb-4">ثبت نام</router-link>

					</div>
					<div class="col-md-7">
						<img src="../assets/bit1.png" class="img-fluid header-image" alt="">
					</div>
				</div>

			</header>
		</div>
		
		<div class="why-section">
			<svg width="25%" id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(205.253, 253.315, 255, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(214.365, 224.621, 230.714, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M18.4,-16.6C24.6,-6.9,30.8,0.8,29.6,7.1C28.4,13.4,19.9,18.4,11.2,22.2C2.5,26,-6.2,28.6,-11.1,25.4C-16,22.1,-17,13.1,-18.4,4.8C-19.8,-3.5,-21.7,-11.2,-18.7,-20.1C-15.7,-29.1,-7.9,-39.3,-0.9,-38.6C6.1,-37.9,12.2,-26.3,18.4,-16.6Z" width="100%" height="100%" transform="translate(50 50)" style="transition: all 0.3s ease 0s;" stroke-width="0"></path>              </svg>
			<svg width="25%" id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(0, 218.499, 226.161, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(172.263, 207.503, 228.437, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M24.9,-32C30,-25.4,30.3,-15.4,32.4,-5.4C34.6,4.6,38.6,14.6,35,19.7C31.5,24.8,20.3,24.9,10.8,27.4C1.2,30,-6.6,34.9,-13.8,34C-20.9,33.1,-27.4,26.3,-30.3,18.7C-33.2,11.2,-32.6,2.8,-30.3,-4.5C-28.1,-11.8,-24.2,-18,-18.8,-24.5C-13.5,-31.1,-6.8,-38,1.6,-39.9C9.9,-41.8,19.8,-38.6,24.9,-32Z" width="100" height="100" transform="translate(50 50)" style="transition: all 0.3s ease 0s;" stroke-width="0"></path>              </svg>
			<svg width="25%" id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(0, 218.499, 226.161, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(172.263, 207.503, 228.437, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M18.4,-16.6C24.6,-6.9,30.8,0.8,29.6,7.1C28.4,13.4,19.9,18.4,11.2,22.2C2.5,26,-6.2,28.6,-11.1,25.4C-16,22.1,-17,13.1,-18.4,4.8C-19.8,-3.5,-21.7,-11.2,-18.7,-20.1C-15.7,-29.1,-7.9,-39.3,-0.9,-38.6C6.1,-37.9,12.2,-26.3,18.4,-16.6Z" width="100%" height="100%" transform="translate(50 50)" style="transition: all 0.3s ease 0s;" stroke-width="0"></path>              </svg>
			<svg width="25%" id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(205.253, 253.315, 255, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(214.365, 224.621, 230.714, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M18.6,-32.9C24,-29.2,28,-23.8,32.1,-18.1C36.2,-12.3,40.5,-6.2,41.2,0.4C41.9,7,39.1,14,34.2,18.4C29.3,22.8,22.3,24.6,16.3,26C10.2,27.4,5.1,28.3,0.7,27.2C-3.8,26,-7.5,22.8,-14.3,21.8C-21,20.8,-30.7,22.1,-34,18.8C-37.3,15.5,-34.3,7.8,-34.3,0C-34.3,-7.7,-37.2,-15.4,-35.3,-21.1C-33.3,-26.8,-26.5,-30.5,-19.8,-33.4C-13.1,-36.3,-6.6,-38.5,0,-38.5C6.6,-38.6,13.3,-36.6,18.6,-32.9Z" width="100%" height="100%" transform="translate(50 50)" style="transition: all 0.3s ease 0s;" stroke-width="0"></path>              </svg>
			<div class="container">
				<h1 class="why-abrcoin-title mb-5">چرا ابرکوین را انتخاب کنیم؟</h1>
				<div class="row text-center">
					<div class="col-lg-3 col-md-4 col-sm-6 col-8 mx-sm-0 mx-auto">

						<div class="shadow-lg p-lg-4 p-md-3 p-sm-2 p-1">
							<img src="../assets/simple.png" class="card-img-top w-75 " alt="...">
							<div class="card-body">
							<h5 class="card-title my-3">ساده و کاربردی</h5>
							<hr class="w-50 mx-auto">
							<p class="card-text">محیط ساده و کاربردی اَبرکوین، معاملات آربیتراژ را برای شما آسان خواهد کرد.</p>
							</div>
						</div>

					</div>
					<div class="col-lg-3 col-md-4 col-sm-6 col-8 mx-sm-0 mx-auto">

						<div class="shadow-lg p-lg-4 p-md-3 p-sm-2 p-1">
							<img src="../assets/safety.png" class="card-img-top w-75 " alt="...">
							<div class="card-body">
							<h5 class="card-title my-3">امنیت</h5>
							<hr class="w-50 mx-auto">
							<p>اولویت اَبرکوین امنیت است.با خیالی آسوده معاملات خود را انجام دهید.</p>
							</div>
						</div>

					</div>
					<div class="col-lg-3 col-md-4 col-sm-6 col-8 mx-sm-0 mx-auto">

						<div class="shadow-lg p-lg-4 p-md-3 p-sm-2 p-1">
							<img src="../assets/variety.png" class="card-img-top w-75 " alt="...">
							<div class="card-body">
							<h5 class="card-title my-3">تنوع در خدمات</h5>
							<hr class="w-50 mx-auto">
							<p class="card-text">تنوع در صرافی‌ها، اَبرکوین را جزو بهترین ربات‌های معاملاتی قرار داده است.</p>
							</div>
						</div>

					</div>
					<div class="col-lg-3 col-md-4 col-sm-6 col-8 mx-sm-0 mx-auto">

						<div class="shadow-lg p-lg-4 p-md-3 p-sm-2 p-1">
							<img src="../assets/comision.png" class="card-img-top w-75 " alt="...">
							<div class="card-body">
							<h5 class="card-title my-3">کارمزد رقابتی</h5>
							<hr class="w-50 mx-auto">
							<p class="card-text">کارمزد خرید و فروش در اَبرکوین بسیار کم است.</p>
							</div>
						</div>

					</div>

				</div>
			</div>
		</div>

		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#cae6fa" fill-opacity="1" d="M0,96L80,85.3C160,75,320,53,480,85.3C640,117,800,203,960,224C1120,245,1280,203,1360,181.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>

		<div class="container section">
			<h1 class="why-abrcoin-title mb-5" id="faq">سوالات متداول</h1>
			<div class="accordion" id="accordionExample">

				<div class="accordion-item border-0 mb-3">
					<h2 class="accordion-header">
						<button class="accordion-button collapsed question" type="button" data-bs-toggle="collapse" data-bs-target="#collapseone">
							چطور شروع کنم
						</button>
					</h2>
					<div id="collapseone" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div class="accordion-body">
							کار با ابرکوین بسیار ساده است. پس از ثبت نام و احراز هویت می‌توانید یک حساب کاربری برای خود ایجاد نمایید و مبلغ یا رمزارز مورد نظر خود را به کیف پول شخصیتان واریز نموده و اقدام به خرید و فروش به صورت آنلاین نمایند.
						</div>
					</div>
				</div>

				<div class="accordion-item border-0 mb-3">
					<h2 class="accordion-header">
						<button class="accordion-button collapsed question" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwo">
							صرافی و ربات آربیتراژ «ابرکوین» چیست؟
						</button>
					</h2>
					<div id="collapsetwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div class="accordion-body">
							صرافی و ربات آربیتراژ «ابرکوین» دو بخش مجزا را برای کاربران درنظر گرفته است. در بخش اول؛ اگر قصد خرید یا فروش ارزهای دیجیتال را دارید، ابرکوین به شما کمک می‌کند در سریع‌ترین زمان این کار را انجام دهید.در بخش دوم؛ ربات آربیتراژ «ابرکوین» با استفاده از کادر مجرب و حرفه‌ای در زمینه رمز ارزها و حوزه بلاکچین توانسته با ایجاد دسترسی به تعداد زیادی از صرافی‌های معتبر جهانی به کاریران، این امکان را فراهم نماید تا آنها بتوانند با انتخاب صرافی‌های دلخواه خود، به‌صورت کاملا اتوماتیک اقدام به سودآوری برای خود نمایند.
						</div>
					</div>
				</div>
				
				<div class="accordion-item border-0 mb-3">
					<h2 class="accordion-header">
						<button class="accordion-button collapsed question" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethree">
							برای احراز هویت در ابرکوین، چه اطلاعاتی لازم است؟
						</button>
					</h2>
					<div id="collapsethree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div class="accordion-body">
							شروع ثبت‌نام با استفاده از شماره تلفن همراه امکان پذیر خواهد بود. در ادامه با توجه به سطح کاربری مورد نیاز، کاربر باید اقدام به تکمیل اطلاعات پروفایل خود نماید. در سطح یک، کاربر ملزم به ارائه شماره تلفن همراه، اسکن رنگی کارت ملی، پاسپورت یا شناسنامه جدید، شماره کارت بانکی، حساب و شبا به نام خود کاربر می باشد. همچنین برای ارتقا به سطح دو کاربری، آدرس و تلفن ثابت به همراه قبض حاوی آدرس، تصویر سلفی طبق الگوی سایت و شماره همراه به نام خود کاربر مورد نیاز است.
						</div>
					</div>
				</div>
				
				<div class="accordion-item border-0 mb-3">
					<h2 class="accordion-header">
						<button class="accordion-button collapsed question" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour">
							هزینه استفاده از ربات آربیتراژ ابرکوین، چه میزان است؟
						</button>
					</h2>
					<div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div class="accordion-body">
							ربات معاله‌گر آربیتراژ ابرکوین به‌صورت رایگان در اختیار کاربران قرار می‌گیرد و هزینه‌ای بابت استفاده از آن از کاربر دریافت نمی‌شود و صرفاً بابت هر معامله و سود حاصل از آن، درصدی به عنوان کمیسیون (کارمزد) کسر می‌گردد.
						</div>
					</div>
				</div>

				<div class="accordion-item border-0 mb-3">
					<h2 class="accordion-header">
						<button class="accordion-button collapsed question" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive">
							چگونه در ابرکوین، خرید و فروش ارز دیجیتال را انجام دهم؟
						</button>
					</h2>
					<div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div class="accordion-body">
							پس از افتتاح حساب، احراز هویت و تأیید حساب در صرافی ابرکوین، کاربران محترم می‌توانند نسبت به خرید و فروش رمزارزهای موردنظر خود اقدام نمایند.
						</div>
					</div>
				</div>

				<div class="accordion-item border-0 mb-3">
					<h2 class="accordion-header">
						<button class="accordion-button collapsed question" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix">
							در حال حاضر، بخش صرافی ابرکوین چه میزان کمیسیون معامله دریافت می‌کند؟
						</button>
					</h2>
					<div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div class="accordion-body">
							در حال حاضر کارمزد خرید و فروش رمزارزها در ابرکوین به میزان ۰.۲ درصد انجام می‌شود. به دلیل عدم وجود قانون در زمینه تبادل ارزهای دیجیتال در ایران، در حال حاضر هیچ‌گونه هزینه اضافی اعم از مالیات و … متوجه کاربران محترم نخواهد بود.
						</div>
					</div>
				</div>

			</div>

		</div>

		<div class="container section">
			<h1 class="why-abrcoin-title mb-5" id="news">آخرین اخبار و مقالات</h1>
			<div class="row g-5">
				
				<div class="col-lg-4 col-md-6 col-sm-9 col-10 mx-sm-0 mx-auto">
					<router-link to="/article/death-of-yazdgerd" class="card">
						<img src="https://picsum.photos/200/100" class="card-img-top">
						<div class="card-body">
							<p class="card-text news-title">کیف پول سخت افزاری چیست؟ چطور کیف پول سخت افزاری درست کنیم؟</p>
						</div>
						<div class="card-footer">
							<small class="text-body-secondary">ابرکوین | ۵ تیر ۱۴۰۲</small>
						</div>
					</router-link>
				</div>

				<div class="col-lg-4 col-md-6 col-sm-9 col-10 mx-sm-0 mx-auto">
					<router-link to="/article/death-of-yazdgerd" class="card">
						<img src="https://picsum.photos/200/100" class="card-img-top">
						<div class="card-body">
							<p class="card-text news-title">پرونده شکایت مالباختگان دوج کوین از ایلان ماسک مختومه میشود.</p>
						</div>
						<div class="card-footer">
							<small class="text-body-secondary">ابرکوین | ۵ تیر ۱۴۰۲</small>
						</div>
					</router-link>
				</div>

				<div class="col-lg-4 col-md-6 col-sm-9 col-10 mx-sm-0 mx-auto">
					<router-link to="/article/death-of-yazdgerd" class="card">
						<img src="https://picsum.photos/200/100" class="card-img-top">
						<div class="card-body">
							<p class="card-text news-title">خرید و نگهداری تتر</p>
						</div>
						<div class="card-footer">
							<small class="text-body-secondary">ابرکوین | ۵ تیر ۱۴۰۲</small>
						</div>
					</router-link>
				</div>

			</div>
		</div>

		<Footer />
  </div>
	
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'HomeView',
	components: {
		Navbar,
		Footer
	},

	setup() {
		
		return {
			
		}
	}

}
</script>

<style scoped>
.home{
	overflow-x: hidden;
}
.header-h1{
	font-weight: 700;
	line-height: 1.25;
}
.section{
	margin-bottom: 12rem;
}
.why-abrcoin-title{
	color: rgb(36, 62, 99);
	text-align: center;
	font-size: 3rem;
	font-weight: 900;
	letter-spacing: 0.065em;

}
.card-title {
	color: rgb(36, 62, 99);
	font-weight: 950;
}
.questions-box {
	cursor: pointer;
	background-color: rgba(162, 213, 255, 0.5);
}
.question{
	font-weight: 800;
	font-size: 1.2rem;
}
.accordion-button{
	background-color: rgb(227, 235, 248) !important;
}
.accordion-item {
	background-color: rgb(227, 239, 248) !important;
}
.news-title {
	font-weight: 800;
	font-size: 1.2rem;
}

body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.why-section {
	background-color: #cae6fa;
	padding: 20px;
}

.header-section {
	/* background-color: #14152f; */
	background-color: #2176c1;
	padding: 35px;
	color: #cae6fa;
}

@media screen and (max-width: 830px) {
	#crypto-price {
		height: 100px !important;
	}
}

#crypto-price {
	z-index: 100;
}

@media screen and (min-width: 830px){
	.header-image {
		transform: scale(1.5);
	}

}
@media screen and (max-width: 1410px){
	.header-image {
		transform: scale(1.2);
	}
}
</style>