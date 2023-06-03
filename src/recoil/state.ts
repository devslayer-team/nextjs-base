import { atom, selector } from "recoil";

export const countState = atom({
	key: "Count",
	default: 0,
});

export const squareCountSelector = selector({
	key: "SquareCount",
	get: ({ get }) => {
		const count = get(countState);
		return count ** 2;
	},
});
