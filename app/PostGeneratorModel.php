<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PostGeneratorModel extends Model
{
    public static function count($table)
    {
    	return DB::table( $table )->count();
    }

}
