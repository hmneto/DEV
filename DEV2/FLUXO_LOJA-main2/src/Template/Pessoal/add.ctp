<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Pessoal $pessoal
 */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Html->link(__('List Pessoal'), ['action' => 'index']) ?></li>
    </ul>
</nav>
<div class="pessoal form large-9 medium-8 columns content">
    <?= $this->Form->create($pessoal) ?>
    <fieldset>
        <legend><?= __('Add Pessoal') ?></legend>
        <?php
            echo $this->Form->control('nome_entrada');
            echo $this->Form->control('valor');
            echo $this->Form->control('data');
            echo $this->Form->control('tipo_fluxo');
        ?>
    </fieldset>
    <?= $this->Form->button(__('Submit')) ?>
    <?= $this->Form->end() ?>
</div>
