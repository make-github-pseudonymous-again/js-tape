import * as babelLoader from '@node-loader/babel';
import * as importMapLoader from '@node-loader/import-maps';

export default {
	loaders: [importMapLoader, babelLoader],
};
