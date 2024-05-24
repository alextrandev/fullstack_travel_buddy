<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/destinations/')] // prefix for all api functions
class DestinationsApiController extends AbstractController
{
    #[Route('', name: 'app_destinations_api')]
    public function getAll(): Response
    {
        return dd("To do: send all destinations");
    }
}
