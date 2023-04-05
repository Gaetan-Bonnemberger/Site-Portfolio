<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LegalesMentionController extends AbstractController
{
    #[Route('/legales/mention', name: 'legales_mention')]
    public function index(): Response
    {
        return $this->render('legales_mention/index.html.twig', [
            'controller_name' => 'LegalesMentionController',
        ]);
    }
}
