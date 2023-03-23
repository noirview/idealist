<?php

namespace App\Models\Ideas;

use Illuminate\Database\Eloquent\Model;
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
}
