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
    let mut ret = "Whatever.";

    if (is_yelled(msg)) && is_question(msg) {
        ret = "Calm down, I know what I'm doing!";
    } else if is_question(msg) {
        ret = "Sure.";
    } else if is_yelled(msg) {
        ret = "Whoa, chill out!";
    } else if is_nonsense(msg) {
        ret = "Fine. Be that way!";
    }

    ret
}
