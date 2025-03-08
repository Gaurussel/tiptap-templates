import { useEditor, EditorContent, type JSONContent } from "@tiptap/react";
import getExtensions from "../logic/getExtensions";

const ContentEditor = ({ content }: { content?: JSONContent }) => {
	const editor = useEditor(
		{
			extensions: getExtensions(),
			content,
		},
		[content],
	);

	return <EditorContent editor={editor} />;
};

export default ContentEditor;
