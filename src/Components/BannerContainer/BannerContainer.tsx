import { ReactNode, FC } from "react";

interface IBannerContainer {
	children: ReactNode;
	bgImage: string;
}

const BannerContainer: FC<IBannerContainer> = ({ children, bgImage }) => {
	return (
		<div
			style={{
				backgroundImage: `url(${bgImage})`,
				width: "100%",
				height: "973px",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
			className="banner-container"
		>
			{children}
		</div>
	);
};

export default BannerContainer;
