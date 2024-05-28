<?php

namespace App\Model;

class Destination
{
  public string $city;
  public string $imageUrl;

  public function __construct($city)
  {
    $this->city = $city;
    // $this->imageUrl = "https://source.unsplash.com/400x400/?$city";

    // this is placeholder image because unsplash is currently down
    $this->imageUrl = "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D";
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
