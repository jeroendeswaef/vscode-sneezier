const antlr4 = require('antlr4');
const Lexer = require('./SvgPathLexer').SvgPathLexer;
const Parser = require('./SvgPathParser').SvgPathParser;
const Visitor = require('./SvgJsonOutputVisitor').SvgJsonOutputVisitor;
const Listener = require('./SvgJsonOutputListener').SvgJsonOutputListener;

test('Testing a oneline svg expression', () => {
    var input = "M 10 80 C 40 10 110 41 95 80\n"
	var chars = new antlr4.InputStream(input);
	var lexer = new Lexer(chars);
	var tokens  = new antlr4.CommonTokenStream(lexer);
	var parser = new Parser(tokens);
	parser.buildParseTrees = true;
	var tree = parser.svgPath();
	const visitor = new Visitor();
	tree.accept(visitor);
	expect(visitor.elements).toMatchSnapshot();
	//const listener = new Listener();
	//antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    //expect(1 + 2).toBe(3);
});