<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

use App\Http\Requests\Admin\Ideas\IndexRequest;
use App\Http\Requests\Admin\Ideas\StoreRequest;

class IdeaController extends Controller
{
    public function index(IndexRequest $request)
    {
        return Inertia::render('Idea/Index');
    }

    public function create()
    {
        return Inertia::render('Idea/Create');
    }

    public function store(Storerequest $request)
    {
        return to_route('admin.ideas.index');
    }
}
