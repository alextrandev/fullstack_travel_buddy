<?php

namespace App\Repository;

use App\Model\Destination;
use App\Model\DestinationData;
use Psr\Log\LoggerInterface;

class DestinationRepository
{
  private array $destinationsDB = [
    'Paris' => [
      'country' => 'France',
      'attractions' => ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral', 'Champs-Élysées']
    ],
    'New York' => [
      'country' => 'USA',
      'attractions' => ['Statue of Liberty', 'Central Park', 'Times Square', 'Empire State Building']
    ],
    'Tokyo' => [
      'country' => 'Japan',
      'attractions' => ['Tokyo Tower', 'Shibuya Crossing', 'Sensoji Temple', 'Meiji Shrine']
    ],
    'Sydney' => [
      'country' => 'Australia',
      'attractions' => ['Sydney Opera House', 'Sydney Harbour Bridge', 'Bondi Beach', 'Taronga Zoo']
    ],
    'Cape Town' => [
      'country' => 'South Africa',
      'attractions' => ['Table Mountain', 'Robben Island', 'Victoria & Alfred Waterfront', 'Cape Point']
    ],
    'Rio de Janeiro' => [
      'country' => 'Brazil',
      'attractions' => ['Christ the Redeemer', 'Sugarloaf Mountain', 'Copacabana Beach', 'Ipanema Beach']
    ],
    'London' => [
      'country' => 'United Kingdom',
      'attractions' => ['British Museum', 'Tower of London', 'Buckingham Palace', 'London Eye']
    ],
    'Dubai' => [
      'country' => 'UAE',
      'attractions' => ['Burj Khalifa', 'Dubai Mall', 'Palm Jumeirah', 'Dubai Fountain']
    ],
    'Rome' => [
      'country' => 'Italy',
      'attractions' => ['Colosseum', 'Vatican Museums', 'Pantheon', 'Trevi Fountain']
    ],
    'Barcelona' => [
      'country' => 'Spain',
      'attractions' => ['Sagrada Familia', 'Park Güell', 'La Rambla', 'Casa Milà']
    ],
    'St. Petersburg' => [
      'country' => 'Russia',
      'attractions' => ['Hermitage Museum', 'Peterhof Palace', 'Church of the Savior on Spilled Blood', 'Saint Isaac\'s Cathedral']
    ],
    'Bangkok' => [
      'country' => 'Thailand',
      'attractions' => ['Grand Palace', 'Wat Arun', 'Chatuchak Market', 'Khao San Road']
    ]
  ];

  public function __construct(private LoggerInterface $log)
  { // autowiring the logger interface
  }

  public function findAll(): array
  {
    $this->log->info('All destinations sent!');

    return array_map(
      fn ($destination) => new Destination($destination),
      array_keys($this->destinationsDB)
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
