<?php

namespace App\Model;

class Destination
{
  public function __construct(
    private string $city,
  ) {}

  public function getCity(): string
  {
    return $this->city;
  }

  public function getImageUrl(): string
  {
    return "https://picsum.photos/400/400?$this->city";
  }
}
