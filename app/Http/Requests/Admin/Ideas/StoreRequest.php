<?php

namespace App\Http\Requests\Admin\Ideas;

use App\Enums\Ideas\Status;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'category_id' => 'required|integer|exists:categories,id',
            'author_name' => 'required|string',
            'title' => 'required|string',
            'description' => 'required|string',
            'status' => [
                'required',
                'integer',
                Rule::in(Status::getValues()),
            ],
        ];
    }
}
