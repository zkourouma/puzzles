#[macro_use]
extern crate lazy_static;
extern crate regex;
use regex::Regex;

fn is_question(msg: &str) -> bool {
    lazy_static! {
        static ref RE: Regex = Regex::new(r"^[\W\w]*\?\s*$").unwrap();
    }

    RE.is_match(msg)
}

fn has_lowercase(msg: &str) -> bool {
    lazy_static! {
        static ref RE: Regex = Regex::new(r"[a-z]+").unwrap();
    }

    RE.is_match(msg)
}

fn has_uppercase(msg: &str) -> bool {
    lazy_static! {
        static ref RE: Regex = Regex::new(r"[A-Z]+").unwrap();
    }

    RE.is_match(msg)
}

fn is_nonsense(msg: &str) -> bool {
    lazy_static! {
        static ref RE: Regex = Regex::new(r"^\W*$").unwrap();
    }

    RE.is_match(msg)
}

pub fn reply(message: &str) -> &str {
    if (!has_lowercase(message)) && has_uppercase(message) && is_question(message) {
        return "Calm down, I know what I'm doing!";
    } else if is_question(message) {
        return "Sure.";
    } else if (!has_lowercase(message)) && has_uppercase(message) {
        return "Whoa, chill out!";
    } else if is_nonsense(message) {
        return "Fine. Be that way!";
    }

    return "Whatever.";
}
