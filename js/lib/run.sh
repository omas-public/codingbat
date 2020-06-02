#!/bin/bash

dir=$1
files=$(ls $dir/data/*)

for file in $files
do
  name=$(basename $file '.dat')
  node makeSrc.js <  $file > "$dir/src/$name.js"
  node makeSpec.js < $file >> "$dir/spec/$name.spec.js"
done