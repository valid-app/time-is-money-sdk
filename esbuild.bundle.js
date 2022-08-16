const dependencies = require('./package.json').devDependencies || {};
const packageName = require('./package.json').name;

const Fs = require('fs');

async function readFile(fileName) {
    return new Promise((resolve, reject) => {
        Fs.readFile(fileName, 'utf8', function (err, data) {
            if (err)
                reject(err)
            else
                resolve(data)
        })
    })
}

let contractAbiPlugin = {
    name: 'contractAbi',
    setup(build) {
        build.onLoad({ filter: /\.json$/ }, async (args) => {
            let data = JSON.parse(await readFile(args.path))
            delete data.bytecode
            return {
                contents: JSON.stringify(data),
                loader: 'json',
            }
        })
    },
}


async function build() {
    let result = await require('esbuild').build({
        entryPoints: ['src/index.ts'],
        outdir: 'dist',
        bundle: true,
        minify: false,
        format: 'cjs',
        external: [...Object.keys(dependencies)],
        plugins: [contractAbiPlugin],
    }).catch(() => process.exit(1));
    let content = await readFile('dist/index.js');
    content = `define('${packageName}', (require, exports)=>{
${content}
})`;
    Fs.writeFileSync('dist/index.js', content);
};
build();