// Generated from parser/SvgPath.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SvgPathParser.

function SvgPathVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SvgPathVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SvgPathVisitor.prototype.constructor = SvgPathVisitor;

// Visit a parse tree produced by SvgPathParser#eval.
SvgPathVisitor.prototype.visitEval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#svgPath.
SvgPathVisitor.prototype.visitSvgPath = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#movetoDrawtoCommandGroups.
SvgPathVisitor.prototype.visitMovetoDrawtoCommandGroups = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#movetoDrawtoCommandGroup.
SvgPathVisitor.prototype.visitMovetoDrawtoCommandGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#drawtoCommands.
SvgPathVisitor.prototype.visitDrawtoCommands = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#drawtoCommand.
SvgPathVisitor.prototype.visitDrawtoCommand = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#moveto.
SvgPathVisitor.prototype.visitMoveto = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#movetoArgumentSequence.
SvgPathVisitor.prototype.visitMovetoArgumentSequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#closepath.
SvgPathVisitor.prototype.visitClosepath = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#lineto.
SvgPathVisitor.prototype.visitLineto = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#linetoArgumentSequence.
SvgPathVisitor.prototype.visitLinetoArgumentSequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#horizontalLineto.
SvgPathVisitor.prototype.visitHorizontalLineto = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#horizontalLinetoArgumentSequence.
SvgPathVisitor.prototype.visitHorizontalLinetoArgumentSequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#verticalLineto.
SvgPathVisitor.prototype.visitVerticalLineto = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#verticalLinetoArgumentSequence.
SvgPathVisitor.prototype.visitVerticalLinetoArgumentSequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#curveto.
SvgPathVisitor.prototype.visitCurveto = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#curvetoArgumentSequence.
SvgPathVisitor.prototype.visitCurvetoArgumentSequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#curvetoArgument.
SvgPathVisitor.prototype.visitCurvetoArgument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#smoothCurveto.
SvgPathVisitor.prototype.visitSmoothCurveto = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#smoothCurvetoArgumentSequence.
SvgPathVisitor.prototype.visitSmoothCurvetoArgumentSequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#smoothCurvetoArgument.
SvgPathVisitor.prototype.visitSmoothCurvetoArgument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#quadraticBezierCurveto.
SvgPathVisitor.prototype.visitQuadraticBezierCurveto = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#quadraticBezierCurvetoArgumentSequence.
SvgPathVisitor.prototype.visitQuadraticBezierCurvetoArgumentSequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#quadraticBezierCurvetoArgument.
SvgPathVisitor.prototype.visitQuadraticBezierCurvetoArgument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#smoothQuadraticBezierCurveto.
SvgPathVisitor.prototype.visitSmoothQuadraticBezierCurveto = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#smoothQuadraticBezierCurvetoArgumentSequence.
SvgPathVisitor.prototype.visitSmoothQuadraticBezierCurvetoArgumentSequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#ellipticalArc.
SvgPathVisitor.prototype.visitEllipticalArc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#ellipticalArcArgumentSequence.
SvgPathVisitor.prototype.visitEllipticalArcArgumentSequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#ellipticalArcArgument.
SvgPathVisitor.prototype.visitEllipticalArcArgument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#coordinatePair.
SvgPathVisitor.prototype.visitCoordinatePair = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#coordinate.
SvgPathVisitor.prototype.visitCoordinate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#nonnegativeNumber.
SvgPathVisitor.prototype.visitNonnegativeNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#number.
SvgPathVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#flag.
SvgPathVisitor.prototype.visitFlag = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#commaWsp.
SvgPathVisitor.prototype.visitCommaWsp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#comma.
SvgPathVisitor.prototype.visitComma = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#integerConstant.
SvgPathVisitor.prototype.visitIntegerConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#floatingPointConstant.
SvgPathVisitor.prototype.visitFloatingPointConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#fractionalConstant.
SvgPathVisitor.prototype.visitFractionalConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#exponent.
SvgPathVisitor.prototype.visitExponent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#sign.
SvgPathVisitor.prototype.visitSign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#digitSequence.
SvgPathVisitor.prototype.visitDigitSequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#digit.
SvgPathVisitor.prototype.visitDigit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SvgPathParser#wsp.
SvgPathVisitor.prototype.visitWsp = function(ctx) {
  return this.visitChildren(ctx);
};



exports.SvgPathVisitor = SvgPathVisitor;