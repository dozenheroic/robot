<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link :to="{name:'ГЛАВНАЯ'}">
          <img class="logo" src="./assets/build-a-bot-logo.png">
          ГЛАВНАЯ 
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/build">
          ПОСТРОЙ РОБОТА
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/qrcode">
          QRCode
          </router-link>
        </li>
      </ul>
    </nav>
  </header> 
  <main>
    <router-view/>
  </main>
</template>

<script setup>

</script>

<style>
body{
  background: linear-gradient(to bottom, #0e0e0e, #222121);
  background-attachment: fixed;
}
#app{
  font-family: Avenir, Arial, Helvetica, sans-serif;
}
main{
  margin: 0 auto;
  margin-top: 50px;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
header{
  background-color: #999;
  width: 1024px;
  margin: 0 auto;
  position: absolute;
}
ul{
  padding: 3px;
  display: flex;
}
.nav-item{
  display: inline-block;
  padding: 5px 10px;
  font-size: 20px;
  border-right: 1px solid #bbb;
}
.logo{
  vertical-align: middle;
  height: 30px;
}
.nav{
  text-decoration:  none;
  color: inherit
}
.router-link-actine{
  color: whitesmoke;
}
</style>
