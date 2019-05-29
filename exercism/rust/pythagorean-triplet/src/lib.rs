use std::collections::HashSet;

pub fn find(sum: u32) -> HashSet<[u32; 3]> {
    let mut triplets = HashSet::new();
    let third = sum / 3;

    for a in 1..(third) {
        for b in (a + 1)..(third * 2) {
            for c in (b + 1)..=(sum - a - b) {
                if (a + b + c == sum) && (a.pow(2) + b.pow(2) == c.pow(2)) {
                    triplets.insert([a, b, c]);
                }
            }
        }
    }

    triplets
}
