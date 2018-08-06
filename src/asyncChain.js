/**
 * Utility function to chain an async iterable of async iterables.
 */
export default async function* asyncChain ( iterables ) {
	for await ( const iterable of iterables ) {
		for await ( const item of iterable ) yield item ;
	}
}
