<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Atelie[]|\Cake\Collection\CollectionInterface $atelie
 */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Html->link(__('New Atelie'), ['action' => 'add']) ?></li>
    </ul>
</nav>
<div class="atelie index large-9 medium-8 columns content">
    <h3><?= __('Atelie') ?></h3>
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
            <?php foreach ($atelie as $atelie): ?>
            <tr>
                <td><?= $this->Number->format($atelie->id) ?></td>
                <td><?= h($atelie->nome_entrada) ?></td>
                <td><?= $this->Number->format($atelie->valor) ?></td>
                <td><?= h($atelie->data) ?></td>
                <td><?= h($atelie->tipo_fluxo) ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['action' => 'view', $atelie->id]) ?>
                    <?= $this->Html->link(__('Edit'), ['action' => 'edit', $atelie->id]) ?>
                    <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $atelie->id], ['confirm' => __('Are you sure you want to delete # {0}?', $atelie->id)]) ?>
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
