const antlr4 = require('antlr4');
const ExprLexer = require('./ExprLexer').ExprLexer;
const ExprParser = require('./ExprParser').ExprParser;

test('adds 1 + 2 to equal 3', () => {
    var input = "1+(2*4)\n"
	var chars = new antlr4.InputStream(input);
	var lexer = new ExprLexer(chars);
	var tokens  = new antlr4.CommonTokenStream(lexer);
	var parser = new ExprParser(tokens);
	parser.buildParseTrees = true;
	//var tree = parser.prog();
    expect(1 + 2).toBe(3);
});