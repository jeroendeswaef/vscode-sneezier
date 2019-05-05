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


// Enter a parse tree produced by SvgPathParser#svg_path.
SvgPathListener.prototype.enterSvg_path = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#svg_path.
SvgPathListener.prototype.exitSvg_path = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#moveto_drawto_command_groups.
SvgPathListener.prototype.enterMoveto_drawto_command_groups = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#moveto_drawto_command_groups.
SvgPathListener.prototype.exitMoveto_drawto_command_groups = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#moveto_drawto_command_group.
SvgPathListener.prototype.enterMoveto_drawto_command_group = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#moveto_drawto_command_group.
SvgPathListener.prototype.exitMoveto_drawto_command_group = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#drawto_commands.
SvgPathListener.prototype.enterDrawto_commands = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#drawto_commands.
SvgPathListener.prototype.exitDrawto_commands = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#drawto_command.
SvgPathListener.prototype.enterDrawto_command = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#drawto_command.
SvgPathListener.prototype.exitDrawto_command = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#moveto.
SvgPathListener.prototype.enterMoveto = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#moveto.
SvgPathListener.prototype.exitMoveto = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#moveto_argument_sequence.
SvgPathListener.prototype.enterMoveto_argument_sequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#moveto_argument_sequence.
SvgPathListener.prototype.exitMoveto_argument_sequence = function(ctx) {
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


// Enter a parse tree produced by SvgPathParser#lineto_argument_sequence.
SvgPathListener.prototype.enterLineto_argument_sequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#lineto_argument_sequence.
SvgPathListener.prototype.exitLineto_argument_sequence = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#horizontal_lineto.
SvgPathListener.prototype.enterHorizontal_lineto = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#horizontal_lineto.
SvgPathListener.prototype.exitHorizontal_lineto = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#horizontal_lineto_argument_sequence.
SvgPathListener.prototype.enterHorizontal_lineto_argument_sequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#horizontal_lineto_argument_sequence.
SvgPathListener.prototype.exitHorizontal_lineto_argument_sequence = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#vertical_lineto.
SvgPathListener.prototype.enterVertical_lineto = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#vertical_lineto.
SvgPathListener.prototype.exitVertical_lineto = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#vertical_lineto_argument_sequence.
SvgPathListener.prototype.enterVertical_lineto_argument_sequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#vertical_lineto_argument_sequence.
SvgPathListener.prototype.exitVertical_lineto_argument_sequence = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#curveto.
SvgPathListener.prototype.enterCurveto = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#curveto.
SvgPathListener.prototype.exitCurveto = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#curveto_argument_sequence.
SvgPathListener.prototype.enterCurveto_argument_sequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#curveto_argument_sequence.
SvgPathListener.prototype.exitCurveto_argument_sequence = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#curveto_argument.
SvgPathListener.prototype.enterCurveto_argument = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#curveto_argument.
SvgPathListener.prototype.exitCurveto_argument = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#smooth_curveto.
SvgPathListener.prototype.enterSmooth_curveto = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#smooth_curveto.
SvgPathListener.prototype.exitSmooth_curveto = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#smooth_curveto_argument_sequence.
SvgPathListener.prototype.enterSmooth_curveto_argument_sequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#smooth_curveto_argument_sequence.
SvgPathListener.prototype.exitSmooth_curveto_argument_sequence = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#smooth_curveto_argument.
SvgPathListener.prototype.enterSmooth_curveto_argument = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#smooth_curveto_argument.
SvgPathListener.prototype.exitSmooth_curveto_argument = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#quadratic_bezier_curveto.
SvgPathListener.prototype.enterQuadratic_bezier_curveto = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#quadratic_bezier_curveto.
SvgPathListener.prototype.exitQuadratic_bezier_curveto = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#quadratic_bezier_curveto_argument_sequence.
SvgPathListener.prototype.enterQuadratic_bezier_curveto_argument_sequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#quadratic_bezier_curveto_argument_sequence.
SvgPathListener.prototype.exitQuadratic_bezier_curveto_argument_sequence = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#quadratic_bezier_curveto_argument.
SvgPathListener.prototype.enterQuadratic_bezier_curveto_argument = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#quadratic_bezier_curveto_argument.
SvgPathListener.prototype.exitQuadratic_bezier_curveto_argument = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#smooth_quadratic_bezier_curveto.
SvgPathListener.prototype.enterSmooth_quadratic_bezier_curveto = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#smooth_quadratic_bezier_curveto.
SvgPathListener.prototype.exitSmooth_quadratic_bezier_curveto = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#smooth_quadratic_bezier_curveto_argument_sequence.
SvgPathListener.prototype.enterSmooth_quadratic_bezier_curveto_argument_sequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#smooth_quadratic_bezier_curveto_argument_sequence.
SvgPathListener.prototype.exitSmooth_quadratic_bezier_curveto_argument_sequence = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#elliptical_arc.
SvgPathListener.prototype.enterElliptical_arc = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#elliptical_arc.
SvgPathListener.prototype.exitElliptical_arc = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#elliptical_arc_argument_sequence.
SvgPathListener.prototype.enterElliptical_arc_argument_sequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#elliptical_arc_argument_sequence.
SvgPathListener.prototype.exitElliptical_arc_argument_sequence = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#elliptical_arc_argument.
SvgPathListener.prototype.enterElliptical_arc_argument = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#elliptical_arc_argument.
SvgPathListener.prototype.exitElliptical_arc_argument = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#coordinate_pair.
SvgPathListener.prototype.enterCoordinate_pair = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#coordinate_pair.
SvgPathListener.prototype.exitCoordinate_pair = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#coordinate.
SvgPathListener.prototype.enterCoordinate = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#coordinate.
SvgPathListener.prototype.exitCoordinate = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#nonnegative_number.
SvgPathListener.prototype.enterNonnegative_number = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#nonnegative_number.
SvgPathListener.prototype.exitNonnegative_number = function(ctx) {
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


// Enter a parse tree produced by SvgPathParser#comma_wsp.
SvgPathListener.prototype.enterComma_wsp = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#comma_wsp.
SvgPathListener.prototype.exitComma_wsp = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#comma.
SvgPathListener.prototype.enterComma = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#comma.
SvgPathListener.prototype.exitComma = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#integer_constant.
SvgPathListener.prototype.enterInteger_constant = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#integer_constant.
SvgPathListener.prototype.exitInteger_constant = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#floating_point_constant.
SvgPathListener.prototype.enterFloating_point_constant = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#floating_point_constant.
SvgPathListener.prototype.exitFloating_point_constant = function(ctx) {
};


// Enter a parse tree produced by SvgPathParser#fractional_constant.
SvgPathListener.prototype.enterFractional_constant = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#fractional_constant.
SvgPathListener.prototype.exitFractional_constant = function(ctx) {
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


// Enter a parse tree produced by SvgPathParser#digit_sequence.
SvgPathListener.prototype.enterDigit_sequence = function(ctx) {
};

// Exit a parse tree produced by SvgPathParser#digit_sequence.
SvgPathListener.prototype.exitDigit_sequence = function(ctx) {
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