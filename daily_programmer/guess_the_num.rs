// extern crate rand;

use std::cmp::Ordering::{Equal, Greater, Less};
use std::io;
// use rand::Rand;

fn main() {
    println!("Guess a number");
    // let secret_number = (rand::random::<usize>() % 100us) + 1us;
    // let mut rng = rand::thread_rng();
    // let secret_number = usize::sample_range(1us, 100us);
    let secret_number = 42isize;
    println!("Secret number is {}", secret_number);

    let max_tries = 5usize;
    let mut guesses: usize = 0;
    let reader = io::stdin();

    loop {
        if guesses == max_tries {
            println!("You couldn't win with {} guesses", max_tries);
            break;
        }
        println!("please enter guess (guess #: {}):", guesses + 1);
        let mut input = String::new();
        reader
            .read_line(&mut input)
            .ok()
            .expect("Failed to read line");
        let input_num: Option<isize> = input.trim().parse::<isize>().ok();
        let num = match input_num {
            Some(num) => num,
            None => {
                println!("please input a number");
                continue;
            }
        };

        println!("you guessed: {}", num);
        guesses += 1;

        match num.cmp(&secret_number) {
            Less => println!("too small"),
            Greater => println!("too big"),
            Equal => {
                println!("you win!");
                println!("it only took {} guesses", guesses);
                break;
            }
        }
    }
}
