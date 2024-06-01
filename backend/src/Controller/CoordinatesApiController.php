<?php

namespace App\Controller;

use App\Repository\CoordinatesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/coordinates')]
class CoordinatesApiController extends AbstractController
{
  // end point for all destination coordinates
  #[Route('', name: 'app_coordinates_api', methods: ['GET'])]
  public function getAll(CoordinatesRepository $repository): Response
  {
    $coordinates = $repository->getAll();
    return $this->json($coordinates);
  }

  // end point for attractions coordinates
  #[Route('/{destination}', name: 'app_attractions_coordinates_api', methods: ['GET'])]
  public function getOne(string $destination, CoordinatesRepository $repository): Response
  {
    $coordinates = $repository->getOne($destination);
    return $this->json($coordinates);
  }
}
