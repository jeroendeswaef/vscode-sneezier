#!/usr/bin/env bash

function antlr4() {
    java -jar /usr/local/lib/antlr-4.7.2-complete.jar "$@"
}

antlr4 -Dlanguage=JavaScript parser/SvgPath.g4
