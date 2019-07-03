fn is_question(msg: &str) -> bool {
    msg.ends_with('?')
}

fn has_lowercase(msg: &str) -> bool {
    msg.chars().any(|c| c.is_lowercase())
}

fn has_uppercase(msg: &str) -> bool {
    msg.chars().any(|c| c.is_uppercase())
}

fn is_nonsense(msg: &str) -> bool {
    !msg.chars().any(|c| c.is_alphanumeric())
}

pub fn reply(message: &str) -> &str {
    let msg = message.trim();

    if (!has_lowercase(msg)) && has_uppercase(msg) && is_question(msg) {
        return "Calm down, I know what I'm doing!";
    } else if is_question(msg) {
        return "Sure.";
    } else if (!has_lowercase(msg)) && has_uppercase(msg) {
        return "Whoa, chill out!";
    } else if is_nonsense(msg) {
        return "Fine. Be that way!";
    }

    return "Whatever.";
}
