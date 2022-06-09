<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\LojaTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\LojaTable Test Case
 */
class LojaTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\LojaTable
     */
    public $Loja;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.Loja'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::getTableLocator()->exists('Loja') ? [] : ['className' => LojaTable::class];
        $this->Loja = TableRegistry::getTableLocator()->get('Loja', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Loja);

        parent::tearDown();
    }

    /**
     * Test initialize method
     *
     * @return void
     */
    public function testInitialize()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
