<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Loja $loja
 */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Html->link(__('Edit Loja'), ['action' => 'edit', $loja->id]) ?> </li>
        <li><?= $this->Form->postLink(__('Delete Loja'), ['action' => 'delete', $loja->id], ['confirm' => __('Are you sure you want to delete # {0}?', $loja->id)]) ?> </li>
        <li><?= $this->Html->link(__('List Loja'), ['action' => 'index']) ?> </li>
        <li><?= $this->Html->link(__('New Loja'), ['action' => 'add']) ?> </li>
    </ul>
</nav>
<div class="loja view large-9 medium-8 columns content">
    <h3><?= h($loja->id) ?></h3>
    <table class="vertical-table">
        <tr>
            <th scope="row"><?= __('Nome Entrada') ?></th>
            <td><?= h($loja->nome_entrada) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Tipo Fluxo') ?></th>
            <td><?= h($loja->tipo_fluxo) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Id') ?></th>
            <td><?= $this->Number->format($loja->id) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Valor') ?></th>
            <td><?= $this->Number->format($loja->valor) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Data') ?></th>
            <td><?= h($loja->data) ?></td>
        </tr>
    </table>
</div>
