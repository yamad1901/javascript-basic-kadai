const dateName=new Date();
//dateを定義、dateNameという名前の変数にnew Date([2023,8,22])という値を代入

const currentDate=()=> {
  //currentDateを定義
  const year=dateName.getFullYear();
  const month=dateName.getMonth()+1;
  const date=dateName.getDate();
  //year.month,dateを定義
  console.log(year+'年'+ month +'月'+date+'日');
}

currentDate();


