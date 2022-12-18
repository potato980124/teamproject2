function Validation(){
    var RegExp = /^[a-zA-Z0-9]{3,15}$/; //id와 pwassword 유효성 검사 정규식 a~z까지 소문자 대문자 사용가능 0~9까지사용가능
    //이메일 유효성검사
    var e_RegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    var n_RegExp = /^[가-힣]{2,15}$/; //이름 유효성검사 정규식
    
    
    var objId = document.getElementById("id"); //아이디
    var objPwd = document.getElementById("pw"); //비밀번호
    var objPwd2 = document.getElementById("rpw"); //비밀번호확인
    var objEmail = document.getElementById("email");//메일
    var objName = document.getElementById("name"); //이름
    // ================ ID 유효성검사 ================ //
    for(i=0; i<arguments.length; i++){
        if(arguments[i] == objId.value){
            alert('중복된 ID 입니다.');
            return false;
        }
    }
    if(objId.value==''){
        alert("ID를 입력해주세요.");
        return false;
    }
    // if(objId.value== ids){
    //     alert('아이디가 중복됩니다.');
    //     return false;
    // }
    if(!RegExp.test(objId.value)){ //아이디 유효성검사
        alert("ID는 3~15자의 영문 대소문자와 숫자로만 입력하여 주세요.");        
        return false;
    }
    
    // ================ PASSWORD 유효성검사 ===============//
    if(objPwd.value==''){ // 비밀번호 입력여부 검사
        alert("Password를 입력해주세요.");
        return false;
    }
    if(!RegExp.test(objPwd.value)){ //패스워드 유효성검사
        alert("Password는 3~15자의 영문 대소문자와 숫자로만 입력하여 주세요.");
        return false;
    }
    if(objPwd.value==objId.value){ //패스워드와 ID가 동일한지 검사
        alert("Password는 ID와 동일하면 안됩니다.");
        return false;
    }
    
    if(objPwd2.value!=objPwd.value){ //비밀번호와 비밀번호확인이 동일한지 검사
        alert("비밀번호가 틀립니다. 다시 확인하여 입력해주세요.");
        return false;
    }
    
    // ================ email 유효성검사 ================ //
    if(e_RegExp.value == ''){ // 이메일 입력여부 검사
        alert("이메일을 입력해주세요.");
        return false;
    }
    
    if(!e_RegExp.test(objEmail.value)){ //이메일 유효성 검사
        alert("올바른 이메일 형식이 아닙니다.");
        return false;
    }
    
    // ================ 이름 유효성검사 ================ //        
    if(objName.value ==''){
        alert("이름을 입력해주세요.");
        return false;
    }
    if(!n_RegExp.test(objName.value)){
        alert("특수문자,영어,숫자는 사용할수 없습니다. 한글만 입력하여주세요.");
        return false;
    }
    document.joininfo.submit();
}