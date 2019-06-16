const antlr4 = require('antlr4');
const Lexer = require('./parser/SvgPathLexer').SvgPathLexer;
const Parser = require('./parser/SvgPathParser').SvgPathParser;
const Visitor = require('./parser/SvgJsonOutputVisitor').SvgJsonOutputVisitor;
// const Listener = require('./SvgJsonOutputListener').SvgJsonOutputListener;

class DrawingBuilder {
    constructor(input) {
        this.input = input;
    }

    getDrawing() {
        return new Promise((resolve, reject) => {
            try {
                const chars = new antlr4.InputStream(this.input);
                const lexer = new Lexer(chars);
                const tokens  = new antlr4.CommonTokenStream(lexer);
                const parser = new Parser(tokens);
                //parser.buildParseTrees = true;
                const tree = parser.svgPath();
                const visitor = new Visitor();
                tree.accept(visitor);
                resolve(visitor.elements);
            } catch(err) {
                reject(err);
            }
        });
        //const listener = new Listener();
        //antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    }
}

module.exports = DrawingBuilder;
