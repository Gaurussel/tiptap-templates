import styled from "@emotion/styled";

const Divider = ({ className, style }: { className?: string; style?: React.CSSProperties }) => {
	return <div className={className} style={style} />;
};

export default styled(Divider)`
	width: 100%;
	height: 2px;
	background-color: var(--border);
`;
