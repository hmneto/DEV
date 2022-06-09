<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Atelie $atelie
 */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Html->link(__('Edit Atelie'), ['action' => 'edit', $atelie->id]) ?> </li>
        <li><?= $this->Form->postLink(__('Delete Atelie'), ['action' => 'delete', $atelie->id], ['confirm' => __('Are you sure you want to delete # {0}?', $atelie->id)]) ?> </li>
        <li><?= $this->Html->link(__('List Atelie'), ['action' => 'index']) ?> </li>
        <li><?= $this->Html->link(__('New Atelie'), ['action' => 'add']) ?> </li>
    </ul>
</nav>
<div class="atelie view large-9 medium-8 columns content">
    <h3><?= h($atelie->id) ?></h3>
    <table class="vertical-table">
        <tr>
            <th scope="row"><?= __('Nome Entrada') ?></th>
            <td><?= h($atelie->nome_entrada) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Tipo Fluxo') ?></th>
            <td><?= h($atelie->tipo_fluxo) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Id') ?></th>
            <td><?= $this->Number->format($atelie->id) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Valor') ?></th>
            <td><?= $this->Number->format($atelie->valor) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Data') ?></th>
            <td><?= h($atelie->data) ?></td>
        </tr>
    </table>
</div>
