<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Loja Entity
 *
 * @property int $id
 * @property string $nome_entrada
 * @property float $valor
 * @property \Cake\I18n\FrozenDate $data
 * @property string $tipo_fluxo
 */
class Loja extends Entity
{
    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        'nome_entrada' => true,
        'valor' => true,
        'data' => true,
        'tipo_fluxo' => true
    ];
}
