@builtin "number.ne"  
@{% const filterNumbers = d => d.filter(n => typeof n === 'number'); %}
Main ->  (MoveTo | Cubic | LineTo):*
MoveTo -> "M" _ int _ int _:? {% d => (numbers = filterNumbers(d), { type: 'helperPoint', x: numbers[0], y: numbers[1] }) %}
LineTo -> "L" _ int _ int _:? {% d => (numbers = filterNumbers(d), { type: 'lineTo', x: numbers[0], y: numbers[1] }) %}
Cubic -> "C" _ int _ int _ int _ int _ int _ int _:? {% d => null %}
_ -> [\s] {% d => null %}