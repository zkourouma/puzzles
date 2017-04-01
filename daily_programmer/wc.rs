use std::io;
use std::io::BufferedReader;
use std::io::File;
use std::io::fs::PathExtensions;
use std::os;

fn main(){
    let c_count: int = 0;
    let w_count: int = 0;
    let l_count: int = 0;

    let args_input = &os::args().last();
    let file_string = match args_input {
        Some(string) => println!("args_input: {}", string),
        None => println!("")
    };

    let file_path = Path::new(file_string);
    println!("path: {}", file_path.display());
    match os::self_exe_path() {
        Some(exe_path) => println!("Executable's Path is: {}", exe_path.display()),
        None => println!("Impossible to fetch the path of this executable.")
    };
    let mut file_to_count = io::BufferedReader::new(io::File::open(&file_path));
    for line in file_to_count.lines() {
        print!("{}", line.unwrap());
    }
}
