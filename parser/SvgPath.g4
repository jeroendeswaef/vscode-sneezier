grammar SvgPath;

eval : svgPath;

svgPath:
    wsp* movetoDrawtoCommandGroups? wsp*;
movetoDrawtoCommandGroups:
    movetoDrawtoCommandGroup
    | movetoDrawtoCommandGroup wsp* movetoDrawtoCommandGroups;
movetoDrawtoCommandGroup:
    moveto wsp* drawtoCommands?;
drawtoCommands:
    drawtoCommand
    | drawtoCommand wsp* drawtoCommands;
drawtoCommand:
    closepath
    | lineto
    | horizontalLineto
    | verticalLineto
    | curveto
    | smoothCurveto
    | quadraticBezierCurveto
    | smoothQuadraticBezierCurveto
    | ellipticalArc;
moveto:
    ( 'M' | 'm' ) wsp* movetoArgumentSequence;
movetoArgumentSequence:
    coordinatePair
    | coordinatePair commaWsp? linetoArgumentSequence;
closepath:
    ('Z' | 'z');
lineto:
    ( 'L' | 'l' ) wsp* linetoArgumentSequence;
linetoArgumentSequence:
    coordinatePair
    | coordinatePair commaWsp? linetoArgumentSequence;
horizontalLineto:
    ( 'H' | 'h' ) wsp* horizontalLinetoArgumentSequence;
horizontalLinetoArgumentSequence:
    coordinate
    | coordinate commaWsp? horizontalLinetoArgumentSequence;
verticalLineto:
    ( 'V' | 'v' ) wsp* verticalLinetoArgumentSequence;
verticalLinetoArgumentSequence:
    coordinate
    | coordinate commaWsp? verticalLinetoArgumentSequence;
curveto:
    ( 'C' | 'c' ) wsp* curvetoArgumentSequence;
curvetoArgumentSequence:
    curvetoArgument
    | curvetoArgument commaWsp? curvetoArgumentSequence;
curvetoArgument:
    coordinatePair commaWsp? coordinatePair commaWsp? coordinatePair;
smoothCurveto:
    ( 'S' | 's' ) wsp* smoothCurvetoArgumentSequence;
smoothCurvetoArgumentSequence:
    smoothCurvetoArgument
    | smoothCurvetoArgument commaWsp? smoothCurvetoArgumentSequence;
smoothCurvetoArgument:
    coordinatePair commaWsp? coordinatePair;
quadraticBezierCurveto:
    ( 'Q' | 'q' ) wsp* quadraticBezierCurvetoArgumentSequence;
quadraticBezierCurvetoArgumentSequence:
    quadraticBezierCurvetoArgument
    | quadraticBezierCurvetoArgument commaWsp? 
        quadraticBezierCurvetoArgumentSequence;
quadraticBezierCurvetoArgument:
    coordinatePair commaWsp? coordinatePair;
smoothQuadraticBezierCurveto:
    ( 'T' | 't' ) wsp* smoothQuadraticBezierCurvetoArgumentSequence;
smoothQuadraticBezierCurvetoArgumentSequence:
    coordinatePair
    | coordinatePair commaWsp? smoothQuadraticBezierCurvetoArgumentSequence;
ellipticalArc:
    ( 'A' | 'a' ) wsp* ellipticalArcArgumentSequence;
ellipticalArcArgumentSequence:
    ellipticalArcArgument
    | ellipticalArcArgument commaWsp? ellipticalArcArgumentSequence;
ellipticalArcArgument:
    nonnegativeNumber commaWsp? nonnegativeNumber commaWsp? 
        number commaWsp flag commaWsp? flag commaWsp? coordinatePair;
coordinatePair:
    coordinate commaWsp? coordinate;
coordinate:
    number;
nonnegativeNumber:
    integerConstant
    | floatingPointConstant;
number:
    sign? integerConstant
    | sign? floatingPointConstant;
flag:
    '0' | '1';
commaWsp:
    (wsp+ comma? wsp*) | (comma wsp*);
comma:
    ',';
integerConstant:
    digitSequence;
floatingPointConstant:
    fractionalConstant exponent?
    | digitSequence exponent;
fractionalConstant:
    digitSequence? '.' digitSequence
    | digitSequence '.';
exponent:
    ( 'e' | 'E' ) sign? digitSequence;
sign:
    '+' | '-';
digitSequence:
    digit
    | digit digitSequence;
digit:
    ('0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9');
wsp:
    (' ' | '\t' | '\r'| '\n');