<template>
  <div class="container">
    <div class="d-flex w-50 m-auto">
      <div class="row">
        <div class="col-4">
          <div class="left">
            <div>
            <div class="rounded-circle bg-secondary avatar text-center">
              <img class="h-100" src="../../assets/img/avatar.png" alt="">
            </div>
          </div>
          <div class="mt-5">
            <ul class="me-4">
              <li>Home</li>
              <li class="active">About</li>
              <li>Work</li>
              <li>Contacts</li>
            </ul>
          </div>
          </div>
        </div>
        <div class="col-8">
          <h2>João Simões</h2>
          <h2>21 yo</h2>
          <h2>Portugal</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .left {
    border-right: 1px solid gray;
  }

  .avatar {
    width: 100%;
  }

  ul {
    border-left: none;
  }

  li {
    font-weight: 400;
    font-size: 24px;
  }
  
  .active {
    font-weight: 600;
    font-size: 36px;
  }
</style>