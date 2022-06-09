<?php
namespace App\Test\Fixture;

use Cake\TestSuite\Fixture\TestFixture;

/**
 * FluxoFixture
 */
class FluxoFixture extends TestFixture
{
    /**
     * Table name
     *
     * @var string
     */
    public $table = 'fluxo';
    /**
     * Fields
     *
     * @var array
     */
    // @codingStandardsIgnoreStart
    public $fields = [
        'id' => ['type' => 'integer', 'length' => 11, 'unsigned' => false, 'null' => false, 'default' => null, 'comment' => '', 'autoIncrement' => true, 'precision' => null],
        'nome_fluxo' => ['type' => 'string', 'fixed' => true, 'length' => 250, 'null' => true, 'default' => null, 'collate' => 'utf8_general_ci', 'comment' => '', 'precision' => null],
        'id_dono' => ['type' => 'integer', 'length' => 11, 'unsigned' => false, 'null' => true, 'default' => null, 'comment' => '', 'precision' => null, 'autoIncrement' => null],
        '_indexes' => [
            'FK_fluxo_usuarios' => ['type' => 'index', 'columns' => ['id_dono'], 'length' => []],
        ],
        '_constraints' => [
            'primary' => ['type' => 'primary', 'columns' => ['id'], 'length' => []],
            'FK_fluxo_usuarios' => ['type' => 'foreign', 'columns' => ['id_dono'], 'references' => ['usuarios', 'id'], 'update' => 'restrict', 'delete' => 'restrict', 'length' => []],
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
                'nome_fluxo' => 'Lorem ipsum dolor sit amet',
                'id_dono' => 1
            ],
        ];
        parent::init();
    }
}
