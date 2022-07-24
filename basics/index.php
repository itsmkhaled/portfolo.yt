<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php include('modal.php');?>
<script type="text/javascript">
    $(document).ready(function(){
        document.on('click','.edit',function(){
            var name=$('#name').text();
            var Bio=$('#css').text();
            var aim=$('#aim').text();
            var paragraph1=$('#bss').text();
            var interests=$('#title2').text();
            var paragraph2=$('#kss').text();
            var experience=$('#title3').text();
            var paragraph2=$('#lss').text();
            var field=$('#par5').text();
            var paragraph3=$('#mss').text();
            
            $('#name').val(first);
            $('#Bi'o).val(first);
            $('#Objective').val(first);
            $('#Objective p').val(first);
            $('#ineterests').val(first);
            $('#ineterests paragraph').val(first);
            $('#experience').val(first);
            $('#experience p').val(first);
            $('#field').val(first);
            $('#field p').val(first);














        });

    });
    </script>
</body>
</html>


