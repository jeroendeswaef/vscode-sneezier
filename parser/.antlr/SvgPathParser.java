// Generated from /Users/urbantz/ownprj/sneezier/parser/SvgPath.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SvgPathParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, T__39=40;
	public static final int
		RULE_eval = 0, RULE_svgPath = 1, RULE_movetoDrawtoCommandGroups = 2, RULE_movetoDrawtoCommandGroup = 3, 
		RULE_drawtoCommands = 4, RULE_drawtoCommand = 5, RULE_moveto = 6, RULE_movetoArgumentSequence = 7, 
		RULE_closepath = 8, RULE_lineto = 9, RULE_linetoArgumentSequence = 10, 
		RULE_horizontalLineto = 11, RULE_horizontalLinetoArgumentSequence = 12, 
		RULE_verticalLineto = 13, RULE_verticalLinetoArgumentSequence = 14, RULE_curveto = 15, 
		RULE_curvetoArgumentSequence = 16, RULE_curvetoArgument = 17, RULE_smoothCurveto = 18, 
		RULE_smoothCurvetoArgumentSequence = 19, RULE_smoothCurvetoArgument = 20, 
		RULE_quadraticBezierCurveto = 21, RULE_quadraticBezierCurvetoArgumentSequence = 22, 
		RULE_quadraticBezierCurvetoArgument = 23, RULE_smoothQuadraticBezierCurveto = 24, 
		RULE_smoothQuadraticBezierCurvetoArgumentSequence = 25, RULE_ellipticalArc = 26, 
		RULE_ellipticalArcArgumentSequence = 27, RULE_ellipticalArcArgument = 28, 
		RULE_coordinatePair = 29, RULE_coordinate = 30, RULE_nonnegativeNumber = 31, 
		RULE_number = 32, RULE_flag = 33, RULE_commaWsp = 34, RULE_comma = 35, 
		RULE_integerConstant = 36, RULE_floatingPointConstant = 37, RULE_fractionalConstant = 38, 
		RULE_exponent = 39, RULE_sign = 40, RULE_digitSequence = 41, RULE_digit = 42, 
		RULE_wsp = 43;
	public static final String[] ruleNames = {
		"eval", "svgPath", "movetoDrawtoCommandGroups", "movetoDrawtoCommandGroup", 
		"drawtoCommands", "drawtoCommand", "moveto", "movetoArgumentSequence", 
		"closepath", "lineto", "linetoArgumentSequence", "horizontalLineto", "horizontalLinetoArgumentSequence", 
		"verticalLineto", "verticalLinetoArgumentSequence", "curveto", "curvetoArgumentSequence", 
		"curvetoArgument", "smoothCurveto", "smoothCurvetoArgumentSequence", "smoothCurvetoArgument", 
		"quadraticBezierCurveto", "quadraticBezierCurvetoArgumentSequence", "quadraticBezierCurvetoArgument", 
		"smoothQuadraticBezierCurveto", "smoothQuadraticBezierCurvetoArgumentSequence", 
		"ellipticalArc", "ellipticalArcArgumentSequence", "ellipticalArcArgument", 
		"coordinatePair", "coordinate", "nonnegativeNumber", "number", "flag", 
		"commaWsp", "comma", "integerConstant", "floatingPointConstant", "fractionalConstant", 
		"exponent", "sign", "digitSequence", "digit", "wsp"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'M'", "'m'", "'Z'", "'z'", "'L'", "'l'", "'H'", "'h'", "'V'", "'v'", 
		"'C'", "'c'", "'S'", "'s'", "'Q'", "'q'", "'T'", "'t'", "'A'", "'a'", 
		"'0'", "'1'", "','", "'.'", "'e'", "'E'", "'+'", "'-'", "'2'", "'3'", 
		"'4'", "'5'", "'6'", "'7'", "'8'", "'9'", "' '", "'\t'", "'\r'", "'\n'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "SvgPath.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public SvgPathParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class EvalContext extends ParserRuleContext {
		public SvgPathContext svgPath() {
			return getRuleContext(SvgPathContext.class,0);
		}
		public EvalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eval; }
	}

	public final EvalContext eval() throws RecognitionException {
		EvalContext _localctx = new EvalContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_eval);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(88);
			svgPath();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SvgPathContext extends ParserRuleContext {
		public List<WspContext> wsp() {
			return getRuleContexts(WspContext.class);
		}
		public WspContext wsp(int i) {
			return getRuleContext(WspContext.class,i);
		}
		public MovetoDrawtoCommandGroupsContext movetoDrawtoCommandGroups() {
			return getRuleContext(MovetoDrawtoCommandGroupsContext.class,0);
		}
		public SvgPathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_svgPath; }
	}

	public final SvgPathContext svgPath() throws RecognitionException {
		SvgPathContext _localctx = new SvgPathContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_svgPath);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(93);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(90);
					wsp();
					}
					} 
				}
				setState(95);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			}
			setState(97);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0 || _la==T__1) {
				{
				setState(96);
				movetoDrawtoCommandGroups();
				}
			}

			setState(102);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				{
				setState(99);
				wsp();
				}
				}
				setState(104);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MovetoDrawtoCommandGroupsContext extends ParserRuleContext {
		public MovetoDrawtoCommandGroupContext movetoDrawtoCommandGroup() {
			return getRuleContext(MovetoDrawtoCommandGroupContext.class,0);
		}
		public MovetoDrawtoCommandGroupsContext movetoDrawtoCommandGroups() {
			return getRuleContext(MovetoDrawtoCommandGroupsContext.class,0);
		}
		public List<WspContext> wsp() {
			return getRuleContexts(WspContext.class);
		}
		public WspContext wsp(int i) {
			return getRuleContext(WspContext.class,i);
		}
		public MovetoDrawtoCommandGroupsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_movetoDrawtoCommandGroups; }
	}

	public final MovetoDrawtoCommandGroupsContext movetoDrawtoCommandGroups() throws RecognitionException {
		MovetoDrawtoCommandGroupsContext _localctx = new MovetoDrawtoCommandGroupsContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_movetoDrawtoCommandGroups);
		int _la;
		try {
			setState(115);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(105);
				movetoDrawtoCommandGroup();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(106);
				movetoDrawtoCommandGroup();
				setState(110);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
					{
					{
					setState(107);
					wsp();
					}
					}
					setState(112);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(113);
				movetoDrawtoCommandGroups();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MovetoDrawtoCommandGroupContext extends ParserRuleContext {
		public MovetoContext moveto() {
			return getRuleContext(MovetoContext.class,0);
		}
		public List<WspContext> wsp() {
			return getRuleContexts(WspContext.class);
		}
		public WspContext wsp(int i) {
			return getRuleContext(WspContext.class,i);
		}
		public DrawtoCommandsContext drawtoCommands() {
			return getRuleContext(DrawtoCommandsContext.class,0);
		}
		public MovetoDrawtoCommandGroupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_movetoDrawtoCommandGroup; }
	}

	public final MovetoDrawtoCommandGroupContext movetoDrawtoCommandGroup() throws RecognitionException {
		MovetoDrawtoCommandGroupContext _localctx = new MovetoDrawtoCommandGroupContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_movetoDrawtoCommandGroup);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			moveto();
			setState(121);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(118);
					wsp();
					}
					} 
				}
				setState(123);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			setState(125);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << T__12) | (1L << T__13) | (1L << T__14) | (1L << T__15) | (1L << T__16) | (1L << T__17) | (1L << T__18) | (1L << T__19))) != 0)) {
				{
				setState(124);
				drawtoCommands();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DrawtoCommandsContext extends ParserRuleContext {
		public DrawtoCommandContext drawtoCommand() {
			return getRuleContext(DrawtoCommandContext.class,0);
		}
		public DrawtoCommandsContext drawtoCommands() {
			return getRuleContext(DrawtoCommandsContext.class,0);
		}
		public List<WspContext> wsp() {
			return getRuleContexts(WspContext.class);
		}
		public WspContext wsp(int i) {
			return getRuleContext(WspContext.class,i);
		}
		public DrawtoCommandsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_drawtoCommands; }
	}

	public final DrawtoCommandsContext drawtoCommands() throws RecognitionException {
		DrawtoCommandsContext _localctx = new DrawtoCommandsContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_drawtoCommands);
		int _la;
		try {
			setState(137);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(127);
				drawtoCommand();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(128);
				drawtoCommand();
				setState(132);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
					{
					{
					setState(129);
					wsp();
					}
					}
					setState(134);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(135);
				drawtoCommands();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DrawtoCommandContext extends ParserRuleContext {
		public ClosepathContext closepath() {
			return getRuleContext(ClosepathContext.class,0);
		}
		public LinetoContext lineto() {
			return getRuleContext(LinetoContext.class,0);
		}
		public HorizontalLinetoContext horizontalLineto() {
			return getRuleContext(HorizontalLinetoContext.class,0);
		}
		public VerticalLinetoContext verticalLineto() {
			return getRuleContext(VerticalLinetoContext.class,0);
		}
		public CurvetoContext curveto() {
			return getRuleContext(CurvetoContext.class,0);
		}
		public SmoothCurvetoContext smoothCurveto() {
			return getRuleContext(SmoothCurvetoContext.class,0);
		}
		public QuadraticBezierCurvetoContext quadraticBezierCurveto() {
			return getRuleContext(QuadraticBezierCurvetoContext.class,0);
		}
		public SmoothQuadraticBezierCurvetoContext smoothQuadraticBezierCurveto() {
			return getRuleContext(SmoothQuadraticBezierCurvetoContext.class,0);
		}
		public EllipticalArcContext ellipticalArc() {
			return getRuleContext(EllipticalArcContext.class,0);
		}
		public DrawtoCommandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_drawtoCommand; }
	}

	public final DrawtoCommandContext drawtoCommand() throws RecognitionException {
		DrawtoCommandContext _localctx = new DrawtoCommandContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_drawtoCommand);
		try {
			setState(148);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__2:
			case T__3:
				enterOuterAlt(_localctx, 1);
				{
				setState(139);
				closepath();
				}
				break;
			case T__4:
			case T__5:
				enterOuterAlt(_localctx, 2);
				{
				setState(140);
				lineto();
				}
				break;
			case T__6:
			case T__7:
				enterOuterAlt(_localctx, 3);
				{
				setState(141);
				horizontalLineto();
				}
				break;
			case T__8:
			case T__9:
				enterOuterAlt(_localctx, 4);
				{
				setState(142);
				verticalLineto();
				}
				break;
			case T__10:
			case T__11:
				enterOuterAlt(_localctx, 5);
				{
				setState(143);
				curveto();
				}
				break;
			case T__12:
			case T__13:
				enterOuterAlt(_localctx, 6);
				{
				setState(144);
				smoothCurveto();
				}
				break;
			case T__14:
			case T__15:
				enterOuterAlt(_localctx, 7);
				{
				setState(145);
				quadraticBezierCurveto();
				}
				break;
			case T__16:
			case T__17:
				enterOuterAlt(_localctx, 8);
				{
				setState(146);
				smoothQuadraticBezierCurveto();
				}
				break;
			case T__18:
			case T__19:
				enterOuterAlt(_localctx, 9);
				{
				setState(147);
				ellipticalArc();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MovetoContext extends ParserRuleContext {
		public MovetoArgumentSequenceContext movetoArgumentSequence() {
			return getRuleContext(MovetoArgumentSequenceContext.class,0);
		}
		public List<WspContext> wsp() {
			return getRuleContexts(WspContext.class);
		}
		public WspContext wsp(int i) {
			return getRuleContext(WspContext.class,i);
		}
		public MovetoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moveto; }
	}

	public final MovetoContext moveto() throws RecognitionException {
		MovetoContext _localctx = new MovetoContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_moveto);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(150);
			_la = _input.LA(1);
			if ( !(_la==T__0 || _la==T__1) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(154);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				{
				setState(151);
				wsp();
				}
				}
				setState(156);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(157);
			movetoArgumentSequence();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MovetoArgumentSequenceContext extends ParserRuleContext {
		public CoordinatePairContext coordinatePair() {
			return getRuleContext(CoordinatePairContext.class,0);
		}
		public LinetoArgumentSequenceContext linetoArgumentSequence() {
			return getRuleContext(LinetoArgumentSequenceContext.class,0);
		}
		public CommaWspContext commaWsp() {
			return getRuleContext(CommaWspContext.class,0);
		}
		public MovetoArgumentSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_movetoArgumentSequence; }
	}

	public final MovetoArgumentSequenceContext movetoArgumentSequence() throws RecognitionException {
		MovetoArgumentSequenceContext _localctx = new MovetoArgumentSequenceContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_movetoArgumentSequence);
		int _la;
		try {
			setState(166);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(159);
				coordinatePair();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(160);
				coordinatePair();
				setState(162);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
					{
					setState(161);
					commaWsp();
					}
				}

				setState(164);
				linetoArgumentSequence();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClosepathContext extends ParserRuleContext {
		public ClosepathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_closepath; }
	}

	public final ClosepathContext closepath() throws RecognitionException {
		ClosepathContext _localctx = new ClosepathContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_closepath);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			_la = _input.LA(1);
			if ( !(_la==T__2 || _la==T__3) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LinetoContext extends ParserRuleContext {
		public LinetoArgumentSequenceContext linetoArgumentSequence() {
			return getRuleContext(LinetoArgumentSequenceContext.class,0);
		}
		public List<WspContext> wsp() {
			return getRuleContexts(WspContext.class);
		}
		public WspContext wsp(int i) {
			return getRuleContext(WspContext.class,i);
		}
		public LinetoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lineto; }
	}

	public final LinetoContext lineto() throws RecognitionException {
		LinetoContext _localctx = new LinetoContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_lineto);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(170);
			_la = _input.LA(1);
			if ( !(_la==T__4 || _la==T__5) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(174);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				{
				setState(171);
				wsp();
				}
				}
				setState(176);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(177);
			linetoArgumentSequence();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LinetoArgumentSequenceContext extends ParserRuleContext {
		public CoordinatePairContext coordinatePair() {
			return getRuleContext(CoordinatePairContext.class,0);
		}
		public LinetoArgumentSequenceContext linetoArgumentSequence() {
			return getRuleContext(LinetoArgumentSequenceContext.class,0);
		}
		public CommaWspContext commaWsp() {
			return getRuleContext(CommaWspContext.class,0);
		}
		public LinetoArgumentSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_linetoArgumentSequence; }
	}

	public final LinetoArgumentSequenceContext linetoArgumentSequence() throws RecognitionException {
		LinetoArgumentSequenceContext _localctx = new LinetoArgumentSequenceContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_linetoArgumentSequence);
		int _la;
		try {
			setState(186);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(179);
				coordinatePair();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(180);
				coordinatePair();
				setState(182);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
					{
					setState(181);
					commaWsp();
					}
				}

				setState(184);
				linetoArgumentSequence();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class HorizontalLinetoContext extends ParserRuleContext {
		public HorizontalLinetoArgumentSequenceContext horizontalLinetoArgumentSequence() {
			return getRuleContext(HorizontalLinetoArgumentSequenceContext.class,0);
		}
		public List<WspContext> wsp() {
			return getRuleContexts(WspContext.class);
		}
		public WspContext wsp(int i) {
			return getRuleContext(WspContext.class,i);
		}
		public HorizontalLinetoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_horizontalLineto; }
	}

	public final HorizontalLinetoContext horizontalLineto() throws RecognitionException {
		HorizontalLinetoContext _localctx = new HorizontalLinetoContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_horizontalLineto);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(188);
			_la = _input.LA(1);
			if ( !(_la==T__6 || _la==T__7) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(192);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				{
				setState(189);
				wsp();
				}
				}
				setState(194);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(195);
			horizontalLinetoArgumentSequence();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class HorizontalLinetoArgumentSequenceContext extends ParserRuleContext {
		public CoordinateContext coordinate() {
			return getRuleContext(CoordinateContext.class,0);
		}
		public HorizontalLinetoArgumentSequenceContext horizontalLinetoArgumentSequence() {
			return getRuleContext(HorizontalLinetoArgumentSequenceContext.class,0);
		}
		public CommaWspContext commaWsp() {
			return getRuleContext(CommaWspContext.class,0);
		}
		public HorizontalLinetoArgumentSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_horizontalLinetoArgumentSequence; }
	}

	public final HorizontalLinetoArgumentSequenceContext horizontalLinetoArgumentSequence() throws RecognitionException {
		HorizontalLinetoArgumentSequenceContext _localctx = new HorizontalLinetoArgumentSequenceContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_horizontalLinetoArgumentSequence);
		int _la;
		try {
			setState(204);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(197);
				coordinate();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(198);
				coordinate();
				setState(200);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
					{
					setState(199);
					commaWsp();
					}
				}

				setState(202);
				horizontalLinetoArgumentSequence();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VerticalLinetoContext extends ParserRuleContext {
		public VerticalLinetoArgumentSequenceContext verticalLinetoArgumentSequence() {
			return getRuleContext(VerticalLinetoArgumentSequenceContext.class,0);
		}
		public List<WspContext> wsp() {
			return getRuleContexts(WspContext.class);
		}
		public WspContext wsp(int i) {
			return getRuleContext(WspContext.class,i);
		}
		public VerticalLinetoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_verticalLineto; }
	}

	public final VerticalLinetoContext verticalLineto() throws RecognitionException {
		VerticalLinetoContext _localctx = new VerticalLinetoContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_verticalLineto);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
			_la = _input.LA(1);
			if ( !(_la==T__8 || _la==T__9) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(210);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				{
				setState(207);
				wsp();
				}
				}
				setState(212);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(213);
			verticalLinetoArgumentSequence();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VerticalLinetoArgumentSequenceContext extends ParserRuleContext {
		public CoordinateContext coordinate() {
			return getRuleContext(CoordinateContext.class,0);
		}
		public VerticalLinetoArgumentSequenceContext verticalLinetoArgumentSequence() {
			return getRuleContext(VerticalLinetoArgumentSequenceContext.class,0);
		}
		public CommaWspContext commaWsp() {
			return getRuleContext(CommaWspContext.class,0);
		}
		public VerticalLinetoArgumentSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_verticalLinetoArgumentSequence; }
	}

	public final VerticalLinetoArgumentSequenceContext verticalLinetoArgumentSequence() throws RecognitionException {
		VerticalLinetoArgumentSequenceContext _localctx = new VerticalLinetoArgumentSequenceContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_verticalLinetoArgumentSequence);
		int _la;
		try {
			setState(222);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(215);
				coordinate();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(216);
				coordinate();
				setState(218);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
					{
					setState(217);
					commaWsp();
					}
				}

				setState(220);
				verticalLinetoArgumentSequence();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CurvetoContext extends ParserRuleContext {
		public CurvetoArgumentSequenceContext curvetoArgumentSequence() {
			return getRuleContext(CurvetoArgumentSequenceContext.class,0);
		}
		public List<WspContext> wsp() {
			return getRuleContexts(WspContext.class);
		}
		public WspContext wsp(int i) {
			return getRuleContext(WspContext.class,i);
		}
		public CurvetoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_curveto; }
	}

	public final CurvetoContext curveto() throws RecognitionException {
		CurvetoContext _localctx = new CurvetoContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_curveto);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(224);
			_la = _input.LA(1);
			if ( !(_la==T__10 || _la==T__11) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(228);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				{
				setState(225);
				wsp();
				}
				}
				setState(230);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(231);
			curvetoArgumentSequence();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CurvetoArgumentSequenceContext extends ParserRuleContext {
		public CurvetoArgumentContext curvetoArgument() {
			return getRuleContext(CurvetoArgumentContext.class,0);
		}
		public CurvetoArgumentSequenceContext curvetoArgumentSequence() {
			return getRuleContext(CurvetoArgumentSequenceContext.class,0);
		}
		public CommaWspContext commaWsp() {
			return getRuleContext(CommaWspContext.class,0);
		}
		public CurvetoArgumentSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_curvetoArgumentSequence; }
	}

	public final CurvetoArgumentSequenceContext curvetoArgumentSequence() throws RecognitionException {
		CurvetoArgumentSequenceContext _localctx = new CurvetoArgumentSequenceContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_curvetoArgumentSequence);
		int _la;
		try {
			setState(240);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(233);
				curvetoArgument();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(234);
				curvetoArgument();
				setState(236);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
					{
					setState(235);
					commaWsp();
					}
				}

				setState(238);
				curvetoArgumentSequence();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CurvetoArgumentContext extends ParserRuleContext {
		public List<CoordinatePairContext> coordinatePair() {
			return getRuleContexts(CoordinatePairContext.class);
		}
		public CoordinatePairContext coordinatePair(int i) {
			return getRuleContext(CoordinatePairContext.class,i);
		}
		public List<CommaWspContext> commaWsp() {
			return getRuleContexts(CommaWspContext.class);
		}
		public CommaWspContext commaWsp(int i) {
			return getRuleContext(CommaWspContext.class,i);
		}
		public CurvetoArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_curvetoArgument; }
	}

	public final CurvetoArgumentContext curvetoArgument() throws RecognitionException {
		CurvetoArgumentContext _localctx = new CurvetoArgumentContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_curvetoArgument);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			coordinatePair();
			setState(244);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				setState(243);
				commaWsp();
				}
			}

			setState(246);
			coordinatePair();
			setState(248);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				setState(247);
				commaWsp();
				}
			}

			setState(250);
			coordinatePair();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SmoothCurvetoContext extends ParserRuleContext {
		public SmoothCurvetoArgumentSequenceContext smoothCurvetoArgumentSequence() {
			return getRuleContext(SmoothCurvetoArgumentSequenceContext.class,0);
		}
		public List<WspContext> wsp() {
			return getRuleContexts(WspContext.class);
		}
		public WspContext wsp(int i) {
			return getRuleContext(WspContext.class,i);
		}
		public SmoothCurvetoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_smoothCurveto; }
	}

	public final SmoothCurvetoContext smoothCurveto() throws RecognitionException {
		SmoothCurvetoContext _localctx = new SmoothCurvetoContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_smoothCurveto);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(252);
			_la = _input.LA(1);
			if ( !(_la==T__12 || _la==T__13) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(256);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				{
				setState(253);
				wsp();
				}
				}
				setState(258);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(259);
			smoothCurvetoArgumentSequence();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SmoothCurvetoArgumentSequenceContext extends ParserRuleContext {
		public SmoothCurvetoArgumentContext smoothCurvetoArgument() {
			return getRuleContext(SmoothCurvetoArgumentContext.class,0);
		}
		public SmoothCurvetoArgumentSequenceContext smoothCurvetoArgumentSequence() {
			return getRuleContext(SmoothCurvetoArgumentSequenceContext.class,0);
		}
		public CommaWspContext commaWsp() {
			return getRuleContext(CommaWspContext.class,0);
		}
		public SmoothCurvetoArgumentSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_smoothCurvetoArgumentSequence; }
	}

	public final SmoothCurvetoArgumentSequenceContext smoothCurvetoArgumentSequence() throws RecognitionException {
		SmoothCurvetoArgumentSequenceContext _localctx = new SmoothCurvetoArgumentSequenceContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_smoothCurvetoArgumentSequence);
		int _la;
		try {
			setState(268);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(261);
				smoothCurvetoArgument();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(262);
				smoothCurvetoArgument();
				setState(264);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
					{
					setState(263);
					commaWsp();
					}
				}

				setState(266);
				smoothCurvetoArgumentSequence();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SmoothCurvetoArgumentContext extends ParserRuleContext {
		public List<CoordinatePairContext> coordinatePair() {
			return getRuleContexts(CoordinatePairContext.class);
		}
		public CoordinatePairContext coordinatePair(int i) {
			return getRuleContext(CoordinatePairContext.class,i);
		}
		public CommaWspContext commaWsp() {
			return getRuleContext(CommaWspContext.class,0);
		}
		public SmoothCurvetoArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_smoothCurvetoArgument; }
	}

	public final SmoothCurvetoArgumentContext smoothCurvetoArgument() throws RecognitionException {
		SmoothCurvetoArgumentContext _localctx = new SmoothCurvetoArgumentContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_smoothCurvetoArgument);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(270);
			coordinatePair();
			setState(272);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				setState(271);
				commaWsp();
				}
			}

			setState(274);
			coordinatePair();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QuadraticBezierCurvetoContext extends ParserRuleContext {
		public QuadraticBezierCurvetoArgumentSequenceContext quadraticBezierCurvetoArgumentSequence() {
			return getRuleContext(QuadraticBezierCurvetoArgumentSequenceContext.class,0);
		}
		public List<WspContext> wsp() {
			return getRuleContexts(WspContext.class);
		}
		public WspContext wsp(int i) {
			return getRuleContext(WspContext.class,i);
		}
		public QuadraticBezierCurvetoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quadraticBezierCurveto; }
	}

	public final QuadraticBezierCurvetoContext quadraticBezierCurveto() throws RecognitionException {
		QuadraticBezierCurvetoContext _localctx = new QuadraticBezierCurvetoContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_quadraticBezierCurveto);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(276);
			_la = _input.LA(1);
			if ( !(_la==T__14 || _la==T__15) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(280);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				{
				setState(277);
				wsp();
				}
				}
				setState(282);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(283);
			quadraticBezierCurvetoArgumentSequence();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QuadraticBezierCurvetoArgumentSequenceContext extends ParserRuleContext {
		public QuadraticBezierCurvetoArgumentContext quadraticBezierCurvetoArgument() {
			return getRuleContext(QuadraticBezierCurvetoArgumentContext.class,0);
		}
		public QuadraticBezierCurvetoArgumentSequenceContext quadraticBezierCurvetoArgumentSequence() {
			return getRuleContext(QuadraticBezierCurvetoArgumentSequenceContext.class,0);
		}
		public CommaWspContext commaWsp() {
			return getRuleContext(CommaWspContext.class,0);
		}
		public QuadraticBezierCurvetoArgumentSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quadraticBezierCurvetoArgumentSequence; }
	}

	public final QuadraticBezierCurvetoArgumentSequenceContext quadraticBezierCurvetoArgumentSequence() throws RecognitionException {
		QuadraticBezierCurvetoArgumentSequenceContext _localctx = new QuadraticBezierCurvetoArgumentSequenceContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_quadraticBezierCurvetoArgumentSequence);
		int _la;
		try {
			setState(292);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(285);
				quadraticBezierCurvetoArgument();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(286);
				quadraticBezierCurvetoArgument();
				setState(288);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
					{
					setState(287);
					commaWsp();
					}
				}

				setState(290);
				quadraticBezierCurvetoArgumentSequence();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QuadraticBezierCurvetoArgumentContext extends ParserRuleContext {
		public List<CoordinatePairContext> coordinatePair() {
			return getRuleContexts(CoordinatePairContext.class);
		}
		public CoordinatePairContext coordinatePair(int i) {
			return getRuleContext(CoordinatePairContext.class,i);
		}
		public CommaWspContext commaWsp() {
			return getRuleContext(CommaWspContext.class,0);
		}
		public QuadraticBezierCurvetoArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quadraticBezierCurvetoArgument; }
	}

	public final QuadraticBezierCurvetoArgumentContext quadraticBezierCurvetoArgument() throws RecognitionException {
		QuadraticBezierCurvetoArgumentContext _localctx = new QuadraticBezierCurvetoArgumentContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_quadraticBezierCurvetoArgument);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(294);
			coordinatePair();
			setState(296);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				setState(295);
				commaWsp();
				}
			}

			setState(298);
			coordinatePair();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SmoothQuadraticBezierCurvetoContext extends ParserRuleContext {
		public SmoothQuadraticBezierCurvetoArgumentSequenceContext smoothQuadraticBezierCurvetoArgumentSequence() {
			return getRuleContext(SmoothQuadraticBezierCurvetoArgumentSequenceContext.class,0);
		}
		public List<WspContext> wsp() {
			return getRuleContexts(WspContext.class);
		}
		public WspContext wsp(int i) {
			return getRuleContext(WspContext.class,i);
		}
		public SmoothQuadraticBezierCurvetoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_smoothQuadraticBezierCurveto; }
	}

	public final SmoothQuadraticBezierCurvetoContext smoothQuadraticBezierCurveto() throws RecognitionException {
		SmoothQuadraticBezierCurvetoContext _localctx = new SmoothQuadraticBezierCurvetoContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_smoothQuadraticBezierCurveto);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(300);
			_la = _input.LA(1);
			if ( !(_la==T__16 || _la==T__17) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(304);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				{
				setState(301);
				wsp();
				}
				}
				setState(306);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(307);
			smoothQuadraticBezierCurvetoArgumentSequence();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SmoothQuadraticBezierCurvetoArgumentSequenceContext extends ParserRuleContext {
		public CoordinatePairContext coordinatePair() {
			return getRuleContext(CoordinatePairContext.class,0);
		}
		public SmoothQuadraticBezierCurvetoArgumentSequenceContext smoothQuadraticBezierCurvetoArgumentSequence() {
			return getRuleContext(SmoothQuadraticBezierCurvetoArgumentSequenceContext.class,0);
		}
		public CommaWspContext commaWsp() {
			return getRuleContext(CommaWspContext.class,0);
		}
		public SmoothQuadraticBezierCurvetoArgumentSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_smoothQuadraticBezierCurvetoArgumentSequence; }
	}

	public final SmoothQuadraticBezierCurvetoArgumentSequenceContext smoothQuadraticBezierCurvetoArgumentSequence() throws RecognitionException {
		SmoothQuadraticBezierCurvetoArgumentSequenceContext _localctx = new SmoothQuadraticBezierCurvetoArgumentSequenceContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_smoothQuadraticBezierCurvetoArgumentSequence);
		int _la;
		try {
			setState(316);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(309);
				coordinatePair();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(310);
				coordinatePair();
				setState(312);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
					{
					setState(311);
					commaWsp();
					}
				}

				setState(314);
				smoothQuadraticBezierCurvetoArgumentSequence();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EllipticalArcContext extends ParserRuleContext {
		public EllipticalArcArgumentSequenceContext ellipticalArcArgumentSequence() {
			return getRuleContext(EllipticalArcArgumentSequenceContext.class,0);
		}
		public List<WspContext> wsp() {
			return getRuleContexts(WspContext.class);
		}
		public WspContext wsp(int i) {
			return getRuleContext(WspContext.class,i);
		}
		public EllipticalArcContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ellipticalArc; }
	}

	public final EllipticalArcContext ellipticalArc() throws RecognitionException {
		EllipticalArcContext _localctx = new EllipticalArcContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_ellipticalArc);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(318);
			_la = _input.LA(1);
			if ( !(_la==T__18 || _la==T__19) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(322);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				{
				setState(319);
				wsp();
				}
				}
				setState(324);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(325);
			ellipticalArcArgumentSequence();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EllipticalArcArgumentSequenceContext extends ParserRuleContext {
		public EllipticalArcArgumentContext ellipticalArcArgument() {
			return getRuleContext(EllipticalArcArgumentContext.class,0);
		}
		public EllipticalArcArgumentSequenceContext ellipticalArcArgumentSequence() {
			return getRuleContext(EllipticalArcArgumentSequenceContext.class,0);
		}
		public CommaWspContext commaWsp() {
			return getRuleContext(CommaWspContext.class,0);
		}
		public EllipticalArcArgumentSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ellipticalArcArgumentSequence; }
	}

	public final EllipticalArcArgumentSequenceContext ellipticalArcArgumentSequence() throws RecognitionException {
		EllipticalArcArgumentSequenceContext _localctx = new EllipticalArcArgumentSequenceContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_ellipticalArcArgumentSequence);
		int _la;
		try {
			setState(334);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,40,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(327);
				ellipticalArcArgument();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(328);
				ellipticalArcArgument();
				setState(330);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
					{
					setState(329);
					commaWsp();
					}
				}

				setState(332);
				ellipticalArcArgumentSequence();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EllipticalArcArgumentContext extends ParserRuleContext {
		public List<NonnegativeNumberContext> nonnegativeNumber() {
			return getRuleContexts(NonnegativeNumberContext.class);
		}
		public NonnegativeNumberContext nonnegativeNumber(int i) {
			return getRuleContext(NonnegativeNumberContext.class,i);
		}
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public List<CommaWspContext> commaWsp() {
			return getRuleContexts(CommaWspContext.class);
		}
		public CommaWspContext commaWsp(int i) {
			return getRuleContext(CommaWspContext.class,i);
		}
		public List<FlagContext> flag() {
			return getRuleContexts(FlagContext.class);
		}
		public FlagContext flag(int i) {
			return getRuleContext(FlagContext.class,i);
		}
		public CoordinatePairContext coordinatePair() {
			return getRuleContext(CoordinatePairContext.class,0);
		}
		public EllipticalArcArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ellipticalArcArgument; }
	}

	public final EllipticalArcArgumentContext ellipticalArcArgument() throws RecognitionException {
		EllipticalArcArgumentContext _localctx = new EllipticalArcArgumentContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_ellipticalArcArgument);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(336);
			nonnegativeNumber();
			setState(338);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				setState(337);
				commaWsp();
				}
			}

			setState(340);
			nonnegativeNumber();
			setState(342);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				setState(341);
				commaWsp();
				}
			}

			setState(344);
			number();
			setState(345);
			commaWsp();
			setState(346);
			flag();
			setState(348);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				setState(347);
				commaWsp();
				}
			}

			setState(350);
			flag();
			setState(352);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				setState(351);
				commaWsp();
				}
			}

			setState(354);
			coordinatePair();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CoordinatePairContext extends ParserRuleContext {
		public List<CoordinateContext> coordinate() {
			return getRuleContexts(CoordinateContext.class);
		}
		public CoordinateContext coordinate(int i) {
			return getRuleContext(CoordinateContext.class,i);
		}
		public CommaWspContext commaWsp() {
			return getRuleContext(CommaWspContext.class,0);
		}
		public CoordinatePairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_coordinatePair; }
	}

	public final CoordinatePairContext coordinatePair() throws RecognitionException {
		CoordinatePairContext _localctx = new CoordinatePairContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_coordinatePair);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(356);
			coordinate();
			setState(358);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__22) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
				{
				setState(357);
				commaWsp();
				}
			}

			setState(360);
			coordinate();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CoordinateContext extends ParserRuleContext {
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public CoordinateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_coordinate; }
	}

	public final CoordinateContext coordinate() throws RecognitionException {
		CoordinateContext _localctx = new CoordinateContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_coordinate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(362);
			number();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NonnegativeNumberContext extends ParserRuleContext {
		public IntegerConstantContext integerConstant() {
			return getRuleContext(IntegerConstantContext.class,0);
		}
		public FloatingPointConstantContext floatingPointConstant() {
			return getRuleContext(FloatingPointConstantContext.class,0);
		}
		public NonnegativeNumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nonnegativeNumber; }
	}

	public final NonnegativeNumberContext nonnegativeNumber() throws RecognitionException {
		NonnegativeNumberContext _localctx = new NonnegativeNumberContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_nonnegativeNumber);
		try {
			setState(366);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,46,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(364);
				integerConstant();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(365);
				floatingPointConstant();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NumberContext extends ParserRuleContext {
		public IntegerConstantContext integerConstant() {
			return getRuleContext(IntegerConstantContext.class,0);
		}
		public SignContext sign() {
			return getRuleContext(SignContext.class,0);
		}
		public FloatingPointConstantContext floatingPointConstant() {
			return getRuleContext(FloatingPointConstantContext.class,0);
		}
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_number);
		int _la;
		try {
			setState(376);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,49,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(369);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__26 || _la==T__27) {
					{
					setState(368);
					sign();
					}
				}

				setState(371);
				integerConstant();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(373);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__26 || _la==T__27) {
					{
					setState(372);
					sign();
					}
				}

				setState(375);
				floatingPointConstant();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FlagContext extends ParserRuleContext {
		public FlagContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_flag; }
	}

	public final FlagContext flag() throws RecognitionException {
		FlagContext _localctx = new FlagContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_flag);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(378);
			_la = _input.LA(1);
			if ( !(_la==T__20 || _la==T__21) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CommaWspContext extends ParserRuleContext {
		public List<WspContext> wsp() {
			return getRuleContexts(WspContext.class);
		}
		public WspContext wsp(int i) {
			return getRuleContext(WspContext.class,i);
		}
		public CommaContext comma() {
			return getRuleContext(CommaContext.class,0);
		}
		public CommaWspContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commaWsp; }
	}

	public final CommaWspContext commaWsp() throws RecognitionException {
		CommaWspContext _localctx = new CommaWspContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_commaWsp);
		int _la;
		try {
			int _alt;
			setState(401);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__36:
			case T__37:
			case T__38:
			case T__39:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(381); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(380);
						wsp();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(383); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,50,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				setState(386);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__22) {
					{
					setState(385);
					comma();
					}
				}

				setState(391);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
					{
					{
					setState(388);
					wsp();
					}
					}
					setState(393);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				break;
			case T__22:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(394);
				comma();
				setState(398);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) {
					{
					{
					setState(395);
					wsp();
					}
					}
					setState(400);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CommaContext extends ParserRuleContext {
		public CommaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comma; }
	}

	public final CommaContext comma() throws RecognitionException {
		CommaContext _localctx = new CommaContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_comma);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(403);
			match(T__22);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntegerConstantContext extends ParserRuleContext {
		public DigitSequenceContext digitSequence() {
			return getRuleContext(DigitSequenceContext.class,0);
		}
		public IntegerConstantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integerConstant; }
	}

	public final IntegerConstantContext integerConstant() throws RecognitionException {
		IntegerConstantContext _localctx = new IntegerConstantContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_integerConstant);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(405);
			digitSequence();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FloatingPointConstantContext extends ParserRuleContext {
		public FractionalConstantContext fractionalConstant() {
			return getRuleContext(FractionalConstantContext.class,0);
		}
		public ExponentContext exponent() {
			return getRuleContext(ExponentContext.class,0);
		}
		public DigitSequenceContext digitSequence() {
			return getRuleContext(DigitSequenceContext.class,0);
		}
		public FloatingPointConstantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_floatingPointConstant; }
	}

	public final FloatingPointConstantContext floatingPointConstant() throws RecognitionException {
		FloatingPointConstantContext _localctx = new FloatingPointConstantContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_floatingPointConstant);
		int _la;
		try {
			setState(414);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,56,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(407);
				fractionalConstant();
				setState(409);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__24 || _la==T__25) {
					{
					setState(408);
					exponent();
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(411);
				digitSequence();
				setState(412);
				exponent();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FractionalConstantContext extends ParserRuleContext {
		public List<DigitSequenceContext> digitSequence() {
			return getRuleContexts(DigitSequenceContext.class);
		}
		public DigitSequenceContext digitSequence(int i) {
			return getRuleContext(DigitSequenceContext.class,i);
		}
		public FractionalConstantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fractionalConstant; }
	}

	public final FractionalConstantContext fractionalConstant() throws RecognitionException {
		FractionalConstantContext _localctx = new FractionalConstantContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_fractionalConstant);
		int _la;
		try {
			setState(424);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,58,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(417);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__20) | (1L << T__21) | (1L << T__28) | (1L << T__29) | (1L << T__30) | (1L << T__31) | (1L << T__32) | (1L << T__33) | (1L << T__34) | (1L << T__35))) != 0)) {
					{
					setState(416);
					digitSequence();
					}
				}

				setState(419);
				match(T__23);
				setState(420);
				digitSequence();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(421);
				digitSequence();
				setState(422);
				match(T__23);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExponentContext extends ParserRuleContext {
		public DigitSequenceContext digitSequence() {
			return getRuleContext(DigitSequenceContext.class,0);
		}
		public SignContext sign() {
			return getRuleContext(SignContext.class,0);
		}
		public ExponentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exponent; }
	}

	public final ExponentContext exponent() throws RecognitionException {
		ExponentContext _localctx = new ExponentContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_exponent);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(426);
			_la = _input.LA(1);
			if ( !(_la==T__24 || _la==T__25) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(428);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__26 || _la==T__27) {
				{
				setState(427);
				sign();
				}
			}

			setState(430);
			digitSequence();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SignContext extends ParserRuleContext {
		public SignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sign; }
	}

	public final SignContext sign() throws RecognitionException {
		SignContext _localctx = new SignContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_sign);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(432);
			_la = _input.LA(1);
			if ( !(_la==T__26 || _la==T__27) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DigitSequenceContext extends ParserRuleContext {
		public DigitContext digit() {
			return getRuleContext(DigitContext.class,0);
		}
		public DigitSequenceContext digitSequence() {
			return getRuleContext(DigitSequenceContext.class,0);
		}
		public DigitSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_digitSequence; }
	}

	public final DigitSequenceContext digitSequence() throws RecognitionException {
		DigitSequenceContext _localctx = new DigitSequenceContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_digitSequence);
		try {
			setState(438);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,60,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(434);
				digit();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(435);
				digit();
				setState(436);
				digitSequence();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DigitContext extends ParserRuleContext {
		public DigitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_digit; }
	}

	public final DigitContext digit() throws RecognitionException {
		DigitContext _localctx = new DigitContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_digit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(440);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__20) | (1L << T__21) | (1L << T__28) | (1L << T__29) | (1L << T__30) | (1L << T__31) | (1L << T__32) | (1L << T__33) | (1L << T__34) | (1L << T__35))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WspContext extends ParserRuleContext {
		public WspContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wsp; }
	}

	public final WspContext wsp() throws RecognitionException {
		WspContext _localctx = new WspContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_wsp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(442);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3*\u01bf\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\3\2\3\2\3\3\7\3^\n\3\f\3\16\3a\13\3\3\3\5\3d\n\3\3\3\7\3g\n"+
		"\3\f\3\16\3j\13\3\3\4\3\4\3\4\7\4o\n\4\f\4\16\4r\13\4\3\4\3\4\5\4v\n\4"+
		"\3\5\3\5\7\5z\n\5\f\5\16\5}\13\5\3\5\5\5\u0080\n\5\3\6\3\6\3\6\7\6\u0085"+
		"\n\6\f\6\16\6\u0088\13\6\3\6\3\6\5\6\u008c\n\6\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\3\7\5\7\u0097\n\7\3\b\3\b\7\b\u009b\n\b\f\b\16\b\u009e\13\b\3"+
		"\b\3\b\3\t\3\t\3\t\5\t\u00a5\n\t\3\t\3\t\5\t\u00a9\n\t\3\n\3\n\3\13\3"+
		"\13\7\13\u00af\n\13\f\13\16\13\u00b2\13\13\3\13\3\13\3\f\3\f\3\f\5\f\u00b9"+
		"\n\f\3\f\3\f\5\f\u00bd\n\f\3\r\3\r\7\r\u00c1\n\r\f\r\16\r\u00c4\13\r\3"+
		"\r\3\r\3\16\3\16\3\16\5\16\u00cb\n\16\3\16\3\16\5\16\u00cf\n\16\3\17\3"+
		"\17\7\17\u00d3\n\17\f\17\16\17\u00d6\13\17\3\17\3\17\3\20\3\20\3\20\5"+
		"\20\u00dd\n\20\3\20\3\20\5\20\u00e1\n\20\3\21\3\21\7\21\u00e5\n\21\f\21"+
		"\16\21\u00e8\13\21\3\21\3\21\3\22\3\22\3\22\5\22\u00ef\n\22\3\22\3\22"+
		"\5\22\u00f3\n\22\3\23\3\23\5\23\u00f7\n\23\3\23\3\23\5\23\u00fb\n\23\3"+
		"\23\3\23\3\24\3\24\7\24\u0101\n\24\f\24\16\24\u0104\13\24\3\24\3\24\3"+
		"\25\3\25\3\25\5\25\u010b\n\25\3\25\3\25\5\25\u010f\n\25\3\26\3\26\5\26"+
		"\u0113\n\26\3\26\3\26\3\27\3\27\7\27\u0119\n\27\f\27\16\27\u011c\13\27"+
		"\3\27\3\27\3\30\3\30\3\30\5\30\u0123\n\30\3\30\3\30\5\30\u0127\n\30\3"+
		"\31\3\31\5\31\u012b\n\31\3\31\3\31\3\32\3\32\7\32\u0131\n\32\f\32\16\32"+
		"\u0134\13\32\3\32\3\32\3\33\3\33\3\33\5\33\u013b\n\33\3\33\3\33\5\33\u013f"+
		"\n\33\3\34\3\34\7\34\u0143\n\34\f\34\16\34\u0146\13\34\3\34\3\34\3\35"+
		"\3\35\3\35\5\35\u014d\n\35\3\35\3\35\5\35\u0151\n\35\3\36\3\36\5\36\u0155"+
		"\n\36\3\36\3\36\5\36\u0159\n\36\3\36\3\36\3\36\3\36\5\36\u015f\n\36\3"+
		"\36\3\36\5\36\u0163\n\36\3\36\3\36\3\37\3\37\5\37\u0169\n\37\3\37\3\37"+
		"\3 \3 \3!\3!\5!\u0171\n!\3\"\5\"\u0174\n\"\3\"\3\"\5\"\u0178\n\"\3\"\5"+
		"\"\u017b\n\"\3#\3#\3$\6$\u0180\n$\r$\16$\u0181\3$\5$\u0185\n$\3$\7$\u0188"+
		"\n$\f$\16$\u018b\13$\3$\3$\7$\u018f\n$\f$\16$\u0192\13$\5$\u0194\n$\3"+
		"%\3%\3&\3&\3\'\3\'\5\'\u019c\n\'\3\'\3\'\3\'\5\'\u01a1\n\'\3(\5(\u01a4"+
		"\n(\3(\3(\3(\3(\3(\5(\u01ab\n(\3)\3)\5)\u01af\n)\3)\3)\3*\3*\3+\3+\3+"+
		"\3+\5+\u01b9\n+\3,\3,\3-\3-\3-\2\2.\2\4\6\b\n\f\16\20\22\24\26\30\32\34"+
		"\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVX\2\21\3\2\3\4\3\2\5\6\3\2\7\b"+
		"\3\2\t\n\3\2\13\f\3\2\r\16\3\2\17\20\3\2\21\22\3\2\23\24\3\2\25\26\3\2"+
		"\27\30\3\2\33\34\3\2\35\36\4\2\27\30\37&\3\2\'*\2\u01d6\2Z\3\2\2\2\4_"+
		"\3\2\2\2\6u\3\2\2\2\bw\3\2\2\2\n\u008b\3\2\2\2\f\u0096\3\2\2\2\16\u0098"+
		"\3\2\2\2\20\u00a8\3\2\2\2\22\u00aa\3\2\2\2\24\u00ac\3\2\2\2\26\u00bc\3"+
		"\2\2\2\30\u00be\3\2\2\2\32\u00ce\3\2\2\2\34\u00d0\3\2\2\2\36\u00e0\3\2"+
		"\2\2 \u00e2\3\2\2\2\"\u00f2\3\2\2\2$\u00f4\3\2\2\2&\u00fe\3\2\2\2(\u010e"+
		"\3\2\2\2*\u0110\3\2\2\2,\u0116\3\2\2\2.\u0126\3\2\2\2\60\u0128\3\2\2\2"+
		"\62\u012e\3\2\2\2\64\u013e\3\2\2\2\66\u0140\3\2\2\28\u0150\3\2\2\2:\u0152"+
		"\3\2\2\2<\u0166\3\2\2\2>\u016c\3\2\2\2@\u0170\3\2\2\2B\u017a\3\2\2\2D"+
		"\u017c\3\2\2\2F\u0193\3\2\2\2H\u0195\3\2\2\2J\u0197\3\2\2\2L\u01a0\3\2"+
		"\2\2N\u01aa\3\2\2\2P\u01ac\3\2\2\2R\u01b2\3\2\2\2T\u01b8\3\2\2\2V\u01ba"+
		"\3\2\2\2X\u01bc\3\2\2\2Z[\5\4\3\2[\3\3\2\2\2\\^\5X-\2]\\\3\2\2\2^a\3\2"+
		"\2\2_]\3\2\2\2_`\3\2\2\2`c\3\2\2\2a_\3\2\2\2bd\5\6\4\2cb\3\2\2\2cd\3\2"+
		"\2\2dh\3\2\2\2eg\5X-\2fe\3\2\2\2gj\3\2\2\2hf\3\2\2\2hi\3\2\2\2i\5\3\2"+
		"\2\2jh\3\2\2\2kv\5\b\5\2lp\5\b\5\2mo\5X-\2nm\3\2\2\2or\3\2\2\2pn\3\2\2"+
		"\2pq\3\2\2\2qs\3\2\2\2rp\3\2\2\2st\5\6\4\2tv\3\2\2\2uk\3\2\2\2ul\3\2\2"+
		"\2v\7\3\2\2\2w{\5\16\b\2xz\5X-\2yx\3\2\2\2z}\3\2\2\2{y\3\2\2\2{|\3\2\2"+
		"\2|\177\3\2\2\2}{\3\2\2\2~\u0080\5\n\6\2\177~\3\2\2\2\177\u0080\3\2\2"+
		"\2\u0080\t\3\2\2\2\u0081\u008c\5\f\7\2\u0082\u0086\5\f\7\2\u0083\u0085"+
		"\5X-\2\u0084\u0083\3\2\2\2\u0085\u0088\3\2\2\2\u0086\u0084\3\2\2\2\u0086"+
		"\u0087\3\2\2\2\u0087\u0089\3\2\2\2\u0088\u0086\3\2\2\2\u0089\u008a\5\n"+
		"\6\2\u008a\u008c\3\2\2\2\u008b\u0081\3\2\2\2\u008b\u0082\3\2\2\2\u008c"+
		"\13\3\2\2\2\u008d\u0097\5\22\n\2\u008e\u0097\5\24\13\2\u008f\u0097\5\30"+
		"\r\2\u0090\u0097\5\34\17\2\u0091\u0097\5 \21\2\u0092\u0097\5&\24\2\u0093"+
		"\u0097\5,\27\2\u0094\u0097\5\62\32\2\u0095\u0097\5\66\34\2\u0096\u008d"+
		"\3\2\2\2\u0096\u008e\3\2\2\2\u0096\u008f\3\2\2\2\u0096\u0090\3\2\2\2\u0096"+
		"\u0091\3\2\2\2\u0096\u0092\3\2\2\2\u0096\u0093\3\2\2\2\u0096\u0094\3\2"+
		"\2\2\u0096\u0095\3\2\2\2\u0097\r\3\2\2\2\u0098\u009c\t\2\2\2\u0099\u009b"+
		"\5X-\2\u009a\u0099\3\2\2\2\u009b\u009e\3\2\2\2\u009c\u009a\3\2\2\2\u009c"+
		"\u009d\3\2\2\2\u009d\u009f\3\2\2\2\u009e\u009c\3\2\2\2\u009f\u00a0\5\20"+
		"\t\2\u00a0\17\3\2\2\2\u00a1\u00a9\5<\37\2\u00a2\u00a4\5<\37\2\u00a3\u00a5"+
		"\5F$\2\u00a4\u00a3\3\2\2\2\u00a4\u00a5\3\2\2\2\u00a5\u00a6\3\2\2\2\u00a6"+
		"\u00a7\5\26\f\2\u00a7\u00a9\3\2\2\2\u00a8\u00a1\3\2\2\2\u00a8\u00a2\3"+
		"\2\2\2\u00a9\21\3\2\2\2\u00aa\u00ab\t\3\2\2\u00ab\23\3\2\2\2\u00ac\u00b0"+
		"\t\4\2\2\u00ad\u00af\5X-\2\u00ae\u00ad\3\2\2\2\u00af\u00b2\3\2\2\2\u00b0"+
		"\u00ae\3\2\2\2\u00b0\u00b1\3\2\2\2\u00b1\u00b3\3\2\2\2\u00b2\u00b0\3\2"+
		"\2\2\u00b3\u00b4\5\26\f\2\u00b4\25\3\2\2\2\u00b5\u00bd\5<\37\2\u00b6\u00b8"+
		"\5<\37\2\u00b7\u00b9\5F$\2\u00b8\u00b7\3\2\2\2\u00b8\u00b9\3\2\2\2\u00b9"+
		"\u00ba\3\2\2\2\u00ba\u00bb\5\26\f\2\u00bb\u00bd\3\2\2\2\u00bc\u00b5\3"+
		"\2\2\2\u00bc\u00b6\3\2\2\2\u00bd\27\3\2\2\2\u00be\u00c2\t\5\2\2\u00bf"+
		"\u00c1\5X-\2\u00c0\u00bf\3\2\2\2\u00c1\u00c4\3\2\2\2\u00c2\u00c0\3\2\2"+
		"\2\u00c2\u00c3\3\2\2\2\u00c3\u00c5\3\2\2\2\u00c4\u00c2\3\2\2\2\u00c5\u00c6"+
		"\5\32\16\2\u00c6\31\3\2\2\2\u00c7\u00cf\5> \2\u00c8\u00ca\5> \2\u00c9"+
		"\u00cb\5F$\2\u00ca\u00c9\3\2\2\2\u00ca\u00cb\3\2\2\2\u00cb\u00cc\3\2\2"+
		"\2\u00cc\u00cd\5\32\16\2\u00cd\u00cf\3\2\2\2\u00ce\u00c7\3\2\2\2\u00ce"+
		"\u00c8\3\2\2\2\u00cf\33\3\2\2\2\u00d0\u00d4\t\6\2\2\u00d1\u00d3\5X-\2"+
		"\u00d2\u00d1\3\2\2\2\u00d3\u00d6\3\2\2\2\u00d4\u00d2\3\2\2\2\u00d4\u00d5"+
		"\3\2\2\2\u00d5\u00d7\3\2\2\2\u00d6\u00d4\3\2\2\2\u00d7\u00d8\5\36\20\2"+
		"\u00d8\35\3\2\2\2\u00d9\u00e1\5> \2\u00da\u00dc\5> \2\u00db\u00dd\5F$"+
		"\2\u00dc\u00db\3\2\2\2\u00dc\u00dd\3\2\2\2\u00dd\u00de\3\2\2\2\u00de\u00df"+
		"\5\36\20\2\u00df\u00e1\3\2\2\2\u00e0\u00d9\3\2\2\2\u00e0\u00da\3\2\2\2"+
		"\u00e1\37\3\2\2\2\u00e2\u00e6\t\7\2\2\u00e3\u00e5\5X-\2\u00e4\u00e3\3"+
		"\2\2\2\u00e5\u00e8\3\2\2\2\u00e6\u00e4\3\2\2\2\u00e6\u00e7\3\2\2\2\u00e7"+
		"\u00e9\3\2\2\2\u00e8\u00e6\3\2\2\2\u00e9\u00ea\5\"\22\2\u00ea!\3\2\2\2"+
		"\u00eb\u00f3\5$\23\2\u00ec\u00ee\5$\23\2\u00ed\u00ef\5F$\2\u00ee\u00ed"+
		"\3\2\2\2\u00ee\u00ef\3\2\2\2\u00ef\u00f0\3\2\2\2\u00f0\u00f1\5\"\22\2"+
		"\u00f1\u00f3\3\2\2\2\u00f2\u00eb\3\2\2\2\u00f2\u00ec\3\2\2\2\u00f3#\3"+
		"\2\2\2\u00f4\u00f6\5<\37\2\u00f5\u00f7\5F$\2\u00f6\u00f5\3\2\2\2\u00f6"+
		"\u00f7\3\2\2\2\u00f7\u00f8\3\2\2\2\u00f8\u00fa\5<\37\2\u00f9\u00fb\5F"+
		"$\2\u00fa\u00f9\3\2\2\2\u00fa\u00fb\3\2\2\2\u00fb\u00fc\3\2\2\2\u00fc"+
		"\u00fd\5<\37\2\u00fd%\3\2\2\2\u00fe\u0102\t\b\2\2\u00ff\u0101\5X-\2\u0100"+
		"\u00ff\3\2\2\2\u0101\u0104\3\2\2\2\u0102\u0100\3\2\2\2\u0102\u0103\3\2"+
		"\2\2\u0103\u0105\3\2\2\2\u0104\u0102\3\2\2\2\u0105\u0106\5(\25\2\u0106"+
		"\'\3\2\2\2\u0107\u010f\5*\26\2\u0108\u010a\5*\26\2\u0109\u010b\5F$\2\u010a"+
		"\u0109\3\2\2\2\u010a\u010b\3\2\2\2\u010b\u010c\3\2\2\2\u010c\u010d\5("+
		"\25\2\u010d\u010f\3\2\2\2\u010e\u0107\3\2\2\2\u010e\u0108\3\2\2\2\u010f"+
		")\3\2\2\2\u0110\u0112\5<\37\2\u0111\u0113\5F$\2\u0112\u0111\3\2\2\2\u0112"+
		"\u0113\3\2\2\2\u0113\u0114\3\2\2\2\u0114\u0115\5<\37\2\u0115+\3\2\2\2"+
		"\u0116\u011a\t\t\2\2\u0117\u0119\5X-\2\u0118\u0117\3\2\2\2\u0119\u011c"+
		"\3\2\2\2\u011a\u0118\3\2\2\2\u011a\u011b\3\2\2\2\u011b\u011d\3\2\2\2\u011c"+
		"\u011a\3\2\2\2\u011d\u011e\5.\30\2\u011e-\3\2\2\2\u011f\u0127\5\60\31"+
		"\2\u0120\u0122\5\60\31\2\u0121\u0123\5F$\2\u0122\u0121\3\2\2\2\u0122\u0123"+
		"\3\2\2\2\u0123\u0124\3\2\2\2\u0124\u0125\5.\30\2\u0125\u0127\3\2\2\2\u0126"+
		"\u011f\3\2\2\2\u0126\u0120\3\2\2\2\u0127/\3\2\2\2\u0128\u012a\5<\37\2"+
		"\u0129\u012b\5F$\2\u012a\u0129\3\2\2\2\u012a\u012b\3\2\2\2\u012b\u012c"+
		"\3\2\2\2\u012c\u012d\5<\37\2\u012d\61\3\2\2\2\u012e\u0132\t\n\2\2\u012f"+
		"\u0131\5X-\2\u0130\u012f\3\2\2\2\u0131\u0134\3\2\2\2\u0132\u0130\3\2\2"+
		"\2\u0132\u0133\3\2\2\2\u0133\u0135\3\2\2\2\u0134\u0132\3\2\2\2\u0135\u0136"+
		"\5\64\33\2\u0136\63\3\2\2\2\u0137\u013f\5<\37\2\u0138\u013a\5<\37\2\u0139"+
		"\u013b\5F$\2\u013a\u0139\3\2\2\2\u013a\u013b\3\2\2\2\u013b\u013c\3\2\2"+
		"\2\u013c\u013d\5\64\33\2\u013d\u013f\3\2\2\2\u013e\u0137\3\2\2\2\u013e"+
		"\u0138\3\2\2\2\u013f\65\3\2\2\2\u0140\u0144\t\13\2\2\u0141\u0143\5X-\2"+
		"\u0142\u0141\3\2\2\2\u0143\u0146\3\2\2\2\u0144\u0142\3\2\2\2\u0144\u0145"+
		"\3\2\2\2\u0145\u0147\3\2\2\2\u0146\u0144\3\2\2\2\u0147\u0148\58\35\2\u0148"+
		"\67\3\2\2\2\u0149\u0151\5:\36\2\u014a\u014c\5:\36\2\u014b\u014d\5F$\2"+
		"\u014c\u014b\3\2\2\2\u014c\u014d\3\2\2\2\u014d\u014e\3\2\2\2\u014e\u014f"+
		"\58\35\2\u014f\u0151\3\2\2\2\u0150\u0149\3\2\2\2\u0150\u014a\3\2\2\2\u0151"+
		"9\3\2\2\2\u0152\u0154\5@!\2\u0153\u0155\5F$\2\u0154\u0153\3\2\2\2\u0154"+
		"\u0155\3\2\2\2\u0155\u0156\3\2\2\2\u0156\u0158\5@!\2\u0157\u0159\5F$\2"+
		"\u0158\u0157\3\2\2\2\u0158\u0159\3\2\2\2\u0159\u015a\3\2\2\2\u015a\u015b"+
		"\5B\"\2\u015b\u015c\5F$\2\u015c\u015e\5D#\2\u015d\u015f\5F$\2\u015e\u015d"+
		"\3\2\2\2\u015e\u015f\3\2\2\2\u015f\u0160\3\2\2\2\u0160\u0162\5D#\2\u0161"+
		"\u0163\5F$\2\u0162\u0161\3\2\2\2\u0162\u0163\3\2\2\2\u0163\u0164\3\2\2"+
		"\2\u0164\u0165\5<\37\2\u0165;\3\2\2\2\u0166\u0168\5> \2\u0167\u0169\5"+
		"F$\2\u0168\u0167\3\2\2\2\u0168\u0169\3\2\2\2\u0169\u016a\3\2\2\2\u016a"+
		"\u016b\5> \2\u016b=\3\2\2\2\u016c\u016d\5B\"\2\u016d?\3\2\2\2\u016e\u0171"+
		"\5J&\2\u016f\u0171\5L\'\2\u0170\u016e\3\2\2\2\u0170\u016f\3\2\2\2\u0171"+
		"A\3\2\2\2\u0172\u0174\5R*\2\u0173\u0172\3\2\2\2\u0173\u0174\3\2\2\2\u0174"+
		"\u0175\3\2\2\2\u0175\u017b\5J&\2\u0176\u0178\5R*\2\u0177\u0176\3\2\2\2"+
		"\u0177\u0178\3\2\2\2\u0178\u0179\3\2\2\2\u0179\u017b\5L\'\2\u017a\u0173"+
		"\3\2\2\2\u017a\u0177\3\2\2\2\u017bC\3\2\2\2\u017c\u017d\t\f\2\2\u017d"+
		"E\3\2\2\2\u017e\u0180\5X-\2\u017f\u017e\3\2\2\2\u0180\u0181\3\2\2\2\u0181"+
		"\u017f\3\2\2\2\u0181\u0182\3\2\2\2\u0182\u0184\3\2\2\2\u0183\u0185\5H"+
		"%\2\u0184\u0183\3\2\2\2\u0184\u0185\3\2\2\2\u0185\u0189\3\2\2\2\u0186"+
		"\u0188\5X-\2\u0187\u0186\3\2\2\2\u0188\u018b\3\2\2\2\u0189\u0187\3\2\2"+
		"\2\u0189\u018a\3\2\2\2\u018a\u0194\3\2\2\2\u018b\u0189\3\2\2\2\u018c\u0190"+
		"\5H%\2\u018d\u018f\5X-\2\u018e\u018d\3\2\2\2\u018f\u0192\3\2\2\2\u0190"+
		"\u018e\3\2\2\2\u0190\u0191\3\2\2\2\u0191\u0194\3\2\2\2\u0192\u0190\3\2"+
		"\2\2\u0193\u017f\3\2\2\2\u0193\u018c\3\2\2\2\u0194G\3\2\2\2\u0195\u0196"+
		"\7\31\2\2\u0196I\3\2\2\2\u0197\u0198\5T+\2\u0198K\3\2\2\2\u0199\u019b"+
		"\5N(\2\u019a\u019c\5P)\2\u019b\u019a\3\2\2\2\u019b\u019c\3\2\2\2\u019c"+
		"\u01a1\3\2\2\2\u019d\u019e\5T+\2\u019e\u019f\5P)\2\u019f\u01a1\3\2\2\2"+
		"\u01a0\u0199\3\2\2\2\u01a0\u019d\3\2\2\2\u01a1M\3\2\2\2\u01a2\u01a4\5"+
		"T+\2\u01a3\u01a2\3\2\2\2\u01a3\u01a4\3\2\2\2\u01a4\u01a5\3\2\2\2\u01a5"+
		"\u01a6\7\32\2\2\u01a6\u01ab\5T+\2\u01a7\u01a8\5T+\2\u01a8\u01a9\7\32\2"+
		"\2\u01a9\u01ab\3\2\2\2\u01aa\u01a3\3\2\2\2\u01aa\u01a7\3\2\2\2\u01abO"+
		"\3\2\2\2\u01ac\u01ae\t\r\2\2\u01ad\u01af\5R*\2\u01ae\u01ad\3\2\2\2\u01ae"+
		"\u01af\3\2\2\2\u01af\u01b0\3\2\2\2\u01b0\u01b1\5T+\2\u01b1Q\3\2\2\2\u01b2"+
		"\u01b3\t\16\2\2\u01b3S\3\2\2\2\u01b4\u01b9\5V,\2\u01b5\u01b6\5V,\2\u01b6"+
		"\u01b7\5T+\2\u01b7\u01b9\3\2\2\2\u01b8\u01b4\3\2\2\2\u01b8\u01b5\3\2\2"+
		"\2\u01b9U\3\2\2\2\u01ba\u01bb\t\17\2\2\u01bbW\3\2\2\2\u01bc\u01bd\t\20"+
		"\2\2\u01bdY\3\2\2\2?_chpu{\177\u0086\u008b\u0096\u009c\u00a4\u00a8\u00b0"+
		"\u00b8\u00bc\u00c2\u00ca\u00ce\u00d4\u00dc\u00e0\u00e6\u00ee\u00f2\u00f6"+
		"\u00fa\u0102\u010a\u010e\u0112\u011a\u0122\u0126\u012a\u0132\u013a\u013e"+
		"\u0144\u014c\u0150\u0154\u0158\u015e\u0162\u0168\u0170\u0173\u0177\u017a"+
		"\u0181\u0184\u0189\u0190\u0193\u019b\u01a0\u01a3\u01aa\u01ae\u01b8";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}