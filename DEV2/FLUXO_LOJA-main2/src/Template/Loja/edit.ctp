<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Loja $loja
 */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Form->postLink(
                __('Delete'),
                ['action' => 'delete', $loja->id],
                ['confirm' => __('Are you sure you want to delete # {0}?', $loja->id)]
            )
        ?></li>
        <li><?= $this->Html->link(__('List Loja'), ['action' => 'index']) ?></li>
    </ul>
</nav>
<div class="loja form large-9 medium-8 columns content">
    <?= $this->Form->create($loja) ?>
    <fieldset>
        <legend><?= __('Edit Loja') ?></legend>
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
