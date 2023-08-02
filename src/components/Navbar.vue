<template>
	<nav class="navbar navbar-expand-lg my-lg-3">
		<div class="container-fluid">
				<router-link class="navbar-brand" to="/">
					<img src="../assets/logo192.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
					صرافی و ربات آربیتاژ
				</router-link>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item mx-2 text-white">
							<router-link class="nav-link text-white" to="/">صفحه اصلی</router-link>
						</li>
						<li class="nav-item mx-2">
							<router-link class="nav-link text-white" to="/articles">آخرین مقالات</router-link>
						</li>
						<li class="nav-item mx-2">
							<router-link class="nav-link text-white" to="/contact">تماس با ما</router-link>
						</li>
						<li class="nav-item mx-2">
							<router-link class="nav-link text-white" to="/about">درباره ما</router-link>
						</li>
					</ul>
					
				</div>
			<router-link to="/dashboard" class="btn btn-primary btn-rounded">ورود به پنل کاربری</router-link>
		</div>
	</nav>

</template>