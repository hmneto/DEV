<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Registros Model
 *
 * @property \App\Model\Table\FluxoTable|\Cake\ORM\Association\BelongsTo $Fluxo
 *
 * @method \App\Model\Entity\Registro get($primaryKey, $options = [])
 * @method \App\Model\Entity\Registro newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\Registro[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Registro|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Registro saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Registro patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Registro[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\Registro findOrCreate($search, callable $callback = null, $options = [])
 */
class RegistrosTable extends Table
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

        $this->setTable('registros');
        $this->setDisplayField('id');
        $this->setPrimaryKey('id');

        $this->belongsTo('Fluxo', [
            'foreignKey' => 'fluxo_id',
            'joinType' => 'INNER'
        ]);
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

        $validator
            ->integer('id_dono')
            ->allowEmptyString('id_dono');

        return $validator;
    }

    /**
     * Returns a rules checker object that will be used for validating
     * application integrity.
     *
     * @param \Cake\ORM\RulesChecker $rules The rules object to be modified.
     * @return \Cake\ORM\RulesChecker
     */
    public function buildRules(RulesChecker $rules)
    {
        $rules->add($rules->existsIn(['fluxo_id'], 'Fluxo'));

        return $rules;
    }
}
