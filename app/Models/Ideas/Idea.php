<?php

namespace App\Models\Ideas;

use App\Models\Categories\Category;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Kra8\Snowflake\HasSnowflakePrimary;

class Idea extends Model
{
    use HasSnowflakePrimary;

    protected $fillable = [
        'category_id',
        'title',
        'author_name',
        'description',
        'status',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
