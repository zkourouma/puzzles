fn div_by_three(num: isize) -> bool {
    num % 3 == 0
}

fn div_by_five(num: isize) -> bool {
    num % 5 == 0
}

fn div_by_fifteen(num: isize) -> bool {
    div_by_three(num) && div_by_five(num)
}

#[test]
fn test_div_by_three() {
    assert!(!div_by_three(1));
}

#[test]
fn test_div_by_three_w_three() {
    assert!(div_by_three(3));
}

#[test]
fn test_div_by_five() {
    assert!(!div_by_five(1));
}

#[test]
fn test_div_by_five_w_five() {
    assert!(div_by_five(5));
}

#[test]
fn test_div_by_fifteen() {
    assert!(!div_by_fifteen(1));
}

#[test]
fn test_div_by_fifteen_w_fifteen() {
    assert!(div_by_fifteen(15));
}

fn main() {
    for num in 1isize..101 {
        println!(
            "{:?}",
            if div_by_fifteen(num) {
                "FizzBuzz".to_string()
            } else if div_by_three(num) {
                "Fizz".to_string()
            } else if div_by_five(num) {
                "Buzz".to_string()
            } else {
                num.to_string()
            }
        );
    }
}
