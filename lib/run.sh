#!/bin/bash

files=$(ls ./data/*)

for lfile in $files
do
  sfile=$(basename $lfile '.dat')
  node ../lib/convert.js < $lfile > "./spec/$sfile.spec.js"
done