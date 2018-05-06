<div class="row">
    <div class="col-md-6">
        <div>
            <label for="email" >Email:</label>
            <input id="email" type="text" class="form-control" placeholder="Email" name="email" required>
            <br>
        </div>
        <div>
            <label for="name" >Full Name:</label>
            <input id="name" type="text" class="form-control" placeholder="user full name" name="name" required>
            <br>
        </div>
    </div>
    <div class="col-md-6">
        <?php if (!isset($slug)): ?>
            <div>
                <label for="password" >Password:</label>
                <input id="password" type="password" class="form-control" placeholder="password" name="password" required>
                <br>
            </div>
            <div>
                <label for="confirm_password" >Confirm Password:</label>
                <input id="confirm_password" type="password" class="form-control" placeholder="confirm password" name="confirm_password" required>
                <br>
            </div>
        <?php endif; ?>
    </div>
</div>
<div class="row">
    <hr>
    <div class="col-md-6">
        <input type="submit" class="btn btn-success btn-sm" value="Save" >
    </div>
</div>