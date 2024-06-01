<?php

namespace App\Controller;

use App\Repository\DestinationRepository;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class WeatherApiController extends AbstractController
{
  #[Route('/api/weather/{destination}', name: 'app_weather_api', methods: ['GET'])]
  public function getWeather(string $destination, DestinationRepository $repository, LoggerInterface $log, HttpClientInterface $client): Response
  {
    if ($repository->findOne($destination)) {
      $log->info("Fetching weather info...");
      $weatherResponse = $client->request(
        'GET',
        "https://api.openweathermap.org/data/2.5/weather?q=$destination&appid={$_SERVER['OPENWEATHER_API_KEY']}&units=metric"
      );
      $log->info("Weather data sent");
      $content = $weatherResponse->toArray();
      return $this->json($content);
    }

    return $this->json(null);
  }
}
