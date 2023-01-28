import { Link} from 'react-router-dom'
const Footer=()=>{
    return(
        <div>

<footer class="footer-distributed">

			<div class="footer-left">

				<h3><img src='/logo.png'alt="fresh market" width="150" height="150"></img></h3>

				<p class="footer-links">
					<a>Home</a>
					
					<a>Profile</a>
				
					<a>Product</a>
				
					<a>My Commandes</a>
					
				</p>

				<p class="footer-company-name">Asma Meguidich © 2023</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p>Cité Militaire El Aouina</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+216 24.827.590</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="https://mail.google.com/mail/u/0/#inbox">ameguidicch@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the Market</span>
					If you don’t have a website yet, you can try our sales optimized website solution to get more clients to see your mouthwatering products.
                        Just click on “Get Started” below
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
        </div>
    )
}
export default Footer