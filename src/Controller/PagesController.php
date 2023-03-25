<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PagesController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function home(): Response
    {
        return $this->render('pages/home.html.twig');
    }

    #[Route('/formation', name: 'app_formation')]
    public function formation(): Response
    {
        return $this->render('pages/formation.html.twig');
    }

    #[Route('/projets-entrepreneuriaux', name: 'app_projects')]
    public function projects(): Response
    {
        return $this->render('pages/projects.html.twig');
    }

    #[Route('/experience-professionnelle', name: 'app_experience')]
    public function experience(): Response
    {
        return $this->render('pages/experience.html.twig');
    }

    #[Route('/centres-dinterets', name: 'app_interests')]
    public function interests(): Response
    {
        return $this->render('pages/interests.html.twig');
    }

    #[Route('/competences', name: 'app_skills')]
    public function skills(): Response
    {
        return $this->render('pages/skills.html.twig');
    }

    #[Route('/contact', name: 'app_contact')]
    public function contact(): Response
    {
        return $this->render('pages/contact.html.twig');
    }
}
