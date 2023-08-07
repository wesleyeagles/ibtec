import isEqual from "lodash/isEqual";
import cloneDeep from "lodash/cloneDeep";

export function removeEqualObject<T>(obj: T, obj2: any): Partial<T> {
	const newObj: any = cloneDeep(obj);

	for (const key in obj) {
		const value = obj[key];
		const value2 = obj2[key];

		if (value === null || value === undefined) {
			if (value2 === null || value2 === undefined) {
				delete newObj[key];
			}
		} else if (value instanceof Date) {
			if (value2 instanceof Date) {
				if (value.getTime() === value2.getTime()) {
					delete newObj[key];
				}
			}
		} else if (Array.isArray(value)) {
			if (Array.isArray(value2)) {
				const indexes: number[] = [];

				value.forEach((item: any, index: number) => {
					const idx = value2.findIndex((item2: any) => isEqual(item2, item));

					if (idx !== -1) {
						indexes.push(index);
					}
				});

				if (indexes.length === value.length) {
					delete newObj[key];
				} else {
					newObj[key] = value.filter((item: any, index: number) => !indexes.includes(index));
				}
			}
		} else if (typeof value === "object") {
			newObj[key] = removeEqualObject(value, value2);
		} else if (value === value2) {
			delete newObj[key];
		}
	}

	return newObj;
}
