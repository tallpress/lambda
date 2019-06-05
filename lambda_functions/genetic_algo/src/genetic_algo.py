from generation import Generation
from spawner import Spawner
import random

class GeneticAlgo(object):
    def __init__(self,
        population_size,
        mutation_rate,
        target,
        good_sample_size,
        random_sample_size,
        spawner=None,
    ):
        self.mutation_rate = mutation_rate
        self.population_size = population_size
        self.target = target
        self.good_sample_size = good_sample_size
        self.random_sample_size = random_sample_size
        self.spawner = Spawner() if spawner is None else spawner

    def get_next_generation(self, generation):
        scored_generation = generation.score(self.target)
        selection = self._select_from_generation(scored_generation)
        next_population = self._crossover_selection(selection)
        return Generation(next_population)

    def _select_from_generation(self, scored_generation):
        population = scored_generation.population
        good_samples = population[:self.good_sample_size]
        remaining_population = population[self.good_sample_size:]
        random.shuffle(remaining_population)
        random_samples = remaining_population[:self.random_sample_size]
        concat_list = good_samples + random_samples
        return concat_list

    def _crossover_selection(self, selection):
        next_population = []
        max_int = len(selection) - 1
        for i in range(self.population_size):
            index_1 = random.randint(0, max_int)
            index_2 = random.randint(0, max_int)
            child = self.spawner.crossover(
                selection[index_1],
                selection[index_2],
                self.mutation_rate
            )
            next_population.append(child)
        return next_population
