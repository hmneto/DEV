<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\FluxoTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\FluxoTable Test Case
 */
class FluxoTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\FluxoTable
     */
    public $Fluxo;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.Fluxo'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::getTableLocator()->exists('Fluxo') ? [] : ['className' => FluxoTable::class];
        $this->Fluxo = TableRegistry::getTableLocator()->get('Fluxo', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Fluxo);

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
