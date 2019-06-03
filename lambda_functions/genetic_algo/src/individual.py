import string

class Individual(object):
    def __init__(self, genes):
        self.genes = genes
        self.fitness = None

    def display(self):
        return self.genes

    def test_fitness(self, target):
        score = 0
        genes = self.genes
        if (len(genes) != len(target)):
            score = 0
        else:
            i = 0
            score = 0
            while (i < len(target)):
                if (target[i] == genes[i]):
                    score+=1
                i+=1
                result = score * 100 / len(target)
        self.fitness = result
