from lambda_function import lambda_handler
event = {'target': 'tom', 'mutation_rate': 0.01, 'population_size': 100, 'epochs': 10, 'good_sample_size': 5, 'random_sample_size': 1}
print(lambda_handler(event, None))
