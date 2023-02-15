<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PortfolioController extends AbstractController
{
    /**
     * @Route("/portfolio", name="portfolio")
     */
    public function index(): Response
    {
        return $this->render('portfolio/portfolio.html.twig', [
            'controller_name' => 'PortfolioController',
        ]);
    }

    /**
     * @Route("/portfolio/CityCo", name="portfolio-CityCo")
     */
    public function cityCo(): Response
    {
        return $this->render('portfolio/cityCo.html.twig', [
            'controller_name' => 'PortfolioController',
        ]);
    }

    /**
     * @Route("/portfolio/trip", name="portfolio-Trip")
     */
    public function trip(): Response
    {
        return $this->render('portfolio/trip.html.twig', [
            'controller_name' => 'PortfolioController',
        ]);
    }

    /**
     * @Route("/portfolio/blog", name="portfolio-Blog")
     */
    public function blog(): Response
    {
        return $this->render('portfolio/blog.html.twig', [
            'controller_name' => 'PortfolioController',
        ]);
    }
}
