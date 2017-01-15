/*
 *创建action集合 存放所有action 排除重复
 *@params   string
 *
 *
 *****/
export typeCollection = {}
export function makeType (typeString) {
	if (typeCollection[typeString]) {
		return typeCollection[typeString]
	} else {
		typeCollection[typeString] = typeString
		return typeCollection[typeString]
	}
}