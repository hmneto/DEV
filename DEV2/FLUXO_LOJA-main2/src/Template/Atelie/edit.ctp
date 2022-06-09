<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Atelie $atelie
 */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Form->postLink(
                __('Delete'),
                ['action' => 'delete', $atelie->id],
                ['confirm' => __('Are you sure you want to delete # {0}?', $atelie->id)]
            )
        ?></li>
        <li><?= $this->Html->link(__('List Atelie'), ['action' => 'index']) ?></li>
    </ul>
</nav>
<div class="atelie form large-9 medium-8 columns content">
    <?= $this->Form->create($atelie) ?>
    <fieldset>
        <legend><?= __('Edit Atelie') ?></legend>
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
