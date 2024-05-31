<?php

namespace App\Model;

// this is a lightweight class that will give city name and an image url to the front page destination card
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
