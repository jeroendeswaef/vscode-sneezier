const antlr4 = require('antlr4');
const Lexer = require('./SvgPathLexer').SvgPathLexer;
const Parser = require('./SvgPathParser').SvgPathParser;
const Visitor = require('./SvgJsonOutputVisitor').SvgJsonOutputVisitor;
// const flatten = require('lodash.flatten');
// const Listener = require('./SvgJsonOutputListener').SvgJsonOutputListener;

const nearley = require("nearley");
const grammar = require("./parser.js");

function flatten(items) {
	const flat = [];
  
	items.forEach(item => {
	  if (Array.isArray(item)) {
		flat.push(...flatten(item));
	  } else {
		flat.push(item);
	  }
	});
  
	return flat;
  }


const getElements = (input) => {
	const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

	return flatten(
		parser.feed(input).results
		).filter(t => t)
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