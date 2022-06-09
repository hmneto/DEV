<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Pessoal Model
 *
 * @method \App\Model\Entity\Pessoal get($primaryKey, $options = [])
 * @method \App\Model\Entity\Pessoal newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\Pessoal[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Pessoal|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Pessoal saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Pessoal patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Pessoal[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\Pessoal findOrCreate($search, callable $callback = null, $options = [])
 */
class PessoalTable extends Table
{
    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config)
    {
        parent::initialize($config);

        $this->setTable('pessoal');
        $this->setDisplayField('id');
        $this->setPrimaryKey('id');
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator)
    {
        $validator
            ->integer('id')
            ->allowEmptyString('id', 'create');

        $validator
            ->scalar('nome_entrada')
            ->maxLength('nome_entrada', 150)
            ->requirePresence('nome_entrada', 'create')
            ->allowEmptyString('nome_entrada', false);

        $validator
            ->numeric('valor')
            ->requirePresence('valor', 'create')
            ->allowEmptyString('valor', false);

        $validator
            ->date('data')
            ->requirePresence('data', 'create')
            ->allowEmptyDate('data', false);

        $validator
            ->scalar('tipo_fluxo')
            ->requirePresence('tipo_fluxo', 'create')
            ->allowEmptyString('tipo_fluxo', false);

        return $validator;
    }
}