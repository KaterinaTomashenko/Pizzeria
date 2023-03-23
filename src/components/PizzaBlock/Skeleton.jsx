import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
	<ContentLoader
		speed={0}
		width={280}
		height={460}
		viewBox="0 0 280 460"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="0" y="290" rx="5" ry="5" width="280" height="85" />
		<circle cx="140" cy="110" r="110" />
		<rect x="0" y="240" rx="5" ry="5" width="280" height="25" />
		<rect x="0" y="390" rx="25" ry="25" width="90" height="45" />
		<rect x="125" y="390" rx="25" ry="25" width="150" height="45" />
	</ContentLoader>
);

export default Skeleton;
