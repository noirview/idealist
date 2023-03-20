<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Category\IndexRequest;
use App\Http\Requests\Admin\Category\StoreRequest;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index(IndexRequest $request)
    {
        return Inertia::render('Category/Index');
    }

    public function create()
    {
        return Inertia::render('Category/Create');
    }

    public function store(StoreRequest $request)
    {
        return to_route('admin.categories.index');
    }
}
