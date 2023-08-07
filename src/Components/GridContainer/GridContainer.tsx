import { ReactNode, FC } from "react";
import "./Components.Style.GridContainer.scss";

interface IGridContainer {
	children: ReactNode;
}

const GridContainer: FC<IGridContainer> = ({ children }) => {
	return <div className="grid-container">{children}</div>;
};

export default GridContainer;
