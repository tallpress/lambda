import unittest
from genetic_algo.src.individual import Individual

class TestIndividual(unittest.TestCase):
    def test_display_returns_genes(self):
        indv = Individual('testing')
        self.assertEqual(indv.display(), 'testing')

    def test_get_fitness_calcs_fitness_correcly_if_correct(self):
        indv = Individual('testing')
        indv.test_fitness('testing')
        self.assertEquals(indv.fitness, 100)

    def test_get_fitness_calcs_fitness_correcly_incorrect(self):
        indv = Individual('testings')
        indv.test_fitness('yegtdnas')
        self.assertEquals(indv.fitness, 50)

if __name__ == '__main__':
    unittest.main()
