import { replaceable } from './valid-selector.js';

export default function mergeSelectors(fromSelectors, toSelectors) {
	return fromSelectors.reduce(
		(selectors, fromSelector) => selectors.concat(
			toSelectors.map(
				toSelector => toSelector.replace(replaceable, fromSelector)
			)
		),
		[]
	);
}
