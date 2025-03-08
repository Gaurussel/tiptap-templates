import ContentEditor from "core/tiptap/components/ContentEditor";
import styled from "@emotion/styled";

const Welcome = ({ className }: { className?: string }) => {
	return (
		<div className={className}>
			<article>
				<ContentEditor />
			</article>
		</div>
	);
};

export default styled(Welcome)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
	align-items: center;

	article {
		background-color: white;
		border: 2px solid oklch(0.871 0.006 286.286);
		border-radius: 0.5rem;
		width: max(min(60%, 50rem), 30rem);
		flex: 1;
		margin: 0.92rem 0;
	}

	> article > div {
		height: 100%;
	}
`;
