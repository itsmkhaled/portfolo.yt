let  list ={title :' Menna Khaled', par1: 'graduated with high honors from Manor House School.I am highly organized and detailed-oriented student from the university of New Giza seeking an entry-level position as a programmer.',
title1: 'OBJECTIVE', par2: 'the main aim of this webpage is to share my experinece as a programmer and help others to know more about the field and help everyone in their career life',
title2: 'My interests as a programmer', par3:'  I personally believe that studying programming languages will highly benefit me. Not only is it a study that will benefit me in whichever field i choose to work in life, but also i can see myself thriving in it.',
title3: 'About me and my experience!', par4:'well  i have not had this much of an experience in the field to talk about,However i am an immensely hardworking person and i am ready to put the strenuous effort to excel in my future.',
 title4: "learn more about my field", par5: ' Programming is a way to "instruct the computer to perform various tasks".',last: '“Instruct the computer”: this basically means that you provide the computer a set of instructions that are written in a language that the computer can understand. The instructions could be of various types'}
function place(){
  $('#name1').text(list.title);
  $('#css').text(list.par1);
  $('#aim').text(list.title1);
  $('#bss').text(list.par2);
  $("#title2").text(list.title2);
  $("#kss").text(list.par3);
  $("#title3").text(list.title3);
  $("#lss").text(list.par4);
  $("#title4").text(list.title4);
  $("#par5").text(list.par5);
  $("#mss").text(list.last);






}






var p1='the main aim of this webpage is to share my experinece as a programmer and help others to know more about the field and help everyone in their career life'
      var p2=' my interests as a programmer'
      var p3='I personally believe that studying programming languages will highly benefit me. Not only is it a study that will benefit me in whichever field i choose to work in life, but also i can see myself thriving in it.'
      var p4='About me and my experience!'
      var p5=' well  i have not had this much of an experience in the field to talk about,However i am an immensely hardworking person and i am ready to put the strenuous effort to excel in my future.'
      var p6='learn about my field'
      var p7='Programming is a way to "instruct the computer to perform various tasks'
      p1=form.ObjectiveP.value;
      p2=form.ineterests.value
      p3=form.ineterestsp.value
      p4=form.experience.value
      p5=form.experiencep.value
      p6=form.field.value
      p7=form.fieldp.value

      document.getElementById('bss').innerHTML=p1;
       document.getElementById('title2').innerHTML=p2;
       document.getElementById('kss').innerHTML=p3;
       document.getElementById('title3').innerHTML=p4;
       document.getElementById('lss').innerHTML=p5;
       document.getElementById('title4').innerHTML=p6;
       document.getElementById('par5').innerHTML=p7;