<?php

namespace App\Model;

class Destination
{
  public string $city;
  public string $imageUrl;

  public function __construct($city)
  {
    $this->city = $city;
    $this->imageUrl = "https://source.unsplash.com/400x400/?$city";
  }
}
