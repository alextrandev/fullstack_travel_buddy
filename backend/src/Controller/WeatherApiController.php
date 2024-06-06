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
      $content = $weatherResponse->toArray();

      // IMPORTANT!!!! remove testContent adn reenable above block in production build

      // $testContent = [
      //   "coord" => ["lon" => 2.3488, "lat" => 48.8534],
      //   "weather" => [[
      //     "id" => 803,
      //     "main" => "Clouds",
      //     "description" => "broken clouds",
      //     "icon" => "04d",
      //   ]],
      //   "base" => "stations",
      //   "main" => [
      //     "temp" => 10.89,
      //     "feels_like" => 10.38,
      //     "temp_min" => 9.61,
      //     "temp_max" => 12.28,
      //     "pressure" => 1023,
      //     "humidity" => 90
      //   ],
      //   "visibility" => 9000,
      //   "wind" => ["speed" => 2.57, "deg" => 360],
      //   "clouds" => ["all" => 75],
      //   "dt" => 1717395706,
      //   "sys" => [
      //     "type" => 2,
      //     "id" => 2041230,
      //     "country" => "FR",
      //     "sunrise" => 1717386622,
      //     "sunset" => 1717444055
      //   ],
      //   "timezone" => 7200,
      //   "id" => 2988507,
      //   "name" => "Paris",
      //   "cod" => 200
      // ];

      $log->info("Weather data sent");
      return $this->json($content);
    }
    $log->info("Cant find weather data");
    return $this->json(null);
  }
}
