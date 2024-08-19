"use client";
import { slideIn } from "@/app/utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "./HigherOrderComponents";
import { EarthCanvas } from "./canvas";

const Contact = () => {
	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className="heroSubText"> Turabaev </p>
				<h3 className="heroHeadText"> Adam  </h3>
				
				{/* Replace the form with your picture */}
				<div className="mt-12 flex flex-col gap-8 items-center">
					<img
					
						src="/IMG_3403.JPG" 
						

						alt="Your Name"
						className="w-full h-auto rounded-xl object-cover"
					/>
				</div>


			</motion.div>
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
