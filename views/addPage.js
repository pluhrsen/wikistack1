const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div>
      <label class="col-sm-2 control-label">Author Name</label>
      <div class="col-sm-10">
        <input id="name" name="name" type="text" class="form-control"/>
      </div>
    </div>

    <div>
      <label class="col-sm-2 control-label">Author Email</label>
      <div class="col-sm-10">
        <input id="email" name="email" type="email" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div>
      <label class="col-sm-2 control-label">Content</label>
      <div class="col-sm-10">
        <input id="content" name="content" type="textarea" class="form-control"/>
      </div>
    </div>

    <div>
      <label class="col-sm-2 control-label">Status</label>
      <div class="col-sm-10">
        <input id="status" name="status" type="radio" value="open" checked/> Open
        <input id="status" name="status" type="radio" value="closed"/> Closed
      </div>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
