import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";

const Icon = ({ icon, className, style }: { icon: IconProp; className?: string; style?: React.CSSProperties }) => {
	return (
		<div className={className} style={style}>
			<FontAwesomeIcon icon={icon} />
		</div>
	);
};

export default styled(Icon)`
	width: 1.25em;
	text-align: center;
	vertical-align: middle;
	display: inline-block;
	line-height: 1px;
`;
