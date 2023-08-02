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
						<li class="nav-item mx-2">
							<router-link class="nav-link active" to="/">صفحه اصلی</router-link>
						</li>
						<li class="nav-item mx-2">
							<router-link class="nav-link" to="/articles">آخرین مقالات</router-link>
						</li>
						<li class="nav-item mx-2">
							<router-link class="nav-link" to="/contact">تماس با ما</router-link>
						</li>
						<li class="nav-item mx-2">
							<router-link class="nav-link" to="/about">درباره ما</router-link>
						</li>
						<li class="nav-item mx-2">
							<router-link to="/dashboard" class="btn btn-outline-info btn-rounded mx-3 text-dark">پنل کاربری</router-link>
						</li>
					</ul>
				</div>

		</div>
	</nav>

</template>