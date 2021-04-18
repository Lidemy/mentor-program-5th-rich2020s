#!/bin/bash

data=$(curl https://api.github.com/users/$1)
data2=$(echo "$data" | egrep '"name"|bio' | cut -d '"' -f 4)
data3=$(echo "$data" | egrep 'blog|location' | cut -d '"' -f 4)
ans="$data2"$'\n'$data3
echo "$ans"