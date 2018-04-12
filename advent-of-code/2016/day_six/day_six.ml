#use "topfind"
#camlp4o
#thread
#require "core.top"
#require "core.syntax"

open Core.Std;;
open Printf;;

let filename = "/Users/zack/workspace/personal/advent-of-code/input/day_six_input.txt";;


let read_file =
  let file = In_channel.create filename in
  let lines = (In_channel.input_lines file) in
  In_channel.close file;
  List.map lines (fun line -> String.to_list line)
;;

let accumulate counts key =
  let count =
    match List.Assoc.find counts key with
    | None -> 0
    | Some v -> v
  in
  List.Assoc.add counts key (count + 1)
;;

let count_fold line = List.fold line ~init:[] ~f:accumulate;;
let count_instances matrix = List.map matrix (fun line -> count_fold line);;

let get_best cmp line = match List.sort (fun (_, x) (_, y) -> cmp x y) line with
  | [] -> assert false
  | (hd, _) :: _tl -> Char.escaped hd
;;

let run cmp =
  (* Int.descending should return: qrqlznrl *)
  (* Int.ascending should return: kgzdfaon *)
  let matrix = read_file in
  let matrix' =
    match List.transpose matrix with
    | None -> assert false
    | Some x -> x
  in
  String.concat (List.map (count_instances matrix') (fun line -> get_best cmp line))
;;

printf ("%s\n") (run Int.descending);;
printf ("%s\n") (run Int.ascending);;
