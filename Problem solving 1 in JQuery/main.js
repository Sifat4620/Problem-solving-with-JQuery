

$(document).ready(function(){

  $('.txtb').on('keyup', function(e){

    //alert('someone pressed something');
    // keyboard enter = 13
    if(e.keyCode == 13 && $('.txtb').val() != ''){

      // task

      var task = $('<div class="task"></div>').text($('.txtb').val());

      // delete icon part
      var del = $('<i class="fa fa-trash"></i>').click(function(){

        var p = $(this).parent();

        p.fadeOut(function(){
          p.remove();
        });

      });

      // check icon part
      var check = $('<i class="fa fa-check"></i>').click(function(){
        
        var p = $(this).parent();

        p.fadeOut(function(){
          $('.comp').append(p);
          p.fadeIn();
        });

        $(this).remove();

      });


      task.append(del,check);
      $('.notcomp').append(task);
      $('.txtb').val('');

    }


  });


});
