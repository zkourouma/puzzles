fn is_question(msg: &str) -> bool {
    msg.ends_with('?')
}

fn has_lowercase(msg: &str) -> bool {
    msg.chars().any(char::is_lowercase)
}

fn has_uppercase(msg: &str) -> bool {
    msg.chars().any(char::is_uppercase)
}

fn is_nonsense(msg: &str) -> bool {
    !msg.chars().any(char::is_alphanumeric)
}

fn is_yelled(msg: &str) -> bool {
    !has_lowercase(msg) && has_uppercase(msg)
}

pub fn reply(message: &str) -> &str {
    let msg = message.trim();

    if (is_yelled(msg)) && is_question(msg) {
        "Calm down, I know what I'm doing!"
    } else if is_question(msg) {
        "Sure."
    } else if is_yelled(msg) {
        "Whoa, chill out!"
    } else if is_nonsense(msg) {
        "Fine. Be that way!"
    } else {
        "Whatever."
    }
}
