if (process.env.NODE_ENV !== 'production') {
    var __svg__ = {
        path: './svg/*.svg',
        name: 'svgsprite.svg'
    };
} else {
    var __svg__ = {
        path: './svg/*.svg',
        name: 'svgsprite.[hash].svg'
    };
}

require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);
