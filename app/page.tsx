import {
	Contact,
	Feedbacks,
	Navbar,
	Works,
	StarsCanvas,
} from "./components";

export default function Home() {
	return (
		<div className="relative z-0 bg-primary font-sans">
			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Navbar />
				
			</div>
			
			
			<div className="relative z-0">
				<Contact />
				<StarsCanvas />
			</div>

			<Feedbacks/>

			<Works/>
			

			
			
			
		</div>
	);
}
