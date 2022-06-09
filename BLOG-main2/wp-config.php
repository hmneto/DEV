<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', getenv('database') );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', getenv('user'));

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', getenv('password') );

/** Nome do host do MySQL */
define( 'DB_HOST', getenv('host') );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'zML3nT_Llnk&H.7qOHu^))6UZ;yJc>-WIOdZ;)@3iqhSfc><oI90*1nyh^XWqfRT' );
define( 'SECURE_AUTH_KEY',  '>_wEE?TMTBFcrZzEIs;=eWU(_U0-wD|a/bN*2x,q9j8H[&.-L<zk#`lU=c9:$PG.' );
define( 'LOGGED_IN_KEY',    'SZU-(rV.7[jO4MAE5_p8TEfg:ZsaB^<5Bh}xB dccQQ+9GS57n$t22YZT7t9t2K}' );
define( 'NONCE_KEY',        'uD7,WRIVl-DaTtdghrS!$ka-]/,$cls9*Pzv.t|[!z ^}6O1WB1*tT:X>A^JpPlZ' );
define( 'AUTH_SALT',        ')L2Qy2sW:#/;I@b8t</Uh+IUa.g/XcmJ)/M< 6t/[YeGG}.P2`7,dQEK[sn]~`Z2' );
define( 'SECURE_AUTH_SALT', '<5(gxoF+Js1d3d:%dM-3_pLCgVFn##)kQYy!8j1IU%GR,1[ ,;atAACQ[(5#-Mlt' );
define( 'LOGGED_IN_SALT',   'QzV79sSH4^[Z%Tx)=uk0ZI`&t9J0]9~.-AV{TDv(JamyiT8>#Y|/CWOFO6O9U0E%' );
define( 'NONCE_SALT',       '+QYvsAZuha5#J^[K%pZV7RAGY@-hDh8}xdkB82OfG/LefOC^jCN8yp{[WiPH);X`' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
