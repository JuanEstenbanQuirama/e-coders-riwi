const footer = document.querySelector('footer')

function addFooter() {
    footer.innerHTML = `
    <section class="footer-section">
          <article class="footer-items">
            <div>
              <div class="d-flex gap-3 icon-footer">
                <div>
                  <img src="./public/img/ecoderslogo.png" style="width: 50px;" alt="logo">
                </div>
                <h5>E-Coders</h4>
              </div>
              <p>Together we transform technological <br> industry! </p>
            </div>
            <div>
              <h5>Links</h5>
              <ul class="navbar-nav nav-footer">
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
            </div>
            <div>
              <h5>Contact Us</h5>
              <p>Cl. 16 #55-129, Guayabal, Medellín, <br> Guayabal, Medellín, Antioquia </p>
            </div>
          </article>
          <div class="d-flex justify-content-end gap-4 redes">
            <div class="circle-redes">
              <i class="bi bi-facebook"><a href="https://www.facebook.com/profile.php?id=100091533055794"></a>
              </i>
            </div>
            <div class="circle-redes">
              <i class="bi bi-instagram"><a href="https://www.instagram.com/riwi.io/?hl=es-la"></a></i>
            </div>
            <div class="circle-redes">
              <i class="bi bi-twitter-x"><a href="https://x.com/"></a>
              </i>
            </div>
            <div class="circle-redes">
              <i class="bi bi-linkedin"><a href="https://www.linkedin.com/company/riwi-io/posts/?feedView=all"></a></i>
            </div>
          </div>
          <div style="text-align: center;">
            <hr>
            <small>© 2024 Copyright by Riwi Developers Team Bravo. All rights reserved.</small>
          </div>
        </section>
        
    `
}

addFooter()