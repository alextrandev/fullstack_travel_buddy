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
        $destinations = $repository->findAll();
        return $this->json($destinations);
    }

    // end point for one destination, will take a destination argument and response with infos
    #[Route('/{destination}', name: 'app_single_destination_api', methods: ['GET'])]
    public function getOne(string $destination, DestinationRepository $repository): Response
    {
        $destinations = $repository->findOne($destination);
        return $this->json($destinations);
    }
}
