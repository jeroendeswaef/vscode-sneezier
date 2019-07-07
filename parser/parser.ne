@builtin "number.ne"  
Main ->  Rule:+
Rule -> MoveTo | Cubic
MoveTo -> "M" _ int _ int _:? {% d => `Moveto(${d.filter(Number).join(',')})`%}
Cubic -> "C" _ int _ int _ int _ int _ int _ int _:? {% d => null %}
_ -> [\s]:* {% d => null %}