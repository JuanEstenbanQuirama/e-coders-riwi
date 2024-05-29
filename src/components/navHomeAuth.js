const header = document.querySelector('header')

function addNavHome(){
    header.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary espaciado">
      <div class="container-fluid">
        <div class="d-flex gap-1">
          <div>
            <img src="../../public/img/ecoderslogo.png" style="width: 50px;" alt="logo">
          </div>
          <a class="navbar-brand" href="/">E-Coders</a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav navbar-nav-home d-flex justify-content-around">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Our Technology</a>
            </li>
          </ul>
          <ul class="navbar-nav navbar-nav-home-btn d-flex justify-content-center ms-auto gap-3">
            <li class="nav-item">
              <a href="./authRegisterContractor.html">
              <button class="btn button-register me-2">Sign In</button>
              </a>
            </li>
            <li class="nav-item">
              <a href="./authLoginUser.html">
              <button class="btn button-login">
                Log In
              </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `
}

addNavHome()

function addNavHomeAuth(){
  header.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary espaciado">
    <div class="container-fluid">
      <div>
        <i class="bi bi-rainbow"></i>
        <a class="navbar-brand" href="#">E-Coders</a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav navbar-nav-home d-flex justify-content-around">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">About us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Our Technology</a>
          </li>
        </ul>
        <ul class="navbar-nav navbar-nav-home-btn d-flex justify-content-end ms-auto">
          <li class="nav-item">
            <button class="btn button-register me-2"><a href="./authRegisterContractor.html">Sign In</a></button>
          </li>
          <li class="nav-item">
            <button class="btn button-login">
              <a href="./src/pages/authLoginUser.html">Log In</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  `
}

addNavHome()