var MyInformation = {
  MyInformation_1 : "",
  MyInformation_2 : "",
  MyInformation_3 : "",
  MyInformation_4 : "",

  set_information : function(){
    MyInformation.MyInformation_1 = document.getElementById("information_1_id").value;
    MyInformation.MyInformation_2 = document.getElementById("information_2_id").value;
    MyInformation.MyInformation_3 = document.getElementById("information_3_id").value;
    MyInformation.MyInformation_4 = document.getElementById("information_4_id").value;
  },

  get_information : function(){
    document.getElementById("display_1").innerHTML=MyInformation.MyInformation_1;
    document.getElementById("display_2").innerHTML=MyInformation.MyInformation_2;
    document.getElementById("display_3").innerHTML=MyInformation.MyInformation_3;
    document.getElementById("display_4").innerHTML=MyInformation.MyInformation_4;
  }
}

var MyInformationX = {
  MyInformation_X : "",

  set_information : function(){
    MyInformationX.MyInformation_X = document.getElementById("information_X_id").value;
  },

  get_information : function(){
    document.getElementById("display_X").innerHTML=MyInformationX.MyInformation_X;
  }
}
