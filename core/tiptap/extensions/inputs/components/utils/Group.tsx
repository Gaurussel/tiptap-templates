import styled from "@emotion/styled";

const Group = styled.div<{ inline?: boolean }>`
	width: -webkit-fill-available;
	${({ inline }) =>
		inline &&
		`		
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 0.5em;
		cursor: pointer;
	`}

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
