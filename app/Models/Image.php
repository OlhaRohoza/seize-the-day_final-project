<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Entry;

class Image extends Model
{
    use HasFactory;

    public function entries()
    {
        return $this->belongsToMany(Entry::class);
    }
}
