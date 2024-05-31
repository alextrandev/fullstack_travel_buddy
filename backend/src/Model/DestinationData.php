<?php

namespace App\Model;

use Psr\Log\LoggerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class DestinationData
{
  public string $city;
  public string $country;
  public string $flagUrl;
  public string $photoUrl;
  public string $description;
  public array $cityInfo;
  public array $attractions;
  public array $attractionsPhotos;
  // private HttpClientInterface $client;
  // private LoggerInterface $log;

  public function __construct(string $city, string $country, array $attractions, public LoggerInterface $log, public HttpClientInterface $client)
  {
    $this->city = $city;
    $this->country = $country;
    $this->flagUrl = $this->fetchFlagUrl($country);
    $this->photoUrl = $this->fetchPhotoUrl($city);
    $this->description = $this->fetchDescription($city);
    $this->cityInfo = $this->fetchCityInfo($country);
    $this->attractions = $attractions;
    $this->attractionsPhotos = $this->fetchAttractionPhotosUrl($attractions);
  }

  private function fetchFlagUrl($country): string
  {
    // to do, fetch flag from rest country
    // next line is placeholder flag image
    return "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png";
  }

  private function fetchPhotoUrl($queryString): string
  {
    return "https://source.unsplash.com/400x400/?$queryString";
  }

  private function fetchDescription($city): string
  {
    $res = $this->client->request(
      'GET',
      "https://en.wikipedia.org/api/rest_v1/page/summary/$this->city"
    );
    $content = $res->toArray();
    $this->log->info($content["extract"]);
    return "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, repellendus.";
  }

  private function fetchCityInfo($country): array
  {
    // to do, fetch some description from rest country
    // next line is placeholder array
    return [
      "country" => "France",
      "region" => "Europe",
      "currency" => "EUR",
      "language" => ["English", "French"],
    ];
  }

  private function fetchAttractionPhotosUrl(array $attractions): array
  {
    return array_map(fn ($attraction) => "https://source.unsplash.com/400x400/?$attraction+$this->country", $attractions);
  }
}
