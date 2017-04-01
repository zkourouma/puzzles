fn factors(x: usize) -> Vec<usize> {
    let mut facts = Vec::new();
    if x == 0 {
        return facts
    }

    for y in 1..x+1 {
        if x % y == 0 { facts.push(y) };
    }
    facts.sort();
    return facts
}

fn primes(x: usize) -> Vec<usize> {
    if x == 0 {
        return Vec::new()
    }
    let mut prime_nums = vec![2];
    let mut i = 3;
    while prime_nums.len() < x {
        let mut is_prime = true;
        for y in prime_nums.clone().into_iter() {
            if i == y || i % y == 0 {
                is_prime = false;
                break
            }
        }
        if is_prime {
            prime_nums.push(i);
        }
        i += 2;
    }
    return prime_nums
}

#[test]
fn factors_ten_in_order() {
     let x = factors(10);
     assert_eq!(x, vec![1, 2, 5, 10]);
}

#[test]
fn factors_zero_as_zero() {
    let x = factors(0);
    assert_eq!(x, vec![]);
}

#[test]
fn primes_finds_zero() {
    let x =  primes(0);
    assert_eq!(x, Vec::new());
}

#[test]
fn primes_finds_first_prime() {
    let x = primes(1);
    assert_eq!(x, vec![2]);
}

#[test]
fn primes_finds_first_five_primes() {
    let x = primes(5);
    assert_eq!(x, vec![2, 3, 5, 7, 11]);
}
