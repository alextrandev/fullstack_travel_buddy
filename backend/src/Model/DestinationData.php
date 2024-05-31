<?php

namespace App\Model;

use Psr\Log\LoggerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class DestinationData
{
  public string $city;
  public string $country;
  public string $photoUrl;
  public string $description;
  public string $wikiLink;
  public array $cityInfo;
  public array $attractions;
  public array $attractionsPhotos;

  public function __construct(string $city, string $country, array $attractions, private LoggerInterface $log, private HttpClientInterface $client)
  {
    $this->city = $city;
    $this->country = $country;
    $this->photoUrl = "https://source.unsplash.com/400x400/?$city";
    $this->attractions = $attractions;
    $this->attractionsPhotos = $this->fetchAttractionPhotosUrl($attractions);

    // fetch info from wikipedia
    $responseFromWiki = $this->client->request(
      'GET',
      "https://en.wikipedia.org/api/rest_v1/page/summary/$city"
    );
    $wikiContent = $responseFromWiki->toArray();
    $this->description = $wikiContent["extract"];
    $this->wikiLink = $wikiContent["content_urls"]["desktop"]["page"];

    // fetch from Rest Countries
    $responseFromRestCountries = $this->client->request(
      'GET',
      "https://restcountries.com/v3.1/name/$country?fields=name,currencies,subregion,languages,timezones,continents,flag"
    );
    $content = $responseFromRestCountries->toArray();
    $this->cityInfo = $content[0];
  }

  private function fetchAttractionPhotosUrl(array $attractions): array
  {
    return array_map(fn ($attraction) => "https://source.unsplash.com/400x400/?$attraction+$this->country", $attractions);
  }
}
