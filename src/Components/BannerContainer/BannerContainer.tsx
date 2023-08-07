import { ReactNode, FC } from "react";
import { useMediaQuery } from "../../Hooks/useMediaQuery";

interface IBannerContainer {
	children: ReactNode;
	bgImage: string;
}

const BannerContainer: FC<IBannerContainer> = ({ children, bgImage }) => {
	const isMedia600px = useMediaQuery("(max-width: 600px)");

	return (
		<div
			style={{
				backgroundImage: `url(${bgImage})`,
				width: "100%",
				height: isMedia600px ? "600px" : "973px",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: isMedia600px ? "-340px" : "center",
			}}
			className="banner-container"
		>
			{children}
		</div>
	);
};

export default BannerContainer;
