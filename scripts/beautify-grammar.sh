#!/usr/bin/env bash

cat parser/SvgPath-orig.g4 | gsed -r 's/(_)([a-z])/\U\2/g' > parser/SvgPath.g4