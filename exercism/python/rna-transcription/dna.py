def to_rna(strain):
    mapping = {'A': 'U', 'C': 'G', 'T': 'A', 'G': 'C'}
    return ''.join([mapping[dna] for dna in list(strain)])
