<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\AtelieTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\AtelieTable Test Case
 */
class AtelieTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\AtelieTable
     */
    public $Atelie;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.Atelie'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::getTableLocator()->exists('Atelie') ? [] : ['className' => AtelieTable::class];
        $this->Atelie = TableRegistry::getTableLocator()->get('Atelie', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Atelie);

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
