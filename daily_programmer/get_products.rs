// You have an array of integers, and for each index you want to find the
// product of every integer except the integer at that index.

// Write a function get_products_of_all_ints_except_at_index() that takes an
// array of integers and returns an array of the products.

// do not use division

//fn get_products(input: Vec<uint>) -> Vec<uint> {
    //let mut counter: uint = 0;
    //let mut product_results: Vec<uint> = Vec::new();

    //if input.len() < 2 { return product_results };

    //for _ in input.iter() {
        //let mut prod: uint = 1;
        //let mut others: Vec<uint> = input.clone();
        //others.remove(counter);
        //for x in others.iter() {
            //prod *= *x;
        //}
        //product_results.push(prod);
        //counter += 1u;
    //}
    //return product_results
//}

fn get_products(nums: &[usize]) -> Vec<usize> {
    let mut result = Vec::new();
    if nums.len() < 2 {
        return result;
    };
    for _ in 0..nums.len() {
        result.push(1);
    }
    let mut prod = 1;
    for (&a, b) in nums.iter().zip(result.iter_mut()) {
        *b *= prod;
        prod *= a;
    }
    prod = 1;
    for (&a, b) in nums.iter().rev().zip(result.iter_mut().rev()) {
        *b *= prod;
        prod *= a;
    }
    result
}

#[test]
fn example_set() {
    let input: Vec<usize> = vec![1, 7, 3, 4];
    let output = get_products(&input);
    assert_eq!(output, vec![84usize, 12usize, 28usize, 21usize]);
}

#[test]
fn empty_case() {
    let input: Vec<usize> = Vec::new();
    let output = get_products(&input);
    assert_eq!(output, vec![]);
}

#[test]
fn single_case() {
    let input: Vec<usize> = vec![2];
    let output = get_products(&input);
    assert_eq!(output, vec![]);
}
