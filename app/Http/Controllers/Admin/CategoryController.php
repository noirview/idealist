<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Category\IndexRequest;
use App\Http\Requests\Admin\Category\StoreRequest;
use App\Models\Categories\Category;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index(IndexRequest $request)
    {
        $categories = Category::query()
            ->get();

        return Inertia::render('Category/Index', [
            'categories' => $categories,
        ]);
    }

    public function create()
    {
        return Inertia::render('Category/Create');
    }

    public function store(StoreRequest $request)
    {
        Category::query()
            ->create($request->validated());

        return to_route('admin.categories.index');
    }
}
