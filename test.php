OpenShift PHP IP:
<?= getenv("OPENSHIFT_PHP_IP") ?>

OpenShift DB HOST:
<?= getenv('OPENSHIFT_MYSQL_DB_HOST') ?>

OpenShift DB Port:
<?= $OPENSHIFT_MYSQL_DB_PORT ?>


<? print_r($_ENV) ?>

<? print_r($_SERVER) ?>
