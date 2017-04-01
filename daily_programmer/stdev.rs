use std::io;
use std::num::ParseFloatError as PFE;

fn find_mean(population: &Vec<f32>) -> f32 {
    let sum = get_sum(population);
    return sum / population.len() as f32;
}

fn get_diff_mean_square(population: &Vec<f32>, mean: f32) -> Vec<f32> {
    return population.clone().iter().map(|&x| (mean - x).powi(2)).collect();
}

fn get_sum(diff_squares: &Vec<f32>) -> f32 {
    return diff_squares.clone().iter().fold(0.0, |a, &b| a + b);
}

fn find_variance(population: &Vec<f32>, mean: f32) -> f32 {
    let mean_s = get_diff_mean_square(population, mean);
    let tot = get_sum(&mean_s);
    return tot / population.len() as f32;
}

fn find_st_dev(population: &Vec<f32>) -> f32 {
    let mean = find_mean(population);
    let variance = find_variance(population, mean);
    return variance.sqrt();
}

fn parse_stdin(input: &str) -> Vec<f32> {
    let mut population = Vec::new();
    let string_list: Vec<&str> = input.split(' ').collect();
    for c in string_list {
        let digit_res: Result<f32, PFE> = c.parse::<f32>();
        if digit_res.is_ok() {
            population.push(digit_res.unwrap());
        }
    }
    if population.is_empty() {
        panic!("no values could be parsed");
    }

    return population;
}

fn main() {
    loop {

        let reader = io::stdin();
        let mut input = String::new();
        println!("Enter the numbers seperated with spaces");
        reader.read_line(&mut input).ok().expect("Failed to read line");

        let population = parse_stdin(input.trim());
        let mean = find_mean(&population);
        let variance = find_variance(&population, mean);
        let st_dev = find_st_dev(&population);
        println!("mean: {}", mean);
        println!("variance: {}", variance);
        println!("standard deviation: {}", st_dev);

    }
}

#[test]
fn test_challenge_input_one() {
    let fk_stdin = "266 344 375 399 409 433 436 440 449 476 502 504 530 584 587";
    let parsed_stdin = parse_stdin(fk_stdin);
    let st_dev = find_st_dev(&parsed_stdin);
    assert_eq!(st_dev, 83.661591);
}

#[test]
fn test_st_dev_challenge_input_two() {
    let fk_stdin = "809 816 833 849 851 961 976 1009 1069 1125 1161 1172 1178 1187 1208 1215 1229 1241 1260 1373";
    let parsed_stdin = parse_stdin(fk_stdin);
    let st_dev = find_st_dev(&parsed_stdin);
    assert_eq!(st_dev, 170.127274);
}

#[test]
fn test_find_mean() {
    let population = vec![1.0, 2.0, 3.0, 4.0];
    let mean = find_mean(&population);
    assert_eq!(mean, 2.5);
}

#[test]
fn test_find_variance() {
    let population = vec![1.0, 2.0, 3.0, 4.0];
    let variance = find_variance(&population, 2.5);
    assert_eq!(variance, 1.25);
}

#[test]
fn test_get_sum() {
    let population = vec![1.0, 2.0, 3.0, 4.0];
    let sum = get_sum(&population);
    assert_eq!(sum, 10.0);
}

#[test]
fn test_get_diff_mean_square() {
    let population = vec![1.0, 2.0, 3.0, 4.0];
    let diff_squares = get_diff_mean_square(&population, 2.5);
    assert_eq!(diff_squares, vec![2.25, 0.25, 0.25, 2.25]);
}
