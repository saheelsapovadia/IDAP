#!/bin/bash

a=0

while [ 1 ]
do
   echo "<13>`date +'%b %d %H:%M:%S'` UserLogin: demouser$1|LoggedIn" | nc -q 2 10.5.0.5 1290
   a=$((a+1))
   sleep 2
done
