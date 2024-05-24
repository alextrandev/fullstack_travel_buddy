<?php

namespace App\Model;

class Destination
{
  public function __construct(
    private string $city,
    private string $cca2, // country code that this city belongs
    private string $imageUrl,
  ) {
  }

  public function getCity(): string
  {
    return $this->city;
  }

  public function getCca2(): string
  {
    return $this->cca2;
  }

  public function getImageUrl(): string
  {
    return $this->imageUrl;
  }
}
