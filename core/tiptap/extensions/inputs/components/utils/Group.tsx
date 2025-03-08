import styled from "@emotion/styled";

const Group = styled.div`
	width: -webkit-fill-available;

	> div > div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 0.5em;
		cursor: pointer;
	}
`;

export default Group;
