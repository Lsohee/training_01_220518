// console.log("달이 내리는 밤")
// console.log("파도를 타고 달을 등지고 별빛수놓은 옷을 입은  여신님을 ")

// const memberOne = {
//   name :"임소희",
//   gender: "포켓몬",
//   age: 21,
//   deskNumber : 10,
//   glassess: true,
//   married : "no",
//   talmo:false,
//   smartphone : "foler phone"
// }

// const memberTwo = {
//   name :"이회택",
//   gender: "디지몬",
//   age: 30,
//   deskNumber : 2,
//   glassess: true,
//   married : "no",
//   talmo:false,
//   smartphone : "iphone"
// }

// console.log(memberOne.name);
// console.log(memberTwo.name);

// memo 생성자 함수 : constructor function
// memo 객체를 찍어내는 거푸집 틀
// memo 석고 또는 함수


// * 이제 이거는 거푸집
// function Member(name,gender,age,deskNumber,glassess,married,talmo,smartphone){
//   this.name = name;
//   this.gender= gender;
//   this.age= age;
//   this.deskNumber =deskNumber;
//   this.glassess = glassess;
//   this.married = married;
//   this.talmo =talmo;
//   this.smartphone = smartphone; 
// }

// const memberOne = new Member("조진호","male",31,1,"no","singer",false,"iphone")
// // 객체 형태가 아니여서 객체임
// // console.dir(memberOne);

// const test = new Date();
// // console.dir(test.getHours()); // * 시간이 나옴

// function ampm(hour,msg){
//   if(hour>12){
//     console.log(msg +( hour-12) + "시 입니다")
//     console.log(memberOne.smartphone);
//   }else {
//     console.log("오전"+ hour +"입니다")
//   }
// }

// ampm(test.getHours(),"오후")

// console.dir(Array);
// 메서드 === 객체안의 함수

// memo 수료 날까지 몇시간 남았는지 세주는 함수
// 끝나는 시간은 18시 
// 끝나는 날은 7월 18일

// 끝나는 날짜를 어떻게 뽑아내야하나?
// 오늘부터 60일 남음
// 그냥 날짜 빼면 안됨

let past = test.getHours()
let pastDate = test.getDate()// 오늘 날짜
// console.log(past);
// console.log(pastDate);

let mouth = 78;
if(test.getMonth === 7){
  mouth = 30; 
}

let anwser = (18-past)+"시간"+ (mouth-pastDate)+"일 남았습니다"

console.log(anwser);