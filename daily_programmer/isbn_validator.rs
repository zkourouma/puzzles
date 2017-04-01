use std::io;

fn isbn_validator(potential: &str) -> bool {
    let mut total = 0;
    let mut counter = 10;
    let string_list: Vec<char> = potential.chars().collect();
    for c in string_list {
        if c.is_numeric() {
            let digit_opt = c.to_digit(10);
            let digit = match digit_opt {
                Some(digit) => digit,
                None        => {
                    println!("Not a number");
                    continue;
                }
            };
            total += digit * counter;
            counter -= 1;
        } else if c.is_alphabetic() && counter == 1 {
            total += 10 * counter;
            counter -= 1;
        }

    }
    return total % 11 == 0 && total != 0
}

fn main() {
    loop {
        let reader = io::stdin();
        let mut input = String::new();

        println!("Enter a potential ISBN");
        reader.read_line(&mut input).ok().expect("Failed to read line");

        let is_valid = isbn_validator(input.trim());
        println!("Valid ISBN: {}", is_valid);
    }
}

#[test]
fn test_valid_isbn() {
    assert_eq!(isbn_validator("0-4650-6934-7"), true);
}

#[test]
fn test_isbn_without_dashes() {
    assert_eq!(isbn_validator("1936594072"), true);
}

#[test]
fn test_isbn_with_x_at_the_end() {
    assert_eq!(isbn_validator("156881111X"), true);
}

#[test]
fn test_isbn_validator_for_bad_isbn() {
    assert_eq!(isbn_validator("7-4650-6934-7"), false);
}

#[test]
fn test_isbn_validator_for_bad_isbn_with_x_at_the_end() {
    assert_eq!(isbn_validator("193659407X"), false);
}

#[test]
fn test_isbn_validator_for_bad_isbn_with_all_letters() {
    assert_eq!(isbn_validator("XXXXXXXXXX"), false);
}
