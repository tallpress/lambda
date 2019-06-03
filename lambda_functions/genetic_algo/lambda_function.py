import json
from src.spawner import Spawner
from src.genetic_algo import GeneticAlgo

def lambda_handler(event, context):
    target = event['target']
    mutation_rate = event['mutation_rate']
    population = event['population_size']
    epochs = event['epochs']
    random_sample_size = event['random_sample_size']
    good_sample_size = event['random_sample_size']

    spawner = Spawner()
    generation = spawner.spawn_generation(target, population_size)

    genetic_algo = GeneticAlgo(
        population_size,
        mutation_rate,
        target,
        good_sample_size,
        random_sample_size
    )

    for x in range(epochs):
        generation = genetic_algo.get_next_generation(generation)

    count = 0
    for i in generation.population:
        if i.genes == target:
            count+=1

    correct_percentage = count *100 / population_size

    return {
        'statusCode': 200,
        'body': {
            'correct_percentage': json.dumps(correct_percentage),
            'result': json.dumps(generation.display()),
        }
    }
