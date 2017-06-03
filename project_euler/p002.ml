#use "topfind"
#camlp4o
#thread
#require "core.top"
#require "core.syntax"
#load "str.cma"

open Core;;
open Printf;;

let rec run cap f1 f2 tot =
  let f3 = f1 + f2 in
  let tot' = match f3 mod 2 with
    | 0 -> tot + f3
    | _ -> tot
  in
  if f2 + f3 > cap then tot' else run cap f2 f3 tot'
;;

printf ("%d\n") (run 4_000_000 1 2 2);;
