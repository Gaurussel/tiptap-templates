// import { PluginKey, Plugin } from "@tiptap/pm/state";
// import { ReplaceAroundStep, ReplaceStep } from "@tiptap/pm/transform";
// import { getReadonlyInputType, InputName, type InputType } from "../../inputs/models/types";

// const inputController = () => {
// 	return new Plugin({
// 		key: new PluginKey("$inputController"),
// 		filterTransaction(transaction) {
// 			if (!transaction.docChanged) {
// 				return true;
// 			}

// 			const replaceSteps = transaction.steps.filter(
// 				(step) => step instanceof ReplaceStep || step instanceof ReplaceAroundStep,
// 			);

// 			if (replaceSteps.length === 0) {
// 				return true;
// 			}

// 			for (const step of replaceSteps) {
// 				const { from, to } = step;
// 				const clampedFrom = Math.min(Math.max(from, 0), transaction.doc.content.size);
// 				const $pos = transaction.doc.resolve(clampedFrom);

// 				const paragraphStart = $pos.start();
// 				const $posParagraphStart = transaction.doc.resolve(paragraphStart);
// 				const paragraph = $posParagraphStart.parent;

// 				if ($posParagraphStart.depth - 2 < 0) {
// 					continue;
// 				}

// 				const input = $posParagraphStart.node($posParagraphStart.depth - 1);
// 				const inputType = InputName[input.type.name as InputType];
// 				const isReadonly = getReadonlyInputType(inputType);

// 				if (isReadonly && paragraph === input.lastChild) {
// 					return false;
// 				}

// 				// console.log(transaction.doc.nodeAt($posParagraphStart.before($posParagraphStart.depth - 2)));
// 				// console.log(input);
// 			}

// 			return true;
// 		},
// 	});
// };

// export default inputController;
