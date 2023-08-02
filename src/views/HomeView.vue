<template>
  <div class="home">
	  
	  <div class="header-section">
			<Navbar />
			<header class="container section">
				<div class="row align-items-center">
					<div class="col-md-6">
						<h1 class="header-h1 mb-5">صرافی و ربات آربیتراژ</h1>
						<p>با ابرکوین به راحتی و بدون ریسک درآمد داشته باشید</p>
						<router-link to="/register" class="btn btn-warning btn-rounded">ثبت نام</router-link>

					</div>
					<div class="col-md-6">
						<img src="../assets/finance.png" class="img-fluid" alt="">
					</div>
				</div>

			</header>
		</div>

		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#cae6fa" fill-opacity="1" d="M0,224L0,32L180,32L180,96L360,96L360,64L540,64L540,64L720,64L720,160L900,160L900,288L1080,288L1080,224L1260,224L1260,288L1440,288L1440,320L1260,320L1260,320L1080,320L1080,320L900,320L900,320L720,320L720,320L540,320L540,320L360,320L360,320L180,320L180,320L0,320L0,320Z"></path></svg>

		<div class="why-section">
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

		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#cae6fa" fill-opacity="1" d="M0,64L16,90.7C32,117,64,171,96,160C128,149,160,75,192,58.7C224,43,256,85,288,117.3C320,149,352,171,384,165.3C416,160,448,128,480,101.3C512,75,544,53,576,48C608,43,640,53,672,80C704,107,736,149,768,186.7C800,224,832,256,864,234.7C896,213,928,139,960,122.7C992,107,1024,149,1056,138.7C1088,128,1120,64,1152,80C1184,96,1216,192,1248,213.3C1280,235,1312,181,1344,133.3C1376,85,1408,43,1424,21.3L1440,0L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"></path></svg>

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
	background-color: #a4c7ff;
	padding: 35px;
}
</style>