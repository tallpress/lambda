import string
import random
from generation import Generation
from individual import Individual

class Spawner(object):
    def __init__(self):
        self.available_genes = string.ascii_letters

    def spawn_generation(self, target_gene, population_size):
        population = []
        for i in range(population_size):
            individual = self._spawn_individual(len(target_gene))
            population.append(individual)
        return Generation(population)

    def _spawn_individual(self, gene_length):
        genes = ''.join(random.choice(self.available_genes)
            for _ in range(gene_length))
        return Individual(genes)

    def crossover(self, parent_a, parent_b, mutation_rate):
        child_genes = ""
        halfway_point = (2 - mutation_rate)/2
        for i in range(len(parent_a.genes)):
            random_number = random.random()
            if random_number < mutation_rate:
                child_genes += random.choice(self.available_genes)
            elif random_number < halfway_point:
                child_genes += parent_a.genes[i]
            else:
                child_genes += parent_b.genes[i]
        return Individual(child_genes)
