<?php

namespace App\Controller;

use App\Repository\DestinationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/destinations/')] // prefix for all api functions
class DestinationsApiController extends AbstractController
{
    #[Route('', name: 'app_destinations_api', methods: ['GET'])]
    public function getAll(DestinationRepository $repository): Response
    {
        $destinations = $repository->findAll();

        // return dd($destinations); // for testing
        return $this->json($destinations);
    }
}
