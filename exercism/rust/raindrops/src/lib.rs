pub fn raindrops(input: u32) -> String {
    let acc_factor = |maybe_acc: Option<String>, factor: u32, msg: &str| {
        if input % factor != 0 {
            return maybe_acc;
        }
        Some(maybe_acc.map_or(msg.to_string(), |existing_string| existing_string + msg))
    };

    let mut s = acc_factor(None, 3, "Pling");
    s = acc_factor(s, 5, "Plang");
    s = acc_factor(s, 7, "Plong");

    s.unwrap_or(input.to_string())
}
