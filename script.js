function course(name,marks,credit){
    this.name=name
    this.marks=marks
    this.credit=credit
}
class samester{
    constructor(){
        this.courses=[]
        this.gpa=0
    }
    addsubject(cours){
        this.courses.push(cours)
    }
    indiviualgpa(){
        this.courses.forEach(function(course){
            let grade=course.marks
            if (grade<50){
                grade=0
            }
            else if (grade>=80){
                grade=4
            }
            else {
                grade=(grade-40)/10
            }
            course.marks=grade
        })
    }
    calgpa(){
        let nomi=0
        let denomi=0
        this.courses.forEach(function(course){
            nomi+=course.marks*course.credit
            denomi+=+course.credit
        })
        let gpa=nomi/denomi
        this.gpa=gpa
    }
    getgpa(){
        return this.gpa
    }
}
class manager{
    constructor(){
        this.samesters=[]
        this.cgpa=0
    }
    addSamester(samest) {
        this.samesters.push(samest)
    }
    display(){
        this.samesters.forEach(function(samester){
            samester.calgpa()
        })
        let result=document.querySelectorAll('.sresult')
        for (let i=0;i<this.samesters.length;i++){
            result[i].innerText=`Samester gpa ${this.samesters[i].getgpa().toFixed(2)}`
        }
    }
    calcgpa(){
        let sumup=0
        this.samesters.forEach(function(samester){
            sumup+=+samester.getgpa()
        })
        let temp=sumup/this.samesters.length
        this.cgpa=parseFloat(temp.toFixed(2))
    }
    displayOverall(){
        let result=document.querySelector('.gpa')
        result.innerText=this.cgpa
    }
}
let topwraper=document.querySelector('.main-form')
topwraper.addEventListener('click',function(event){
    if (event.target.classList.contains('cross')){
        let samester=event.target.closest('.samester-wraper')
        samester.classList.add('remove-animation')
        setTimeout(() => {
        samester.remove()
        }, 300);
        count-=1
    }
    else if(event.target.classList.contains('clbutton')){
        let samester=event.target.closest('.samester')
        while(samester.children.length>1){
            samester.removeChild(samester.children[0])
        }
    }
    else if (event.target.classList.contains('adbutton')){
        AddCourse(event.target)
    }
})
var count=1
function AddCourse(el){
    let coursediv=document.createElement('div')
    coursediv.classList.add('course')
    let cinput=document.createElement('input')
    cinput.type='text'
    cinput.placeholder='Eg Islamiat'
    cinput.classList.add('name')
    let ginput=document.createElement('input')
    ginput.type='Number'
    ginput.placeholder='Eg 80'
    ginput.classList.add('grade')
    let crinput=document.createElement('input')
    crinput.type='Number'
    crinput.placeholder='Eg 3'
    crinput.classList.add('credit')
    let bdiv=document.createElement('div')
    let img=document.createElement('img')
    img.src='Group 8.png'
    img.classList.add('remove')
    bdiv.appendChild(img)
    coursediv.append(cinput,ginput,crinput,bdiv)
    coursediv.classList.add('add-animation')
    let samester=el.closest('.samester')
    if (samester.children.length>0){
        samester.insertBefore(coursediv,samester.children[samester.children.length-1])
    }
    else{
        samester.appendChild(coursediv)
    }
}
topwraper.addEventListener('click',function(event){
    if (event.target.classList.contains('remove')){
        let course=event.target.closest('.course')
        course.classList.add('remove-animation')
        setTimeout(() => {
        course.remove()
        }, 300);
    }
})
function adding(){
    return function(){
        let samesterwrpaer=document.createElement('div')
        samesterwrpaer.classList.add('samester-wraper')
        let header=document.createElement('div')
        header.classList.add('header')
        let headertext=document.createElement('h2')
        count+=1
        headertext.innerText=`Samester ${count}`
        let crossdiv=document.createElement('div')
        let crosimg=document.createElement('img')
        crosimg.classList.add('cross')
        crosimg.src="x 2.png.png"
        crossdiv.appendChild(crosimg)
        header.append(headertext,crossdiv)
        let heading=document.createElement('div')
        heading.classList.add('heading')
        let namei=document.createElement('div')
        namei.classList.add('namei')
        let nameitext=document.createElement('h3')
        nameitext.innerText='Course Name'
        namei.appendChild(nameitext)
        let gradei=document.createElement('div')
        gradei.classList.add('gradei')
        let gradtext=document.createElement('h3')
        gradtext.innerText='Grades'
        gradei.appendChild(gradtext)
        let crediti=document.createElement('div')
        crediti.classList.add('crediti')
        let credittext=document.createElement('h3')
        credittext.innerText='Credit'
        crediti.appendChild(credittext)
        heading.append(namei,gradei,crediti)
        let samester=document.createElement('div')
        samester.classList.add('samester')
        samesterwrpaer.append(header,heading)
        for (let i=1;i<=5;i++){
            let coursediv=document.createElement('div')
            coursediv.classList.add('course')
            let cinput=document.createElement('input')
            cinput.type='text'
            cinput.placeholder='Eg Biology'
            cinput.classList.add('name')
            let ginput=document.createElement('input')
            ginput.type='Number'
            ginput.placeholder='Eg 89'
            ginput.classList.add('grade')
            let crinput=document.createElement('input')
            crinput.type='Number'
            crinput.placeholder='Eg 3'
            crinput.classList.add('credit')
            let bdiv=document.createElement('div')
            let img=document.createElement('img')
            img.src='Group 8.png'
            img.classList.add('remove')
            bdiv.appendChild(img)
            coursediv.append(cinput,ginput,crinput,bdiv)
            samester.append(coursediv)
        }
        let sresultwraper=document.createElement('div')
        sresultwraper.classList.add('sresult-wraper')
        let btnwraper=document.createElement('div')
        btnwraper.classList.add('button-wraper')
        let adbtn=document.createElement('a')
        adbtn.classList.add('adbutton')
        adbtn.href='javascript:void(0)'
        adbtn.innerHTML='<img class="adbutton" src="image/plus-circle 1.png" alt="">Add Course'
        let clbtn=document.createElement('a')
        clbtn.classList.add('clbutton')
        clbtn.href='javascript:void(0)'
        clbtn.innerHTML='<img class="clbutton" src="image/Group 17.png" alt="">Clear All'
        btnwraper.append(adbtn,clbtn)
        let result=document.createElement('div')
        result.innerText="Samester gpa 0.00"
        result.classList.add('sresult')
        result.classList.add('hide')
        sresultwraper.append(btnwraper,result)
        samester.appendChild(sresultwraper)
        samesterwrpaer.appendChild(samester)
        samesterwrpaer.classList.add('add-animation')
        let form=document.querySelector('.main-form')
        form.appendChild(samesterwrpaer)
    }
}
let addsamester=adding()
let addsbuttan=document.querySelector('.adsbtn')
addsbuttan.addEventListener('click',function(event){
    event.preventDefault()
    if (count>8){
        let errorfield=document.querySelector('.error')
        errorfield.innerText="number of samesters should not exceed eight"
        return
    }
    addsamester()
})
function showhide(){
    let remove=document.querySelectorAll('.remove')
    remove.forEach(function(rem){
        rem.classList.toggle('hide')
    })
    let wraper=document.querySelectorAll('.button-wraper')
    wraper.forEach(function(wrap){
        wrap.classList.toggle('hide')
    })
    let sresult=document.querySelectorAll('.sresult')
    sresult.forEach(function(res){
        res.classList.toggle('hide')
    })
    let controler=document.querySelector('.control-wraper')
    let finalcontrol=document.querySelector('.final-wraper')
    controler.classList.toggle('hide')
    finalcontrol.classList.toggle('hide')
}

let calbtn=document.querySelector('.subbtn')
calbtn.addEventListener('click',function(event){
    event.preventDefault()
    let subjects=document.querySelectorAll('.name')
    let marks=document.querySelectorAll('.grade')
    let credit=document.querySelectorAll('.credit')
    let check=true
    while(check){
        let errorfield=document.querySelector('.error')
        subjects.forEach(function(sub){
            if (sub.value==""){
                errorfield.innerText='Please fill all the courses name'
                check=false
            }
        })
        if (!check){return}
        marks.forEach(function(mark){
            if (mark.value==''){
                errorfield.innerText='please enter all required grades'
                check=false
            }
            else if (mark.value>100){
                errorfield.innerText='Grades should not be greater than 100'
                check=false
            }
        })
        if (!check){return}
        credit.forEach(function(cred){
            if (cred.value==''){
                errorfield.innerText='please enter all required credit hour'
                check=false
            }
            else if (cred.value<=0 && cred.value>4){
                errorfield.innerText='please make sure all credit hour must be <4 and >0'
                check=false
            }
        })
        if (check){
            errorfield.innerText=''
            break
        }
        else {
            check=true
        }
    }
    // loop end
    subjects.forEach(function(sub){
        sub.disabled=true
    })
    marks.forEach(function(mark){
        mark.disabled=true
    })
    credit.forEach(function(cred){
        cred.disabled=true
    })
    let samesters=document.querySelectorAll('.samester')
    let tracker=0
    let main=new manager()
    for (let i=0;i<samesters.length;i++){
        let sam=new samester()
        for (let j=0;j<samesters[i].children.length-1;j++){
            sam.addsubject(new course(subjects[tracker].value,marks[tracker].value,credit[tracker].value))
            tracker+=1
        }
        sam.indiviualgpa()
        main.addSamester(sam)
    }
    showhide()
    main.display()
    main.calcgpa()
    main.displayOverall()
})
let edit=document.querySelector('.edit')
edit.addEventListener('click',function(){
    showhide()
    let subjects=document.querySelectorAll('.name')
    let marks=document.querySelectorAll('.grade')
    let credit=document.querySelectorAll('.credit')
    subjects.forEach(function(sub){
        sub.disabled=false
    })
    marks.forEach(function(mark){
        mark.disabled=false
    })
    credit.forEach(function(cred){
        cred.disabled=false
    })
})


