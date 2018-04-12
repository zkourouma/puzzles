#use "topfind"
#camlp4o
#thread
#require "core.top"
#require "core.syntax"
#load "str.cma"

open Core.Std;;
open Printf;;
open Digest;;


let is_valid str = String.is_prefix str "00000";;
let is_valid' str i =
  let r = Str.regexp "[0-7]" in
  is_valid str && Str.string_match r i 0;;

let digestion n = Digest.to_hex (Digest.string ("wtnhxymk" ^ string_of_int !n));;

let run len =
  (* should print: 2414bc77 *)
  let password = ref [] in
  let i = ref 0 in
  while List.length !password < len do
    password := if is_valid (digestion i) then (digestion i).[5] :: !password else !password;
    i := !i + 1;
  done;
  String.concat (List.map (List.rev !password) (fun el -> Char.escaped el));;

let run_too len =
  (* should print: 437e60fc *)
  let placeholder = "" in
  let password = Array.create len placeholder in
  let i = ref 0 in
  while Array.exists password ~f:(fun el -> el = placeholder) do
    let hex = digestion i in
    let position = Char.escaped hex.[5] in
    let candidate = hex.[6] in
    if is_valid' hex position && password.(int_of_string position) = placeholder then
      password.(int_of_string position) <- Char.escaped candidate
    else ();
    i := !i + 1;
  done;
  String.concat (Array.to_list password);;

printf ("%s\n") (run 8);;
printf ("%s\n") (run_too 8);;
