const projects = [
    {pno:"p001", pname:"전자인사관리시스템", pdesc:"기업 내 인사정보를 관리하는 시스템"},
    {pno:"p002", pname:"도서관리시스템", pdesc:"기업 내 자기계발을 위한 도서대여 시스템"},
    {pno:"p003", pname:"IaaS 서비스", pdesc:"Infra as a service"},
    {pno:"p004", pname:"PaaS 서비스", pdesc:"Platform as a service"},
    {pno:"p005", pname:"SaaS 서비스", pdesc:"SW as a Service"}
]

function callExpl(id){
    for(i = 0; i < projects.length;i++){
        if(id == projects[i].pno){
            
            document.getElementById("pjt_num").value=projects[i].pno;   //getelementId인자로 문자열 입력해야!!!
            document.getElementById("pjt_name").value=projects[i].pname;
            document.getElementById("pjt_expl").value=projects[i].pdesc;
            break;
        }
    }
    
}