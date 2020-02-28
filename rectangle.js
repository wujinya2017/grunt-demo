$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');

  $btnCal.click(function(){
    var w = Number($width.val()),
        h = Number($height.val());

    var p = 2*(w+h),
        a = w*h;
  
  
    var react = retangle();

    $perimeter.val(react.perimeter(w,h));
   $area.val(react.area(w,h));

  });
});

function roundFractional(x, n) {
      return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);

}

