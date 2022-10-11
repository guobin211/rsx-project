import { parse } from '@swc/core';

export async function ast_parse(code) {
  const ast = await parse(code, {
    syntax: 'ecmascript',
    comments: false,
    script: false,
    isModule: false,
  });

  console.log(JSON.stringify(ast, null, 2));

  return ast;
}
