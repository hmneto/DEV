<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Pessoal[]|\Cake\Collection\CollectionInterface $pessoal
 */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Html->link(__('New Pessoal'), ['action' => 'add']) ?></li>
    </ul>
</nav>
<div class="pessoal index large-9 medium-8 columns content">
    <h3><?= __('Pessoal') ?></h3>
    <table cellpadding="0" cellspacing="0">
        <thead>
            <tr>
                <th scope="col"><?= $this->Paginator->sort('id') ?></th>
                <th scope="col"><?= $this->Paginator->sort('nome_entrada') ?></th>
                <th scope="col"><?= $this->Paginator->sort('valor') ?></th>
                <th scope="col"><?= $this->Paginator->sort('data') ?></th>
                <th scope="col"><?= $this->Paginator->sort('tipo_fluxo') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($pessoal as $pessoal): ?>
            <tr>
                <td><?= $this->Number->format($pessoal->id) ?></td>
                <td><?= h($pessoal->nome_entrada) ?></td>
                <td><?= $this->Number->format($pessoal->valor) ?></td>
                <td><?= h($pessoal->data) ?></td>
                <td><?= h($pessoal->tipo_fluxo) ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['action' => 'view', $pessoal->id]) ?>
                    <?= $this->Html->link(__('Edit'), ['action' => 'edit', $pessoal->id]) ?>
                    <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $pessoal->id], ['confirm' => __('Are you sure you want to delete # {0}?', $pessoal->id)]) ?>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <div class="paginator">
        <ul class="pagination">
            <?= $this->Paginator->first('<< ' . __('first')) ?>
            <?= $this->Paginator->prev('< ' . __('previous')) ?>
            <?= $this->Paginator->numbers() ?>
            <?= $this->Paginator->next(__('next') . ' >') ?>
            <?= $this->Paginator->last(__('last') . ' >>') ?>
        </ul>
        <p><?= $this->Paginator->counter(['format' => __('Page {{page}} of {{pages}}, showing {{current}} record(s) out of {{count}} total')]) ?></p>
    </div>
</div>
