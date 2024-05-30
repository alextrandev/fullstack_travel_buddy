<?php

namespace App\Model;

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
    // to do, fetch a short description from wikimedia
    // next line is placeholder
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

  public function __construct(string $city, string $country, array $attractions)
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
}
