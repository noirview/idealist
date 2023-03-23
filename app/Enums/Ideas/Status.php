<?php declare(strict_types=1);

namespace App\Enums\Ideas;

use BenSampo\Enum\Enum;
final class Status extends Enum
{
    const NEW = 0;
    const IN_PROCESS = 1;
    const REALISED = 2;
}
