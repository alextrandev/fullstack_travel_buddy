<?php

namespace App\Model;

class Destination
{
  private string $city;
  private string $imageUrl;

  public function __construct($city)
  {
    $this->city = $city;
    $this->imageUrl = "https://source.unsplash.com/400x400/?$city";
  }

  public function getCity(): string
  {
    return $this->city;
  }

  public function getImageUrl(): string
  {
    return $this->imageUrl;
  }
}