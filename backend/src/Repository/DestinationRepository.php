<?php

namespace App\Repository;

use App\Model\Destination;
use App\Model\DestinationData;
use Psr\Log\LoggerInterface;

class DestinationRepository
{
  private array $destinationsDB = [
    'Paris', 'New York', 'Tokyo', 'Sydney', 'Cape Town', 'Rio de Janeiro', 'London', 'Dubai', 'Rome', 'Barcelona', 'St. Petersburg', 'Bangkok'
  ];

  public function __construct(private LoggerInterface $log)
  { // autowiring the logger interface
  }

  public function findAll(): array
  {
    $this->log->info('All destinations sent!');

    return array_map(
      fn ($destination) => new Destination($destination),
      $this->destinationsDB
    );
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
