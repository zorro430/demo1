<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {userInfoStore} from './stores/userInfo'
import { storeToRefs } from 'pinia';
const store=userInfoStore()
const {isLogin}=storeToRefs(store)
</script>

<template>
<header>
		<!--头部-->
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="/"><img src="./assets/img/logo.png" /></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
				aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
				<form class="form-inline ml-auto">
					<input class="form-control mr-sm-2" type="search" placeholder="按城市、地址、地标搜索">
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜索
					</button>
				</form>
				<ul class="navbar-nav ml-auto" id="unlogin" v-if="!(isLogin)">
					<li class="nav-item">
						<a class="nav-link" href="login.html">登录</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="register.html">注册</a>
					</li>
				</ul>

				<ul class="navbar-nav ml-auto" id="login" v-else>
					<li class="nav-item">
						<a class="nav-link" href="#">zhangsan</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#" id="logout">退出</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
	<section class="container py-3">
		<!--正文-->
		<div class="position-relative">
			<div class="jumbotron-fluid position-relative">
				<img src="./assets/img/banner.png" class="d-block w-100" alt="...">
				<img src="./assets/img/banner1.jpg" class="d-none w-100" alt="...">

			</div>
			<div class="trick">

			</div>
		</div>

		<h1>多地房源</h1>
		<div class="row" id="city_list">

		</div>
		<div class="row mt-4" id="house_list">


		</div>

	</section>
	<footer class="w-100 bg-dark text-light">
		<div class="text-center p-2 small">
			<a>服务条款</a><span>|</span>
			<a>隐私策略</a><span>|</span>
			<a>广告服务</a><span>|</span>
			<a>客服中心</a>
		</div>
		<div class="text-center p-2 small">
			民宿网
		</div>
	</footer>
</template>

<style scoped>
/* @import url(./assets/css/bootstrap.min.css); */
</style>
