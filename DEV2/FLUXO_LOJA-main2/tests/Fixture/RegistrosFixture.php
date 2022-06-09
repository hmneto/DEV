<?php
namespace App\Test\Fixture;

use Cake\TestSuite\Fixture\TestFixture;

/**
 * RegistrosFixture
 */
class RegistrosFixture extends TestFixture
{
    /**
     * Fields
     *
     * @var array
     */
    // @codingStandardsIgnoreStart
    public $fields = [
        'id' => ['type' => 'integer', 'length' => 11, 'unsigned' => false, 'null' => false, 'default' => null, 'comment' => '', 'autoIncrement' => true, 'precision' => null],
        'nome_entrada' => ['type' => 'string', 'length' => 150, 'null' => false, 'default' => null, 'collate' => 'utf8_general_ci', 'comment' => '', 'precision' => null, 'fixed' => null],
        'valor' => ['type' => 'float', 'length' => 6, 'precision' => 2, 'unsigned' => false, 'null' => false, 'default' => null, 'comment' => ''],
        'data' => ['type' => 'date', 'length' => null, 'null' => false, 'default' => null, 'comment' => '', 'precision' => null],
        'tipo_fluxo' => ['type' => 'string', 'length' => null, 'null' => false, 'default' => null, 'collate' => 'utf8_general_ci', 'comment' => '', 'precision' => null, 'fixed' => null],
        'fluxo_id' => ['type' => 'integer', 'length' => 11, 'unsigned' => false, 'null' => false, 'default' => null, 'comment' => '', 'precision' => null, 'autoIncrement' => null],
        'id_dono' => ['type' => 'integer', 'length' => 11, 'unsigned' => false, 'null' => true, 'default' => null, 'comment' => '', 'precision' => null, 'autoIncrement' => null],
        '_indexes' => [
            'FK_registros_fluxo' => ['type' => 'index', 'columns' => ['fluxo_id'], 'length' => []],
            'FK_registros_usuarios' => ['type' => 'index', 'columns' => ['id_dono'], 'length' => []],
        ],
        '_constraints' => [
            'primary' => ['type' => 'primary', 'columns' => ['id'], 'length' => []],
            'FK_registros_fluxo' => ['type' => 'foreign', 'columns' => ['fluxo_id'], 'references' => ['fluxo', 'id'], 'update' => 'restrict', 'delete' => 'restrict', 'length' => []],
            'FK_registros_usuarios' => ['type' => 'foreign', 'columns' => ['id_dono'], 'references' => ['usuarios', 'id'], 'update' => 'restrict', 'delete' => 'restrict', 'length' => []],
        ],
        '_options' => [
            'engine' => 'InnoDB',
            'collation' => 'utf8_general_ci'
        ],
    ];
    // @codingStandardsIgnoreEnd
    /**
     * Init method
     *
     * @return void
     */
    public function init()
    {
        $this->records = [
            [
                'id' => 1,
                'nome_entrada' => 'Lorem ipsum dolor sit amet',
                'valor' => 1,
                'data' => '2019-11-13',
                'tipo_fluxo' => 'Lorem ipsum dolor sit amet',
                'fluxo_id' => 1,
                'id_dono' => 1
            ],
        ];
        parent::init();
    }
}
