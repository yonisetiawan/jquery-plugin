$.fn.validasiEmail = function(){
  this.keyup(function() {
      var input = $(this)
      var emailValidate = /^([A-Za-z][A-Za-z0-9\-\.\_]*)\@([A-Za-z][A-Za-z0-9\-\_]*)(\.[A-Za-z][A-Za-z0-9\-\_]*)+$/g
      if (emailValidate.test(input.val())) {
          // $(input).addClass("green")
          $(input).css("border-color","green")
      } else {
          // $(input).addClass("red")
            $(input).css("border-color","red")
      }
  });
}

  $(document).ready(function() {
      $(".email").validasiEmail()
  })

  // $(document).onload(function() {
  //     $(".email").validasiEmail()
  // })
