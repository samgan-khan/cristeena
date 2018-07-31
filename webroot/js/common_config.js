requirejs.config({
    baseUrl: '/js/',
    paths: {
        jquery: '../assets/vendor/jquery/jquery.min',
        bootstrap: '../assets/vendor/bootstrap/js/bootstrap.min',
        klorofil: '../assets/scripts/klorofil-common',
        jq_validations: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min',
        jq_form: 'http://malsup.github.com/jquery.form',
        swal: 'https://unpkg.com/sweetalert/dist/sweetalert.min',
        datatables: 'https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min',
        methods: 'methods',
        constants: 'constants'
    },
    shim: {
        bootstrap : {
            deps : [ 'jquery'],
            exports: 'bootstrap'
        },
        datatables: {
            deps : [ 'jquery'],
            exports: 'datatables'
        }
    }
});
