<?php

namespace App\Model;

class Destination
{
  public function __construct(
    private string $city,
  ) {
  }

  public function getCity(): string
  {
    return $this->city;
  }

  public function getImageUrl(): string
  {
    return "https://source.unsplash.com/400x400/?$this->city";
  }
}
