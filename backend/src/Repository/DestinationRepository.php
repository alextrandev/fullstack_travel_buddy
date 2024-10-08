<?php

namespace App\Repository;

use App\Model\CountryData;
use App\Model\Destination;
use App\Model\DestinationData;
use Psr\Log\LoggerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class DestinationRepository
{
  private array $destinationsDB = [
    'Paris' => [
      'country' => 'France',
      'attractions' => ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral', 'Champs-Élysées']
    ],
    'New York City' => [
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

  public function __construct(public LoggerInterface $log, public HttpClientInterface $client)
  { // autowiring the logger interface
  }

  public function getAll(): array
  {
    $this->log->info('All destinations sent!');

    return array_map(
      fn ($destination) => new Destination($destination),
      array_keys($this->destinationsDB)
    );
  }

  public function getOne($queryName): ?DestinationData
  {
    $this->log->info('Looking for destination data...');

    foreach ($this->destinationsDB as $destinationName => $destinationData) {
      if (strtolower($destinationName) == strtolower($queryName)) {
        $this->log->info('Destination data found');

        $destinationCountry = $destinationData["country"];
        $destinationAttractions = $destinationData["attractions"];
        return new DestinationData($destinationName, $destinationCountry, $destinationAttractions, $this->log, $this->client);
      }
    }

    $this->log->info("Can't find destination");
    return null;
  }

  public function getCountry($queryName): ?CountryData
  {
    $this->log->info("Fetching country data...");

    foreach ($this->destinationsDB as $destinationName => $destinationData) {
      if (strtolower($destinationName) == strtolower($queryName)) {
        $this->log->info('Destination data found');

        $destinationCountry = $destinationData["country"];
        return new CountryData($destinationCountry, $this->client);
      }
    }

    $this->log->info("Can't find destination");
    return null;
  }

  public function findOne($queryName): bool
  {
    $this->log->info('Looking for destination data...');

    foreach ($this->destinationsDB as $destinationName => $destinationData) {
      if (strtolower($destinationName) == strtolower($queryName)) {
        $this->log->info('Destination data found');
        return true;
      }
    }

    $this->log->info("Can't find destination");
    return false;
  }
}
