<div class="main-content">
    <div class="container-fluid">
        <h3 class="page-title">Admin Details
            <a href="/director/admins" class="btn btn-info btn-xs pull-right" title="Back to users list"><i class="lnr lnr-arrow-left"></i></a>
        </h3>
        <div class="row">
            <div class="col-md-12">
                <!-- FORM -->
                <div class="panel">
                    <div class="panel-heading">
                        <h3 class="panel-title">Add Admins</h3>
                    </div>
                    <div class="panel-body">
                        <form id="user-form" action="/api/users/add" method="post" data-activity="add" >
                            <?php include('form.ctp') ?>
                        </form>
                    </div>
                </div>
                <!-- FORM -->
            </div>
        </div>
    </div>
</div>
