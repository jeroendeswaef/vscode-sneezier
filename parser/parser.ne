@builtin "number.ne"  
Main ->  (MoveTo | Cubic):*
MoveTo -> "M" _ int _ int _:? {% d => ({ type: 'helperPoint', x: d.filter(Number)[0], y: d.filter(Number)[1] }) %}
Cubic -> "C" _ int _ int _ int _ int _ int _ int _:? {% d => null %}
_ -> [\s] {% d => null %}