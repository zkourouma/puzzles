#use "topfind"
#camlp4o
#thread
#require "core.top"
#require "core.syntax"
#require "re2"

open Core.Std;;
open Printf;;
open Re2.Std;;

let filename = "/Users/zack/workspace/personal/advent-of-code/input/day_eight_input.txt";;

let rect screen a b =
  for i = 0 to a do
    for j = 0 to b do
      screen.(i).(j) <- 1
    done;
  done;
;;

let rotate ?(x=0) ?(y=0) distance screen =
  print_int x;
  print_int y;
  print_int distance;
;;

let read_file =
  let file = In_channel.create filename in
  let lines = (In_channel.input_lines file) in
  In_channel.close file;
  lines
;;

let run x y =
  let base_screen = Array.make_matrix x y 0 in
  let match_rect = Re2.create_exn "^rect" in
  let match_rotate = Re2.create_exn "^rotate" in

  List.iter read_file (fun line ->
      if Re2.matches match_rect line then
        rect base_screen 1 1
      else if Re2.matches match_rotate line then
        ((List.iter (Re2.find_all_exn match_rotate line) print_string);
        rotate ~x:1 ~y:2 3 base_screen)
      else
        assert false
    );
  base_screen
;;

run 50 6;;
