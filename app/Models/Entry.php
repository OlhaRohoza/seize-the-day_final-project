<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Image;

class Entry extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'date',
        'rate',
        'note',
        'image_id'
    ];

    public function images()
    {
        return $this->belongsToMany(Image::class);
    }
}
