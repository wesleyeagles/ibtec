import classNames from "classnames";
import { FC, HTMLAttributes } from "react";
import "./LoadingIcon.scss";

interface ILoadingIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number | string;
}

const LoadingIcon: FC<ILoadingIconProps> = ({ size, className, ...props }) => {
	if (size) {
		return (
			<div
				className={classNames("d-flex", className)}
				{...props}
				style={{
					...props.style,
					width: size,
					height: size,
				}}
			>
				<div className="loading spinner-icon" {...props}>
					<div className="effects effect-1" />
					<div className="effects effect-2" />
					<div className="effects effect-3" />
					<div className="effects effect-4" />
					<div className="effects effect-5" />
				</div>
			</div>
		);
	}

	return (
		<div className={classNames("loading spinner-icon", className)} {...props}>
			<div className="effects effect-1" />
			<div className="effects effect-2" />
			<div className="effects effect-3" />
			<div className="effects effect-4" />
			<div className="effects effect-5" />
		</div>
	);
};

export default LoadingIcon;
