<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\PessoalTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\PessoalTable Test Case
 */
class PessoalTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\PessoalTable
     */
    public $Pessoal;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.Pessoal'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::getTableLocator()->exists('Pessoal') ? [] : ['className' => PessoalTable::class];
        $this->Pessoal = TableRegistry::getTableLocator()->get('Pessoal', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Pessoal);

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
