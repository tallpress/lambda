import unittest
from genetic_algo.src.individual import Individual

class TestIndividual(unittest.TestCase):
    def test_display_returns_genes(self):
        genes = 'testing'
        indv = Individual(genes)
        self.assertEqual(indv.display(), genes)

    def test_get_fitness_calcs_fitness_correcly_if_correct(self):
        indv = Individual('test')
        indv.test_fitness('test')
        self.assertEquals(indv.fitness, 100)

    def test_get_fitness_calcs_fitness_correcly_incorrect(self):
        indv = Individual('teas')
        indv.test_fitness('test')
        self.assertEquals(indv.fitness, 50)

if __name__ == '__main__':
    unittest.main()
