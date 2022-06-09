<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Pessoal $pessoal
 */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Html->link(__('Edit Pessoal'), ['action' => 'edit', $pessoal->id]) ?> </li>
        <li><?= $this->Form->postLink(__('Delete Pessoal'), ['action' => 'delete', $pessoal->id], ['confirm' => __('Are you sure you want to delete # {0}?', $pessoal->id)]) ?> </li>
        <li><?= $this->Html->link(__('List Pessoal'), ['action' => 'index']) ?> </li>
        <li><?= $this->Html->link(__('New Pessoal'), ['action' => 'add']) ?> </li>
    </ul>
</nav>
<div class="pessoal view large-9 medium-8 columns content">
    <h3><?= h($pessoal->id) ?></h3>
    <table class="vertical-table">
        <tr>
            <th scope="row"><?= __('Nome Entrada') ?></th>
            <td><?= h($pessoal->nome_entrada) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Tipo Fluxo') ?></th>
            <td><?= h($pessoal->tipo_fluxo) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Id') ?></th>
            <td><?= $this->Number->format($pessoal->id) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Valor') ?></th>
            <td><?= $this->Number->format($pessoal->valor) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Data') ?></th>
            <td><?= h($pessoal->data) ?></td>
        </tr>
    </table>
</div>
