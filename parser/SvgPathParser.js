// Generated from parser/SvgPath.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SvgPathListener = require('./SvgPathListener').SvgPathListener;
var grammarFileName = "SvgPath.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003*\u01bf\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0003\u0002\u0003\u0002\u0003\u0003\u0007\u0003^\n\u0003",
    "\f\u0003\u000e\u0003a\u000b\u0003\u0003\u0003\u0005\u0003d\n\u0003\u0003",
    "\u0003\u0007\u0003g\n\u0003\f\u0003\u000e\u0003j\u000b\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004o\n\u0004\f\u0004\u000e\u0004r\u000b",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004v\n\u0004\u0003\u0005\u0003",
    "\u0005\u0007\u0005z\n\u0005\f\u0005\u000e\u0005}\u000b\u0005\u0003\u0005",
    "\u0005\u0005\u0080\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007",
    "\u0006\u0085\n\u0006\f\u0006\u000e\u0006\u0088\u000b\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006\u008c\n\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007\u0097\n\u0007\u0003\b\u0003\b\u0007\b\u009b\n\b\f",
    "\b\u000e\b\u009e\u000b\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0005",
    "\t\u00a5\n\t\u0003\t\u0003\t\u0005\t\u00a9\n\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0007\u000b\u00af\n\u000b\f\u000b\u000e\u000b\u00b2",
    "\u000b\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0005\f",
    "\u00b9\n\f\u0003\f\u0003\f\u0005\f\u00bd\n\f\u0003\r\u0003\r\u0007\r",
    "\u00c1\n\r\f\r\u000e\r\u00c4\u000b\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0005\u000e\u00cb\n\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u00cf\n\u000e\u0003\u000f\u0003\u000f\u0007\u000f\u00d3",
    "\n\u000f\f\u000f\u000e\u000f\u00d6\u000b\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00dd\n\u0010\u0003",
    "\u0010\u0003\u0010\u0005\u0010\u00e1\n\u0010\u0003\u0011\u0003\u0011",
    "\u0007\u0011\u00e5\n\u0011\f\u0011\u000e\u0011\u00e8\u000b\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00ef",
    "\n\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00f3\n\u0012\u0003\u0013",
    "\u0003\u0013\u0005\u0013\u00f7\n\u0013\u0003\u0013\u0003\u0013\u0005",
    "\u0013\u00fb\n\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0007\u0014\u0101\n\u0014\f\u0014\u000e\u0014\u0104\u000b\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u010b",
    "\n\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u010f\n\u0015\u0003\u0016",
    "\u0003\u0016\u0005\u0016\u0113\n\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0017\u0003\u0017\u0007\u0017\u0119\n\u0017\f\u0017\u000e\u0017\u011c",
    "\u000b\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0005\u0018\u0123\n\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0127",
    "\n\u0018\u0003\u0019\u0003\u0019\u0005\u0019\u012b\n\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0003\u001a\u0007\u001a\u0131\n\u001a\f\u001a",
    "\u000e\u001a\u0134\u000b\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0005\u001b\u013b\n\u001b\u0003\u001b\u0003\u001b",
    "\u0005\u001b\u013f\n\u001b\u0003\u001c\u0003\u001c\u0007\u001c\u0143",
    "\n\u001c\f\u001c\u000e\u001c\u0146\u000b\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u014d\n\u001d\u0003",
    "\u001d\u0003\u001d\u0005\u001d\u0151\n\u001d\u0003\u001e\u0003\u001e",
    "\u0005\u001e\u0155\n\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u0159",
    "\n\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0005\u001e",
    "\u015f\n\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u0163\n\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0005\u001f\u0169\n\u001f",
    "\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0005!\u0171\n",
    "!\u0003\"\u0005\"\u0174\n\"\u0003\"\u0003\"\u0005\"\u0178\n\"\u0003",
    "\"\u0005\"\u017b\n\"\u0003#\u0003#\u0003$\u0006$\u0180\n$\r$\u000e$",
    "\u0181\u0003$\u0005$\u0185\n$\u0003$\u0007$\u0188\n$\f$\u000e$\u018b",
    "\u000b$\u0003$\u0003$\u0007$\u018f\n$\f$\u000e$\u0192\u000b$\u0005$",
    "\u0194\n$\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0005\'\u019c",
    "\n\'\u0003\'\u0003\'\u0003\'\u0005\'\u01a1\n\'\u0003(\u0005(\u01a4\n",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0005(\u01ab\n(\u0003)\u0003)\u0005",
    ")\u01af\n)\u0003)\u0003)\u0003*\u0003*\u0003+\u0003+\u0003+\u0003+\u0005",
    "+\u01b9\n+\u0003,\u0003,\u0003-\u0003-\u0003-\u0002\u0002.\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468:<>@BDFHJLNPRTVX\u0002\u0011\u0003\u0002\u0003\u0004\u0003",
    "\u0002\u0005\u0006\u0003\u0002\u0007\b\u0003\u0002\t\n\u0003\u0002\u000b",
    "\f\u0003\u0002\r\u000e\u0003\u0002\u000f\u0010\u0003\u0002\u0011\u0012",
    "\u0003\u0002\u0013\u0014\u0003\u0002\u0015\u0016\u0003\u0002\u0017\u0018",
    "\u0003\u0002\u001b\u001c\u0003\u0002\u001d\u001e\u0004\u0002\u0017\u0018",
    "\u001f&\u0003\u0002\'*\u0002\u01d6\u0002Z\u0003\u0002\u0002\u0002\u0004",
    "_\u0003\u0002\u0002\u0002\u0006u\u0003\u0002\u0002\u0002\bw\u0003\u0002",
    "\u0002\u0002\n\u008b\u0003\u0002\u0002\u0002\f\u0096\u0003\u0002\u0002",
    "\u0002\u000e\u0098\u0003\u0002\u0002\u0002\u0010\u00a8\u0003\u0002\u0002",
    "\u0002\u0012\u00aa\u0003\u0002\u0002\u0002\u0014\u00ac\u0003\u0002\u0002",
    "\u0002\u0016\u00bc\u0003\u0002\u0002\u0002\u0018\u00be\u0003\u0002\u0002",
    "\u0002\u001a\u00ce\u0003\u0002\u0002\u0002\u001c\u00d0\u0003\u0002\u0002",
    "\u0002\u001e\u00e0\u0003\u0002\u0002\u0002 \u00e2\u0003\u0002\u0002",
    "\u0002\"\u00f2\u0003\u0002\u0002\u0002$\u00f4\u0003\u0002\u0002\u0002",
    "&\u00fe\u0003\u0002\u0002\u0002(\u010e\u0003\u0002\u0002\u0002*\u0110",
    "\u0003\u0002\u0002\u0002,\u0116\u0003\u0002\u0002\u0002.\u0126\u0003",
    "\u0002\u0002\u00020\u0128\u0003\u0002\u0002\u00022\u012e\u0003\u0002",
    "\u0002\u00024\u013e\u0003\u0002\u0002\u00026\u0140\u0003\u0002\u0002",
    "\u00028\u0150\u0003\u0002\u0002\u0002:\u0152\u0003\u0002\u0002\u0002",
    "<\u0166\u0003\u0002\u0002\u0002>\u016c\u0003\u0002\u0002\u0002@\u0170",
    "\u0003\u0002\u0002\u0002B\u017a\u0003\u0002\u0002\u0002D\u017c\u0003",
    "\u0002\u0002\u0002F\u0193\u0003\u0002\u0002\u0002H\u0195\u0003\u0002",
    "\u0002\u0002J\u0197\u0003\u0002\u0002\u0002L\u01a0\u0003\u0002\u0002",
    "\u0002N\u01aa\u0003\u0002\u0002\u0002P\u01ac\u0003\u0002\u0002\u0002",
    "R\u01b2\u0003\u0002\u0002\u0002T\u01b8\u0003\u0002\u0002\u0002V\u01ba",
    "\u0003\u0002\u0002\u0002X\u01bc\u0003\u0002\u0002\u0002Z[\u0005\u0004",
    "\u0003\u0002[\u0003\u0003\u0002\u0002\u0002\\^\u0005X-\u0002]\\\u0003",
    "\u0002\u0002\u0002^a\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002",
    "_`\u0003\u0002\u0002\u0002`c\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002",
    "\u0002bd\u0005\u0006\u0004\u0002cb\u0003\u0002\u0002\u0002cd\u0003\u0002",
    "\u0002\u0002dh\u0003\u0002\u0002\u0002eg\u0005X-\u0002fe\u0003\u0002",
    "\u0002\u0002gj\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002hi\u0003",
    "\u0002\u0002\u0002i\u0005\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002",
    "\u0002kv\u0005\b\u0005\u0002lp\u0005\b\u0005\u0002mo\u0005X-\u0002n",
    "m\u0003\u0002\u0002\u0002or\u0003\u0002\u0002\u0002pn\u0003\u0002\u0002",
    "\u0002pq\u0003\u0002\u0002\u0002qs\u0003\u0002\u0002\u0002rp\u0003\u0002",
    "\u0002\u0002st\u0005\u0006\u0004\u0002tv\u0003\u0002\u0002\u0002uk\u0003",
    "\u0002\u0002\u0002ul\u0003\u0002\u0002\u0002v\u0007\u0003\u0002\u0002",
    "\u0002w{\u0005\u000e\b\u0002xz\u0005X-\u0002yx\u0003\u0002\u0002\u0002",
    "z}\u0003\u0002\u0002\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002",
    "\u0002|\u007f\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002~\u0080",
    "\u0005\n\u0006\u0002\u007f~\u0003\u0002\u0002\u0002\u007f\u0080\u0003",
    "\u0002\u0002\u0002\u0080\t\u0003\u0002\u0002\u0002\u0081\u008c\u0005",
    "\f\u0007\u0002\u0082\u0086\u0005\f\u0007\u0002\u0083\u0085\u0005X-\u0002",
    "\u0084\u0083\u0003\u0002\u0002\u0002\u0085\u0088\u0003\u0002\u0002\u0002",
    "\u0086\u0084\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002",
    "\u0087\u0089\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002",
    "\u0089\u008a\u0005\n\u0006\u0002\u008a\u008c\u0003\u0002\u0002\u0002",
    "\u008b\u0081\u0003\u0002\u0002\u0002\u008b\u0082\u0003\u0002\u0002\u0002",
    "\u008c\u000b\u0003\u0002\u0002\u0002\u008d\u0097\u0005\u0012\n\u0002",
    "\u008e\u0097\u0005\u0014\u000b\u0002\u008f\u0097\u0005\u0018\r\u0002",
    "\u0090\u0097\u0005\u001c\u000f\u0002\u0091\u0097\u0005 \u0011\u0002",
    "\u0092\u0097\u0005&\u0014\u0002\u0093\u0097\u0005,\u0017\u0002\u0094",
    "\u0097\u00052\u001a\u0002\u0095\u0097\u00056\u001c\u0002\u0096\u008d",
    "\u0003\u0002\u0002\u0002\u0096\u008e\u0003\u0002\u0002\u0002\u0096\u008f",
    "\u0003\u0002\u0002\u0002\u0096\u0090\u0003\u0002\u0002\u0002\u0096\u0091",
    "\u0003\u0002\u0002\u0002\u0096\u0092\u0003\u0002\u0002\u0002\u0096\u0093",
    "\u0003\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0096\u0095",
    "\u0003\u0002\u0002\u0002\u0097\r\u0003\u0002\u0002\u0002\u0098\u009c",
    "\t\u0002\u0002\u0002\u0099\u009b\u0005X-\u0002\u009a\u0099\u0003\u0002",
    "\u0002\u0002\u009b\u009e\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002",
    "\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u009f\u0003\u0002",
    "\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009f\u00a0\u0005\u0010",
    "\t\u0002\u00a0\u000f\u0003\u0002\u0002\u0002\u00a1\u00a9\u0005<\u001f",
    "\u0002\u00a2\u00a4\u0005<\u001f\u0002\u00a3\u00a5\u0005F$\u0002\u00a4",
    "\u00a3\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5",
    "\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a7\u0005\u0016\f\u0002\u00a7",
    "\u00a9\u0003\u0002\u0002\u0002\u00a8\u00a1\u0003\u0002\u0002\u0002\u00a8",
    "\u00a2\u0003\u0002\u0002\u0002\u00a9\u0011\u0003\u0002\u0002\u0002\u00aa",
    "\u00ab\t\u0003\u0002\u0002\u00ab\u0013\u0003\u0002\u0002\u0002\u00ac",
    "\u00b0\t\u0004\u0002\u0002\u00ad\u00af\u0005X-\u0002\u00ae\u00ad\u0003",
    "\u0002\u0002\u0002\u00af\u00b2\u0003\u0002\u0002\u0002\u00b0\u00ae\u0003",
    "\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b3\u0003",
    "\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b3\u00b4\u0005",
    "\u0016\f\u0002\u00b4\u0015\u0003\u0002\u0002\u0002\u00b5\u00bd\u0005",
    "<\u001f\u0002\u00b6\u00b8\u0005<\u001f\u0002\u00b7\u00b9\u0005F$\u0002",
    "\u00b8\u00b7\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002",
    "\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u00bb\u0005\u0016\f\u0002",
    "\u00bb\u00bd\u0003\u0002\u0002\u0002\u00bc\u00b5\u0003\u0002\u0002\u0002",
    "\u00bc\u00b6\u0003\u0002\u0002\u0002\u00bd\u0017\u0003\u0002\u0002\u0002",
    "\u00be\u00c2\t\u0005\u0002\u0002\u00bf\u00c1\u0005X-\u0002\u00c0\u00bf",
    "\u0003\u0002\u0002\u0002\u00c1\u00c4\u0003\u0002\u0002\u0002\u00c2\u00c0",
    "\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u00c5",
    "\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c5\u00c6",
    "\u0005\u001a\u000e\u0002\u00c6\u0019\u0003\u0002\u0002\u0002\u00c7\u00cf",
    "\u0005> \u0002\u00c8\u00ca\u0005> \u0002\u00c9\u00cb\u0005F$\u0002\u00ca",
    "\u00c9\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002\u0002\u00cb",
    "\u00cc\u0003\u0002\u0002\u0002\u00cc\u00cd\u0005\u001a\u000e\u0002\u00cd",
    "\u00cf\u0003\u0002\u0002\u0002\u00ce\u00c7\u0003\u0002\u0002\u0002\u00ce",
    "\u00c8\u0003\u0002\u0002\u0002\u00cf\u001b\u0003\u0002\u0002\u0002\u00d0",
    "\u00d4\t\u0006\u0002\u0002\u00d1\u00d3\u0005X-\u0002\u00d2\u00d1\u0003",
    "\u0002\u0002\u0002\u00d3\u00d6\u0003\u0002\u0002\u0002\u00d4\u00d2\u0003",
    "\u0002\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5\u00d7\u0003",
    "\u0002\u0002\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d7\u00d8\u0005",
    "\u001e\u0010\u0002\u00d8\u001d\u0003\u0002\u0002\u0002\u00d9\u00e1\u0005",
    "> \u0002\u00da\u00dc\u0005> \u0002\u00db\u00dd\u0005F$\u0002\u00dc\u00db",
    "\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd\u00de",
    "\u0003\u0002\u0002\u0002\u00de\u00df\u0005\u001e\u0010\u0002\u00df\u00e1",
    "\u0003\u0002\u0002\u0002\u00e0\u00d9\u0003\u0002\u0002\u0002\u00e0\u00da",
    "\u0003\u0002\u0002\u0002\u00e1\u001f\u0003\u0002\u0002\u0002\u00e2\u00e6",
    "\t\u0007\u0002\u0002\u00e3\u00e5\u0005X-\u0002\u00e4\u00e3\u0003\u0002",
    "\u0002\u0002\u00e5\u00e8\u0003\u0002\u0002\u0002\u00e6\u00e4\u0003\u0002",
    "\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u00e9\u0003\u0002",
    "\u0002\u0002\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e9\u00ea\u0005\"",
    "\u0012\u0002\u00ea!\u0003\u0002\u0002\u0002\u00eb\u00f3\u0005$\u0013",
    "\u0002\u00ec\u00ee\u0005$\u0013\u0002\u00ed\u00ef\u0005F$\u0002\u00ee",
    "\u00ed\u0003\u0002\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef",
    "\u00f0\u0003\u0002\u0002\u0002\u00f0\u00f1\u0005\"\u0012\u0002\u00f1",
    "\u00f3\u0003\u0002\u0002\u0002\u00f2\u00eb\u0003\u0002\u0002\u0002\u00f2",
    "\u00ec\u0003\u0002\u0002\u0002\u00f3#\u0003\u0002\u0002\u0002\u00f4",
    "\u00f6\u0005<\u001f\u0002\u00f5\u00f7\u0005F$\u0002\u00f6\u00f5\u0003",
    "\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7\u00f8\u0003",
    "\u0002\u0002\u0002\u00f8\u00fa\u0005<\u001f\u0002\u00f9\u00fb\u0005",
    "F$\u0002\u00fa\u00f9\u0003\u0002\u0002\u0002\u00fa\u00fb\u0003\u0002",
    "\u0002\u0002\u00fb\u00fc\u0003\u0002\u0002\u0002\u00fc\u00fd\u0005<",
    "\u001f\u0002\u00fd%\u0003\u0002\u0002\u0002\u00fe\u0102\t\b\u0002\u0002",
    "\u00ff\u0101\u0005X-\u0002\u0100\u00ff\u0003\u0002\u0002\u0002\u0101",
    "\u0104\u0003\u0002\u0002\u0002\u0102\u0100\u0003\u0002\u0002\u0002\u0102",
    "\u0103\u0003\u0002\u0002\u0002\u0103\u0105\u0003\u0002\u0002\u0002\u0104",
    "\u0102\u0003\u0002\u0002\u0002\u0105\u0106\u0005(\u0015\u0002\u0106",
    "\'\u0003\u0002\u0002\u0002\u0107\u010f\u0005*\u0016\u0002\u0108\u010a",
    "\u0005*\u0016\u0002\u0109\u010b\u0005F$\u0002\u010a\u0109\u0003\u0002",
    "\u0002\u0002\u010a\u010b\u0003\u0002\u0002\u0002\u010b\u010c\u0003\u0002",
    "\u0002\u0002\u010c\u010d\u0005(\u0015\u0002\u010d\u010f\u0003\u0002",
    "\u0002\u0002\u010e\u0107\u0003\u0002\u0002\u0002\u010e\u0108\u0003\u0002",
    "\u0002\u0002\u010f)\u0003\u0002\u0002\u0002\u0110\u0112\u0005<\u001f",
    "\u0002\u0111\u0113\u0005F$\u0002\u0112\u0111\u0003\u0002\u0002\u0002",
    "\u0112\u0113\u0003\u0002\u0002\u0002\u0113\u0114\u0003\u0002\u0002\u0002",
    "\u0114\u0115\u0005<\u001f\u0002\u0115+\u0003\u0002\u0002\u0002\u0116",
    "\u011a\t\t\u0002\u0002\u0117\u0119\u0005X-\u0002\u0118\u0117\u0003\u0002",
    "\u0002\u0002\u0119\u011c\u0003\u0002\u0002\u0002\u011a\u0118\u0003\u0002",
    "\u0002\u0002\u011a\u011b\u0003\u0002\u0002\u0002\u011b\u011d\u0003\u0002",
    "\u0002\u0002\u011c\u011a\u0003\u0002\u0002\u0002\u011d\u011e\u0005.",
    "\u0018\u0002\u011e-\u0003\u0002\u0002\u0002\u011f\u0127\u00050\u0019",
    "\u0002\u0120\u0122\u00050\u0019\u0002\u0121\u0123\u0005F$\u0002\u0122",
    "\u0121\u0003\u0002\u0002\u0002\u0122\u0123\u0003\u0002\u0002\u0002\u0123",
    "\u0124\u0003\u0002\u0002\u0002\u0124\u0125\u0005.\u0018\u0002\u0125",
    "\u0127\u0003\u0002\u0002\u0002\u0126\u011f\u0003\u0002\u0002\u0002\u0126",
    "\u0120\u0003\u0002\u0002\u0002\u0127/\u0003\u0002\u0002\u0002\u0128",
    "\u012a\u0005<\u001f\u0002\u0129\u012b\u0005F$\u0002\u012a\u0129\u0003",
    "\u0002\u0002\u0002\u012a\u012b\u0003\u0002\u0002\u0002\u012b\u012c\u0003",
    "\u0002\u0002\u0002\u012c\u012d\u0005<\u001f\u0002\u012d1\u0003\u0002",
    "\u0002\u0002\u012e\u0132\t\n\u0002\u0002\u012f\u0131\u0005X-\u0002\u0130",
    "\u012f\u0003\u0002\u0002\u0002\u0131\u0134\u0003\u0002\u0002\u0002\u0132",
    "\u0130\u0003\u0002\u0002\u0002\u0132\u0133\u0003\u0002\u0002\u0002\u0133",
    "\u0135\u0003\u0002\u0002\u0002\u0134\u0132\u0003\u0002\u0002\u0002\u0135",
    "\u0136\u00054\u001b\u0002\u01363\u0003\u0002\u0002\u0002\u0137\u013f",
    "\u0005<\u001f\u0002\u0138\u013a\u0005<\u001f\u0002\u0139\u013b\u0005",
    "F$\u0002\u013a\u0139\u0003\u0002\u0002\u0002\u013a\u013b\u0003\u0002",
    "\u0002\u0002\u013b\u013c\u0003\u0002\u0002\u0002\u013c\u013d\u00054",
    "\u001b\u0002\u013d\u013f\u0003\u0002\u0002\u0002\u013e\u0137\u0003\u0002",
    "\u0002\u0002\u013e\u0138\u0003\u0002\u0002\u0002\u013f5\u0003\u0002",
    "\u0002\u0002\u0140\u0144\t\u000b\u0002\u0002\u0141\u0143\u0005X-\u0002",
    "\u0142\u0141\u0003\u0002\u0002\u0002\u0143\u0146\u0003\u0002\u0002\u0002",
    "\u0144\u0142\u0003\u0002\u0002\u0002\u0144\u0145\u0003\u0002\u0002\u0002",
    "\u0145\u0147\u0003\u0002\u0002\u0002\u0146\u0144\u0003\u0002\u0002\u0002",
    "\u0147\u0148\u00058\u001d\u0002\u01487\u0003\u0002\u0002\u0002\u0149",
    "\u0151\u0005:\u001e\u0002\u014a\u014c\u0005:\u001e\u0002\u014b\u014d",
    "\u0005F$\u0002\u014c\u014b\u0003\u0002\u0002\u0002\u014c\u014d\u0003",
    "\u0002\u0002\u0002\u014d\u014e\u0003\u0002\u0002\u0002\u014e\u014f\u0005",
    "8\u001d\u0002\u014f\u0151\u0003\u0002\u0002\u0002\u0150\u0149\u0003",
    "\u0002\u0002\u0002\u0150\u014a\u0003\u0002\u0002\u0002\u01519\u0003",
    "\u0002\u0002\u0002\u0152\u0154\u0005@!\u0002\u0153\u0155\u0005F$\u0002",
    "\u0154\u0153\u0003\u0002\u0002\u0002\u0154\u0155\u0003\u0002\u0002\u0002",
    "\u0155\u0156\u0003\u0002\u0002\u0002\u0156\u0158\u0005@!\u0002\u0157",
    "\u0159\u0005F$\u0002\u0158\u0157\u0003\u0002\u0002\u0002\u0158\u0159",
    "\u0003\u0002\u0002\u0002\u0159\u015a\u0003\u0002\u0002\u0002\u015a\u015b",
    "\u0005B\"\u0002\u015b\u015c\u0005F$\u0002\u015c\u015e\u0005D#\u0002",
    "\u015d\u015f\u0005F$\u0002\u015e\u015d\u0003\u0002\u0002\u0002\u015e",
    "\u015f\u0003\u0002\u0002\u0002\u015f\u0160\u0003\u0002\u0002\u0002\u0160",
    "\u0162\u0005D#\u0002\u0161\u0163\u0005F$\u0002\u0162\u0161\u0003\u0002",
    "\u0002\u0002\u0162\u0163\u0003\u0002\u0002\u0002\u0163\u0164\u0003\u0002",
    "\u0002\u0002\u0164\u0165\u0005<\u001f\u0002\u0165;\u0003\u0002\u0002",
    "\u0002\u0166\u0168\u0005> \u0002\u0167\u0169\u0005F$\u0002\u0168\u0167",
    "\u0003\u0002\u0002\u0002\u0168\u0169\u0003\u0002\u0002\u0002\u0169\u016a",
    "\u0003\u0002\u0002\u0002\u016a\u016b\u0005> \u0002\u016b=\u0003\u0002",
    "\u0002\u0002\u016c\u016d\u0005B\"\u0002\u016d?\u0003\u0002\u0002\u0002",
    "\u016e\u0171\u0005J&\u0002\u016f\u0171\u0005L\'\u0002\u0170\u016e\u0003",
    "\u0002\u0002\u0002\u0170\u016f\u0003\u0002\u0002\u0002\u0171A\u0003",
    "\u0002\u0002\u0002\u0172\u0174\u0005R*\u0002\u0173\u0172\u0003\u0002",
    "\u0002\u0002\u0173\u0174\u0003\u0002\u0002\u0002\u0174\u0175\u0003\u0002",
    "\u0002\u0002\u0175\u017b\u0005J&\u0002\u0176\u0178\u0005R*\u0002\u0177",
    "\u0176\u0003\u0002\u0002\u0002\u0177\u0178\u0003\u0002\u0002\u0002\u0178",
    "\u0179\u0003\u0002\u0002\u0002\u0179\u017b\u0005L\'\u0002\u017a\u0173",
    "\u0003\u0002\u0002\u0002\u017a\u0177\u0003\u0002\u0002\u0002\u017bC",
    "\u0003\u0002\u0002\u0002\u017c\u017d\t\f\u0002\u0002\u017dE\u0003\u0002",
    "\u0002\u0002\u017e\u0180\u0005X-\u0002\u017f\u017e\u0003\u0002\u0002",
    "\u0002\u0180\u0181\u0003\u0002\u0002\u0002\u0181\u017f\u0003\u0002\u0002",
    "\u0002\u0181\u0182\u0003\u0002\u0002\u0002\u0182\u0184\u0003\u0002\u0002",
    "\u0002\u0183\u0185\u0005H%\u0002\u0184\u0183\u0003\u0002\u0002\u0002",
    "\u0184\u0185\u0003\u0002\u0002\u0002\u0185\u0189\u0003\u0002\u0002\u0002",
    "\u0186\u0188\u0005X-\u0002\u0187\u0186\u0003\u0002\u0002\u0002\u0188",
    "\u018b\u0003\u0002\u0002\u0002\u0189\u0187\u0003\u0002\u0002\u0002\u0189",
    "\u018a\u0003\u0002\u0002\u0002\u018a\u0194\u0003\u0002\u0002\u0002\u018b",
    "\u0189\u0003\u0002\u0002\u0002\u018c\u0190\u0005H%\u0002\u018d\u018f",
    "\u0005X-\u0002\u018e\u018d\u0003\u0002\u0002\u0002\u018f\u0192\u0003",
    "\u0002\u0002\u0002\u0190\u018e\u0003\u0002\u0002\u0002\u0190\u0191\u0003",
    "\u0002\u0002\u0002\u0191\u0194\u0003\u0002\u0002\u0002\u0192\u0190\u0003",
    "\u0002\u0002\u0002\u0193\u017f\u0003\u0002\u0002\u0002\u0193\u018c\u0003",
    "\u0002\u0002\u0002\u0194G\u0003\u0002\u0002\u0002\u0195\u0196\u0007",
    "\u0019\u0002\u0002\u0196I\u0003\u0002\u0002\u0002\u0197\u0198\u0005",
    "T+\u0002\u0198K\u0003\u0002\u0002\u0002\u0199\u019b\u0005N(\u0002\u019a",
    "\u019c\u0005P)\u0002\u019b\u019a\u0003\u0002\u0002\u0002\u019b\u019c",
    "\u0003\u0002\u0002\u0002\u019c\u01a1\u0003\u0002\u0002\u0002\u019d\u019e",
    "\u0005T+\u0002\u019e\u019f\u0005P)\u0002\u019f\u01a1\u0003\u0002\u0002",
    "\u0002\u01a0\u0199\u0003\u0002\u0002\u0002\u01a0\u019d\u0003\u0002\u0002",
    "\u0002\u01a1M\u0003\u0002\u0002\u0002\u01a2\u01a4\u0005T+\u0002\u01a3",
    "\u01a2\u0003\u0002\u0002\u0002\u01a3\u01a4\u0003\u0002\u0002\u0002\u01a4",
    "\u01a5\u0003\u0002\u0002\u0002\u01a5\u01a6\u0007\u001a\u0002\u0002\u01a6",
    "\u01ab\u0005T+\u0002\u01a7\u01a8\u0005T+\u0002\u01a8\u01a9\u0007\u001a",
    "\u0002\u0002\u01a9\u01ab\u0003\u0002\u0002\u0002\u01aa\u01a3\u0003\u0002",
    "\u0002\u0002\u01aa\u01a7\u0003\u0002\u0002\u0002\u01abO\u0003\u0002",
    "\u0002\u0002\u01ac\u01ae\t\r\u0002\u0002\u01ad\u01af\u0005R*\u0002\u01ae",
    "\u01ad\u0003\u0002\u0002\u0002\u01ae\u01af\u0003\u0002\u0002\u0002\u01af",
    "\u01b0\u0003\u0002\u0002\u0002\u01b0\u01b1\u0005T+\u0002\u01b1Q\u0003",
    "\u0002\u0002\u0002\u01b2\u01b3\t\u000e\u0002\u0002\u01b3S\u0003\u0002",
    "\u0002\u0002\u01b4\u01b9\u0005V,\u0002\u01b5\u01b6\u0005V,\u0002\u01b6",
    "\u01b7\u0005T+\u0002\u01b7\u01b9\u0003\u0002\u0002\u0002\u01b8\u01b4",
    "\u0003\u0002\u0002\u0002\u01b8\u01b5\u0003\u0002\u0002\u0002\u01b9U",
    "\u0003\u0002\u0002\u0002\u01ba\u01bb\t\u000f\u0002\u0002\u01bbW\u0003",
    "\u0002\u0002\u0002\u01bc\u01bd\t\u0010\u0002\u0002\u01bdY\u0003\u0002",
    "\u0002\u0002?_chpu{\u007f\u0086\u008b\u0096\u009c\u00a4\u00a8\u00b0",
    "\u00b8\u00bc\u00c2\u00ca\u00ce\u00d4\u00dc\u00e0\u00e6\u00ee\u00f2\u00f6",
    "\u00fa\u0102\u010a\u010e\u0112\u011a\u0122\u0126\u012a\u0132\u013a\u013e",
    "\u0144\u014c\u0150\u0154\u0158\u015e\u0162\u0168\u0170\u0173\u0177\u017a",
    "\u0181\u0184\u0189\u0190\u0193\u019b\u01a0\u01a3\u01aa\u01ae\u01b8"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'M'", "'m'", "'Z'", "'z'", "'L'", "'l'", "'H'", 
                     "'h'", "'V'", "'v'", "'C'", "'c'", "'S'", "'s'", "'Q'", 
                     "'q'", "'T'", "'t'", "'A'", "'a'", "'0'", "'1'", "','", 
                     "'.'", "'e'", "'E'", "'+'", "'-'", "'2'", "'3'", "'4'", 
                     "'5'", "'6'", "'7'", "'8'", "'9'", "' '", "'\t'", "'\r'", 
                     "'\n'" ];

var symbolicNames = [  ];

var ruleNames =  [ "eval", "svgPath", "movetoDrawtoCommandGroups", "movetoDrawtoCommandGroup", 
                   "drawtoCommands", "drawtoCommand", "moveto", "movetoArgumentSequence", 
                   "closepath", "lineto", "linetoArgumentSequence", "horizontalLineto", 
                   "horizontalLinetoArgumentSequence", "verticalLineto", 
                   "verticalLinetoArgumentSequence", "curveto", "curvetoArgumentSequence", 
                   "curvetoArgument", "smoothCurveto", "smoothCurvetoArgumentSequence", 
                   "smoothCurvetoArgument", "quadraticBezierCurveto", "quadraticBezierCurvetoArgumentSequence", 
                   "quadraticBezierCurvetoArgument", "smoothQuadraticBezierCurveto", 
                   "smoothQuadraticBezierCurvetoArgumentSequence", "ellipticalArc", 
                   "ellipticalArcArgumentSequence", "ellipticalArcArgument", 
                   "coordinatePair", "coordinate", "nonnegativeNumber", 
                   "number", "flag", "commaWsp", "comma", "integerConstant", 
                   "floatingPointConstant", "fractionalConstant", "exponent", 
                   "sign", "digitSequence", "digit", "wsp" ];

function SvgPathParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SvgPathParser.prototype = Object.create(antlr4.Parser.prototype);
SvgPathParser.prototype.constructor = SvgPathParser;

Object.defineProperty(SvgPathParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SvgPathParser.EOF = antlr4.Token.EOF;
SvgPathParser.T__0 = 1;
SvgPathParser.T__1 = 2;
SvgPathParser.T__2 = 3;
SvgPathParser.T__3 = 4;
SvgPathParser.T__4 = 5;
SvgPathParser.T__5 = 6;
SvgPathParser.T__6 = 7;
SvgPathParser.T__7 = 8;
SvgPathParser.T__8 = 9;
SvgPathParser.T__9 = 10;
SvgPathParser.T__10 = 11;
SvgPathParser.T__11 = 12;
SvgPathParser.T__12 = 13;
SvgPathParser.T__13 = 14;
SvgPathParser.T__14 = 15;
SvgPathParser.T__15 = 16;
SvgPathParser.T__16 = 17;
SvgPathParser.T__17 = 18;
SvgPathParser.T__18 = 19;
SvgPathParser.T__19 = 20;
SvgPathParser.T__20 = 21;
SvgPathParser.T__21 = 22;
SvgPathParser.T__22 = 23;
SvgPathParser.T__23 = 24;
SvgPathParser.T__24 = 25;
SvgPathParser.T__25 = 26;
SvgPathParser.T__26 = 27;
SvgPathParser.T__27 = 28;
SvgPathParser.T__28 = 29;
SvgPathParser.T__29 = 30;
SvgPathParser.T__30 = 31;
SvgPathParser.T__31 = 32;
SvgPathParser.T__32 = 33;
SvgPathParser.T__33 = 34;
SvgPathParser.T__34 = 35;
SvgPathParser.T__35 = 36;
SvgPathParser.T__36 = 37;
SvgPathParser.T__37 = 38;
SvgPathParser.T__38 = 39;
SvgPathParser.T__39 = 40;

SvgPathParser.RULE_eval = 0;
SvgPathParser.RULE_svgPath = 1;
SvgPathParser.RULE_movetoDrawtoCommandGroups = 2;
SvgPathParser.RULE_movetoDrawtoCommandGroup = 3;
SvgPathParser.RULE_drawtoCommands = 4;
SvgPathParser.RULE_drawtoCommand = 5;
SvgPathParser.RULE_moveto = 6;
SvgPathParser.RULE_movetoArgumentSequence = 7;
SvgPathParser.RULE_closepath = 8;
SvgPathParser.RULE_lineto = 9;
SvgPathParser.RULE_linetoArgumentSequence = 10;
SvgPathParser.RULE_horizontalLineto = 11;
SvgPathParser.RULE_horizontalLinetoArgumentSequence = 12;
SvgPathParser.RULE_verticalLineto = 13;
SvgPathParser.RULE_verticalLinetoArgumentSequence = 14;
SvgPathParser.RULE_curveto = 15;
SvgPathParser.RULE_curvetoArgumentSequence = 16;
SvgPathParser.RULE_curvetoArgument = 17;
SvgPathParser.RULE_smoothCurveto = 18;
SvgPathParser.RULE_smoothCurvetoArgumentSequence = 19;
SvgPathParser.RULE_smoothCurvetoArgument = 20;
SvgPathParser.RULE_quadraticBezierCurveto = 21;
SvgPathParser.RULE_quadraticBezierCurvetoArgumentSequence = 22;
SvgPathParser.RULE_quadraticBezierCurvetoArgument = 23;
SvgPathParser.RULE_smoothQuadraticBezierCurveto = 24;
SvgPathParser.RULE_smoothQuadraticBezierCurvetoArgumentSequence = 25;
SvgPathParser.RULE_ellipticalArc = 26;
SvgPathParser.RULE_ellipticalArcArgumentSequence = 27;
SvgPathParser.RULE_ellipticalArcArgument = 28;
SvgPathParser.RULE_coordinatePair = 29;
SvgPathParser.RULE_coordinate = 30;
SvgPathParser.RULE_nonnegativeNumber = 31;
SvgPathParser.RULE_number = 32;
SvgPathParser.RULE_flag = 33;
SvgPathParser.RULE_commaWsp = 34;
SvgPathParser.RULE_comma = 35;
SvgPathParser.RULE_integerConstant = 36;
SvgPathParser.RULE_floatingPointConstant = 37;
SvgPathParser.RULE_fractionalConstant = 38;
SvgPathParser.RULE_exponent = 39;
SvgPathParser.RULE_sign = 40;
SvgPathParser.RULE_digitSequence = 41;
SvgPathParser.RULE_digit = 42;
SvgPathParser.RULE_wsp = 43;


function EvalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_eval;
    return this;
}

EvalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EvalContext.prototype.constructor = EvalContext;

EvalContext.prototype.svgPath = function() {
    return this.getTypedRuleContext(SvgPathContext,0);
};

EvalContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterEval(this);
	}
};

EvalContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitEval(this);
	}
};




SvgPathParser.EvalContext = EvalContext;

SvgPathParser.prototype.eval = function() {

    var localctx = new EvalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SvgPathParser.RULE_eval);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this.svgPath();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SvgPathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_svgPath;
    return this;
}

SvgPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SvgPathContext.prototype.constructor = SvgPathContext;

SvgPathContext.prototype.wsp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WspContext);
    } else {
        return this.getTypedRuleContext(WspContext,i);
    }
};

SvgPathContext.prototype.movetoDrawtoCommandGroups = function() {
    return this.getTypedRuleContext(MovetoDrawtoCommandGroupsContext,0);
};

SvgPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterSvgPath(this);
	}
};

SvgPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitSvgPath(this);
	}
};




SvgPathParser.SvgPathContext = SvgPathContext;

SvgPathParser.prototype.svgPath = function() {

    var localctx = new SvgPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SvgPathParser.RULE_svgPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 90;
                this.wsp(); 
            }
            this.state = 95;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SvgPathParser.T__0 || _la===SvgPathParser.T__1) {
            this.state = 96;
            this.movetoDrawtoCommandGroups();
        }

        this.state = 102;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (SvgPathParser.T__36 - 37)) | (1 << (SvgPathParser.T__37 - 37)) | (1 << (SvgPathParser.T__38 - 37)) | (1 << (SvgPathParser.T__39 - 37)))) !== 0)) {
            this.state = 99;
            this.wsp();
            this.state = 104;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MovetoDrawtoCommandGroupsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_movetoDrawtoCommandGroups;
    return this;
}

MovetoDrawtoCommandGroupsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MovetoDrawtoCommandGroupsContext.prototype.constructor = MovetoDrawtoCommandGroupsContext;

MovetoDrawtoCommandGroupsContext.prototype.movetoDrawtoCommandGroup = function() {
    return this.getTypedRuleContext(MovetoDrawtoCommandGroupContext,0);
};

MovetoDrawtoCommandGroupsContext.prototype.movetoDrawtoCommandGroups = function() {
    return this.getTypedRuleContext(MovetoDrawtoCommandGroupsContext,0);
};

MovetoDrawtoCommandGroupsContext.prototype.wsp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WspContext);
    } else {
        return this.getTypedRuleContext(WspContext,i);
    }
};

MovetoDrawtoCommandGroupsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterMovetoDrawtoCommandGroups(this);
	}
};

MovetoDrawtoCommandGroupsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitMovetoDrawtoCommandGroups(this);
	}
};




SvgPathParser.MovetoDrawtoCommandGroupsContext = MovetoDrawtoCommandGroupsContext;

SvgPathParser.prototype.movetoDrawtoCommandGroups = function() {

    var localctx = new MovetoDrawtoCommandGroupsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SvgPathParser.RULE_movetoDrawtoCommandGroups);
    var _la = 0; // Token type
    try {
        this.state = 115;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 105;
            this.movetoDrawtoCommandGroup();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 106;
            this.movetoDrawtoCommandGroup();
            this.state = 110;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (SvgPathParser.T__36 - 37)) | (1 << (SvgPathParser.T__37 - 37)) | (1 << (SvgPathParser.T__38 - 37)) | (1 << (SvgPathParser.T__39 - 37)))) !== 0)) {
                this.state = 107;
                this.wsp();
                this.state = 112;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 113;
            this.movetoDrawtoCommandGroups();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MovetoDrawtoCommandGroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_movetoDrawtoCommandGroup;
    return this;
}

MovetoDrawtoCommandGroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MovetoDrawtoCommandGroupContext.prototype.constructor = MovetoDrawtoCommandGroupContext;

MovetoDrawtoCommandGroupContext.prototype.moveto = function() {
    return this.getTypedRuleContext(MovetoContext,0);
};

MovetoDrawtoCommandGroupContext.prototype.wsp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WspContext);
    } else {
        return this.getTypedRuleContext(WspContext,i);
    }
};

MovetoDrawtoCommandGroupContext.prototype.drawtoCommands = function() {
    return this.getTypedRuleContext(DrawtoCommandsContext,0);
};

MovetoDrawtoCommandGroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterMovetoDrawtoCommandGroup(this);
	}
};

MovetoDrawtoCommandGroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitMovetoDrawtoCommandGroup(this);
	}
};




SvgPathParser.MovetoDrawtoCommandGroupContext = MovetoDrawtoCommandGroupContext;

SvgPathParser.prototype.movetoDrawtoCommandGroup = function() {

    var localctx = new MovetoDrawtoCommandGroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SvgPathParser.RULE_movetoDrawtoCommandGroup);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.moveto();
        this.state = 121;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 118;
                this.wsp(); 
            }
            this.state = 123;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

        this.state = 125;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SvgPathParser.T__2) | (1 << SvgPathParser.T__3) | (1 << SvgPathParser.T__4) | (1 << SvgPathParser.T__5) | (1 << SvgPathParser.T__6) | (1 << SvgPathParser.T__7) | (1 << SvgPathParser.T__8) | (1 << SvgPathParser.T__9) | (1 << SvgPathParser.T__10) | (1 << SvgPathParser.T__11) | (1 << SvgPathParser.T__12) | (1 << SvgPathParser.T__13) | (1 << SvgPathParser.T__14) | (1 << SvgPathParser.T__15) | (1 << SvgPathParser.T__16) | (1 << SvgPathParser.T__17) | (1 << SvgPathParser.T__18) | (1 << SvgPathParser.T__19))) !== 0)) {
            this.state = 124;
            this.drawtoCommands();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DrawtoCommandsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_drawtoCommands;
    return this;
}

DrawtoCommandsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DrawtoCommandsContext.prototype.constructor = DrawtoCommandsContext;

DrawtoCommandsContext.prototype.drawtoCommand = function() {
    return this.getTypedRuleContext(DrawtoCommandContext,0);
};

DrawtoCommandsContext.prototype.drawtoCommands = function() {
    return this.getTypedRuleContext(DrawtoCommandsContext,0);
};

DrawtoCommandsContext.prototype.wsp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WspContext);
    } else {
        return this.getTypedRuleContext(WspContext,i);
    }
};

DrawtoCommandsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterDrawtoCommands(this);
	}
};

DrawtoCommandsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitDrawtoCommands(this);
	}
};




SvgPathParser.DrawtoCommandsContext = DrawtoCommandsContext;

SvgPathParser.prototype.drawtoCommands = function() {

    var localctx = new DrawtoCommandsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SvgPathParser.RULE_drawtoCommands);
    var _la = 0; // Token type
    try {
        this.state = 137;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 127;
            this.drawtoCommand();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 128;
            this.drawtoCommand();
            this.state = 132;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (SvgPathParser.T__36 - 37)) | (1 << (SvgPathParser.T__37 - 37)) | (1 << (SvgPathParser.T__38 - 37)) | (1 << (SvgPathParser.T__39 - 37)))) !== 0)) {
                this.state = 129;
                this.wsp();
                this.state = 134;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 135;
            this.drawtoCommands();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DrawtoCommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_drawtoCommand;
    return this;
}

DrawtoCommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DrawtoCommandContext.prototype.constructor = DrawtoCommandContext;

DrawtoCommandContext.prototype.closepath = function() {
    return this.getTypedRuleContext(ClosepathContext,0);
};

DrawtoCommandContext.prototype.lineto = function() {
    return this.getTypedRuleContext(LinetoContext,0);
};

DrawtoCommandContext.prototype.horizontalLineto = function() {
    return this.getTypedRuleContext(HorizontalLinetoContext,0);
};

DrawtoCommandContext.prototype.verticalLineto = function() {
    return this.getTypedRuleContext(VerticalLinetoContext,0);
};

DrawtoCommandContext.prototype.curveto = function() {
    return this.getTypedRuleContext(CurvetoContext,0);
};

DrawtoCommandContext.prototype.smoothCurveto = function() {
    return this.getTypedRuleContext(SmoothCurvetoContext,0);
};

DrawtoCommandContext.prototype.quadraticBezierCurveto = function() {
    return this.getTypedRuleContext(QuadraticBezierCurvetoContext,0);
};

DrawtoCommandContext.prototype.smoothQuadraticBezierCurveto = function() {
    return this.getTypedRuleContext(SmoothQuadraticBezierCurvetoContext,0);
};

DrawtoCommandContext.prototype.ellipticalArc = function() {
    return this.getTypedRuleContext(EllipticalArcContext,0);
};

DrawtoCommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterDrawtoCommand(this);
	}
};

DrawtoCommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitDrawtoCommand(this);
	}
};




SvgPathParser.DrawtoCommandContext = DrawtoCommandContext;

SvgPathParser.prototype.drawtoCommand = function() {

    var localctx = new DrawtoCommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SvgPathParser.RULE_drawtoCommand);
    try {
        this.state = 148;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SvgPathParser.T__2:
        case SvgPathParser.T__3:
            this.enterOuterAlt(localctx, 1);
            this.state = 139;
            this.closepath();
            break;
        case SvgPathParser.T__4:
        case SvgPathParser.T__5:
            this.enterOuterAlt(localctx, 2);
            this.state = 140;
            this.lineto();
            break;
        case SvgPathParser.T__6:
        case SvgPathParser.T__7:
            this.enterOuterAlt(localctx, 3);
            this.state = 141;
            this.horizontalLineto();
            break;
        case SvgPathParser.T__8:
        case SvgPathParser.T__9:
            this.enterOuterAlt(localctx, 4);
            this.state = 142;
            this.verticalLineto();
            break;
        case SvgPathParser.T__10:
        case SvgPathParser.T__11:
            this.enterOuterAlt(localctx, 5);
            this.state = 143;
            this.curveto();
            break;
        case SvgPathParser.T__12:
        case SvgPathParser.T__13:
            this.enterOuterAlt(localctx, 6);
            this.state = 144;
            this.smoothCurveto();
            break;
        case SvgPathParser.T__14:
        case SvgPathParser.T__15:
            this.enterOuterAlt(localctx, 7);
            this.state = 145;
            this.quadraticBezierCurveto();
            break;
        case SvgPathParser.T__16:
        case SvgPathParser.T__17:
            this.enterOuterAlt(localctx, 8);
            this.state = 146;
            this.smoothQuadraticBezierCurveto();
            break;
        case SvgPathParser.T__18:
        case SvgPathParser.T__19:
            this.enterOuterAlt(localctx, 9);
            this.state = 147;
            this.ellipticalArc();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MovetoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_moveto;
    return this;
}

MovetoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MovetoContext.prototype.constructor = MovetoContext;

MovetoContext.prototype.movetoArgumentSequence = function() {
    return this.getTypedRuleContext(MovetoArgumentSequenceContext,0);
};

MovetoContext.prototype.wsp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WspContext);
    } else {
        return this.getTypedRuleContext(WspContext,i);
    }
};

MovetoContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterMoveto(this);
	}
};

MovetoContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitMoveto(this);
	}
};




SvgPathParser.MovetoContext = MovetoContext;

SvgPathParser.prototype.moveto = function() {

    var localctx = new MovetoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SvgPathParser.RULE_moveto);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        _la = this._input.LA(1);
        if(!(_la===SvgPathParser.T__0 || _la===SvgPathParser.T__1)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 154;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (SvgPathParser.T__36 - 37)) | (1 << (SvgPathParser.T__37 - 37)) | (1 << (SvgPathParser.T__38 - 37)) | (1 << (SvgPathParser.T__39 - 37)))) !== 0)) {
            this.state = 151;
            this.wsp();
            this.state = 156;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 157;
        this.movetoArgumentSequence();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MovetoArgumentSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_movetoArgumentSequence;
    return this;
}

MovetoArgumentSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MovetoArgumentSequenceContext.prototype.constructor = MovetoArgumentSequenceContext;

MovetoArgumentSequenceContext.prototype.coordinatePair = function() {
    return this.getTypedRuleContext(CoordinatePairContext,0);
};

MovetoArgumentSequenceContext.prototype.linetoArgumentSequence = function() {
    return this.getTypedRuleContext(LinetoArgumentSequenceContext,0);
};

MovetoArgumentSequenceContext.prototype.commaWsp = function() {
    return this.getTypedRuleContext(CommaWspContext,0);
};

MovetoArgumentSequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterMovetoArgumentSequence(this);
	}
};

MovetoArgumentSequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitMovetoArgumentSequence(this);
	}
};




SvgPathParser.MovetoArgumentSequenceContext = MovetoArgumentSequenceContext;

SvgPathParser.prototype.movetoArgumentSequence = function() {

    var localctx = new MovetoArgumentSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SvgPathParser.RULE_movetoArgumentSequence);
    var _la = 0; // Token type
    try {
        this.state = 166;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 159;
            this.coordinatePair();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 160;
            this.coordinatePair();
            this.state = 162;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SvgPathParser.T__22 - 23)) | (1 << (SvgPathParser.T__36 - 23)) | (1 << (SvgPathParser.T__37 - 23)) | (1 << (SvgPathParser.T__38 - 23)) | (1 << (SvgPathParser.T__39 - 23)))) !== 0)) {
                this.state = 161;
                this.commaWsp();
            }

            this.state = 164;
            this.linetoArgumentSequence();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ClosepathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_closepath;
    return this;
}

ClosepathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClosepathContext.prototype.constructor = ClosepathContext;


ClosepathContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterClosepath(this);
	}
};

ClosepathContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitClosepath(this);
	}
};




SvgPathParser.ClosepathContext = ClosepathContext;

SvgPathParser.prototype.closepath = function() {

    var localctx = new ClosepathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SvgPathParser.RULE_closepath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        _la = this._input.LA(1);
        if(!(_la===SvgPathParser.T__2 || _la===SvgPathParser.T__3)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LinetoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_lineto;
    return this;
}

LinetoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LinetoContext.prototype.constructor = LinetoContext;

LinetoContext.prototype.linetoArgumentSequence = function() {
    return this.getTypedRuleContext(LinetoArgumentSequenceContext,0);
};

LinetoContext.prototype.wsp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WspContext);
    } else {
        return this.getTypedRuleContext(WspContext,i);
    }
};

LinetoContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterLineto(this);
	}
};

LinetoContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitLineto(this);
	}
};




SvgPathParser.LinetoContext = LinetoContext;

SvgPathParser.prototype.lineto = function() {

    var localctx = new LinetoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SvgPathParser.RULE_lineto);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        _la = this._input.LA(1);
        if(!(_la===SvgPathParser.T__4 || _la===SvgPathParser.T__5)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 174;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (SvgPathParser.T__36 - 37)) | (1 << (SvgPathParser.T__37 - 37)) | (1 << (SvgPathParser.T__38 - 37)) | (1 << (SvgPathParser.T__39 - 37)))) !== 0)) {
            this.state = 171;
            this.wsp();
            this.state = 176;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 177;
        this.linetoArgumentSequence();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LinetoArgumentSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_linetoArgumentSequence;
    return this;
}

LinetoArgumentSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LinetoArgumentSequenceContext.prototype.constructor = LinetoArgumentSequenceContext;

LinetoArgumentSequenceContext.prototype.coordinatePair = function() {
    return this.getTypedRuleContext(CoordinatePairContext,0);
};

LinetoArgumentSequenceContext.prototype.linetoArgumentSequence = function() {
    return this.getTypedRuleContext(LinetoArgumentSequenceContext,0);
};

LinetoArgumentSequenceContext.prototype.commaWsp = function() {
    return this.getTypedRuleContext(CommaWspContext,0);
};

LinetoArgumentSequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterLinetoArgumentSequence(this);
	}
};

LinetoArgumentSequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitLinetoArgumentSequence(this);
	}
};




SvgPathParser.LinetoArgumentSequenceContext = LinetoArgumentSequenceContext;

SvgPathParser.prototype.linetoArgumentSequence = function() {

    var localctx = new LinetoArgumentSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SvgPathParser.RULE_linetoArgumentSequence);
    var _la = 0; // Token type
    try {
        this.state = 186;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 179;
            this.coordinatePair();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 180;
            this.coordinatePair();
            this.state = 182;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SvgPathParser.T__22 - 23)) | (1 << (SvgPathParser.T__36 - 23)) | (1 << (SvgPathParser.T__37 - 23)) | (1 << (SvgPathParser.T__38 - 23)) | (1 << (SvgPathParser.T__39 - 23)))) !== 0)) {
                this.state = 181;
                this.commaWsp();
            }

            this.state = 184;
            this.linetoArgumentSequence();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function HorizontalLinetoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_horizontalLineto;
    return this;
}

HorizontalLinetoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HorizontalLinetoContext.prototype.constructor = HorizontalLinetoContext;

HorizontalLinetoContext.prototype.horizontalLinetoArgumentSequence = function() {
    return this.getTypedRuleContext(HorizontalLinetoArgumentSequenceContext,0);
};

HorizontalLinetoContext.prototype.wsp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WspContext);
    } else {
        return this.getTypedRuleContext(WspContext,i);
    }
};

HorizontalLinetoContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterHorizontalLineto(this);
	}
};

HorizontalLinetoContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitHorizontalLineto(this);
	}
};




SvgPathParser.HorizontalLinetoContext = HorizontalLinetoContext;

SvgPathParser.prototype.horizontalLineto = function() {

    var localctx = new HorizontalLinetoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SvgPathParser.RULE_horizontalLineto);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        _la = this._input.LA(1);
        if(!(_la===SvgPathParser.T__6 || _la===SvgPathParser.T__7)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 192;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (SvgPathParser.T__36 - 37)) | (1 << (SvgPathParser.T__37 - 37)) | (1 << (SvgPathParser.T__38 - 37)) | (1 << (SvgPathParser.T__39 - 37)))) !== 0)) {
            this.state = 189;
            this.wsp();
            this.state = 194;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 195;
        this.horizontalLinetoArgumentSequence();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function HorizontalLinetoArgumentSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_horizontalLinetoArgumentSequence;
    return this;
}

HorizontalLinetoArgumentSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HorizontalLinetoArgumentSequenceContext.prototype.constructor = HorizontalLinetoArgumentSequenceContext;

HorizontalLinetoArgumentSequenceContext.prototype.coordinate = function() {
    return this.getTypedRuleContext(CoordinateContext,0);
};

HorizontalLinetoArgumentSequenceContext.prototype.horizontalLinetoArgumentSequence = function() {
    return this.getTypedRuleContext(HorizontalLinetoArgumentSequenceContext,0);
};

HorizontalLinetoArgumentSequenceContext.prototype.commaWsp = function() {
    return this.getTypedRuleContext(CommaWspContext,0);
};

HorizontalLinetoArgumentSequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterHorizontalLinetoArgumentSequence(this);
	}
};

HorizontalLinetoArgumentSequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitHorizontalLinetoArgumentSequence(this);
	}
};




SvgPathParser.HorizontalLinetoArgumentSequenceContext = HorizontalLinetoArgumentSequenceContext;

SvgPathParser.prototype.horizontalLinetoArgumentSequence = function() {

    var localctx = new HorizontalLinetoArgumentSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SvgPathParser.RULE_horizontalLinetoArgumentSequence);
    var _la = 0; // Token type
    try {
        this.state = 204;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 197;
            this.coordinate();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 198;
            this.coordinate();
            this.state = 200;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SvgPathParser.T__22 - 23)) | (1 << (SvgPathParser.T__36 - 23)) | (1 << (SvgPathParser.T__37 - 23)) | (1 << (SvgPathParser.T__38 - 23)) | (1 << (SvgPathParser.T__39 - 23)))) !== 0)) {
                this.state = 199;
                this.commaWsp();
            }

            this.state = 202;
            this.horizontalLinetoArgumentSequence();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VerticalLinetoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_verticalLineto;
    return this;
}

VerticalLinetoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VerticalLinetoContext.prototype.constructor = VerticalLinetoContext;

VerticalLinetoContext.prototype.verticalLinetoArgumentSequence = function() {
    return this.getTypedRuleContext(VerticalLinetoArgumentSequenceContext,0);
};

VerticalLinetoContext.prototype.wsp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WspContext);
    } else {
        return this.getTypedRuleContext(WspContext,i);
    }
};

VerticalLinetoContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterVerticalLineto(this);
	}
};

VerticalLinetoContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitVerticalLineto(this);
	}
};




SvgPathParser.VerticalLinetoContext = VerticalLinetoContext;

SvgPathParser.prototype.verticalLineto = function() {

    var localctx = new VerticalLinetoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SvgPathParser.RULE_verticalLineto);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        _la = this._input.LA(1);
        if(!(_la===SvgPathParser.T__8 || _la===SvgPathParser.T__9)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 210;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (SvgPathParser.T__36 - 37)) | (1 << (SvgPathParser.T__37 - 37)) | (1 << (SvgPathParser.T__38 - 37)) | (1 << (SvgPathParser.T__39 - 37)))) !== 0)) {
            this.state = 207;
            this.wsp();
            this.state = 212;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 213;
        this.verticalLinetoArgumentSequence();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VerticalLinetoArgumentSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_verticalLinetoArgumentSequence;
    return this;
}

VerticalLinetoArgumentSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VerticalLinetoArgumentSequenceContext.prototype.constructor = VerticalLinetoArgumentSequenceContext;

VerticalLinetoArgumentSequenceContext.prototype.coordinate = function() {
    return this.getTypedRuleContext(CoordinateContext,0);
};

VerticalLinetoArgumentSequenceContext.prototype.verticalLinetoArgumentSequence = function() {
    return this.getTypedRuleContext(VerticalLinetoArgumentSequenceContext,0);
};

VerticalLinetoArgumentSequenceContext.prototype.commaWsp = function() {
    return this.getTypedRuleContext(CommaWspContext,0);
};

VerticalLinetoArgumentSequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterVerticalLinetoArgumentSequence(this);
	}
};

VerticalLinetoArgumentSequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitVerticalLinetoArgumentSequence(this);
	}
};




SvgPathParser.VerticalLinetoArgumentSequenceContext = VerticalLinetoArgumentSequenceContext;

SvgPathParser.prototype.verticalLinetoArgumentSequence = function() {

    var localctx = new VerticalLinetoArgumentSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SvgPathParser.RULE_verticalLinetoArgumentSequence);
    var _la = 0; // Token type
    try {
        this.state = 222;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 215;
            this.coordinate();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 216;
            this.coordinate();
            this.state = 218;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SvgPathParser.T__22 - 23)) | (1 << (SvgPathParser.T__36 - 23)) | (1 << (SvgPathParser.T__37 - 23)) | (1 << (SvgPathParser.T__38 - 23)) | (1 << (SvgPathParser.T__39 - 23)))) !== 0)) {
                this.state = 217;
                this.commaWsp();
            }

            this.state = 220;
            this.verticalLinetoArgumentSequence();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CurvetoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_curveto;
    return this;
}

CurvetoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CurvetoContext.prototype.constructor = CurvetoContext;

CurvetoContext.prototype.curvetoArgumentSequence = function() {
    return this.getTypedRuleContext(CurvetoArgumentSequenceContext,0);
};

CurvetoContext.prototype.wsp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WspContext);
    } else {
        return this.getTypedRuleContext(WspContext,i);
    }
};

CurvetoContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterCurveto(this);
	}
};

CurvetoContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitCurveto(this);
	}
};




SvgPathParser.CurvetoContext = CurvetoContext;

SvgPathParser.prototype.curveto = function() {

    var localctx = new CurvetoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SvgPathParser.RULE_curveto);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        _la = this._input.LA(1);
        if(!(_la===SvgPathParser.T__10 || _la===SvgPathParser.T__11)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 228;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (SvgPathParser.T__36 - 37)) | (1 << (SvgPathParser.T__37 - 37)) | (1 << (SvgPathParser.T__38 - 37)) | (1 << (SvgPathParser.T__39 - 37)))) !== 0)) {
            this.state = 225;
            this.wsp();
            this.state = 230;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 231;
        this.curvetoArgumentSequence();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CurvetoArgumentSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_curvetoArgumentSequence;
    return this;
}

CurvetoArgumentSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CurvetoArgumentSequenceContext.prototype.constructor = CurvetoArgumentSequenceContext;

CurvetoArgumentSequenceContext.prototype.curvetoArgument = function() {
    return this.getTypedRuleContext(CurvetoArgumentContext,0);
};

CurvetoArgumentSequenceContext.prototype.curvetoArgumentSequence = function() {
    return this.getTypedRuleContext(CurvetoArgumentSequenceContext,0);
};

CurvetoArgumentSequenceContext.prototype.commaWsp = function() {
    return this.getTypedRuleContext(CommaWspContext,0);
};

CurvetoArgumentSequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterCurvetoArgumentSequence(this);
	}
};

CurvetoArgumentSequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitCurvetoArgumentSequence(this);
	}
};




SvgPathParser.CurvetoArgumentSequenceContext = CurvetoArgumentSequenceContext;

SvgPathParser.prototype.curvetoArgumentSequence = function() {

    var localctx = new CurvetoArgumentSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SvgPathParser.RULE_curvetoArgumentSequence);
    var _la = 0; // Token type
    try {
        this.state = 240;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 233;
            this.curvetoArgument();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 234;
            this.curvetoArgument();
            this.state = 236;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SvgPathParser.T__22 - 23)) | (1 << (SvgPathParser.T__36 - 23)) | (1 << (SvgPathParser.T__37 - 23)) | (1 << (SvgPathParser.T__38 - 23)) | (1 << (SvgPathParser.T__39 - 23)))) !== 0)) {
                this.state = 235;
                this.commaWsp();
            }

            this.state = 238;
            this.curvetoArgumentSequence();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CurvetoArgumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_curvetoArgument;
    return this;
}

CurvetoArgumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CurvetoArgumentContext.prototype.constructor = CurvetoArgumentContext;

CurvetoArgumentContext.prototype.coordinatePair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CoordinatePairContext);
    } else {
        return this.getTypedRuleContext(CoordinatePairContext,i);
    }
};

CurvetoArgumentContext.prototype.commaWsp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CommaWspContext);
    } else {
        return this.getTypedRuleContext(CommaWspContext,i);
    }
};

CurvetoArgumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterCurvetoArgument(this);
	}
};

CurvetoArgumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitCurvetoArgument(this);
	}
};




SvgPathParser.CurvetoArgumentContext = CurvetoArgumentContext;

SvgPathParser.prototype.curvetoArgument = function() {

    var localctx = new CurvetoArgumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SvgPathParser.RULE_curvetoArgument);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 242;
        this.coordinatePair();
        this.state = 244;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SvgPathParser.T__22 - 23)) | (1 << (SvgPathParser.T__36 - 23)) | (1 << (SvgPathParser.T__37 - 23)) | (1 << (SvgPathParser.T__38 - 23)) | (1 << (SvgPathParser.T__39 - 23)))) !== 0)) {
            this.state = 243;
            this.commaWsp();
        }

        this.state = 246;
        this.coordinatePair();
        this.state = 248;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SvgPathParser.T__22 - 23)) | (1 << (SvgPathParser.T__36 - 23)) | (1 << (SvgPathParser.T__37 - 23)) | (1 << (SvgPathParser.T__38 - 23)) | (1 << (SvgPathParser.T__39 - 23)))) !== 0)) {
            this.state = 247;
            this.commaWsp();
        }

        this.state = 250;
        this.coordinatePair();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SmoothCurvetoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_smoothCurveto;
    return this;
}

SmoothCurvetoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SmoothCurvetoContext.prototype.constructor = SmoothCurvetoContext;

SmoothCurvetoContext.prototype.smoothCurvetoArgumentSequence = function() {
    return this.getTypedRuleContext(SmoothCurvetoArgumentSequenceContext,0);
};

SmoothCurvetoContext.prototype.wsp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WspContext);
    } else {
        return this.getTypedRuleContext(WspContext,i);
    }
};

SmoothCurvetoContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterSmoothCurveto(this);
	}
};

SmoothCurvetoContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitSmoothCurveto(this);
	}
};




SvgPathParser.SmoothCurvetoContext = SmoothCurvetoContext;

SvgPathParser.prototype.smoothCurveto = function() {

    var localctx = new SmoothCurvetoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SvgPathParser.RULE_smoothCurveto);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 252;
        _la = this._input.LA(1);
        if(!(_la===SvgPathParser.T__12 || _la===SvgPathParser.T__13)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 256;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (SvgPathParser.T__36 - 37)) | (1 << (SvgPathParser.T__37 - 37)) | (1 << (SvgPathParser.T__38 - 37)) | (1 << (SvgPathParser.T__39 - 37)))) !== 0)) {
            this.state = 253;
            this.wsp();
            this.state = 258;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 259;
        this.smoothCurvetoArgumentSequence();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SmoothCurvetoArgumentSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_smoothCurvetoArgumentSequence;
    return this;
}

SmoothCurvetoArgumentSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SmoothCurvetoArgumentSequenceContext.prototype.constructor = SmoothCurvetoArgumentSequenceContext;

SmoothCurvetoArgumentSequenceContext.prototype.smoothCurvetoArgument = function() {
    return this.getTypedRuleContext(SmoothCurvetoArgumentContext,0);
};

SmoothCurvetoArgumentSequenceContext.prototype.smoothCurvetoArgumentSequence = function() {
    return this.getTypedRuleContext(SmoothCurvetoArgumentSequenceContext,0);
};

SmoothCurvetoArgumentSequenceContext.prototype.commaWsp = function() {
    return this.getTypedRuleContext(CommaWspContext,0);
};

SmoothCurvetoArgumentSequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterSmoothCurvetoArgumentSequence(this);
	}
};

SmoothCurvetoArgumentSequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitSmoothCurvetoArgumentSequence(this);
	}
};




SvgPathParser.SmoothCurvetoArgumentSequenceContext = SmoothCurvetoArgumentSequenceContext;

SvgPathParser.prototype.smoothCurvetoArgumentSequence = function() {

    var localctx = new SmoothCurvetoArgumentSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SvgPathParser.RULE_smoothCurvetoArgumentSequence);
    var _la = 0; // Token type
    try {
        this.state = 268;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 261;
            this.smoothCurvetoArgument();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 262;
            this.smoothCurvetoArgument();
            this.state = 264;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SvgPathParser.T__22 - 23)) | (1 << (SvgPathParser.T__36 - 23)) | (1 << (SvgPathParser.T__37 - 23)) | (1 << (SvgPathParser.T__38 - 23)) | (1 << (SvgPathParser.T__39 - 23)))) !== 0)) {
                this.state = 263;
                this.commaWsp();
            }

            this.state = 266;
            this.smoothCurvetoArgumentSequence();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SmoothCurvetoArgumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_smoothCurvetoArgument;
    return this;
}

SmoothCurvetoArgumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SmoothCurvetoArgumentContext.prototype.constructor = SmoothCurvetoArgumentContext;

SmoothCurvetoArgumentContext.prototype.coordinatePair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CoordinatePairContext);
    } else {
        return this.getTypedRuleContext(CoordinatePairContext,i);
    }
};

SmoothCurvetoArgumentContext.prototype.commaWsp = function() {
    return this.getTypedRuleContext(CommaWspContext,0);
};

SmoothCurvetoArgumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterSmoothCurvetoArgument(this);
	}
};

SmoothCurvetoArgumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitSmoothCurvetoArgument(this);
	}
};




SvgPathParser.SmoothCurvetoArgumentContext = SmoothCurvetoArgumentContext;

SvgPathParser.prototype.smoothCurvetoArgument = function() {

    var localctx = new SmoothCurvetoArgumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SvgPathParser.RULE_smoothCurvetoArgument);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        this.coordinatePair();
        this.state = 272;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SvgPathParser.T__22 - 23)) | (1 << (SvgPathParser.T__36 - 23)) | (1 << (SvgPathParser.T__37 - 23)) | (1 << (SvgPathParser.T__38 - 23)) | (1 << (SvgPathParser.T__39 - 23)))) !== 0)) {
            this.state = 271;
            this.commaWsp();
        }

        this.state = 274;
        this.coordinatePair();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function QuadraticBezierCurvetoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_quadraticBezierCurveto;
    return this;
}

QuadraticBezierCurvetoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuadraticBezierCurvetoContext.prototype.constructor = QuadraticBezierCurvetoContext;

QuadraticBezierCurvetoContext.prototype.quadraticBezierCurvetoArgumentSequence = function() {
    return this.getTypedRuleContext(QuadraticBezierCurvetoArgumentSequenceContext,0);
};

QuadraticBezierCurvetoContext.prototype.wsp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WspContext);
    } else {
        return this.getTypedRuleContext(WspContext,i);
    }
};

QuadraticBezierCurvetoContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterQuadraticBezierCurveto(this);
	}
};

QuadraticBezierCurvetoContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitQuadraticBezierCurveto(this);
	}
};




SvgPathParser.QuadraticBezierCurvetoContext = QuadraticBezierCurvetoContext;

SvgPathParser.prototype.quadraticBezierCurveto = function() {

    var localctx = new QuadraticBezierCurvetoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SvgPathParser.RULE_quadraticBezierCurveto);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 276;
        _la = this._input.LA(1);
        if(!(_la===SvgPathParser.T__14 || _la===SvgPathParser.T__15)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 280;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (SvgPathParser.T__36 - 37)) | (1 << (SvgPathParser.T__37 - 37)) | (1 << (SvgPathParser.T__38 - 37)) | (1 << (SvgPathParser.T__39 - 37)))) !== 0)) {
            this.state = 277;
            this.wsp();
            this.state = 282;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 283;
        this.quadraticBezierCurvetoArgumentSequence();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function QuadraticBezierCurvetoArgumentSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_quadraticBezierCurvetoArgumentSequence;
    return this;
}

QuadraticBezierCurvetoArgumentSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuadraticBezierCurvetoArgumentSequenceContext.prototype.constructor = QuadraticBezierCurvetoArgumentSequenceContext;

QuadraticBezierCurvetoArgumentSequenceContext.prototype.quadraticBezierCurvetoArgument = function() {
    return this.getTypedRuleContext(QuadraticBezierCurvetoArgumentContext,0);
};

QuadraticBezierCurvetoArgumentSequenceContext.prototype.quadraticBezierCurvetoArgumentSequence = function() {
    return this.getTypedRuleContext(QuadraticBezierCurvetoArgumentSequenceContext,0);
};

QuadraticBezierCurvetoArgumentSequenceContext.prototype.commaWsp = function() {
    return this.getTypedRuleContext(CommaWspContext,0);
};

QuadraticBezierCurvetoArgumentSequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterQuadraticBezierCurvetoArgumentSequence(this);
	}
};

QuadraticBezierCurvetoArgumentSequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitQuadraticBezierCurvetoArgumentSequence(this);
	}
};




SvgPathParser.QuadraticBezierCurvetoArgumentSequenceContext = QuadraticBezierCurvetoArgumentSequenceContext;

SvgPathParser.prototype.quadraticBezierCurvetoArgumentSequence = function() {

    var localctx = new QuadraticBezierCurvetoArgumentSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SvgPathParser.RULE_quadraticBezierCurvetoArgumentSequence);
    var _la = 0; // Token type
    try {
        this.state = 292;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 285;
            this.quadraticBezierCurvetoArgument();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 286;
            this.quadraticBezierCurvetoArgument();
            this.state = 288;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SvgPathParser.T__22 - 23)) | (1 << (SvgPathParser.T__36 - 23)) | (1 << (SvgPathParser.T__37 - 23)) | (1 << (SvgPathParser.T__38 - 23)) | (1 << (SvgPathParser.T__39 - 23)))) !== 0)) {
                this.state = 287;
                this.commaWsp();
            }

            this.state = 290;
            this.quadraticBezierCurvetoArgumentSequence();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function QuadraticBezierCurvetoArgumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_quadraticBezierCurvetoArgument;
    return this;
}

QuadraticBezierCurvetoArgumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuadraticBezierCurvetoArgumentContext.prototype.constructor = QuadraticBezierCurvetoArgumentContext;

QuadraticBezierCurvetoArgumentContext.prototype.coordinatePair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CoordinatePairContext);
    } else {
        return this.getTypedRuleContext(CoordinatePairContext,i);
    }
};

QuadraticBezierCurvetoArgumentContext.prototype.commaWsp = function() {
    return this.getTypedRuleContext(CommaWspContext,0);
};

QuadraticBezierCurvetoArgumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterQuadraticBezierCurvetoArgument(this);
	}
};

QuadraticBezierCurvetoArgumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitQuadraticBezierCurvetoArgument(this);
	}
};




SvgPathParser.QuadraticBezierCurvetoArgumentContext = QuadraticBezierCurvetoArgumentContext;

SvgPathParser.prototype.quadraticBezierCurvetoArgument = function() {

    var localctx = new QuadraticBezierCurvetoArgumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SvgPathParser.RULE_quadraticBezierCurvetoArgument);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 294;
        this.coordinatePair();
        this.state = 296;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SvgPathParser.T__22 - 23)) | (1 << (SvgPathParser.T__36 - 23)) | (1 << (SvgPathParser.T__37 - 23)) | (1 << (SvgPathParser.T__38 - 23)) | (1 << (SvgPathParser.T__39 - 23)))) !== 0)) {
            this.state = 295;
            this.commaWsp();
        }

        this.state = 298;
        this.coordinatePair();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SmoothQuadraticBezierCurvetoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_smoothQuadraticBezierCurveto;
    return this;
}

SmoothQuadraticBezierCurvetoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SmoothQuadraticBezierCurvetoContext.prototype.constructor = SmoothQuadraticBezierCurvetoContext;

SmoothQuadraticBezierCurvetoContext.prototype.smoothQuadraticBezierCurvetoArgumentSequence = function() {
    return this.getTypedRuleContext(SmoothQuadraticBezierCurvetoArgumentSequenceContext,0);
};

SmoothQuadraticBezierCurvetoContext.prototype.wsp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WspContext);
    } else {
        return this.getTypedRuleContext(WspContext,i);
    }
};

SmoothQuadraticBezierCurvetoContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterSmoothQuadraticBezierCurveto(this);
	}
};

SmoothQuadraticBezierCurvetoContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitSmoothQuadraticBezierCurveto(this);
	}
};




SvgPathParser.SmoothQuadraticBezierCurvetoContext = SmoothQuadraticBezierCurvetoContext;

SvgPathParser.prototype.smoothQuadraticBezierCurveto = function() {

    var localctx = new SmoothQuadraticBezierCurvetoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SvgPathParser.RULE_smoothQuadraticBezierCurveto);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 300;
        _la = this._input.LA(1);
        if(!(_la===SvgPathParser.T__16 || _la===SvgPathParser.T__17)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 304;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (SvgPathParser.T__36 - 37)) | (1 << (SvgPathParser.T__37 - 37)) | (1 << (SvgPathParser.T__38 - 37)) | (1 << (SvgPathParser.T__39 - 37)))) !== 0)) {
            this.state = 301;
            this.wsp();
            this.state = 306;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 307;
        this.smoothQuadraticBezierCurvetoArgumentSequence();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SmoothQuadraticBezierCurvetoArgumentSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_smoothQuadraticBezierCurvetoArgumentSequence;
    return this;
}

SmoothQuadraticBezierCurvetoArgumentSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SmoothQuadraticBezierCurvetoArgumentSequenceContext.prototype.constructor = SmoothQuadraticBezierCurvetoArgumentSequenceContext;

SmoothQuadraticBezierCurvetoArgumentSequenceContext.prototype.coordinatePair = function() {
    return this.getTypedRuleContext(CoordinatePairContext,0);
};

SmoothQuadraticBezierCurvetoArgumentSequenceContext.prototype.smoothQuadraticBezierCurvetoArgumentSequence = function() {
    return this.getTypedRuleContext(SmoothQuadraticBezierCurvetoArgumentSequenceContext,0);
};

SmoothQuadraticBezierCurvetoArgumentSequenceContext.prototype.commaWsp = function() {
    return this.getTypedRuleContext(CommaWspContext,0);
};

SmoothQuadraticBezierCurvetoArgumentSequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterSmoothQuadraticBezierCurvetoArgumentSequence(this);
	}
};

SmoothQuadraticBezierCurvetoArgumentSequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitSmoothQuadraticBezierCurvetoArgumentSequence(this);
	}
};




SvgPathParser.SmoothQuadraticBezierCurvetoArgumentSequenceContext = SmoothQuadraticBezierCurvetoArgumentSequenceContext;

SvgPathParser.prototype.smoothQuadraticBezierCurvetoArgumentSequence = function() {

    var localctx = new SmoothQuadraticBezierCurvetoArgumentSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, SvgPathParser.RULE_smoothQuadraticBezierCurvetoArgumentSequence);
    var _la = 0; // Token type
    try {
        this.state = 316;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 309;
            this.coordinatePair();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 310;
            this.coordinatePair();
            this.state = 312;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SvgPathParser.T__22 - 23)) | (1 << (SvgPathParser.T__36 - 23)) | (1 << (SvgPathParser.T__37 - 23)) | (1 << (SvgPathParser.T__38 - 23)) | (1 << (SvgPathParser.T__39 - 23)))) !== 0)) {
                this.state = 311;
                this.commaWsp();
            }

            this.state = 314;
            this.smoothQuadraticBezierCurvetoArgumentSequence();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EllipticalArcContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_ellipticalArc;
    return this;
}

EllipticalArcContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EllipticalArcContext.prototype.constructor = EllipticalArcContext;

EllipticalArcContext.prototype.ellipticalArcArgumentSequence = function() {
    return this.getTypedRuleContext(EllipticalArcArgumentSequenceContext,0);
};

EllipticalArcContext.prototype.wsp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WspContext);
    } else {
        return this.getTypedRuleContext(WspContext,i);
    }
};

EllipticalArcContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterEllipticalArc(this);
	}
};

EllipticalArcContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitEllipticalArc(this);
	}
};




SvgPathParser.EllipticalArcContext = EllipticalArcContext;

SvgPathParser.prototype.ellipticalArc = function() {

    var localctx = new EllipticalArcContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, SvgPathParser.RULE_ellipticalArc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318;
        _la = this._input.LA(1);
        if(!(_la===SvgPathParser.T__18 || _la===SvgPathParser.T__19)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 322;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (SvgPathParser.T__36 - 37)) | (1 << (SvgPathParser.T__37 - 37)) | (1 << (SvgPathParser.T__38 - 37)) | (1 << (SvgPathParser.T__39 - 37)))) !== 0)) {
            this.state = 319;
            this.wsp();
            this.state = 324;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 325;
        this.ellipticalArcArgumentSequence();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EllipticalArcArgumentSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_ellipticalArcArgumentSequence;
    return this;
}

EllipticalArcArgumentSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EllipticalArcArgumentSequenceContext.prototype.constructor = EllipticalArcArgumentSequenceContext;

EllipticalArcArgumentSequenceContext.prototype.ellipticalArcArgument = function() {
    return this.getTypedRuleContext(EllipticalArcArgumentContext,0);
};

EllipticalArcArgumentSequenceContext.prototype.ellipticalArcArgumentSequence = function() {
    return this.getTypedRuleContext(EllipticalArcArgumentSequenceContext,0);
};

EllipticalArcArgumentSequenceContext.prototype.commaWsp = function() {
    return this.getTypedRuleContext(CommaWspContext,0);
};

EllipticalArcArgumentSequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterEllipticalArcArgumentSequence(this);
	}
};

EllipticalArcArgumentSequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitEllipticalArcArgumentSequence(this);
	}
};




SvgPathParser.EllipticalArcArgumentSequenceContext = EllipticalArcArgumentSequenceContext;

SvgPathParser.prototype.ellipticalArcArgumentSequence = function() {

    var localctx = new EllipticalArcArgumentSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, SvgPathParser.RULE_ellipticalArcArgumentSequence);
    var _la = 0; // Token type
    try {
        this.state = 334;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 327;
            this.ellipticalArcArgument();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 328;
            this.ellipticalArcArgument();
            this.state = 330;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SvgPathParser.T__22 - 23)) | (1 << (SvgPathParser.T__36 - 23)) | (1 << (SvgPathParser.T__37 - 23)) | (1 << (SvgPathParser.T__38 - 23)) | (1 << (SvgPathParser.T__39 - 23)))) !== 0)) {
                this.state = 329;
                this.commaWsp();
            }

            this.state = 332;
            this.ellipticalArcArgumentSequence();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EllipticalArcArgumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_ellipticalArcArgument;
    return this;
}

EllipticalArcArgumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EllipticalArcArgumentContext.prototype.constructor = EllipticalArcArgumentContext;

EllipticalArcArgumentContext.prototype.nonnegativeNumber = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NonnegativeNumberContext);
    } else {
        return this.getTypedRuleContext(NonnegativeNumberContext,i);
    }
};

EllipticalArcArgumentContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

EllipticalArcArgumentContext.prototype.commaWsp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CommaWspContext);
    } else {
        return this.getTypedRuleContext(CommaWspContext,i);
    }
};

EllipticalArcArgumentContext.prototype.flag = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FlagContext);
    } else {
        return this.getTypedRuleContext(FlagContext,i);
    }
};

EllipticalArcArgumentContext.prototype.coordinatePair = function() {
    return this.getTypedRuleContext(CoordinatePairContext,0);
};

EllipticalArcArgumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterEllipticalArcArgument(this);
	}
};

EllipticalArcArgumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitEllipticalArcArgument(this);
	}
};




SvgPathParser.EllipticalArcArgumentContext = EllipticalArcArgumentContext;

SvgPathParser.prototype.ellipticalArcArgument = function() {

    var localctx = new EllipticalArcArgumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, SvgPathParser.RULE_ellipticalArcArgument);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 336;
        this.nonnegativeNumber();
        this.state = 338;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SvgPathParser.T__22 - 23)) | (1 << (SvgPathParser.T__36 - 23)) | (1 << (SvgPathParser.T__37 - 23)) | (1 << (SvgPathParser.T__38 - 23)) | (1 << (SvgPathParser.T__39 - 23)))) !== 0)) {
            this.state = 337;
            this.commaWsp();
        }

        this.state = 340;
        this.nonnegativeNumber();
        this.state = 342;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SvgPathParser.T__22 - 23)) | (1 << (SvgPathParser.T__36 - 23)) | (1 << (SvgPathParser.T__37 - 23)) | (1 << (SvgPathParser.T__38 - 23)) | (1 << (SvgPathParser.T__39 - 23)))) !== 0)) {
            this.state = 341;
            this.commaWsp();
        }

        this.state = 344;
        this.number();
        this.state = 345;
        this.commaWsp();
        this.state = 346;
        this.flag();
        this.state = 348;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SvgPathParser.T__22 - 23)) | (1 << (SvgPathParser.T__36 - 23)) | (1 << (SvgPathParser.T__37 - 23)) | (1 << (SvgPathParser.T__38 - 23)) | (1 << (SvgPathParser.T__39 - 23)))) !== 0)) {
            this.state = 347;
            this.commaWsp();
        }

        this.state = 350;
        this.flag();
        this.state = 352;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SvgPathParser.T__22 - 23)) | (1 << (SvgPathParser.T__36 - 23)) | (1 << (SvgPathParser.T__37 - 23)) | (1 << (SvgPathParser.T__38 - 23)) | (1 << (SvgPathParser.T__39 - 23)))) !== 0)) {
            this.state = 351;
            this.commaWsp();
        }

        this.state = 354;
        this.coordinatePair();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CoordinatePairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_coordinatePair;
    return this;
}

CoordinatePairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CoordinatePairContext.prototype.constructor = CoordinatePairContext;

CoordinatePairContext.prototype.coordinate = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CoordinateContext);
    } else {
        return this.getTypedRuleContext(CoordinateContext,i);
    }
};

CoordinatePairContext.prototype.commaWsp = function() {
    return this.getTypedRuleContext(CommaWspContext,0);
};

CoordinatePairContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterCoordinatePair(this);
	}
};

CoordinatePairContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitCoordinatePair(this);
	}
};




SvgPathParser.CoordinatePairContext = CoordinatePairContext;

SvgPathParser.prototype.coordinatePair = function() {

    var localctx = new CoordinatePairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, SvgPathParser.RULE_coordinatePair);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 356;
        this.coordinate();
        this.state = 358;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (SvgPathParser.T__22 - 23)) | (1 << (SvgPathParser.T__36 - 23)) | (1 << (SvgPathParser.T__37 - 23)) | (1 << (SvgPathParser.T__38 - 23)) | (1 << (SvgPathParser.T__39 - 23)))) !== 0)) {
            this.state = 357;
            this.commaWsp();
        }

        this.state = 360;
        this.coordinate();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CoordinateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_coordinate;
    return this;
}

CoordinateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CoordinateContext.prototype.constructor = CoordinateContext;

CoordinateContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

CoordinateContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterCoordinate(this);
	}
};

CoordinateContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitCoordinate(this);
	}
};




SvgPathParser.CoordinateContext = CoordinateContext;

SvgPathParser.prototype.coordinate = function() {

    var localctx = new CoordinateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, SvgPathParser.RULE_coordinate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 362;
        this.number();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NonnegativeNumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_nonnegativeNumber;
    return this;
}

NonnegativeNumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NonnegativeNumberContext.prototype.constructor = NonnegativeNumberContext;

NonnegativeNumberContext.prototype.integerConstant = function() {
    return this.getTypedRuleContext(IntegerConstantContext,0);
};

NonnegativeNumberContext.prototype.floatingPointConstant = function() {
    return this.getTypedRuleContext(FloatingPointConstantContext,0);
};

NonnegativeNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterNonnegativeNumber(this);
	}
};

NonnegativeNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitNonnegativeNumber(this);
	}
};




SvgPathParser.NonnegativeNumberContext = NonnegativeNumberContext;

SvgPathParser.prototype.nonnegativeNumber = function() {

    var localctx = new NonnegativeNumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, SvgPathParser.RULE_nonnegativeNumber);
    try {
        this.state = 366;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 364;
            this.integerConstant();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 365;
            this.floatingPointConstant();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.integerConstant = function() {
    return this.getTypedRuleContext(IntegerConstantContext,0);
};

NumberContext.prototype.sign = function() {
    return this.getTypedRuleContext(SignContext,0);
};

NumberContext.prototype.floatingPointConstant = function() {
    return this.getTypedRuleContext(FloatingPointConstantContext,0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitNumber(this);
	}
};




SvgPathParser.NumberContext = NumberContext;

SvgPathParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, SvgPathParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.state = 376;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 369;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SvgPathParser.T__26 || _la===SvgPathParser.T__27) {
                this.state = 368;
                this.sign();
            }

            this.state = 371;
            this.integerConstant();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 373;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SvgPathParser.T__26 || _la===SvgPathParser.T__27) {
                this.state = 372;
                this.sign();
            }

            this.state = 375;
            this.floatingPointConstant();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FlagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_flag;
    return this;
}

FlagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FlagContext.prototype.constructor = FlagContext;


FlagContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterFlag(this);
	}
};

FlagContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitFlag(this);
	}
};




SvgPathParser.FlagContext = FlagContext;

SvgPathParser.prototype.flag = function() {

    var localctx = new FlagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, SvgPathParser.RULE_flag);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 378;
        _la = this._input.LA(1);
        if(!(_la===SvgPathParser.T__20 || _la===SvgPathParser.T__21)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CommaWspContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_commaWsp;
    return this;
}

CommaWspContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommaWspContext.prototype.constructor = CommaWspContext;

CommaWspContext.prototype.wsp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WspContext);
    } else {
        return this.getTypedRuleContext(WspContext,i);
    }
};

CommaWspContext.prototype.comma = function() {
    return this.getTypedRuleContext(CommaContext,0);
};

CommaWspContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterCommaWsp(this);
	}
};

CommaWspContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitCommaWsp(this);
	}
};




SvgPathParser.CommaWspContext = CommaWspContext;

SvgPathParser.prototype.commaWsp = function() {

    var localctx = new CommaWspContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, SvgPathParser.RULE_commaWsp);
    var _la = 0; // Token type
    try {
        this.state = 401;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SvgPathParser.T__36:
        case SvgPathParser.T__37:
        case SvgPathParser.T__38:
        case SvgPathParser.T__39:
            this.enterOuterAlt(localctx, 1);
            this.state = 381; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 380;
            		this.wsp();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 383; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,50, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 386;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SvgPathParser.T__22) {
                this.state = 385;
                this.comma();
            }

            this.state = 391;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (SvgPathParser.T__36 - 37)) | (1 << (SvgPathParser.T__37 - 37)) | (1 << (SvgPathParser.T__38 - 37)) | (1 << (SvgPathParser.T__39 - 37)))) !== 0)) {
                this.state = 388;
                this.wsp();
                this.state = 393;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case SvgPathParser.T__22:
            this.enterOuterAlt(localctx, 2);
            this.state = 394;
            this.comma();
            this.state = 398;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (SvgPathParser.T__36 - 37)) | (1 << (SvgPathParser.T__37 - 37)) | (1 << (SvgPathParser.T__38 - 37)) | (1 << (SvgPathParser.T__39 - 37)))) !== 0)) {
                this.state = 395;
                this.wsp();
                this.state = 400;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CommaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_comma;
    return this;
}

CommaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommaContext.prototype.constructor = CommaContext;


CommaContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterComma(this);
	}
};

CommaContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitComma(this);
	}
};




SvgPathParser.CommaContext = CommaContext;

SvgPathParser.prototype.comma = function() {

    var localctx = new CommaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, SvgPathParser.RULE_comma);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 403;
        this.match(SvgPathParser.T__22);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IntegerConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_integerConstant;
    return this;
}

IntegerConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntegerConstantContext.prototype.constructor = IntegerConstantContext;

IntegerConstantContext.prototype.digitSequence = function() {
    return this.getTypedRuleContext(DigitSequenceContext,0);
};

IntegerConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterIntegerConstant(this);
	}
};

IntegerConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitIntegerConstant(this);
	}
};




SvgPathParser.IntegerConstantContext = IntegerConstantContext;

SvgPathParser.prototype.integerConstant = function() {

    var localctx = new IntegerConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, SvgPathParser.RULE_integerConstant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 405;
        this.digitSequence();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FloatingPointConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_floatingPointConstant;
    return this;
}

FloatingPointConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FloatingPointConstantContext.prototype.constructor = FloatingPointConstantContext;

FloatingPointConstantContext.prototype.fractionalConstant = function() {
    return this.getTypedRuleContext(FractionalConstantContext,0);
};

FloatingPointConstantContext.prototype.exponent = function() {
    return this.getTypedRuleContext(ExponentContext,0);
};

FloatingPointConstantContext.prototype.digitSequence = function() {
    return this.getTypedRuleContext(DigitSequenceContext,0);
};

FloatingPointConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterFloatingPointConstant(this);
	}
};

FloatingPointConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitFloatingPointConstant(this);
	}
};




SvgPathParser.FloatingPointConstantContext = FloatingPointConstantContext;

SvgPathParser.prototype.floatingPointConstant = function() {

    var localctx = new FloatingPointConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, SvgPathParser.RULE_floatingPointConstant);
    var _la = 0; // Token type
    try {
        this.state = 414;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,56,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 407;
            this.fractionalConstant();
            this.state = 409;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SvgPathParser.T__24 || _la===SvgPathParser.T__25) {
                this.state = 408;
                this.exponent();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 411;
            this.digitSequence();
            this.state = 412;
            this.exponent();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FractionalConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_fractionalConstant;
    return this;
}

FractionalConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FractionalConstantContext.prototype.constructor = FractionalConstantContext;

FractionalConstantContext.prototype.digitSequence = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DigitSequenceContext);
    } else {
        return this.getTypedRuleContext(DigitSequenceContext,i);
    }
};

FractionalConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterFractionalConstant(this);
	}
};

FractionalConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitFractionalConstant(this);
	}
};




SvgPathParser.FractionalConstantContext = FractionalConstantContext;

SvgPathParser.prototype.fractionalConstant = function() {

    var localctx = new FractionalConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, SvgPathParser.RULE_fractionalConstant);
    var _la = 0; // Token type
    try {
        this.state = 424;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 417;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 21)) & ~0x1f) == 0 && ((1 << (_la - 21)) & ((1 << (SvgPathParser.T__20 - 21)) | (1 << (SvgPathParser.T__21 - 21)) | (1 << (SvgPathParser.T__28 - 21)) | (1 << (SvgPathParser.T__29 - 21)) | (1 << (SvgPathParser.T__30 - 21)) | (1 << (SvgPathParser.T__31 - 21)) | (1 << (SvgPathParser.T__32 - 21)) | (1 << (SvgPathParser.T__33 - 21)) | (1 << (SvgPathParser.T__34 - 21)) | (1 << (SvgPathParser.T__35 - 21)))) !== 0)) {
                this.state = 416;
                this.digitSequence();
            }

            this.state = 419;
            this.match(SvgPathParser.T__23);
            this.state = 420;
            this.digitSequence();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 421;
            this.digitSequence();
            this.state = 422;
            this.match(SvgPathParser.T__23);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExponentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_exponent;
    return this;
}

ExponentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExponentContext.prototype.constructor = ExponentContext;

ExponentContext.prototype.digitSequence = function() {
    return this.getTypedRuleContext(DigitSequenceContext,0);
};

ExponentContext.prototype.sign = function() {
    return this.getTypedRuleContext(SignContext,0);
};

ExponentContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterExponent(this);
	}
};

ExponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitExponent(this);
	}
};




SvgPathParser.ExponentContext = ExponentContext;

SvgPathParser.prototype.exponent = function() {

    var localctx = new ExponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, SvgPathParser.RULE_exponent);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 426;
        _la = this._input.LA(1);
        if(!(_la===SvgPathParser.T__24 || _la===SvgPathParser.T__25)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 428;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SvgPathParser.T__26 || _la===SvgPathParser.T__27) {
            this.state = 427;
            this.sign();
        }

        this.state = 430;
        this.digitSequence();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_sign;
    return this;
}

SignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SignContext.prototype.constructor = SignContext;


SignContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterSign(this);
	}
};

SignContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitSign(this);
	}
};




SvgPathParser.SignContext = SignContext;

SvgPathParser.prototype.sign = function() {

    var localctx = new SignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, SvgPathParser.RULE_sign);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 432;
        _la = this._input.LA(1);
        if(!(_la===SvgPathParser.T__26 || _la===SvgPathParser.T__27)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DigitSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_digitSequence;
    return this;
}

DigitSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DigitSequenceContext.prototype.constructor = DigitSequenceContext;

DigitSequenceContext.prototype.digit = function() {
    return this.getTypedRuleContext(DigitContext,0);
};

DigitSequenceContext.prototype.digitSequence = function() {
    return this.getTypedRuleContext(DigitSequenceContext,0);
};

DigitSequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterDigitSequence(this);
	}
};

DigitSequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitDigitSequence(this);
	}
};




SvgPathParser.DigitSequenceContext = DigitSequenceContext;

SvgPathParser.prototype.digitSequence = function() {

    var localctx = new DigitSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, SvgPathParser.RULE_digitSequence);
    try {
        this.state = 438;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 434;
            this.digit();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 435;
            this.digit();
            this.state = 436;
            this.digitSequence();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DigitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_digit;
    return this;
}

DigitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DigitContext.prototype.constructor = DigitContext;


DigitContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterDigit(this);
	}
};

DigitContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitDigit(this);
	}
};




SvgPathParser.DigitContext = DigitContext;

SvgPathParser.prototype.digit = function() {

    var localctx = new DigitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, SvgPathParser.RULE_digit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 440;
        _la = this._input.LA(1);
        if(!(((((_la - 21)) & ~0x1f) == 0 && ((1 << (_la - 21)) & ((1 << (SvgPathParser.T__20 - 21)) | (1 << (SvgPathParser.T__21 - 21)) | (1 << (SvgPathParser.T__28 - 21)) | (1 << (SvgPathParser.T__29 - 21)) | (1 << (SvgPathParser.T__30 - 21)) | (1 << (SvgPathParser.T__31 - 21)) | (1 << (SvgPathParser.T__32 - 21)) | (1 << (SvgPathParser.T__33 - 21)) | (1 << (SvgPathParser.T__34 - 21)) | (1 << (SvgPathParser.T__35 - 21)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WspContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SvgPathParser.RULE_wsp;
    return this;
}

WspContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WspContext.prototype.constructor = WspContext;


WspContext.prototype.enterRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.enterWsp(this);
	}
};

WspContext.prototype.exitRule = function(listener) {
    if(listener instanceof SvgPathListener ) {
        listener.exitWsp(this);
	}
};




SvgPathParser.WspContext = WspContext;

SvgPathParser.prototype.wsp = function() {

    var localctx = new WspContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, SvgPathParser.RULE_wsp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 442;
        _la = this._input.LA(1);
        if(!(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (SvgPathParser.T__36 - 37)) | (1 << (SvgPathParser.T__37 - 37)) | (1 << (SvgPathParser.T__38 - 37)) | (1 << (SvgPathParser.T__39 - 37)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SvgPathParser = SvgPathParser;
