<template>
  <div id="app">
    <div class="container">
      <div class="w-100 vh-100 d-flex align-items-center">
        <div
          class="d-lg-inline-flex justify-content-center text-center"
          style="width: 100%"
        >
          <div
            class="m-auto m-lg-0 me-lg-4 rounded-circle bg-secondary avatar text-center"
          >
            <img class="h-100" src="../../assets/img/avatar.png" alt="" />
          </div>
          <div class="d-block d-lg-flex align-items-center">
            <div class="ms-lg-3 me-lg-5 justify-content-center">
              <h1 class="mt-2">João Simões</h1>
              <h5 class="text-lg-end">Web Developer</h5>
            </div>
            <div>
              <ul class="p-0 ps-lg-3 mt-5 mt-lg-0 ms-lg-2 text-lg-start">
                <li class="hvr-forward hvr-underline-from-left">
                  <router-link to="/about">About</router-link>
                </li>
                <li class="hvr-forward hvr-underline-from-left">
                  <router-link to="/work">Work</router-link>
                </li>
                <li class="hvr-forward hvr-underline-from-left">
                  <router-link to="/contacts">Contacts</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  text-decoration: none !important;
  color: white !important;
}

h1 {
  font-weight: 600;
}

h1 {
  font-weight: 700;
}

h5 {
  font-weight: 100;
}

ul {
  list-style: none;
  border-left: 1px solid gray;
}

li {
  font-size: 34px;
  font-weight: 400;
}

.avatar {
  aspect-ratio: 1/1;
  max-width: 150px;
  width: 20%;
  min-width: 80px;
}

@media only screen and (max-width: 992px) {
  .avatar {
    width: 50%;
  }

  ul {
    list-style: none;
    border-left: 0px;
  }
}
</style>
