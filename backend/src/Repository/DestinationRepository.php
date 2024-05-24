<?php

namespace App\Repository;

use App\Model\Destination;
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
}
