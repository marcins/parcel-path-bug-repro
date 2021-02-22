import deep from './one/two/three/deep.js';

deep();

import('@foo/common').then(foo => {
    console.log('entry-b: ' + foo(1));
})
