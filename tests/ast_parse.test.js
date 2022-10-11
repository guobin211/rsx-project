import { ast_parse } from "../examples/ast_parse";
import { assert, test } from "vitest";

test("ast_parse", async () => {
  const code = "const a = 1;";
  const ast = await ast_parse(code);
  assert.equal(ast.type, "Script");
  assert.equal(ast.body.length, 1);
  assert.equal(ast.body[0].type, "VariableDeclaration");
});
