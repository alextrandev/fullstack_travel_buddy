<?php

namespace App\Model;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class CountryData
{
  private string $country;
  public array $cityInfo;

  public function __construct(string $country, private HttpClientInterface $client)
  {
    $this->country = $country;

    // fetch from Rest Countries
    $responseFromRestCountries = $this->client->request(
      'GET',
      "https://restcountries.com/v3.1/name/$country?fields=name,currencies,subregion,languages,timezones,continents,flag"
    );
    $content = $responseFromRestCountries->toArray();

    $this->cityInfo = $content[0];
  }
}
