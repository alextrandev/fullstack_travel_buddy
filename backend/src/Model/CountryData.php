<?php

namespace App\Model;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class CountryData
{
  public string $country;
  public array $currencies;
  public string $subregion;
  public array $languages;
  public string $flag;
  public array $timezones;
  public array $continents;

  public function __construct(string $country, private HttpClientInterface $client)
  {
    $this->country = $country;

    // fetch from Rest Countries
    $responseFromRestCountries = $this->client->request(
      'GET',
      "https://restcountries.com/v3.1/name/$country?fields=currencies,subregion,languages,timezones,continents,flag"
    );
    $content = $responseFromRestCountries->toArray();

    $this->currencies = $content[0]["currencies"];
    $this->subregion = $content[0]["subregion"];
    $this->languages = $content[0]["languages"];
    $this->flag = $content[0]["flag"];
    $this->timezones = $content[0]["timezones"];
    $this->continents = $content[0]["continents"];
  }
}
