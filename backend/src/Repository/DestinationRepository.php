<?php

namespace App\Repository;

use App\Model\Destination;
use App\Model\DestinationData;
use Psr\Log\LoggerInterface;

class DestinationRepository
{
  public function __construct(private LoggerInterface $log)
  { // autowiring the logger interface
  }

  public function findAll(): array
  {
    $this->log->info('All destinations sent!');

    return $destinations = [
      new Destination('Paris'),
      new Destination('New York'),
      new Destination('Tokyo'),
      new Destination('Sydney'),
      new Destination('Cape Town'),
      new Destination('Rio de Janeiro'),
      new Destination('London'),
      new Destination('Dubai'),
      new Destination('Rome'),
      new Destination('Barcelona'),
      new Destination('St. Petersburg'),
      new Destination('Bangkok'),
    ];
  }

  public function findOne($destinationName): ?DestinationData
  {
    $this->log->info('Looking for destination data...');

    foreach ($this->findAll() as $destination) {
      if ($destination->getCity() === $destinationName) {
        $this->log->info('Destination data found');
      } else {
        $this->log->info("Can't find destination");
        return null;
      }
    }
  }
}
