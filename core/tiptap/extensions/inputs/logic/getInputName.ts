import { InputType } from "../models/types";

const getInputName = (type: InputType, isBlock: boolean = false) => {
	return `${type}${isBlock ? "BlockInput" : "Input"}`;
};

export default getInputName;
