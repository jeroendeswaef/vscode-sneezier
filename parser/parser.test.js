const antlr4 = require('antlr4');
const Lexer = require('./SvgPathLexer').SvgPathLexer;
const Parser = require('./SvgPathParser').SvgPathParser;
const Visitor = require('./SvgJsonOutputVisitor').SvgJsonOutputVisitor;
// const Listener = require('./SvgJsonOutputListener').SvgJsonOutputListener;

const getElements = (input) => {
	const chars = new antlr4.InputStream(input);
	const lexer = new Lexer(chars);
	const tokens  = new antlr4.CommonTokenStream(lexer);
	const parser = new Parser(tokens);
	//parser.buildParseTrees = true;
	const tree = parser.svgPath();
	const visitor = new Visitor();
	tree.accept(visitor);
	return visitor.elements;
	//const listener = new Listener();
	//antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
}

describe('Testing svg expressions', () => {
	test('Testing a one-line svg expression', () => {
		const input = "M 10 80 C 40 10 110 41 95 80";
		expect(getElements(input)).toMatchSnapshot();
	});
	test('Testing a multi-line svg expression', () => {
		const input = "M 10 80 C 40 10 110 41 95 80\nM 90 100";
		expect(getElements(input)).toMatchSnapshot();
	});
});