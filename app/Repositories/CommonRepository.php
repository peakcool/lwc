<?php

namespace App\Repositories;

use App\Traits\Repository\BaseRepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Validation\Factory;

abstract class CommonRepository
{
    use BaseRepositoryTrait;

    protected $model;

    protected $validator;

    public function __construct(Model $model, Factory $validator)
    {
        $this->model = $model;
        $this->validator = $validator;
    }

	/**
	 * 获取模型
	 */
	public function getModel()
	{
		return $this->model;
	}

	/**
	 * 验证
	 */
	public function getValidator()
	{
		return $this->validator;
	}

	/**
	 * 清除缓存
	 */
	public function clearCache(){}
}