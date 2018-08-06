export default async function asyncIterableToArray ( asyncIterable ) {
	const array = [ ] ;
	for await (const item of asyncIterable) array.push(item) ;
	return array ;
}
