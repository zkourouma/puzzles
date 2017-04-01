class Allergies(object):
    allergens = [
        'cats', 'pollen', 'chocolate', 'tomatoes',
        'strawberries', 'shellfish', 'peanuts', 'eggs'
    ]

    def __init__(self, allergen_value):
        self._allergies = []
        bit_list = format(allergen_value, '08b')[-8:]
        for bit, allergen in zip(bit_list, self.allergens):
            if bit == '1':
                self._allergies.insert(0, allergen)

    def is_allergic_to(self, item):
        return item in self._allergies

    @property
    def list(self):
        return self._allergies
