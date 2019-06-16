// Generated from parser/SvgPath.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SvgPathParser.
function SvgPathListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SvgPathListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SvgPathListener.prototype.constructor = SvgPathListener;

// Enter a parse tree produced by SvgPathParser#eval.
SvgPathListener.prototype.enterEval = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#eval.
SvgPathListener.prototype.exitEval = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#svgPath.
SvgPathListener.prototype.enterSvgPath = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#svgPath.
SvgPathListener.prototype.exitSvgPath = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#movetoDrawtoCommandGroups.
SvgPathListener.prototype.enterMovetoDrawtoCommandGroups = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#movetoDrawtoCommandGroups.
SvgPathListener.prototype.exitMovetoDrawtoCommandGroups = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#movetoDrawtoCommandGroup.
SvgPathListener.prototype.enterMovetoDrawtoCommandGroup = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#movetoDrawtoCommandGroup.
SvgPathListener.prototype.exitMovetoDrawtoCommandGroup = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#drawtoCommands.
SvgPathListener.prototype.enterDrawtoCommands = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#drawtoCommands.
SvgPathListener.prototype.exitDrawtoCommands = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#drawtoCommand.
SvgPathListener.prototype.enterDrawtoCommand = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#drawtoCommand.
SvgPathListener.prototype.exitDrawtoCommand = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#moveto.
SvgPathListener.prototype.enterMoveto = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#moveto.
SvgPathListener.prototype.exitMoveto = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#movetoArgumentSequence.
SvgPathListener.prototype.enterMovetoArgumentSequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#movetoArgumentSequence.
SvgPathListener.prototype.exitMovetoArgumentSequence = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#closepath.
SvgPathListener.prototype.enterClosepath = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#closepath.
SvgPathListener.prototype.exitClosepath = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#lineto.
SvgPathListener.prototype.enterLineto = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#lineto.
SvgPathListener.prototype.exitLineto = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#linetoArgumentSequence.
SvgPathListener.prototype.enterLinetoArgumentSequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#linetoArgumentSequence.
SvgPathListener.prototype.exitLinetoArgumentSequence = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#horizontalLineto.
SvgPathListener.prototype.enterHorizontalLineto = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#horizontalLineto.
SvgPathListener.prototype.exitHorizontalLineto = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#horizontalLinetoArgumentSequence.
SvgPathListener.prototype.enterHorizontalLinetoArgumentSequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#horizontalLinetoArgumentSequence.
SvgPathListener.prototype.exitHorizontalLinetoArgumentSequence = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#verticalLineto.
SvgPathListener.prototype.enterVerticalLineto = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#verticalLineto.
SvgPathListener.prototype.exitVerticalLineto = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#verticalLinetoArgumentSequence.
SvgPathListener.prototype.enterVerticalLinetoArgumentSequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#verticalLinetoArgumentSequence.
SvgPathListener.prototype.exitVerticalLinetoArgumentSequence = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#curveto.
SvgPathListener.prototype.enterCurveto = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#curveto.
SvgPathListener.prototype.exitCurveto = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#curvetoArgumentSequence.
SvgPathListener.prototype.enterCurvetoArgumentSequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#curvetoArgumentSequence.
SvgPathListener.prototype.exitCurvetoArgumentSequence = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#curvetoArgument.
SvgPathListener.prototype.enterCurvetoArgument = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#curvetoArgument.
SvgPathListener.prototype.exitCurvetoArgument = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#smoothCurveto.
SvgPathListener.prototype.enterSmoothCurveto = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#smoothCurveto.
SvgPathListener.prototype.exitSmoothCurveto = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#smoothCurvetoArgumentSequence.
SvgPathListener.prototype.enterSmoothCurvetoArgumentSequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#smoothCurvetoArgumentSequence.
SvgPathListener.prototype.exitSmoothCurvetoArgumentSequence = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#smoothCurvetoArgument.
SvgPathListener.prototype.enterSmoothCurvetoArgument = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#smoothCurvetoArgument.
SvgPathListener.prototype.exitSmoothCurvetoArgument = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#quadraticBezierCurveto.
SvgPathListener.prototype.enterQuadraticBezierCurveto = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#quadraticBezierCurveto.
SvgPathListener.prototype.exitQuadraticBezierCurveto = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#quadraticBezierCurvetoArgumentSequence.
SvgPathListener.prototype.enterQuadraticBezierCurvetoArgumentSequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#quadraticBezierCurvetoArgumentSequence.
SvgPathListener.prototype.exitQuadraticBezierCurvetoArgumentSequence = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#quadraticBezierCurvetoArgument.
SvgPathListener.prototype.enterQuadraticBezierCurvetoArgument = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#quadraticBezierCurvetoArgument.
SvgPathListener.prototype.exitQuadraticBezierCurvetoArgument = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#smoothQuadraticBezierCurveto.
SvgPathListener.prototype.enterSmoothQuadraticBezierCurveto = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#smoothQuadraticBezierCurveto.
SvgPathListener.prototype.exitSmoothQuadraticBezierCurveto = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#smoothQuadraticBezierCurvetoArgumentSequence.
SvgPathListener.prototype.enterSmoothQuadraticBezierCurvetoArgumentSequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#smoothQuadraticBezierCurvetoArgumentSequence.
SvgPathListener.prototype.exitSmoothQuadraticBezierCurvetoArgumentSequence = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#ellipticalArc.
SvgPathListener.prototype.enterEllipticalArc = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#ellipticalArc.
SvgPathListener.prototype.exitEllipticalArc = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#ellipticalArcArgumentSequence.
SvgPathListener.prototype.enterEllipticalArcArgumentSequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#ellipticalArcArgumentSequence.
SvgPathListener.prototype.exitEllipticalArcArgumentSequence = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#ellipticalArcArgument.
SvgPathListener.prototype.enterEllipticalArcArgument = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#ellipticalArcArgument.
SvgPathListener.prototype.exitEllipticalArcArgument = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#coordinatePair.
SvgPathListener.prototype.enterCoordinatePair = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#coordinatePair.
SvgPathListener.prototype.exitCoordinatePair = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#coordinate.
SvgPathListener.prototype.enterCoordinate = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#coordinate.
SvgPathListener.prototype.exitCoordinate = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#nonnegativeNumber.
SvgPathListener.prototype.enterNonnegativeNumber = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#nonnegativeNumber.
SvgPathListener.prototype.exitNonnegativeNumber = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#number.
SvgPathListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#number.
SvgPathListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#flag.
SvgPathListener.prototype.enterFlag = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#flag.
SvgPathListener.prototype.exitFlag = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#commaWsp.
SvgPathListener.prototype.enterCommaWsp = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#commaWsp.
SvgPathListener.prototype.exitCommaWsp = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#comma.
SvgPathListener.prototype.enterComma = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#comma.
SvgPathListener.prototype.exitComma = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#integerConstant.
SvgPathListener.prototype.enterIntegerConstant = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#integerConstant.
SvgPathListener.prototype.exitIntegerConstant = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#floatingPointConstant.
SvgPathListener.prototype.enterFloatingPointConstant = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#floatingPointConstant.
SvgPathListener.prototype.exitFloatingPointConstant = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#fractionalConstant.
SvgPathListener.prototype.enterFractionalConstant = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#fractionalConstant.
SvgPathListener.prototype.exitFractionalConstant = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#exponent.
SvgPathListener.prototype.enterExponent = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#exponent.
SvgPathListener.prototype.exitExponent = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#sign.
SvgPathListener.prototype.enterSign = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#sign.
SvgPathListener.prototype.exitSign = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#digitSequence.
SvgPathListener.prototype.enterDigitSequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#digitSequence.
SvgPathListener.prototype.exitDigitSequence = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#digit.
SvgPathListener.prototype.enterDigit = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#digit.
SvgPathListener.prototype.exitDigit = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#wsp.
SvgPathListener.prototype.enterWsp = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#wsp.
SvgPathListener.prototype.exitWsp = function(ctx) {
};



exports.SvgPathListener = SvgPathListener;