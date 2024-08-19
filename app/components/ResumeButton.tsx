import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResumeButton = () => {
	return (
		<Link
			href="https://kr.linkedin.com/in/turabaev-azizbek-a5ab921a0"
			target="_blank"
		>
			<button
				type="button"
				className=" font-medium text-center px-3 py-3 flex gap-1 justify-center rounded-md transition ease-in-out delay-150 bg-[#915EFF] hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 duration-300"
				onClick={() =>
					alert(
						"Now you will see my LinkedIn profile. Please ask myself if you want to see the resume. Thanks for visit!!",
					)
				}
			>
				<Image
					src="/resume.svg"
					width={24}
					height={24}
					alt="resume"
					className="object-contain animate-pulse"
				/>
				<span className="lg:block hidden text-white">Download Resume</span>
			</button>
		</Link>
	);
};

export default ResumeButton;
