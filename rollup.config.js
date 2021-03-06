import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';

export default
{
    input: 'src/index.js',

    output:{
        format:"es",
        file : "./dist/bundle.esm.js",
    },
    plugins: [
        vue({ 
            useSpfxThemeLoading : true
        }),
        resolve({
            only : [
                "office-ui-fabric-vue", 
                "office-ui-fabric-js",
                "vuera",
                "office-ui-fabric-react"
            ]
        }),
        commonJS({}),
        buble()
    ],
};