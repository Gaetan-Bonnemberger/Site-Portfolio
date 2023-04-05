<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="main")
     */
    public function index(SessionInterface $session): Response
    {
        $light_theme = $session->get('light-theme', true);

        return $this->render('main/main.html.twig', [
            'controller_name' => 'MainController',
            'light_theme' => $light_theme,
        ]);
    }

}
