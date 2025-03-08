import { InputType } from "../models/types";

const getInputName = (type: InputType) => {
	return `${type}Input`;
};

export default getInputName;
