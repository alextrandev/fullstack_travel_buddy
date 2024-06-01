<?php

namespace App\Repository;

use Psr\Log\LoggerInterface;

class CoordinatesRepository
{
  private array $coordinatesDB = [
    'Paris' => [
      'country' => 'France',
      'coordination' => [48.854679, 2.347724],
      'attractions' => [
        'Eiffel Tower' => [48.8584, 2.2945],
        'Louvre Museum' => [48.8606, 2.3376],
        'Notre-Dame Cathedral' => [48.852968, 2.349902],
        'Champs-Élysées' => [48.8698, 2.3077]
      ]
    ],
    'New York City' => [
      'country' => 'USA',
      'coordination' => [40.712776, -74.005974],
      'attractions' => [
        'Statue of Liberty' => [40.6892, -74.0445],
        'Central Park' => [40.785091, -73.968285],
        'Times Square' => [40.7580, -73.9855],
        'Empire State Building' => [40.748817, -73.985428]
      ]
    ],
    'Tokyo' => [
      'country' => 'Japan',
      'coordination' => [35.682839, 139.759455],
      'attractions' => [
        'Tokyo Tower' => [35.6586, 139.7454],
        'Shibuya Crossing' => [35.6595, 139.7006],
        'Sensoji Temple' => [35.7148, 139.7967],
        'Meiji Shrine' => [35.6764, 139.6993]
      ]
    ],
    'Sydney' => [
      'country' => 'Australia',
      'coordination' => [-33.868820, 151.209296],
      'attractions' => [
        'Sydney Opera House' => [-33.8568, 151.2153],
        'Sydney Harbour Bridge' => [-33.8523, 151.2108],
        'Bondi Beach' => [-33.8915, 151.2767],
        'Taronga Zoo' => [-33.8422, 151.2410]
      ]
    ],
    'Cape Town' => [
      'country' => 'South Africa',
      'coordination' => [-33.924870, 18.424055],
      'attractions' => [
        'Table Mountain' => [-33.9628, 18.4098],
        'Robben Island' => [-33.8066, 18.3662],
        'Victoria & Alfred Waterfront' => [-33.9071, 18.4208],
        'Cape Point' => [-34.3568, 18.4973]
      ]
    ],
    'Rio de Janeiro' => [
      'country' => 'Brazil',
      'coordination' => [-22.906847, -43.172896],
      'attractions' => [
        'Christ the Redeemer' => [-22.9519, -43.2105],
        'Sugarloaf Mountain' => [-22.9486, -43.1566],
        'Copacabana Beach' => [-22.9711, -43.1823],
        'Ipanema Beach' => [-22.9833, -43.2048]
      ]
    ],
    'London' => [
      'country' => 'United Kingdom',
      'coordination' => [51.507351, -0.127758],
      'attractions' => [
        'British Museum' => [51.5194, -0.1270],
        'Tower of London' => [51.5081, -0.0759],
        'Buckingham Palace' => [51.5014, -0.1419],
        'London Eye' => [51.5033, -0.1196]
      ]
    ],
    'Dubai' => [
      'country' => 'UAE',
      'coordination' => [25.276987, 55.296249],
      'attractions' => [
        'Burj Khalifa' => [25.1972, 55.2744],
        'Dubai Mall' => [25.1985, 55.2797],
        'Palm Jumeirah' => [25.1122, 55.1389],
        'Dubai Fountain' => [25.1956, 55.2774]
      ]
    ],
    'Rome' => [
      'country' => 'Italy',
      'coordination' => [41.902782, 12.496366],
      'attractions' => [
        'Colosseum' => [41.8902, 12.4922],
        'Vatican Museums' => [41.9065, 12.4536],
        'Pantheon' => [41.8986, 12.4768],
        'Trevi Fountain' => [41.9009, 12.4833]
      ]
    ],
    'Barcelona' => [
      'country' => 'Spain',
      'coordination' => [41.385064, 2.173404],
      'attractions' => [
        'Sagrada Familia' => [41.4036, 2.1744],
        'Park Güell' => [41.4145, 2.1527],
        'La Rambla' => [41.3809, 2.1733],
        'Casa Milà' => [41.3953, 2.1614]
      ]
    ],
    'St. Petersburg' => [
      'country' => 'Russia',
      'coordination' => [59.934280, 30.335099],
      'attractions' => [
        'Hermitage Museum' => [59.9398, 30.3146],
        'Peterhof Palace' => [59.8802, 29.8856],
        'Church of the Savior on Spilled Blood' => [59.9400, 30.3289],
        'Saint Isaac\'s Cathedral' => [59.9343, 30.3061]
      ]
    ],
    'Bangkok' => [
      'country' => 'Thailand',
      'coordination' => [13.756331, 100.501765],
      'attractions' => [
        'Grand Palace' => [13.7500, 100.4913],
        'Wat Arun' => [13.7437, 100.4889],
        'Chatuchak Market' => [13.7986, 100.5514],
        'Khao San Road' => [13.7597, 100.4976]
      ]
    ]
  ];

  public function __construct(public LoggerInterface $log)
  { // autowiring the logger interface
  }

  public function getAll(): array
  {
    $this->log->info('All coordinates sent');

    return array_map(
      fn ($city, $details) => [
        'city' => $city,
        'country' => $details['country'],
        'coordination' => $details['coordination']
      ],
      array_keys($this->coordinatesDB),
      $this->coordinatesDB
    );
  }

  public function getOne($queryName): ?array
  {
    $this->log->info('Looking for destination data...');

    foreach ($this->coordinatesDB as $city => $details) {
      if (strtolower($city) == strtolower($queryName)) {
        $this->log->info('Destination data found');

        return $details["attractions"];
      }
    }

    $this->log->info("Can't find destination");
    return null;
  }
}
