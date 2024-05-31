<?php

namespace App\Controller;

use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class WeatherApiController extends AbstractController
{
  #[Route('/api/weather/{destination}', name: 'app_weather_api', methods: ['GET'])]
  public function getWeather(string $destination, LoggerInterface $log, HttpClientInterface $client)
  {
    $log->info("Fetching weather info...");
    $weatherResponse = $client->request(
      'GET',
      "https://api.openweathermap.org/data/2.5/weather?q=$destination&appid={$_SERVER['OPENWEATHER_API_KEY']}&units=metric"
    );
    $content = $weatherResponse->toArray();
    $log->info("Weather data sent");
    return $content;
  }
}
