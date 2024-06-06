<?php

namespace App\Controller;

use App\Repository\DestinationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/destinations')] // prefix for all api functions
class DestinationsApiController extends AbstractController
{
    // end point for all destination, will response with citynam and an image url
    #[Route('', name: 'app_destinations_api', methods: ['GET'])]
    public function getAll(DestinationRepository $repository): Response
    {
        $destinations = $repository->getAll();
        return $this->json($destinations);
    }

    // end point for one destination, will take a destination argument and response with infos
    #[Route('/{destination}', name: 'app_single_destination_api', methods: ['GET'])]
    public function getOne(string $destination, DestinationRepository $repository): Response
    {
        $destinations = $repository->getOne($destination);
        return $this->json($destinations);
    }

    // end point for rest countries info about the destination
    #[Route('/{destination}/country', name: 'app_destination_country_api', methods: 'GET')]
    public function getCountry(string $destination, DestinationRepository $repository): Response
    {
        $coutryData = $repository->getCountry($destination);
        // $coutryData = [
        //     "country" => "France",
        //     "currencies" => [
        //         "EUR" => [
        //             "name" => "Euro",
        //             "symbol" => "€"
        //         ]
        //     ],
        //     "subregion" => "Western Europe",
        //     "languages" => [
        //         "fra" => "French"
        //     ],
        //     "flag" => "🇫🇷",
        //     "timezones" => [
        //         "UTC-10:00",
        //         "UTC-09:30",
        //         "UTC-09:00",
        //         "UTC-08:00",
        //         "UTC-04:00",
        //         "UTC-03:00",
        //         "UTC+01:00",
        //         "UTC+02:00",
        //         "UTC+03:00",
        //         "UTC+04:00",
        //         "UTC+05:00",
        //         "UTC+10:00",
        //         "UTC+11:00",
        //         "UTC+12:00"
        //     ],
        //     "continents" => [
        //         "Europe"
        //     ]
        // ];
        return $this->json($coutryData);
    }
}
