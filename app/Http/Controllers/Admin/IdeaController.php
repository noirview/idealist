<?php

namespace App\Http\Controllers\Admin;

use App\Enums\Ideas\Status;
use App\Http\Controllers\Controller;
use App\Models\Categories\Category;
use App\Models\Ideas\Idea;
use Inertia\Inertia;

use App\Http\Requests\Admin\Ideas\IndexRequest;
use App\Http\Requests\Admin\Ideas\StoreRequest;

class IdeaController extends Controller
{
    public function index(IndexRequest $request)
    {
        $ideas = Idea::query()
            ->with('category')
            ->get();

        return Inertia::render('Idea/Index', [
            'ideas' => $ideas,
        ]);
    }

    public function create()
    {
        $categories = Category::query()
            ->get()
            ->map(fn(Category $category) => [
                'value' => $category->id,
                'label' => $category->title,
            ]);

        $statuses = collect(Status::getValues())
            ->map(fn(int $status) => [
                'value' => $status,
                'label' => Status::getDescription($status),
            ]);

        return Inertia::render('Idea/Create', [
            'categories' => $categories,
            'statuses' => $statuses,
        ]);
    }

    public function store(Storerequest $request)
    {
        Idea::query()
            ->create($request->validated());

        return to_route('admin.ideas.index');
    }
}
