import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FacebookIcon, InstagramIcon, LinkedinIcon, SocialMediaIcon, YoutubeIcon } from "../../assets/Icones";
import "./Components.SocialMenu.scss";

const SocialMenu = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div className="social-menu">
			<SocialMediaIcon onClick={toggleMenu} size={"5rem"} />
			<div className={`floating-menu ${showMenu ? "active" : ""}`}>
				<ul className="list-unstyled d-flex">
					<li className="mx-2">
						<a href="#">
							<FacebookIcon size={"1.5rem"} />
						</a>
					</li>
					<li className="mx-2">
						<a href="#">
							<InstagramIcon size={"1.5rem"} />
						</a>
					</li>
					<li className="mx-2">
						<a href="#">
							<LinkedinIcon size={"1.5rem"} />
						</a>
					</li>
					<li className="mx-2">
						<a href="#">
							<YoutubeIcon size={"1.5rem"} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SocialMenu;
